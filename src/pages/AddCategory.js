import React from 'react';
import CustomInput from '../components/CustomInput';

const AddCategory = () => {
  return (
    <div>
      <h3 className="mb-4">Add Category</h3>
      <form action="">
        <CustomInput type="text" label="Enter Blog Category" />
        <button className="btn btn-success border-0 rounded-3 my-5" type="submit">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
