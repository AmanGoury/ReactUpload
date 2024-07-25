import google1 from './images/google1.png'
import ReCAPTCHA from 'react-google-recaptcha'
import { useState, useNavigate } from 'react'
function Reg2(){
let navigate=useNavigate()
const [firstName, setFirst] = useState('')
const [lastName, setLast] = useState('')
const [email, setEmail] = useState('')
const [mess, setMess] = useState('')
function handleForm(e) {
    e.preventDefault()
    const formData = { email, firstName, lastName }
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
            if (data.message) {
                navigate('/login')
            } else {
                setMess('Something Went Wrong Please try Again Leter')
            }

        })

    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <>
            <section className="registration">

                <div className="row" style={{ justifyContent: 'center' }}>
                    <div className="col-md-8 col-xl-6  login-container">
                        <h4 className="heading-h1" style={{ paddingTop: '50px' }}>
                            Registration
                        </h4>

                        <form action="javascript:void(0);" autoComplete="off" encType="multipart/form-data" className="form edit-profiles top-50" onSubmit={(e) => { handleForm(e) }}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="from-group">
                                        <i className="fa fa-user" />
                                        <input autoComplete="off" name="firstname" id="firstname" type="text" placeholder="Enter Your First Name" className="form__field border-bottom-right-round empty iconified" value={firstName}
                                            onChange={(e) => { setFirst(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="from-group">
                                        <i className="fa fa-user" />
                                        <input autoComplete="off" type="text" name="lastname" id="lastname" placeholder="Enter Your Last Name" className="form__field border-bottom-right-round empty iconified" value={lastName}
                                    onChange={(e) => { setLast(e.target.value) }}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="from-group mb-3">
                                        <i className="fa fa-envelope" />
                                        <input autoComplete="off" type="email" name="emailReg" id="emailReg" placeholder="Email" className="form__field border-bottom-right-round empty iconified" value={email}
                                    onChange={(e) => { setEmail(e.target.value) }} />
                                        {/**/}</div>
                                    <div className="from-group">
                                        <i className="fa fa-envelope" />
                                        <input autoComplete="off" type="text" name="emailReg" id="emailReg" placeholder="Confirm Email" className="form__field border-bottom-right-round empty iconified" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3'>

                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    onChange={onChange}
                                    aria-required
                                />
                            </div>
                            {/* <div id="ReCaptchContainer" className="m-t-15" style={{ height: '78px', textAlign: 'center' }}>
                                <div style={{ width: '304px', height: '78px' }}><div>
                                    <iframe title="reCAPTCHA" width={304} height={78} role="presentation" name="a-3j35lmwkebaa" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" />
                                </div>
                                </div>
                                <iframe style={{ display: 'none' }} />
                            </div> */}
                            <div className="row" style={{ marginTop: '20px' }}>
                                <div className="col-md-6">
                                    <button id="selectRegister" type="submit" className="button button--promo" style={{ width: '220px', display: 'inline' }}>
                                        <span href="/" >Register Now</span>
                                    </button>
                                </div>

                                <div className="col-md-6">
                                    <button id="GsigninBtn" type="submit" className="btn" style={{ border: '1px solid black', background: 'whiteSmoke', paddingRight: '30px', width: '320px' }}>
                                        <img id="ggleImg" src={google1} className='me-3' />
                                        <span id="btnText">Sign up with Google</span>
                                    </button>
                                </div>
                            </div>
                            <div className="row" style={{ position: 'relative', left: '25%', marginTop: '20px', letterSpacing: '1.5' }}>
                                <span id="GotologinPage">Already have an Account?<a href="/Pcbpower/sign-in">
                                    <span className="color--green"> Login </span>
                                </a></span>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </>
    );
}}

export default Reg2;