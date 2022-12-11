import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import StarRatings from 'react-star-ratings';
import { values } from '../values';

function Hospital() {

    const [city, hospital] = window.location.pathname.split("/").slice(2)
    const [data, setData] = useState()
    const [star,setStar]=useState({
        doctors:0,
        infra:0,
        equip:0,
        medication:0,
        services:0
    })
    const [ratings,setRatings]=useState()
    const [check, setCheck]=useState(false)

    const [page,setPage]=useState("info")

    useEffect(() => {
        setStar({
            doctors:0,
            infra:0,
            equip:0,
            medication:0,
            services:0
        })
        axios.get(`${values.baseUrl}registrations-api/get-hospital/${city}/${hospital}`)
            .then((res) => {
                setData(res.data[0])
            })
        axios.get(`${values.baseUrl}ratings-api/get-rating/${city}/${hospital}`)
            .then((res)=>{
                setRatings(res.data)
            })
    }, [check])

    return (
        <div>

            <div className='flex w-[300px] mx-auto bg-gray-300 rounded-full mt-5'>
                <div className={`w-[150px] text-center py-2 cursor-pointer ${page==="info"?"text-white bg-[green] rounded-full":"text-black"}`} onClick={()=>setPage("info")}>Info</div>
                <div className={`w-[150px] text-center py-2 cursor-pointer ${page==="rating"?"text-white bg-[green] rounded-full":"text-black"}`} onClick={()=>setPage("rating")}>Give Rating</div>
            </div>

            {
            page==="info" &&
            <>
            <h1 className='font-bold text-center display-5 py-8'>{data?.name}</h1>
            <table className="table-auto mx-auto">
                    <tbody className='border-4 border-[green]'>
                        <tr>
                            <td className='w-[200px] font-bold border-4 border-[green] p-2'>Address</td>
                            <td className='text-center border-4 border-[green] p-2'>{data?.address}</td>
                        </tr>
                        <tr>
                            <td className='w-[200px] font-bold border-4 border-[green] p-2'>City</td>
                            <td className='text-center border-4 border-[green] p-2'>{data?.city}</td>
                        </tr>
                        <tr>
                            <td className='w-[200px] font-bold border-4 border-[green] p-2'>Pincode</td>
                            <td className='text-center border-4 border-[green] p-2'>{data?.pincode}</td>
                        </tr>
                        <tr>
                            <td className='w-[200px] font-bold border-4 border-[green] p-2'>State</td>
                            <td className='text-center border-4 border-[green] p-2'>{data?.state}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex flex-col items-center justify-center my-5'>
                        <h1 className='font-bold text-center display-5 py-3'>RATINGS</h1>

                        {ratings?.count !== 0 ?
                            <>
                                <div className='flex text-[30px]'>
                                    <p className='w-[300px]'>
                                        Doctors :
                                    </p>
                                    <div className='w-[200px] text-center text-[30px]'>
                                        <StarRatings
                                            starDimension='20px'
                                            starSpacing="0px"
                                            rating={Math.round(ratings?.doctors * 10) / 10 || 0}
                                            starRatedColor="orange"
                                            numberOfStars={5}
                                            name='rating' />
                                    </div>
                                </div>

                                <div className='flex text-[30px]'>
                                    <p className='w-[300px]'>
                                        Infrastructure :
                                    </p>
                                    <div className='w-[200px] text-center'>
                                        <StarRatings
                                            starDimension='20px'
                                            starSpacing="0px"
                                            rating={Math.round(ratings?.infra * 10) / 10 || 0}
                                            starRatedColor="orange"
                                            numberOfStars={5}
                                            name='rating' />
                                    </div>
                                </div>

                                <div className='flex text-[30px]'>
                                    <p className='w-[300px]'>
                                        Equipment :
                                    </p>
                                    <div className='w-[200px] text-center'>

                                        <StarRatings
                                            starDimension='20px'
                                            starSpacing="0px"
                                            rating={Math.round(ratings?.equip * 10) / 10 || 0}
                                            starRatedColor="orange"
                                            numberOfStars={5}
                                            name='rating' />

                                    </div>
                                </div>

                                <div className='flex text-[30px]'>
                                    <p className='w-[300px]'>
                                        Meditation :
                                    </p>
                                    <div className='w-[200px] text-center'>

                                        <StarRatings
                                            starDimension='20px'
                                            starSpacing="0px"
                                            rating={Math.round(ratings?.medication * 10) / 10 || 0}
                                            starRatedColor="orange"
                                            numberOfStars={5}
                                            name='rating' />

                                    </div>
                                </div>

                                <div className='flex text-[30px]'>
                                    <p className='w-[300px]'>
                                        Services:
                                    </p>
                                    <div className='w-[200px] text-center'>

                                        <StarRatings
                                            starDimension='20px'
                                            starSpacing="0px"
                                            rating={Math.round(ratings?.services * 10) / 10 || 0}
                                            starRatedColor="orange"
                                            numberOfStars={5}
                                            name='rating' />

                                    </div>
                                </div>
                            </>
                            : <h5>No ratings Yet!</h5>}

                    </div></>
            
            }

            {
            page==="rating" &&
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold text-center display-5 py-3'>GIVE YOUR RATINGS</h1>

                <div className='flex text-[30px]'>
                    Doctors :
                    <div>
                        <StarRatingComponent 
                            name="doctors" 
                            starCount={5}
                            value={star.doctors}
                            onStarClick={(e)=>{
                                setStar({
                                    ...star,
                                    doctors: e
                                })
                            }}
                        />
                    </div>
                </div>

                <div className='flex text-[30px]'>
                    Infrastructure :
                    <div>
                        <StarRatingComponent 
                            name="doctors" 
                            starCount={5}
                            value={star.infra}
                            onStarClick={(e)=>{
                                setStar({
                                    ...star,
                                    infra: e
                                })
                            }}
                        />
                    </div>
                </div>

                <div className='flex text-[30px]'>
                    Equipment :
                    <div>
                        <StarRatingComponent 
                            name="doctors" 
                            starCount={5}
                            value={star.equip}
                            onStarClick={(e)=>{
                                setStar({
                                    ...star,
                                    equip: e
                                })
                            }}
                        />
                    </div>
                </div>

                <div className='flex text-[30px]'>
                    Meditation :
                    <div>
                        <StarRatingComponent 
                            name="doctors" 
                            starCount={5}
                            value={star.medication}
                            onStarClick={(e)=>{
                                setStar({
                                    ...star,
                                    medication: e
                                })
                            }}
                        />
                    </div>
                </div>

                <div className='flex text-[30px]'>
                    Services:
                    <div>
                        <StarRatingComponent 
                            name="doctors" 
                            starCount={5}
                            value={star.services}
                            onStarClick={(e)=>{
                                setStar({
                                    ...star,
                                    services: e
                                })
                            }}
                        />
                    </div>
                </div>

                <button onClick={async ()=>{
                    await axios.post(`${values.baseUrl}ratings-api/post-rating/${city}/${hospital}`,star)
                    setCheck(!check)
                }} className='btn w-[150px] bg-[green] text-white hover:bg-[blue] my-4'>Submit</button>
                
            </div>

            }

        </div>
    )
}

export default Hospital