import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom';

const Register = () => {

  let { id } = useParams();
  
  useEffect(()=>{
    if(id!==undefined){
      console.log(id);
      axios.get(`http://localhost:5000/user/${id}`).then((response)=>{
        console.log(response);
        setOurVal({"name":response.data[0].name,"class":response.data[0].class});
      });
      
        
    }
  },[]);

  const navigate=useNavigate();
  
    const[ourVal,setOurVal]=useState({
        "name":"",
        "class":""
    });

    const updateVal=(e)=>{
        let{name,value}=e.target;
        console.log(name);
        console.log(value);
        setOurVal({...ourVal,[name]:value});
    }

    const submitForm=async(e)=>{
        e.preventDefault();
        if(id!==undefined){
          const response=await axios.put(`http://localhost:5000/user/${id}`,ourVal);
          navigate("/")
          return;
        }
        const response=await axios.post("http://localhost:5000/user",ourVal);
        if(response.status===200){
            console.log('posted');
            navigate("/")
        }

        console.log('clicked');
    }
  
    return (
    <div>
      <form  >
        <input type="text" name="name" value={ourVal.name} onChange={updateVal} />
        <input type="text" name="class" value={ourVal.class} onChange={updateVal} />
        <button type='submit' onClick={submitForm} ></button>
      </form>
    </div>
  )
}

export default Register
