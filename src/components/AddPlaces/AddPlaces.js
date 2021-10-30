import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddPlaces = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      console.log(data)
    axios.post('http://localhost:5555/places', data)
    .then(res => {
        if(res.data.insertedId){
            alert('Place added successfully');
            reset();
        }
    })
};;

  return (
    <div className="w-50 mt-5 pt-5 mx-auto">
      <h1 className="text-warning">Add Place</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
        <label className='col-2' htmlFor="place">Place</label>
        <input
        className='col-10'
          id="place"
          type="text"
          placeholder="Place Name"
          {...register("title", { required: true, minLength: 5 })}
        />
        </div>
        <br />
        <div className='row'>
        <label className='col-2' htmlFor="details">Details</label>
        <textarea
        className='col-10'
          id="details"
          placeholder="Details"
          type="text"
          {...register("details", { required: true })}
        />
        </div>
        <br />
        <div className='row'>
        <label className='col-2' htmlFor="details">Cost</label>
        <input
        className='col-10'
          id="details"
          placeholder="$ Costing"
          type="number"
          {...register("cost", { required: true })}
        />
        </div>
        <br />
        <div className='row'>
        <label className='col-2' htmlFor="image">ImageURL</label>
        <input
        className='col-10'
          id="image"
          placeholder="ImageURL"
          type="url"
          {...register("imgUrl", { required: true })}
        />
        </div>
        <br />
      {errors.exampleRequired && <span>This field is required</span>}
        <input className='btn btn-success' type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddPlaces;
