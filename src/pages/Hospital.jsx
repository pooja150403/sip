import axios from 'axios'
import React, { useEffect } from 'react'

function Hospital() {
    
    const [city,hospital]=window.location.pathname.split("/").slice(2)
    
    useEffect(()=>{
        axios.get(`http://localhost:4000/registrations-api/get-hospital/${city}/${hospital}`)
        .then((res)=>{
            console.log(res);
        })
    },[])

    return (
        <div>
            {city}
            {hospital}
        </div>
    )
}

export default Hospital