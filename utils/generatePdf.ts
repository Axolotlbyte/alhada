"use client";

import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

function wrapText(text: string, font: any, fontSize: number, maxWidth: number) {
  const lines: string[] = [];
  const paragraphs = text.split(/\r?\n/);

  for (const paragraph of paragraphs) {
    const words = paragraph.split(" ");
    let currentLine = "";

    for (const w of words) {
      const testLine = currentLine ? currentLine + " " + w : w;
      const width = font.widthOfTextAtSize(testLine, fontSize);

      if (width > maxWidth) {
        lines.push(currentLine);
        currentLine = w;
      } else {
        currentLine = testLine;
      }
    }

    if (currentLine) lines.push(currentLine);
  }

  return lines.join("\n");
}

export default async function generatePdf({
  subject,
  requester,
  address,
  description,
  reason,
  change,
  impactBudget,
  impactTimeline,
  impactResources,
  initials,
  signatureDataUrl,
}: {
  subject: string;
  requester: string;
  address: string;
  description: string;
  reason: string;
  change: string;
  impactBudget: string;
  impactTimeline: string;
  impactResources: string;
  initials: string;
  signatureDataUrl: string;
}) {
  const existingPdfBytes = await fetch("/ChangeTemplate.pdf").then((res) =>
    res.arrayBuffer()
  );

  const templatePdf = await PDFDocument.load(existingPdfBytes);
  const pdfDoc = await PDFDocument.create();
  const [srcPage] = templatePdf.getPages();
  const { width, height } = srcPage.getSize();

  const embeddedPage = await pdfDoc.embedPage(srcPage);
  const page = pdfDoc.addPage([width, height]);

  page.drawPage(embeddedPage, { x: 0, y: 0, width, height });

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const draw = (text: string, x: number, y: number, size = 10) => {
    page.drawText(text || "", {
      x,
      y,
      size,
      font,
      color: rgb(0, 0, 0),
    });
  };

  draw(subject, 158, height - 228);
  draw(requester, 148, height - 188);
  draw(address, 475, height - 188);

  const wrappedReason = wrapText(reason, font, 10, width - 132);
  page.drawText(wrappedReason, {
    x: 72,
    y: height - 285,
    size: 10,
    lineHeight: 12,
  });

  const wrappedDescription = wrapText(description, font, 10, width - 132);
  page.drawText(wrappedDescription, {
    x: 72,
    y: height - 378,
    size: 10,
    lineHeight: 12,
  });

  draw(change, 80, height - 400);

  draw(impactBudget, 110, height - 483);
  draw(impactTimeline, 115, height - 523);
  draw(impactResources, 125, height - 563);

  draw(initials, 66, 60);

  const date = new Date(Date.now());
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  const hourFormatted = String(hours).padStart(2, "0");

  const signedOn = `Signed on ${day}/${month}/${year} at ${hourFormatted}:${minutes} ${ampm}`;

  page.drawText(signedOn, {
    x: 430,
    y: 30,
    size: 9,
  });

  if (signatureDataUrl) {
    const signatureImage = await pdfDoc.embedPng(signatureDataUrl);
    const sigWidth = 140;
    const sigHeight = sigWidth * 0.4;

    page.drawImage(signatureImage, {
      x: 80,
      y: 100,
      width: sigWidth,
      height: sigHeight,
    });
  }

  // Return PDF bytes instead of opening
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// export default async function generateClientPDF(form, signatureData) {
//   // 1. Build HTML
//   const html = `
//   <div id="pdf-content" class="w-[800px] mx-auto p-8 font-sans text-[11pt] text-black bg-white">

//   <!-- Logo -->
//   <div class="flex justify-center mb-8">
//     <img src="/logo.png" alt="Logo" class="w-32 h-32 object-contain" />
//   </div>

//   <!-- Title -->
//   <h5 class="text-center text-[18pt] font-bold mb-6">
//     Change Request Form
//   </h5>

//   <!-- Requested by / Unit Address -->
//   <div class="mb-6">
//     <p class="font-bold">Requested By:</p>
//     <p class="border-b border-black h-6 mb-4"></p>

//     <p class="font-bold">Unit Address:</p>
//     <p class="border-b border-black h-6"></p>
//   </div>

//   <!-- Request Subject -->
//   <div class="mb-6">
//     <p class="font-bold">Request Subject:</p>
//     <p class="border-b border-black h-6"></p>
//   </div>

//   <!-- Reason for Change -->
//   <div class="mb-6">
//     <p class="font-bold">Reason for Change:</p>
//     <div class="border border-black h-28"></div>
//   </div>

//   <!-- Change Description -->
//   <div class="mb-6">
//     <p class="font-bold">Change Description:</p>
//     <div class="border border-black h-32"></div>
//   </div>

//   <!-- Impact of Change -->
//   <h3 class="font-bold text-[13pt] mb-4">Impact of Change</h3>

//   <div class="mb-4">
//     <p class="font-bold">Budget:</p>
//     <p class="border-b border-black h-6"></p>
//   </div>

//   <div class="mb-4">
//     <p class="font-bold">Timeline:</p>
//     <p class="border-b border-black h-6"></p>
//   </div>

//   <div class="mb-6">
//     <p class="font-bold">Resources:</p>
//     <p class="border-b border-black h-6"></p>
//   </div>

//   <!-- Signature -->
//   <div class="my-8">
//     <p class="font-bold mb-2">Requester’s Signature:</p>
//     <img src="{{signatureDataURL}}" class="w-64 h-24 object-contain border border-black" />
//   </div>

//   <!-- Approved By -->
//   <div class="mb-6">
//     <p class="font-bold">Approved By:</p>
//     <p class="border-b border-black h-6 w-64"></p>
//   </div>

//   <!-- Signed On -->
//   <div class="flex justify-end">
//     <p class="text-[9pt]">Signed On: {{date}}</p>
//   </div>

// </div>

//   `;

//   const container = document.createElement("div");
//   container.innerHTML = html;
//   container.style.position = "absolute";
//   container.style.top = "-9999px";
//   document.body.appendChild(container);

//   // 3. Convert HTML to canvas
//   const pdfContent = container.querySelector("#pdf-content");
//   const canvas = await html2canvas(pdfContent, { scale: 2 });
//   const imgData = canvas.toDataURL("image/png");

//   // 4. Generate PDF
//   const pdf = new jsPDF("p", "pt", "a4");
//   const pageWidth = pdf.internal.pageSize.getWidth();
//   const ratio = canvas.height / canvas.width;
//   const pdfHeight = pageWidth * ratio;

//   pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pdfHeight);

//   // 5. Open PDF in new tab
//   const pdfBlob = pdf.output("blob");
//   const url = URL.createObjectURL(pdfBlob);
//   window.open(url, "_blank");

//   // 6. Cleanup
//   document.body.removeChild(container);
// }
