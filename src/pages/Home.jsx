import React from 'react'

function Home() {

    return (
        <>
            <div className='grid grid-cols-2'>
                <img className=' w-[60%] mx-auto m-3 rounded-full border-2 border-[green]' src={"https://previews.123rf.com/images/greyjj/greyjj1501/greyjj150100021/35615950-hospital-and-doctor-related-vector-infographic-flat-style.jpg"} alt=''></img>
                <div className='m-5 container text-center flex flex-col align-center justify-center'>
                    <a href='register' className="w-[200px] p-3 btn m-5 btn-success">Register your hospital</a>
                    <a href='ratings' className="w-[200px] p-3 m-5 btn btn-success">Ratings and Reviews</a>
                </div>
            </div>
            <h2 className='m-3 text-center text-primary p-3 w-50 mx-auto rounded bg-[#87cefa]'>INDIA'S MOST TRUSTWORTHY REVIEWS </h2>
        </>
    )
}

export default Home