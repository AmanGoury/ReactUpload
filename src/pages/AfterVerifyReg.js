function AfterVerifyReg() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>Register</h1>
                        <div className=".row">
                            <div className="col-md-6">
                                <i className="fa fa-briefcase i-top " style={{position:'relative',left:'0px',top:'30px',color:'grey',paddingRight:'10px'}}></i>
                                <select name="" id="" style={{width:'100%',paddingRight:'10px'}} className="form-select" >
                                    <option value="" className="ps-3">Company</option>
                                    <option value="">Government organization</option>
                                    <option value="">individual</option>
                                    <option value="">Educational Institution</option>
                                </select>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AfterVerifyReg;