import React, {useState} from 'react';
import CustomInput from '../components/CustomInput';
import ReactQuill from 'react-quill';

const AddProduct = () => {
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    setDesc(e);
  };
  return (
    <div>
      <h3>Add Products</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter product name" />
          <CustomInput type="number" label="Enter product price" />
          <div className="mb-3">
            <ReactQuill
              theme="snow"
              value={desc}
              onChange={(evt) => {
                handleDesc(evt);
              }}
            />
          </div>

          <select name="" id="" className="mb-4 py-3 form-control">
            <option value="" className="fs-2">
              Select Category
            </option>
          </select>
          <CustomInput type="number" label="Enter product price" />
          <select name="" id="" className="mb-4 py-3 form-control ">
            <option value="">Select Brand</option>
          </select>
          <button className="btn btn-success border-0 rounded-3 my-5" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
