"use client";
import { useRef, useState } from "react";
// import SignatureCanvas from "react-signature-canvas";
import SignaturePad from "react-signature-canvas";
import { jsPDF } from "jspdf";

import generatePdf from "@/utils/generatePdf";


export default function Page() {
  const sigPadRef = useRef(null);

  const [form, setForm] = useState({
    subject: "",
    requester: "",
    address: "",
    description: "",
    reason: "",
    impactBudget: "",
    impactTimeline: "",
    impactResources: "",
    initials: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const clearSignature = () => {
    sigPadRef.current.clear();
  };

  // const handleGeneratePDF = () => {
  //   const signatureData = sigPadRef.current.isEmpty()
  //     ? null
  //     : sigPadRef.current.getTrimmedCanvas().toDataURL("image/png");

  //   const doc = new jsPDF("p", "mm", "a4");

  //   // Add text fields
  //   doc.setFontSize(12);
  //   doc.text(`Request Subject: ${form.subject}`, 20, 20);
  //   doc.text(`Requested by / Name: ${form.requester}`, 20, 30);
  //   doc.text(`Unit Address: ${form.address}`, 20, 40);
  //   doc.text(`Reason for Change: ${form.reason}`, 20, 50);
  //   doc.text(`Change Description: ${form.description}`, 20, 60);

  //   doc.text("Impact of Change:", 20, 80);
  //   doc.text(`Budget: ${form.impactBudget}`, 20, 90);
  //   doc.text(`Timeline: ${form.impactTimeline}`, 20, 100);
  //   doc.text(`Resources: ${form.impactResources}`, 20, 110);

  //   doc.text(`Initials: ${form.initials}`, 20, 130);

  //   // Add signature image
  //   if (signatureData) {
  //     doc.addImage(signatureData, "PNG", 20, 140, 100, 40); // width/height adjust as needed
  //   }

  //   // Open PDF in new tab
  //   doc.output("dataurlnewwindow");
  // };

  const handleGeneratePDF = async () => {
    const signatureData = sigPadRef.current.isEmpty()
      ? null
      : sigPadRef.current.getTrimmedCanvas().toDataURL("image/png");

    // Open a blank tab immediately — allowed by browser
    const newTab = window.open("", "_blank");

    // Generate the PDF
    const pdfBytes = await generatePdf({
      ...form,
      signatureDataUrl: signatureData,
    });

    // Create blob + URL
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    // Assign the blob URL to the tab
    newTab.location.href = url;
  };

  return (
    <div className=" w-full lg:w-1/2 mx-auto p-6 space-y-6">
      {/* Logo */}
      <div className="flex justify-center">
        <img src="/footerLogo.svg" alt="Logo" className="h-auto w-3/12" />
      </div>

      {/* Note */}
      <p style={{ fontSize: "14px" }} className="text-sm text-left">
        Use this form to generate a completed PDF. After submission, kindly send
        the generated document to us through WhatsApp or email.{" "}
      </p>

      {/* Form */}
      <div className="space-y-4">
        <div>
          <label className="block mb-1">
            Request Subject<span className={"text-red-500 px-1"}>*</span>
          </label>
          <input
            name="subject"
            className="border w-full p-2"
            value={form.subject}
            onChange={handleChange}
            maxLength={60}
          />
        </div>

        <div>
          <label className="block mb-1">
            Requested by / Name<span className={"text-red-500 px-1"}>*</span>
          </label>
          <input
            name="requester"
            className="border w-full p-2"
            value={form.requester}
            onChange={handleChange}
            maxLength={44}
          />
        </div>

        <div>
          <label className="block mb-1">
            Unit Address<span className={"text-red-500 px-1"}>*</span>
          </label>
          <input
            name="address"
            className="border w-full p-2"
            value={form.address}
            onChange={handleChange}
            maxLength={12}
          />
        </div>

        <div>
          <label className="block mb-1">
            Reason for Change<span className={"text-red-500 px-1"}>*</span>
          </label>
          <textarea
            name="reason"
            className="border w-full p-2"
            value={form.reason}
            rows={4}
            onChange={handleChange}
            maxLength={645}
          />
        </div>

        <div>
          <label className="block mb-1">
            Change Description <span className={"text-red-500 px-1"}>*</span>
          </label>
          <textarea
            name="description"
            className="border w-full p-2"
            rows={4}
            value={form.description}
            onChange={handleChange}
            maxLength={645}
          />
        </div>

        {/* Impact Section */}
        <div className="border p-4 rounded">
          <h5 className="font-semibold mb-3">Impact of Change</h5>

          <label className="block mb-1">Budget</label>
          <input
            name="impactBudget"
            className="border w-full p-2 mb-3"
            value={form.impactBudget}
            onChange={handleChange}
            maxLength={64}
          />

          <label className="block mb-1">Timeline</label>
          <input
            name="impactTimeline"
            className="border w-full p-2 mb-3"
            value={form.impactTimeline}
            onChange={handleChange}
            maxLength={64}
          />

          <label className="block mb-1">Resources</label>
          <input
            name="impactResources"
            className="border w-full p-2"
            value={form.impactResources}
            onChange={handleChange}
            maxLength={64}
          />
        </div>

        {/* Signature */}
        <div>
          <div>
            <label className="block mb-1">Signature</label>
            <span className={"text-red-500 text-xs pb-2"}>
              A valid signature is required. Requests without a proper signature
              will not be processed.
            </span>
            <div
              className="relative w-full border bg-white rounded overflow-hidden"
              style={{ aspectRatio: "5 / 2" }} // updated ratio
            >
              <span className="absolute top-2 text-xs text-green-500 left-2">
                Sign here
              </span>
              <SignaturePad
                ref={sigPadRef}
                penColor="black"
                canvasProps={{
                  className: "absolute inset-0 w-full h-full",
                }}
              />
            </div>
          </div>

          <button
            type="button"
            className="mt-2 px-4 py-2 bg-gray-300"
            onClick={clearSignature}
          >
            Clear Signature
          </button>
        </div>

        <div>
          <label className="block mb-1">
            Initials<span className={"text-red-500 px-1"}>*</span>
          </label>
          <input
            name="initials"
            className="border w-full p-2"
            rows={2}
            value={form.initials}
            onChange={handleChange}
          />
        </div>

        {/* Generate PDF Button */}
        <button
          onClick={handleGeneratePDF}
          className="w-full bg-[#384740] text-white p-3 mt-4"
        >
          Generate PDF
        </button>
      </div>
    </div>
  );
}
