import signup from "../styles/SignUp/SignUp.module.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import Cookies from 'universal-cookie';
import { useRouter } from "next/router";
const cookies =new Cookies()
const SignUp=()=>{  
const [name,setName]=useState("")
const [username,setUsername]=useState("")
const router=useRouter()


  const handleChange2 = (event) => {
    setUsername(event.target.value)
  };
  const handleChange1 = (event) => {
    setName(event.target.value)
  };


  console.log("name",name);
  console.log(username,"username");

  const SignUP=()=>{
    console.log("us",username);
    console.log("name",name);   
    fetch('http://localhost:4000/user/signup',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        username:username,
        name:name,
        // 
      })
    })
    .then((response)=>response.json())
    .then((data)=>{
      
      console.log('data : ', data);
      console.log("dataaaaaaa",data);
      // if(data.token){

      if (data.token) {
        // do some stuff
        console.log(data.token);
        cookies.set('ut', data.token)
        router.replace('/SignIn')
        return 
      }

      alert(data.msg)
    
    // }
    });


  }




    return(
           <div className={signup.SignUp}>
            <p className={signup.title}>SignUp</p>
            <div className={signup.box}>
            <div className={signup.form}>
            <TextField
             className={signup.inputname}
             label="Name"
             value={name}
             InputLabelProps={{shrink:true}}
             onChange={handleChange1}
             />
            <TextField
             className={signup.inputname}  
             label="UserName"
             value={username}
             InputLabelProps={{shrink:true}}
             onChange={handleChange2}
             />
            <Button className={signup.btn}  onClick={()=>SignUP()}  variant="outlined">SignUp</Button>
            </div>
            <div className={signup.img}>
             <img src="/Assets/SignUp.jpg" alt="SignUp" width={450} height={400} />   
            </div> 
            </div>
            </div>
    )
}
export default SignUp