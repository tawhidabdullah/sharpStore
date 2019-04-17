import React, { Fragment, Component } from "react";
import TextFeildGroup from "../commonFeilds/TextFeildGroup";
import TextAreaFeildGroup from "../commonFeilds/TextAreaFeildGroup";
import SelectListGroup from "../commonFeilds/SelectListGroup";
import { connect } from "react-redux";
import { addProductAction } from "../../actions/addProductAction";

class FileUploads extends Component {
  state = {
    title: "",
    desc: "",
    category: "",
    price: 0,
    productImage: "",
    errors: {}
  };

  onChange = e => {
    let productImage;
    if (e.target.name === "productImage") {
      productImage = e.target.files[0];
    }

    this.setState({
      productImage: productImage
    });
  };
  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("desc", this.state.desc);
    formData.append("price", this.state.price);
    formData.append("category", this.state.category);
    formData.append("productImage", this.state.productImage);

    this.props.addProductAction(formData);
  };
  render() {
    const errors = this.state.errors;

    const options = [
      { label: "Select Categories", value: 0 },
      { label: "Phone", value: "Phone" },
      { label: "Computer", value: "Computer" }
    ];

    return (
      <div>
        <form onSubmit={this.onSubmit} encType='multipart/form-data'>
          <TextFeildGroup
            name="title"
            placeholder="title"
            type="text"
            value={this.state.title}
            onChange={this.onInputChange}
            errors={errors.title}
          />
          <TextAreaFeildGroup
            name="desc"
            placeholder="desc"
            value={this.state.desc}
            onChange={this.onInputChange}
            errors={errors.desc}
          />
          <TextFeildGroup
            type="number"
            placeholder="price"
            name="price"
            value={this.state.price}
            onChange={this.onInputChange}
            errors={errors.price}
            info="Type you price here.."
          />
          <SelectListGroup
            placeholder="category"
            name="category"
            value={this.state.category}
            onChange={this.onInputChange}
            options={options}
            errors={errors.category}
            info="Give Product a catagory"
          />
          <div className="custom-file mb-4">
            <input
              name="productImage"
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={this.onChange}
            />
            <label className="custom-file-label" htmlFor="customFile">
              Choose image file
            </label>
          </div>
          <input
            type="submit"
            value="upload"
            className="btn btn-primary btn-block mt-4"
          />{" "}
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addProductAction }
)(FileUploads);
