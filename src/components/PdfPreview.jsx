import React from "react";
import pdf from "../assets/Ilayaraaja.pdf";

const PdfPreview = () => {
  return (
    <div className="  flex items-center justify-center p-2  ">
      <div className="w-full max-w-4xl md:px-10 bg-white rounded-3xl mt-10 mb-10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="font-bold text-lg">Ilayaraaja PDF</h2>

          <a
            href={pdf}
            download
            className="px-4 py-2 bg-black text-white rounded-lg text-sm"
          >
            Download
          </a>
        </div>

        {/* Viewer */}
        <iframe src={pdf} className="w-full h-[100vh]" title="PDF Preview" />
      </div>
    </div>
  );
};

export default PdfPreview;
