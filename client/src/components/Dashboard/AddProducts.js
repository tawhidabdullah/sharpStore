import React from "react";
import FileUploads from "../commonFeilds/FileUploads";


const AddProducts = () => {
  return (
    <div className="container mt-5">
      <h4 className="display-4 text-center mb-4">Add your Product</h4>
      <FileUploads />
    </div>
  );
};

export default AddProducts;
