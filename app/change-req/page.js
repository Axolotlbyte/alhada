"use client";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import generatePdf from "@/utils/generatePdf";

// Dynamically load @uiw/react-signature
const Signature = dynamic(() => import("@uiw/react-signature"), {
  ssr: false,
});

export default function Page() {
  const sigRef = useRef(null);

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
    if (sigRef.current) {
      sigRef.current.clear();
    }
  };

const getSignatureDataUrl = async () => {
  if (!sigRef.current || !sigRef.current.svg) return null;

  const svgEl = sigRef.current.svg.cloneNode(true);
  const clientWidth = sigRef.current.svg.clientWidth;
  const clientHeight = sigRef.current.svg.clientHeight;

  // clean SVG
  svgEl.removeAttribute("style");
  svgEl.setAttribute("width", `${clientWidth}px`);
  svgEl.setAttribute("height", `${clientHeight}px`);
  svgEl.setAttribute("viewBox", `0 0 ${clientWidth} ${clientHeight}`);

  const serialized = new XMLSerializer().serializeToString(svgEl);

  // safe UTF-8 → base64
  const encodedSvg =
    typeof window !== "undefined"
      ? window.btoa(
          new Uint8Array(new TextEncoder().encode(serialized)).reduce(
            (acc, byte) => acc + String.fromCharCode(byte),
            ""
          )
        )
      : "";

  // convert SVG → PNG via <canvas>
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();
  const dataUrlPromise = new Promise((resolve) => {
    img.onload = () => {
      canvas.width = clientWidth;
      canvas.height = clientHeight;
      ctx?.drawImage(img, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
  });

  img.src = `data:image/svg+xml;base64,${encodedSvg}`;

  const pngDataUrl = await dataUrlPromise;

  // detect blank signature
  const blankCanvas = document.createElement("canvas");
  blankCanvas.width = canvas.width;
  blankCanvas.height = canvas.height;

  if (blankCanvas.toDataURL() === pngDataUrl) return null;

  return pngDataUrl;
};

const handleGeneratePDF = async () => {
  const signatureDataUrl = await getSignatureDataUrl();

  const newTab = window.open("", "_blank");

  const pdfBytes = await generatePdf({
    ...form,
    signatureDataUrl,
  });

  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  if (newTab) newTab.location.href = url;
  else window.open(url, "_blank");
};

  return (
    <div className="w-full lg:w-1/2 mx-auto p-6 space-y-6">
      <div className="flex justify-center">
        <img src="/footerLogo.svg" alt="Logo" className="h-auto w-3/12" />
      </div>

      <p className="text-sm text-left" style={{ fontSize: "14px" }}>
        Use this form to generate a completed PDF. After submission, kindly send
        the generated document to us through WhatsApp or email.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block mb-1">
            Request Subject<span className="text-red-500 px-1">*</span>
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
            Requested by / Name<span className="text-red-500 px-1">*</span>
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
            Unit Address<span className="text-red-500 px-1">*</span>
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
            Reason for Change<span className="text-red-500 px-1">*</span>
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
            Change Description <span className="text-red-500 px-1">*</span>
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

        <div>
          <label className="block mb-1">Signature</label>
          <span className="text-red-500 text-xs pb-2">
            A valid signature is required. Requests without a proper signature
            will not be processed.
          </span>

          <div
            className="relative w-full border bg-white rounded overflow-hidden"
            style={{ aspectRatio: "5/2" }}
          >
            <span className="absolute top-2 text-xs text-green-500 left-2">
              Sign here
            </span>

            <Signature
              ref={sigRef}
              pencolor="black"
              className="absolute inset-0 w-full h-full"
            />
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
            Initials<span className="text-red-500 px-1">*</span>
          </label>
          <input
            name="initials"
            className="border w-full p-2"
            value={form.initials}
            onChange={handleChange}
          />
        </div>

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
