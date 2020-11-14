import React, { useState } from "react";
import { storage } from "../firebase/firebase";
import { data } from "../data/Data";

function Ad() {
  const [formData, setFormData] = useState({});
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState({ imgUrl: "" });
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageAsFile) => image);
  };
  const handleFireBaseUpload = (e) => {
    var buttonsArray = Object.values(
      document.getElementsByClassName("all-buttons")
    );
    var inputFields = document.getElementsByClassName("form-field")[0].value;
    inputFields = "";
    console.log(inputFields);
    buttonsArray.map((val, ind) => (val.disabled = true));
    e.preventDefault();
    console.log("Start of upload");
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        console.log(err);
      },
      async () => {
        if (imageAsFile) {
          var fireBaseUrl = await storage
            .ref("images")
            .child(imageAsFile.name)
            .getDownloadURL();
          console.log(fireBaseUrl);
          setImageAsUrl((prevObject) => ({
            ...prevObject,
            imgUrl: fireBaseUrl,
          }));
          formData.imgSrc = fireBaseUrl;
          addObject();
        }
        document.getElementsByClassName("form-field")[0].value = "";
        document.getElementsByClassName("form-field")[1].value = "";
        document.getElementsByClassName("form-field")[2].value = "";
        document.getElementsByClassName("form-field")[3].value = "";
        document.getElementsByClassName("form-field")[4].value = "";
        document.getElementsByClassName("form-field")[5].value = "";
        buttonsArray.map((val, ind) => (val.disabled = false));
      }
    );
  };

  function addObject() {
    var dataToEnter = {
      make: formData.make,
      name: formData.name,
      price: formData.price,
      productDetail: formData.productDetail,
      imgsrc: formData.imgSrc,
      location: formData.location,
      sellerName: formData.sellerName,
    };
    data.push(dataToEnter);
  }

  return (
    <div id="ad-div">
      <h1> Post your ad here: </h1>
      <form
        className="form"
        encType="multipart/form-data"
        onSubmit={handleFireBaseUpload}
      >
        <label>Enter Make: </label>
        <br></br>
        <input
          id="make-input"
          className="form-field"
          type="text"
          onChange={(e) => (formData.make = e.target.value)}
        />
        <br></br>
        <label>Enter Name: </label>
        <br></br>
        <input
          id="name-input"
          className="form-field"
          type="text"
          onChange={(e) => (formData.name = e.target.value)}
        />
        <br></br>
        <label>Enter Price: </label>
        <br></br>
        <input
          className="form-field"
          type="text"
          onChange={(e) => (formData.price = e.target.value)}
        />
        <br></br>
        <label>Enter Details: </label>
        <br></br>
        <input
          className="form-field"
          type="text"
          onChange={(e) => (formData.productDetail = e.target.value)}
        />
        <br></br>
        <label>Enter Location: </label>
        <br></br>
        <input
          className="form-field"
          type="text"
          onChange={(e) => (formData.location = e.target.value)}
        />
        <br></br>
        <label>Enter Seller Name: </label>
        <br></br>
        <input
          className="form-field"
          type="text"
          onChange={(e) => (formData.sellerName = e.target.value)}
        />
        <br></br>
        <label>Upload image here: </label>
        <br></br>
        <input
          className="form-field"
          type="file"
          onChange={handleImageAsFile}
        ></input>
        <br></br>
        <button className="all-buttons">Submit</button>
      </form>
    </div>
  );
}

export default Ad;
