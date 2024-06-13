import React, { useState, useEffect, useCallback } from "react";
import Header from "../../../components/Header";
import MobileNav from "../../../components/Modals/MobileNav";
import { MessageBoardTable } from "../../../components/MessageBoardTable";
import Button from "../../../components/Modals/Button";
import ArchiveNavs from "../ArchiveNavs";

import { Sort } from "iconsax-react";
import { HambergerMenu } from "iconsax-react";

// import {columnsDef} from '../Archives/columns'
import Documents from "../Forms/DocumentForm";
import UpdateDocument from "../Forms/UpdateDocument";

import Archive from "../icon/archive.png";
import { fetchDocuments } from "../../Archives/apis/getDocumentsApi";
import { deleteDocuments } from "../apis/deleteDocumentsApi";
import { flexRender } from "@tanstack/react-table";
import { Spinner } from "@material-tailwind/react";
import PreviewModal from "../PreviewModal";
import "../../../table.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Approvals() {
  const [documentForm, setDocumentForm] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [updateDoc, setUpdateDocument] = useState(false);
  const [docNames, setDocName] = useState([]);
  const [preview, setPreview] = useState(false);
  const [filter, setFilter] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isPreview, setIsPreview] = useState("");
  const [identity, setIdentity] = useState();

  const successMessage = () => {
    toast.success("File deleted");
  };

  const errorMessage = () => {
    toast.error("File could not be deleted");
  };

  // This method is passed to the close button in documents form to handle close actions
  const closeForm = () => {
    setDocumentForm(false);
  };

  const closeUpdate = () => {
    setUpdateDocument(false);
  };

  const closePreview = () => {
    setPreview(false);
  };

  const getDocuments = async () => {
    try {
      const documentData = await fetchDocuments();
      setDocuments(documentData.data);
      setIsLoading(false);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  useEffect(() => {
    getDocuments();
  }, []);

  useEffect(() => {
    const filteredDocuments = documents.filter(
      (document) => document.archiveType === "Approvals"
    );
    setDocName(filteredDocuments);
  }, [documents]);

  const handleDownloads = useCallback(
    (id) => {
      const doc = documents.find((x) => x.id === id);

      if (doc.filesUrls.length > 0) window.location.href = doc.filesUrls[0];
    },
    [documents]
  );

  const handlePreview = useCallback(
    (id) => {
      const docImage = documents.find((x) => x.id === id);
      if (docImage.filesUrls) setIsPreview(docImage.filesUrls[0]);
      setPreview(true);
    },
    [documents]
  );

  const handleDelete = useCallback(
    async (id) => {
      console.log("Identity:", id);
      try {
        await deleteDocuments(id);
        setDocuments((prevDocuments) =>
          prevDocuments.filter((doc) => doc.id !== id)
        );
        successMessage();
      } catch (error) {
        errorMessage();
        console.error("Error deleting document:", error);
      }
    },
    [successMessage, errorMessage]
  );

  const handleEdit = (id) => {
    setUpdateDocument(!updateDoc);
    setIdentity(id);
  };

  const columns = [

    {
      header: "Title",
      accessorKey: "name",
    },

    {
      header: "Project Name",
      accessorKey: "issuedBy",
    },

    {
      header: "Description",
      accessorKey: "description",
    },

    {
      header: "File Type",
      accessorKey: "archiveType",
    },

    {
      header: "Media Type",
      accessorKey: "archiveMediaType",
    },

    {
      header: "Document i.d",
      accessorKey: "serialNumber",
    },

    {
      header: "Submitted Date",
      accessorKey: "submittedDate",
    },

    {
      header: "Received From",
      accessorKey: "receivedFrom",
    },

    {
      header: "Received Date",
      accessorKey: "receivedDate",
    },

    {
      header: "Expiry Date",
      accessorKey: "expiryDate",
    },


  

    

    {
      id: "Downloads",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2 ">
            <Button
              onClick={() => handlePreview(row.original.id)}
              className="bg-orange-300 p-2 rounded-lg "
            >
              Preview
            </Button>
            <Button
              onClick={() => handleDownloads(row.original.id)}
              className="bg-green-300 hover:bg-green-200 p-2 rounded-lg"
            >
              Download
            </Button>
            <Button
              onClick={() => handleEdit(row.origin.id)}
              className="bg-yellow-500 hover:bg-yellow-300 p-2 rounded-lg"
            >
              Edit
            </Button>
            <Button
              onClick={() => handleDelete(row.original.id)}
              className="bg-red-500 hover:bg-red-300 p-2 rounded-lg"
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const table = MessageBoardTable(
    docNames,
    columns,
    flexRender,
    filter,
    rowSelection,
    setFilter,
    setRowSelection
  );

  return (
    <div>
      <ToastContainer autoClose={6000} />

      <MobileNav />

      <div className="flex">
        {isOpen ? <Header /> : ""}

        <div className="w-[98%] mx-4">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="hidden lg:block relative w-[3%]  bg-blue-200 p-2 rounded-lg  mt-8"
          >
            <HambergerMenu />
          </div>

          <div className="font-bold text-4xl lg:text-4xl text-accent py-6 flex gap-4 justify-center items-center">
            <p className="mt-8">Approvals</p>
            <img src={Archive} alt="An Icon of books" />
          </div>

          <div className="flex gap-2 items-center justify-end pr-4 pb-4">
            <ArchiveNavs />
            <button
              onClick={() => setDocumentForm(!documentForm)}
              className="flex items-center gap-2 font-bold  text-white rounded-sm p-2 ring-2 ring-accent bg-deepBlue hover:bg-accent hover:text-white"
            >
              Upload document
            </button>
            <input
              className=" ring-2 ring-accent focus:outline-accent p-2 font-bold text-accent"
              placeholder="Search"
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>

          {isLoading ? (
            <Spinner className="fill-primary mx-auto" color="accent" />
          ) : (
            <table className="relative">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getCanSort() && (
                        <Sort
                          onClick={header.column.getToggleSortingHandler()}
                        />
                      )}
                      {header.column.getIsSorted()}
                    </th>
                  ))}
                </tr>
              ))}

              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="mt-2">
            Page
            {table.getState().pagination.pageIndex + 1} of {""}
            {table.getPageCount()}
          </div>

          <div className="flex gap-4 mt-10 ">
            <button
              onClick={() => table.setPageIndex(0)}
              className="font-bold text-black ring-2 ring-accent hover:text-white hover:bg-accent p-1 rounded-sm"
            >
              First Page
            </button>
            <button
              onClick={() => table.previousPage()}
              isDisabled={!table.getCanPreviousPage()}
              className="font-bold text-black ring-2 ring-accent hover:text-white hover:bg-accent p-1 rounded-sm"
            >
              Prev Page
            </button>
            <button
              onClick={() => table.nextPage()}
              isDisabled={!table.getCanNextPage()}
              className="font-bold text-black ring-2 ring-accent hover:text-white hover:bg-accent p-1 rounded-sm"
            >
              Next Page
            </button>
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              className="font-bold text-black ring-2 ring-accent hover:text-white hover:bg-accent p-1 rounded-sm"
            >
              Last Page
            </button>
          </div>

          <div className="flex justify-center">
            {documentForm ? (
              <Documents close={documentForm} closeForm={closeForm} />
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-center">
            {updateDoc ? (
              <UpdateDocument
                close={updateDoc}
                closeUpdate={closeUpdate}
                rowId={identity}
              />
            ) : null}
          </div>

          {preview ? (
            <PreviewModal
              close={preview}
              closeForm={closePreview}
              previewImage={isPreview}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Approvals;
