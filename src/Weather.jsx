
import React, { useState } from 'react'
const apikey = '97440cea57b02f27839e55e3e9bda262'
import { TiWeatherShower } from "react-icons/ti";
const Weather = () => {

    const[mydata,setData]=useState({})
    const[changWeather,setChangWeather]=useState('');

    const myfunc=(cityName)=>{
        try {
            if(!cityName) return
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`
            fetch(apiUrl).then((res)=>{return res.json()})
            .then((data)=>{setData(data)})
        } catch (error) {
            console.log(error)
        }
    }
    const chang=(e)=>{
         setChangWeather(e.target.value)
    }
    const click=()=>{
        myfunc(changWeather)
    }
    
  return (
    <div>
        <div className='h-screen flex justify-center items-center flex-col'>
        <input type="text" className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={chang}/>
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                             onClick={click}>Search</button>
        <div className='bg-green-300 rounded-md p-2 text-3xl'>
            <TiWeatherShower />
        </div>
        <p>{mydata.name}</p>
        <p>{((mydata?.main?.temp)-273.15).toFixed(2)}'C</p>
    </div>
    </div>
  )
}

export default Weather