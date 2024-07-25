import productSingle from './images/productImg/pcb_prototype_suppliers_india.jpg'

import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LoginContext } from '../LoginContext'
import Header from './Header'

function SingleProducts() {
  const { id } = useParams()
  console.log(id, 'id')
  const [data, setData] = useState([])
  // const [cart,setCart]=useContext(LoginContext)
  let ImgUrl = "https://admin.makemybizdchub.in/image/"





  const [alerts, setAlerts] = useState([]);

  const appendAlert = (message, type) => {
    const newAlert = (
      <div key={Date.now()} className={`alert alert-${type} alert-dismissible`} role="alert">
        <div className='text-danger' style={{ backgroundColor: 'White', height: '50px', padding: '10px 5px 10px 5px', fontSize: '1rem' }}>{message}</div>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    );

    setAlerts([...alerts, newAlert]);
  };


  useEffect(() => {
    const apiUrl = "https://admin.makemybizdchub.in/getAllProduct";

    fetch(apiUrl).then((res) => res.json()).then((data) => {
      // console.log(data)
      const levelUp = data.message.filter((item) => {
        console.log(item, 'uper item')
        return item.category == id
      })

      setData(levelUp)
      // console.log(levelUp,"levelUp")
    })

  }, [])


  const [cart, setCart] = useState('')

  const cartApi = (id) => {
    console.log(id, "id for cart")
    const tokenId = localStorage.getItem('token')
    console.log(tokenId)
    fetch(`https://admin.makemybizdchub.in/addCart/${id}`, {
      method: 'POST',
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json",
        authorization: `${tokenId}`
      }
    }).then((res) => res.json()).then((data) => {
      setCart(data)
      console.log(data)
    })
  }

  let token = localStorage.getItem('token')

  // function addcart(e,userProd){
  //   // console.log(userProd._id)
  //   let _cart={...cart}
  //   if(!_cart.items){
  //     _cart.items={}
  //   }
  //   if(_cart.items[userProd._id]){ //id does exist in the _cart.items this will increment in numbers of id
  //     _cart.items[userProd._id]+=1
  //   }else{//it means that id or item add first time
  //     _cart.items[userProd._id]=1
  //   }
  //   if(!_cart.totalItems){//agr total item nhi hai
  //     _cart.totalItems=1  
  //   }else{
  //     _cart.totalItems+=1
  //   }
  //   setCart(_cart)
  //   console.log(_cart)
  // }

  return (<>

    {data?.map((item) => {
      // console.log(item ,'item data')
      return (

        <div className='single_product'>
          <div className='pt-5 ps-5 text-dark'>
            {/* <Link to={}></Link> */}
            <a href="/">
              <i className="fa-solid fa-arrow-left"></i>
            </a>
          </div>
          <section className="container-fluid py-5">
            <div className="container">
              <div className="row">

                <div className="col-lg-6">
                  <div className="product_detiles">
                    <img src={ImgUrl + item.image} alt="" style={{ width: "400px" }} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="shop-product__name heading-h2">{item.title}</h3>
                  <p>{item.shortDescription}</p>

                  {token ?
                    <button onClick={() => cartApi(item.id)} className="btn btn-primary ">Add To Cart</button>
                    :
                    <>
                      <div id="liveAlertPlaceholder">{alerts}</div>
                      <button
                        id="liveAlertBtn"
                        className="btn-primary border-2 rounded-3"
                        onClick={() => appendAlert('Oops!!!! You are not Authorized please registration before')}

                      >
                        Add to cart
                      </button>
                    </>
                  }
                  {/* <button className="btn btn-success ms-2" onClick={(e)=>{addcart(e,data)}} >Add to cart</button> */}

                </div>
              </div>
            </div>
          </section>
          {/* <section className="container-fluid py-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items-start">

                    <div
                      className="nav flex-column nav-pills me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="text_left btn btn-primary border-0 rounded-0 active"
                        id="v-pills--tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-"
                        aria-selected="true"
                      >
                        Features
                      </button>
                      <button
                        className="text_left btn btn-primary border-0 rounded-0"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                      >
                        Compliance &amp; Safety
                      </button>
                      <button
                        className="text_left btn btn-primary border-0 rounded-0"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                      >
                        Specs &amp; Dimensions
                      </button>
                    </div>

                    <div className="tab-content " id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-"
                        role="tabpanel"
                        aria-labelledby="v-pills--tab"
                        tabIndex={0}
                      >
                        <div className="d-flex py-3">
                          <div className="tabs_list">
                            <svg
                              width="18px"
                              height="18px"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
                                fill="rgba(46,99,219,1)"
                              />
                            </svg>
                          </div>
                          <span className="ms-3">
                            {item.features}
                          </span>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                        tabIndex={0}
                      >
                        <div className="d-flex py-3">
                          <div className="tabs_list">
                            <svg
                              width="18px"
                              height="18px"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
                                fill="rgba(46,99,219,1)"
                              />
                            </svg>
                          </div>
                          <span className="ms-3">

                            {item.safety}
                          </span>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-messages-tab"
                        tabIndex={0}
                      >
                        <div className="d-flex py-3">
                          <div className="tabs_list">
                            <svg
                              width="18px"
                              height="18px"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
                                fill="rgba(46,99,219,1)"
                              />
                            </svg>
                          </div>
                          <span className="ms-3">
                            {item.dimensions}
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section> */}
          

          <section style={{paddingBottom:"100px"}}>
            <div className="container">
<div className="row">
  <div className="col-md-12">
            
            <ul className="nav nav-tabs" id="myTab" role="tablist" >
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Features</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Dimensions</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Safety</button>
              </li>

            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">{item.features}</div>
              <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">{item.dimensions}</div>
              <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0"> {item.safety}</div>
              <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
            </div>
        </div>
        </div>
        </div>
          </section>
         
        </div>
      )
    })}
  </>
  );
}

export default SingleProducts;