import Stage from "./Stage";
import "./demolayout.css";
import {
  faCloudArrowUp,
  faGhost,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import AppContext from "../hooks/createContext";

const defaultImgUrl = "/assets/data/truck.jpg";

// interface UploadedFile extends File {
//   preview: string;
// }

const DemoLayout: React.FC = () => {
  const [preview, setPreview] = useState<Object[]>([]);

  useEffect(() => {
    const img = localStorage.getItem("image");
    !img && localStorage.setItem("image", defaultImgUrl);
    setPreview([
      {
        name: "truck",
        preview: img,
      },
    ]);
  }, []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle the uploaded files here, for example, save to local storage.
    console.log("Uploaded files:", acceptedFiles);

    // Convert the files to have a 'preview' property with the object URL
    const filesWithPreview = acceptedFiles.map((upFile) => {
      const fl = URL.createObjectURL(upFile);
      localStorage.setItem("image", fl);

      return {
        ...upFile,
        name: "",
        file: "",
        preview: fl,
      };
    });

    setPreview([...filesWithPreview]);
  }, []);

  //

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="demo-layout-container">
      <div className="demo-layout-header">
        <div className="button-container-layout">
          <div
            {...getRootProps()}
            className={`upload-button ${isDragActive ? "active" : ""}`}
          >
            <div className="iconButton-container">
              <input {...getInputProps()} />
              <FontAwesomeIcon className="upload" icon={faCloudArrowUp} />
              <span>Upload</span>
            </div>
          </div>

          <button className="gallery-button">
            <FontAwesomeIcon className="model" icon={faGhost} />
            Choose Model
          </button>

          <button className="create-button">
            <FontAwesomeIcon className="create" icon={faWandMagicSparkles} />
            Create
          </button>
        </div>
      </div>
      <div className="stage-container">
        {preview.map((file: any) => (
          <img key={file.name} src={file.preview} alt={file.name} />
        ))}
      </div>
    </div>
  );
};
export default DemoLayout;
