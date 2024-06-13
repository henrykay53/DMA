import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Spinner } from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cancel from "../../../Assets/icons/cancel.png";

const DocumentForm = ({ close, closeForm }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelcted] = useState(false);
  const [file, setFile] = useState();
  const [name, setName] = useState();
  const [archiveType, setArchiveType] = useState();
  const [archiveMedia, setArchiveMedia] = useState();
  const [receivedDate, setReceivedDate] = useState();
  const [expiry, setExpiry] = useState();
  const [receivedFrom, setReceivedFrom] = useState();
  const [issuedBy, setIssuedBy] = useState();
  const [description, setDescription] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Toastify error massages handlers
  const errorMessage = () => {
    toast.error("File upload unsuccessful");
  };

  const successMessage = () => {
    toast.success("Uploaded file successfully");
  };

  const nameSelection = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const archiveTypeHandler = (e) => {
    setArchiveType(e.target.value);
    console.log(archiveType);
  };

  const archiveMediaTypeHandler = (e) => {
    setArchiveMedia(e.target.value);
    console.log(archiveMedia);
  };

  const receivedDateHandler = (e) => {
    setReceivedDate(e.target.value);
    console.log(receivedDate);
  };

  const expiryDateHandler = (e) => {
    setExpiry(e.target.value);
    console.log(expiry);
  };

  const receiverHandler = (e) => {
    setReceivedFrom(e.target.value);
    console.log(receivedFrom);
  };

  const issuedByHandler = (e) => {
    setIssuedBy(e.target.value);
    console.log(issuedBy);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  const handleFileSelection = (e) => {
    setFile(e.target.files[0]);
    setIsSelcted(true);
  };

  const API_BASE_URL = "https://dma-saas.azurewebsites.net/api";

  const uploadFile = async () => {
    setIsLoading(true);
    try {
      if (!file) {
        console.log("No file selected");
      }
      const formData = new FormData();
      formData.append("Name", name);
      formData.append("ArchiveType", archiveType);
      formData.append("ArchiveMediaType", archiveMedia);
      formData.append("ReceivedDate", receivedDate);
      formData.append("Expiry", expiry);
      formData.append("ReceivedFrom", receivedFrom);
      formData.append("IssuedBy", issuedBy);
      formData.append("Description", description);
      formData.append("Files", file);

      const response = await axios.post(`${API_BASE_URL}/Archive`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          accept: "*/*",
        },
      });
      successMessage();
      return response.data;
    } catch (error) {
      errorMessage();
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const submitForm = (data) => {
    uploadFile(data);
   
  };

  return (
    <div className="absolute top-0 mt-10 w-[30%]  z-10 bg-white shadow-2xl p-6">
      <ToastContainer autoClose={2000} />

      <div className="flex justify-between items-center">
        <div className="text-4xl text-center ml-4 text-accent font-bold">
          Upload Document
        </div>
        <div
          className="p-2 rounded-sm bg-red-200"
          onClick={() => closeForm(!close)}
        >
          <img src={Cancel} alt="A close button" />
        </div>
      </div>

      <form className="ml-4 mr-4 mt-4" onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="Name">
          <input
            {...register("Name", { required: "Field can not be empty" })}
            onChange={nameSelection}
            className="p-3 mt-4 w-[100%] bg-gray-200 rounded-sm border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
            placeholder-black"
            type="text"
            placeholder="Name / Title"
          />

          <div>{errors.Name?.message}</div>
        </label>

        <label for="ArchiveType">
          <select
            name="ArchiveType"
            {...register("ArchiveType", { required: "Field can not be empty" })}
            onChange={archiveTypeHandler}
            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder-black"
          >
            <option value="select">Select Document Type</option>
            <option value="0">Contracts</option>
            <option value="1">Letters</option>
            <option value="2">Reports</option>
            <option value="3">Drawing Illustrations</option>
            <option value="4">Certificate Lincense</option>
            <option value="5">Approvals</option>
            <option value="6">Media</option>
            <option value="7">Receipts</option>
            <option value="8">Purchase Order</option>
          </select>

          <div className="text-red-500">{errors.ArchiveType?.message}</div>
        </label>

        <label for="ArchiveMediaType">
          <select
            name="ArchiveMediaType"
            {...register("ArchiveMediaType", {
              required: "Field can not be empty",
            })}
            onChange={archiveMediaTypeHandler}
            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder-black"
          >
            <option value="select">Select Document Format</option>
            <option value="0">Document</option>
            <option value="1">Image</option>
            <option value="2">Video</option>
          </select>

          <div className="text-red-500">{errors.ArchiveMediaType?.message}</div>
        </label>

        <label htmlFor="ReceivedFrom">
          <input
            {...register("ReceivedFrom", {
              required: "Field can not be empty",
            })}
            onChange={receiverHandler}
            className="p-3 mt-4 w-[100%] bg-gray-200 rounded-sm border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
            placeholder-black"
            type="text"
            placeholder="Project Name"
          />

          <div>{errors.ReceivedFrom?.message}</div>
        </label>

        <label htmlFor="IssuedBy">
          <input
            {...register("IssuedBy", { required: "Field can not be empty" })}
            onChange={issuedByHandler}
            className="p-3 mt-4 w-[100%] bg-gray-200 rounded-sm border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
placeholder-black"
            type="text"
            placeholder="Sent to/ Sent by"
            // onChange={e => setEmail(e.target.value)}
          />

          <div>{errors.IssuedBy?.message}</div>
        </label>

        <label htmlFor="ReceivedDate">
          <div className="flex gap-2">
            Sent to/sent by date <div className="text-red-500">*</div>
          </div>

          <input
            type="date"
            name="dob"
            {...register("ReceivedDate", {
              required: "Field can not be empty",
            })}
            onChange={receivedDateHandler}
            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder-black"
          />
          <div className="text-red-500">{errors.ReceivedDate?.message}</div>
        </label>

        <label htmlFor="Expiry">
          <div className="flex gap-2">
            Expiration Date<div className="text-red-500">*</div>
          </div>

          <input
            type="date"
            name="doe"
            {...register("Expiry", { required: "Field can not be empty" })}
            onChange={expiryDateHandler}
            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder-black"
          />
          <div className="text-red-500">{errors.Expiry?.message}</div>
        </label>

        <label htmlFor="Description">
          <input
            {...register("Description", { required: "Field can not be empty" })}
            onChange={descriptionHandler}
            className="p-3 mt-4 w-[100%] bg-gray-200 rounded-sm border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
placeholder-black"
            type="text"
            placeholder="Description"
          />
          <div>{errors.Description?.message}</div>
        </label>

        {/* <label htmlFor="Others">

                    <input
                        {...register("Others", { required: "Field can not be empty" })}
                        onChange={otherHandler}
                        className="p-3 mt-4 w-[100%] bg-gray-200 rounded-sm border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
placeholder-black"
                        type="text"
                        placeholder="Others"

                    />
                    <div>{errors.Others?.message}</div>
                </label> */}

        <div>
          <label htmlFor="uploadedFiles">
            <input
              {...register("uploadedFiles", {
                required: "Field can not be empty",
              })}
              type="file"
              className="py-10"
              onChange={handleFileSelection}
            />
            <div>{errors.uploadFiles?.message}</div>
          </label>

          {isSelected ? (
            <div>
              <p>Filename: {file.name}</p>
              <p>Filetype: {file.type}</p>
              <p>Size in bytes: {file.size}</p>
              <p>
                lastModifiedDate: {file.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-accent w-[100%] text-white font-bold p-4 mt-8 rounded-lg outline-none"
        >
          {isLoading ? (
            <Spinner className="fill-primary mx-auto" color="accent" />
          ) : (
            <>Upload</>
          )}
        </button>
      </form>
    </div>
  );
};

export default DocumentForm;
