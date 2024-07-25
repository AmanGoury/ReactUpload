import { Link ,useNavigate} from "react-router-dom"
import { useState } from "react"
import Header from "./Header"

function Reg() {
    const naviagate=useNavigate()
    const [username, setUser] = useState('')
    const [password, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [mess, setMess] = useState('')
    function handleForm(e) {
        e.preventDefault()
        const formData = { email,username, password }
        // console.log(formData)
        fetch('https://admin.makemybizdchub.in/registration', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                if(data.message){
                    naviagate('/login')
                } else{
                    setMess('Something Went Wrong Please try Again Leter')
                }
               
            })
            // console.log(formData)
    }
    return (
        <>
      
            <section id="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h2>Registraion here</h2>
                            {mess}
                            <form method="post" onSubmit={(e) => { handleForm(e) }}>
                                <label className="form-label"  >Username :</label>
                                <input className="form-control" type='text' required
                                    value={username}
                                    onChange={(e) => { setUser(e.target.value) }}
                                />
                                <label className="form-label">Email :</label>
                                <input className="form-control" type='email' required
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                                <label className="form-label">Password :</label>
                                <input className="form-control" type='password' required
                                    value={password}
                                    onChange={(e) => { setPass(e.target.value) }}
                                />
                                <button className="btn btn-primary form-control mt-2" type="submit">SignUp</button>
                            </form>
                            <p>Already have an account :<Link to="/login">Login</Link></p>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Reg;