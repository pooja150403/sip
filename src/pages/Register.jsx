import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { values } from "../values";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate=useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onformsubmit = async (userdata) => {
    const res=await axios.post(`${values.baseUrl}registrations-api/register`,userdata)
    alert(res.data.message)
    navigate("/")
  }

  return (
    <div className="row ">
      <p className="display-1 text-info text-center mt-2 font-bold">Register</p>
      <div className="col-11 col-sm-8 col-md-6 mx-auto border rounded-xl my-4">
        <form className="mt-5" onSubmit={handleSubmit(onformsubmit)}>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" className="form-control" id="" name="" {...register("name", { required: true })}></input>
            {errors.name?.type === 'required' && <p className="text-danger">*Name is required</p>}
          </div>
          <div className="mb-3">
            <label>Address</label>
            <input type="text" id="" name="" className="form-control" {...register("address", { required: true })}></input>
            {errors.address?.type === 'required' && <p className="text-danger">*Address is required</p>}
          </div>
          <div className="mb-3">
            <label>PinCode</label>
            <input type="text" className="form-control" id="" name="" {...register("pincode", { required: true })}></input>
            {errors.pincode?.type === 'required' && <p className="text-danger">*PinCode is required</p>}
          </div>
          <div className="mb-3">
            <label>Town/City</label>
            <input type="text" className="form-control" id="" name="" {...register("city", { required: true })}></input>
            {errors.city?.type === 'required' && <p className="text-danger">*City is required</p>}
          </div>
          <div className="mb-3">
            <label>State</label>
            <input type="text" className="form-control" id="" name="" {...register("state", { required: true })}></input>
            {errors.state?.type === 'required' && <p className="text-danger">*State is required</p>}
          </div>


          <button type="submit" className="btn bg-[green] text-white d-block mx-auto hover:bg-[blue] mb-3">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Register;