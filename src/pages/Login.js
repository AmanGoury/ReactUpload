import { Link,useNavigate} from "react-router-dom"
import {useState,useContext} from "react"
import Header from "./Header"
// import {LoginContext } from "../LoginContext"
function Login() {
    const naviagate=useNavigate()
    const [username ,setusername]=useState('')
    const [password,setpassword]=useState('')
    const [Message,setMessage]=useState('')
    // const {setLoginName,setloginStatus}=useContext(LoginContext)
    function handleform(e){
        e.preventDefault()
        const loginData={username,password}
        fetch('https://admin.makemybizdchub.in/login',{
            method:"POST",
            headers:{ "Content-Type": "application/json"},
            body:JSON.stringify(loginData)
        }).then((res)=>{return res.json()}).then((data)=>{
            console.log(data) 
            console.log(data.message)
            if(data.message==="successfully login"){
                localStorage.setItem("token",data.token)
                // localStorage.setItem("name",data.name)
                naviagate('/')
            }  else{
                console.log('User not found')
            }
           
        })
    }
    return ( 
<>

<section id="login">
    <div className="container">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <h2>Login here</h2>
                <h3> {Message} </h3>
                <form method="post" onSubmit={(e)=>{handleform(e)}}>
                <label className="form-label">Username :</label>
                <input className="form-control" type='text'
                value={username}
                onChange={(e)=>{setusername(e.target.value)}}
                />
                <label  className="form-label">Password :</label>
                <input className="form-control" type='password'
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
                />
                <button className="btn btn-primary form-control mt-2" type="submit">Login</button>
                </form>
                <p>I dont have an account: <Link to="/registration">Create Account</Link></p>
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
</section>
</>
        );
}

export default Login;