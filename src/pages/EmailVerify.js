import EmailVerification from './images/varification.svg'

function EmailVerify() {
    return (<>
        <section>
            <div className="container">
                <div className="email-verification-section-body d-flex justify-content-center" style={{ border: '4px solid whiteSmoke', borderRadius: '20px', marginTop: '100px' }} >
                    <div className="email-verification-section-content text-center ">
                        <div className="email-varification img" style={{ width: '400px', maxWidth: '85%', margin: '0 auto 13px' }}>
                            <img src={EmailVerification} alt="" className='img-fluid' />
                        </div>
                        <h4>You are about to complete your registration on <span className='text-primary'>pcb.makemybizdchub.in</span></h4>
                        <p className='text-center' style={{ lineHeight: '1.5', margin: '0px' }}>
                            To successfully complete the registeration process, please click on the Verification link in your inbox.
                        </p>
                        <p className='text-center' style={{ lineHeight: '1.5', margin: '0px' }}>
                            If you have not received the email in your inbox, please check your spam or bulk folder.
                        </p>
                        <p className='text-center' style={{ lineHeight: '1.5', margin: '0px' }}>
                            The link will be valid for the next 24 Hours.
                        </p>
                        <div className='animated-button_div order-placed_page top-30'>
                            <div >
                            <button className='btn btn-primary pt-3 pb-3 pe-4 ps-4 mt-4 mb-4' style={{width:'40%',flexWrap:"wrap"}}>Resend Verification Link</button>
                                
                            </div>
                            <p>Please contact us at <span className='text-primary fw-bold'> +91 7600012414</span> or <span className='text-primary fw-bold'>pcb.makemybizdchub.in</span> for any questions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default EmailVerify;