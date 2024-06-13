import React from "react";
import Cancel from "../../Assets/icons/cancel.png";

const PreviewModal = ({ close, closeForm, previewImage }) => {
  return (
    <div className="relative rounded-lg shadow-lg z-10 -top-96 w-[40%] mx-auto bg-white p-10">
      <div className="flex justify-end items-center mb-4">
        <div
          className="p-2 rounded-sm bg-red-200"
          onClick={() => closeForm(!close)}
        >
          <img src={Cancel} alt="A close button" />
        </div>
      </div>

      <div className="flex justify-center">

        <img
          className="w-full h-96"
          src={previewImage} // Assuming previewImage contains the URL of the PDF
          title="PDF Preview"
        ></img>
      </div>
    </div>
  );
};

export default PreviewModal;


