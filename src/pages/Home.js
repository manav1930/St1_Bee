import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
const Home = () => {
  
    const [data,setData]=useState([]);

    const loadData=async()=>{
        const ourData=await axios.get("http://localhost:5000/users");
        setData(ourData.data);
    }


    useEffect(()=>{
        loadData();
    },[]);

    const deleteIt=async (id)=>{
        console.log('delete it');
        const response=await axios.delete(`http://localhost:5000/user/${id}`);
        loadData();
    }
  
    return (
    <div>
        {data.map((item,ind)=>{
            return (
                <div key={ind} >
                    <span>{item.name}</span>
                    <span>{item.class}</span>
                    <Link to="register" >addData</Link>
                    <button onClick={()=>deleteIt(item.id)} >delete</button>
                    <Link to={`register/${item.id}`} >edit</Link>
                    

                </div>
            )
        })}
      


    </div>
  )
}

export default Home
