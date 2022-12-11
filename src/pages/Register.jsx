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
      <p className="display-4 text-[green] text-center mt-2 font-serif font-medium">Register</p>
      <div className="w-[750px] mx-auto border-2 border-[black] rounded-xl my-4 bg-[white] shadow-2xl shadow-[black]">
        <form className="mt-5 max-w-[600px] mx-auto" onSubmit={handleSubmit(onformsubmit)}>
          <div className="mb-3">
            <label className="font-bold">Name</label>
            <input type="text" className="form-control max-w-[600px] border-2 mx-auto" id="" name="" {...register("name", { required: true })}></input>
            {errors.name?.type === 'required' && <p className="text-danger">*Name is required</p>}
          </div>
          <div className="mb-3">
            <label className="font-bold">Address</label>
            <input type="text" id="" name="" className="form-control max-w-[600px] border-2 mx-auto" {...register("address", { required: true })}></input>
            {errors.address?.type === 'required' && <p className="text-danger">*Address is required</p>}
          </div>
          <div className="mb-3">
            <label className="font-bold">PinCode</label>
            <input type="text" className="form-control max-w-[600px] border-2 mx-auto" id="" name="" {...register("pincode", { required: true })}></input>
            {errors.pincode?.type === 'required' && <p className="text-danger">*PinCode is required</p>}
          </div>
          <div className="mb-3">
            <label className="font-bold">Town/City</label>
            <input type="text" className="form-control max-w-[600px] border-2 mx-auto" id="" name="" {...register("city", { required: true })}></input>
            {errors.city?.type === 'required' && <p className="text-danger">*City is required</p>}
          </div>
          <div className="mb-3">
            <label className="font-bold">State</label>
            <input type="text" className="form-control max-w-[600px] border-2 mx-auto" id="" name="" {...register("state", { required: true })}></input>
            {errors.state?.type === 'required' && <p className="text-danger">*State is required</p>}
          </div>


          <button type="submit" className="btn px-5 py-3 bg-[green] text-white d-block mx-auto hover:bg-[blue] mb-3">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Register;