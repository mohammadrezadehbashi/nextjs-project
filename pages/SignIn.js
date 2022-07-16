import signup from "../styles/SignUp/SignUp.module.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import Cookies from 'universal-cookie';
import { useRouter } from "next/router";
const cookies =new Cookies()

const SignIn=()=>{
  const [password,setPassword]=useState("")
  const [username,setUsername]=useState("")
  const router=useRouter()

  const handleChange2 = (event) => {
    setUsername(event.target.value)
  };
  const handleChange1 = (event) => {
    setPassword(event.target.value)
  };

  const Signin=()=>{
    console.log("us",username);
    console.log("name",password);   
    fetch('http://localhost:4000/user/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        username:username,
        password:password,
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
        router.replace('/Home')
        // return 
      }

      // alert(data.msg)
    
    // }
    });


  }


    return(
      <div className={signup.container}>
      <div className={signup.SignUp}>
      <p className={signup.title}>SignIn</p>
      <div className={signup.box}>
      <div className={signup.form}>
      <TextField
       className={signup.inputname}
       label="Password"
       value={password}
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
      <Button className={signup.btn}  onClick={()=>Signin()}  variant="outlined">SignIn</Button>
      </div>
      <div className={signup.img}>
       <img src="/Assets/Signin.jpg" alt="SignUp" width={450} height={400} />   
      </div> 
      </div>
      </div>
      </div>
    )
}
export default SignIn