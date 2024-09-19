import React, { useRef, useState } from "react";
import ccblue from "../assets/images/dashboard/cc-blue.png";
import ccyellow from "../assets/images/dashboard/cc-yellow.png";
import { BsPlusLg } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";

const BankCards = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const uploadFile = useRef();

  const fileUpload = () => {
    uploadFile.current.click();
  };

  const handleChange = (e) => {
    const files = e.target.files;

    if (files && files[0]) {
      setFileName(files[0].name);
      setImage(URL.createObjectURL(files[0]));
    } else {
      setFileName("No Selected File");
      setImage(null);
    }
  };

  return (
    <>
      <div className="debit-card-wrapper">
        <img src={ccyellow} alt="debit-card" />
      </div>
      <div className="debit-card-wrapper">
        <img src={ccblue} alt="debit-card" />
      </div>
      <div>
        <div className="fileUpload" onClick={fileUpload}>
          <input
            type="file"
            accept="image/*"
            id="credit-card"
            ref={uploadFile}
            hidden
            onChange={(e) => handleChange(e)}
          />
          {image ? (
            <img src={image} alt="cc-image" />
          ) : (
            <>
              <BsPlusLg /> <span className="fs-7 mt-1">Add Another Card</span>
            </>
          )}
        </div>
        <div className="d-flex gap-2 align-items-center fs-7">
          <span>{fileName}</span>
          {image === null ? (
            ""
          ) : (
            <MdOutlineDeleteOutline
              onClick={() => {
                setFileName("No Selected File");
                setImage(null);
              }}
              style={{ cursor: "pointer" }}
              className="text-danger fw-bold"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BankCards;
