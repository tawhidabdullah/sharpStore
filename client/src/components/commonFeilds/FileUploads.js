import React, { Fragment, useState } from "react";
import axios from "axios";
import TextFeildGroup from "../commonFeilds/TextFeildGroup";
import TextAreaFeildGroup from "../commonFeilds/TextAreaFeildGroup";
import SelectListGroup from "../commonFeilds/SelectListGroup";

const FileUploads = () => {
  const [file, setFile] = useState("");
  const [filename, setFileName] = useState("Choose file buddy");
  const [uploadedFile, setUploadedFile] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({});
  const [imgData, setimgData] = useState("");

  const onChange = e => {
    setFile(e.target.files[0].name);
    setFileName(e.target.files[0].name);
  };

  const onInputChange = e => {
    if (e.target.name === "title") setTitle(e.target.value);
    if (e.target.name === "desc") setDesc(e.target.value);
    if (e.target.name === "category") setCategory(e.target.value);
    if (e.target.name === "price") setPrice(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", file);


    const res = await axios.post("/api/admin/products/addProducts", {
      title: title,
      desc: desc,
      price: price,
      category: category,
      file
    });
  };

  const options = [
    { label: "Select Categories", value: 0 },
    { label: "Phone", value: "Phone" },
    { label: "Computer", value: "Computer" }
  ];

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextFeildGroup
          name="title"
          placeholder="title"
          type="text"
          value={title}
          onChange={onInputChange}
          errors={errors.title}
        />
        <TextAreaFeildGroup
          name="desc"
          placeholder="desc"
          value={desc}
          onChange={onInputChange}
          errors={errors.desc}
        />
        <TextFeildGroup
          type="number"
          placeholder="price"
          name="price"
          value={price}
          onChange={onInputChange}
          errors={errors.price}
          info="Type you price here.."
        />
        <SelectListGroup
          placeholder="category"
          name="category"
          value={category}
          onChange={onInputChange}
          options={options}
          errors={errors.category}
          info="Give Product a catagory"
        />
        <div className="custom-file mb-4">
          <input
            name="file"
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <lable className="custom-file-label" htmlFor="customFile">
            {filename}
          </lable>
        </div>
        <input
          type="submit"
          value="upload"
          className="btn btn-primary btn-block mt-4"
        />{" "}
      </form>
    </div>
  );
};

export default FileUploads;
