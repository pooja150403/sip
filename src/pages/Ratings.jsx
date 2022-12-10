import React,{useState, useEffect} from 'react'
import { values } from '../values'
import axios from 'axios'

function Ratings() {
  const [cities,setCities]=useState([]) 
  const [hospitals,setHospitals]=useState([])

  const [data,setData]=useState({})

  useEffect(()=>{
    axios.get(`${values.baseUrl}registrations-api/get-cities`)
    .then((res)=>{
      setCities(res.data)
    })
  },[])

  function getHospitals(city){
    axios.get(`${values.baseUrl}registrations-api/get-hospitals/${city}`)
    .then((res)=>{
      setHospitals(res.data)
    })
  }

  return (
    <div className='mx-auto flex flex-col items-center min-h-[80vh]'>
      
      <div className='w-[200px] my-3'>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select City</label>
        <select id="cities" onClick={(e)=>{
            getHospitals(e.target.value)
            setData({
              ...data,
              city: e.target.value
            })
          }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {/* <option selected>Choose a country</option> */}
          <option value>Select</option>
          {
            cities?.map((e,i)=>
              <option key={i} value={e}>{e}</option>
            )
          }
        </select>
      </div>
        
      {
        hospitals.length!==0&&
        <div className='w-[200px] my-3'>
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Hospital</label>
          <select id="hospitals" onClick={(e)=>{
            setData({
              ...data,
              hospital: e.target.value
            })
          }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {/* <option selected>Choose a country</option> */}
            <option value>Select</option>
            {
              hospitals.map((e,i)=>
                <option key={i} value={e}>{e}</option>
              )
            }
          </select>

        </div>
      }

      {
        
        data.hospital&&
        <button onClick={()=>{
          console.log(data)
        }} className='btn btn-primary'>submit</button>      
      }

    </div>
  )
}

export default Ratings