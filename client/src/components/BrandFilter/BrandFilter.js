import React, { Component } from "react";
import { connect } from "react-redux";
import "./BrandFilter.scss";
import { brands } from "../../data/brands";
import { addBrandToFilter, removeBrandFromFilter } from "../../actions";

const BrandFilter = props => {
  const { dispatch, brandItemsCount } = props;
  const handleSelectBox = e => {
    const name = e.target.name;
    const value = e.target.checked;

    if (e.target.checked) {
      dispatch(addBrandToFilter(name));
    } else {
      dispatch(removeBrandFromFilter(name));
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-header bg-danger">
        <h3 className='text-white'>Brands</h3>
      </div>
      <ul className="list-group flex-row flex-wrap">
        {brands.map(brand => (
          <li className="list-group-item flex-50" key={brand}>
            <label className="custom-checkbox text-capitalize">
              {" "}
              {brand} ({brandItemsCount[brand]})
              <input
                type="checkbox"
                name={brand}
                className="custom-checkbox__input"
                onInput={handleSelectBox}
              />
              <span className="custom-checkbox__span" />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  const brandItemsCount = {};

  state.shop.products.forEach(p => {
    brandItemsCount[p.brand] = brandItemsCount[p.brand] + 1 || 1;
  });

  console.log(brandItemsCount)

  return {
    brandItemsCount
  };
};

export default connect(mapStateToProps)(BrandFilter);
