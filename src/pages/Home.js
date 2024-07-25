import logoLeft from './images/RioSH-Final-01-1.png'

import about1 from './images/about-1.png'

import client_1 from './images/clients/client-1.png'
import client_2 from './images/clients/client-2.png'
import client_3 from './images/clients/client-3.png'
import client_4 from './images/clients/client-4.png'
import client_5 from './images/clients/client-5.png'
import client_6 from './images/clients/client-6.png'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css'
import 'swiper/css/autoplay'


import AOS from 'aos'
import "aos/dist/aos.css"

import Countup from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

import { useEffect, useState } from 'react'
import Header from './Header'
// import AOS from '../assets/vendor/aos'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Home() {

  let sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,

  };

  const [conterOn, setCounter] = useState(false)
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])


  let ImgUrl = "https://admin.makemybizdchub.in/image/"

  //THIS FOR SLIDER IMAGE DAYNAMIC.........
  const [sliderimg, setSlider] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const apiUrl = 'https://admin.makemybizdchub.in/getAllSlider'; // Replace this with your API endpoint URL

    // Fetch data from the API using the fetch() function
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSlider(data.message);
        console.log(data.message)
        setLoading(false); // Set loading state to false

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading state to false even in case of an error
      });

  }, [])
  // ..........................!

  // THIS IS FOR VISION DAYNAMIC............
  const [vision, setVision] = useState([])
  useEffect(() => {

    const apiUrl = 'https://admin.makemybizdchub.in/getAllVision'; // Replace this with your API endpoint URL

    // Fetch data from the API using the fetch() function
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setVision(data.message);
        // console.log(data)

        setLoading(false); // Set loading state to false

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading state to false even in case of an error
      });

  }, [])
  // .......


  //THIS IS FOR TESTIMONIALS ..........
  const [industries, setIndustries] = useState([])

  useEffect(() => {

    const apiUrl = 'https://admin.makemybizdchub.in/getAllIndustries'; // Replace this with your API endpoint URL

    // Fetch data from the API using the fetch() function
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setIndustries(data.message);

        setLoading(false); // Set loading state to false

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading state to false even in case of an error
      });

  }, [])
  // ............

  const [testimonial, setTesti] = useState([])

  useEffect(() => {

    const apiUrl = 'https://admin.makemybizdchub.in/getAllTestimonal'; // Replace this with your API endpoint URL

    // Fetch data from the API using the fetch() function
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTesti(data.message);

        setLoading(false); // Set loading state to false

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading state to false even in case of an error
      });

  }, [])

  // THIS IS FOR ABOUT US SECTION

  const [aboutus, setAbout] = useState([])


  useEffect(() => {

    const apiUrl = 'https://admin.makemybizdchub.in/getAboutUs'; // Replace this with your API endpoint URL

    // Fetch data from the API using the fetch() function
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setAbout(data.message);

        setLoading(false); // Set loading state to false

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading state to false even in case of an error
      });

  }, [])
  // ..................



  // THIS IS FOR CLINT SECTION

  const [client, setClient] = useState([])

  useEffect(() => {

    const apiUrl = 'https://admin.makemybizdchub.in/getAllClient'; // Replace this with your API endpoint URL

    // Fetch data from the API using the fetch() function
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setClient(data.message);

        setLoading(false); // Set loading state to false

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading state to false even in case of an error
      });

  }, [])
  // ..........

  //THIS IS FOR REVOLITION  SECTION

  const [Revolution, setRevolution] = useState([])

  useEffect(() => {

    const apiUrl = 'https://admin.makemybizdchub.in/getAllRevolution'; // Replace this with your API endpoint URL

    // Fetch data from the API using the fetch() function
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRevolution(data.message);

        setLoading(false); // Set loading state to false

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading state to false even in case of an error
      });

  }, [])

  // ............

  // THIS IS FOR ELECTRONIC SECTION
  const [electronic, setElectronic] = useState([])

  useEffect(() => {

    const apiUrl = 'https://admin.makemybizdchub.in/getAllElectronic'; // Replace this with your API endpoint URL

    // Fetch data from the API using the fetch() function
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setElectronic(data.message);

        setLoading(false); // Set loading state to false

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading state to false even in case of an error
      });

  }, [])
  // ........

  return (<>
   
    <section className='App'>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <div id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel" >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
        </div>
        <div className="carousel-inner">
          {/* <div className="carousel-item active">
            <img
            src={Slider1}
            className="d-block w-100"
            alt="..."
            />
          </div> */}
          {/* <div className="carousel-item active">
            <img
              src={Slider2}
              className="d-block w-100"
              alt="..."
              />
            </div> */}
          {sliderimg.map((item) => {

            return (
              <div className="carousel-item active" key={item.id}>
                <img src={ImgUrl + item.image} className="d-block w-100" alt="no no nooooooo" style={{ height: '500px' }} />
              </div>
            )
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* End Hero */}
      {/* ======= tabs section ======= */}
      <section className="tabs_section_bg_color">
        <div className="container tabs_form_bg">
          <div className="row">
            <div className="col-12">
              <div className="main_fome d-flex justify-content-center">
                <ul
                  className="nav nav-pills  text-light"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active d-flex align-items-center "
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      PCB Layout
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link d-flex align-items-center text-light"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      PCB Fabrication
                      <sup>(Rigid)</sup>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link d-flex align-items-center text-light"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile-1"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      PCB Fabrication<sup>(Rigid)</sup>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link d-flex align-items-center text-light"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile-2"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      PCB Assembly
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link d-flex align-items-center text-light"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile-3"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      PCB Stencil
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link d-flex align-items-center text-light"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile-4"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Component Sourcing
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show "
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <form method="post">
                      <div className="row py-4 mb-4">
                        <div className="col-lg-4 col-md-6">
                          <label className="slect_option_lable">Layers</label>
                          <select className="slect_option" name="layer">
                            <option value="1 layer">1 Layer</option>
                            <option value="2 layer">2 Layer</option>
                            <option value="3 layer">3 Layer</option>
                            <option value="4 layer">4 Layer</option>
                            <option value="5 layer">5 Layer</option>
                            <option value="6 layer">6 Layer</option>
                            <option value="7 layer">7 Layer</option>
                            <option value="8 layer">8 Layer</option>
                            <option value="9 layer">9 Layer</option>
                            <option value="10 layer">10 Layer</option>
                            <option value="11 layer">11 Layer</option>
                            <option value="12 layer">12 Layer</option>
                          </select>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <label className="slect_option_lable">
                            Number of Components
                          </label>
                          <select className="slect_option" name="layer">
                            <option value="75 or less">75 or Less</option>
                            <option value="76-150">76-150</option>
                            <option value="151-250">151-250</option>
                          </select>
                        </div>
                        <div className="col-4">
                          <button className="button button--green">
                            <span>Instant quote</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <form method="post">
                      <div className="row align-items-center mb-4">
                        <div className="col-lg-4 col-md-6">
                          <label className="slect_option_lable">Dimensions(mm)</label>
                          <div className="Dimensions_input d-flex align-items-center">
                            <input type="text" defaultValue={5} name="f" />
                            <span>X</span>
                            <input type="text" defaultValue={6} name="ff" />
                            <span>MM</span>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <label className="slect_option_lable">Layers</label>
                          <select className="slect_option" name="layer">
                            <option value="1 layer">1 Layer</option>
                            <option value="2 layer">2 Layer</option>
                            <option value="3 layer">3 Layer</option>
                            <option value="4 layer">4 Layer</option>
                            <option value="5 layer">5 Layer</option>
                            <option value="6 layer">6 Layer</option>
                            <option value="7 layer">7 Layer</option>
                            <option value="8 layer">8 Layer</option>
                            <option value="9 layer">9 Layer</option>
                            <option value="10 layer">10 Layer</option>
                            <option value="11 layer">11 Layer</option>
                            <option value="12 layer">12 Layer</option>
                          </select>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <label className="slect_option_lable">Quantity</label>
                          <input
                            type="text"
                            defaultValue={10}
                            name="from"
                            oninput=""
                            className="form__field Quantity"
                          />
                        </div>
                        <div className="col-lg-2">
                          <button className="button button--green">
                            <span>Instant quote</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile-1"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <form method="post">
                      <div className="row align-items-center mb-4">
                        <div className="col-lg-4 col-md-6">
                          <label className="slect_option_lable">Dimensions(mm)</label>
                          <div className="Dimensions_input d-flex align-items-center">
                            <input type="text" defaultValue={7} name="f" />
                            <span>X</span>
                            <input type="text" defaultValue={8} name="ff" />
                            <span>MM</span>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <label className="slect_option_lable">Layers</label>
                          <select className="slect_option" name="layer">
                            <option value="1 layer">1 Layer</option>
                            <option value="2 layer">2 Layer</option>
                            <option value="3 layer">3 Layer</option>
                            <option value="4 layer">4 Layer</option>
                            <option value="5 layer">5 Layer</option>
                            <option value="6 layer">6 Layer</option>
                            <option value="7 layer">7 Layer</option>
                            <option value="8 layer">8 Layer</option>
                            <option value="9 layer">9 Layer</option>
                            <option value="10 layer">10 Layer</option>
                            <option value="11 layer">11 Layer</option>
                            <option value="12 layer">12 Layer</option>
                          </select>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <label className="slect_option_lable">Quantity</label>
                          <input
                            type="text"
                            defaultValue={10}
                            name="from"
                            oninput=""
                            className="form__field Quantity"
                          />
                        </div>
                        <div className="col-lg-2">
                          <button className="button button--green">
                            <span>Instant quote</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile-2"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <form method="post">
                      <div className="row align-items-center mb-4">
                        <div className="col-lg-4 col-md-6">
                          <label className="slect_option_lable">Dimensions(mm)</label>
                          <div className="Dimensions_input d-flex align-items-center">
                            <input type="text" defaultValue={5} name="f" />
                            <span>X</span>
                            <input type="text" defaultValue={6} name="ff" />
                            <span>MM</span>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                          <label className="slect_option_lable">Layers</label>
                          <select className="slect_option" name="layer">
                            <option value="1 layer">1 Layer</option>
                            <option value="2 layer">2 Layer</option>
                            <option value="3 layer">3 Layer</option>
                            <option value="4 layer">4 Layer</option>
                            <option value="5 layer">5 Layer</option>
                            <option value="6 layer">6 Layer</option>
                            <option value="7 layer">7 Layer</option>
                            <option value="8 layer">8 Layer</option>
                            <option value="9 layer">9 Layer</option>
                            <option value="10 layer">10 Layer</option>
                            <option value="11 layer">11 Layer</option>
                            <option value="12 layer">12 Layer</option>
                          </select>
                        </div>
                        <div className="col-lg-2 col-md-6">
                          <label className="slect_option_lable">Assembly Side</label>
                          <select className="slect_option" name="oo">
                            <option value="top">Top</option>
                            <option value="buttom">Button</option>
                            <option value="top & bottom">Top &amp; Bottom</option>
                          </select>
                        </div>
                        <div className="col-lg-2 col-md-6">
                          <label className="slect_option_lable">Quantity</label>
                          <input
                            type="text"
                            defaultValue={10}
                            name="from"
                            oninput=""
                            className="form__field Quantity"
                          />
                        </div>
                        <div className="col-lg-2">
                          <button className="button button--green">
                            <span>Instant quote</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile-3"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <form method="post">
                      <div className="row align-items-center mb-4">
                        <div className="col-lg-5">
                          <label className="slect_option_lable">Stencil Side</label>
                          <select className="slect_option" name="oo">
                            <option value="top">Top</option>
                            <option value="buttom">Button</option>
                            <option value="top & bottom">Top &amp; Bottom</option>
                          </select>
                        </div>
                        <div className="col-lg-5">
                          <label className="slect_option_lable">Quantity</label>
                          <input
                            type="text"
                            defaultValue={10}
                            name="from"
                            oninput=""
                            className="form__field Quantity"
                          />
                        </div>
                        <div className="col-lg-2">
                          <button className="button button--green">
                            <span>Instant quote</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile-4"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <form method="post">
                      <div className="row align-items-center mb-4">
                        <div className="col-lg-5">
                          <label className="slect_option_lable">Lead time</label>
                          <select className="slect_option" name="oo">
                            <option value="10-14">10-14 Working Day</option>
                            <option value="5-7">5-7 Working Day</option>
                            <option value="7-19">7-19 Working Day</option>
                          </select>
                        </div>
                        <div className="col-lg-5">
                          <label className="slect_option_lable">Quantity</label>
                          <input
                            type="text"
                            defaultValue={10}
                            name="from"
                            oninput=""
                            className="form__field Quantity"
                          />
                        </div>
                        <div className="col-lg-2">
                          <button className="button button--green">
                            <span>Instant quote</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section className="About">
          <div className="container">
            {aboutus.map((item) => {
              return (

                <div className="row d-flex align-items-center">
                  <div className="col-md-6">
                    <div className="section-title">

                      <h2>About us</h2>

                      <h3>
                        {item.title}
                      </h3>
                      <p>
                        {item.description}
                      </p>
                      {/* <p>
                    We have resources and expertise to deliver quality solutions at
                    faster pace. We follow best practices, business processes,
                    proven methodologies and systematic approach while delivering
                    and designing solutions for our clients. We emphasize on
                    Intellectual Property law to protect business ideas of clients
                    from industry competition, will provide the life time design
                    support.
                  </p> */}
                      <div className="row icon d-flex align-items-center">
                        <div className="col-md-2">
                          <i className="bi bi-shield-shaded" />
                        </div>
                        <div className="col-md-5">
                          <h4>Experience</h4>
                          <p>{item.exp}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div
                            className="button-wrapper"
                            data-tippy-content="Click to copy button 71"
                          >
                            <button className="button-71" role="button">
                              Quality
                            </button>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div
                            className="button-wrapper"
                            data-tippy-content="Click to copy button 71"
                          >
                            <button className="button-71" role="button">
                              Service
                            </button>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div
                            className="button-wrapper"
                            data-tippy-content="Click to copy button 71"
                          >
                            <button className="button-71" role="button">
                              Reliability
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="button-wrapper mt-4"
                        data-tippy-content="Click to copy button 71"
                      >
                        <button className="button-71" role="button">
                          Explore more
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img src={ImgUrl + item.image} />
                  </div>
                </div>
              )
            })}
          </div>
        </section>
        <section id="featured-services" className="featured-services">
      <div className="container aos-init aos-animate" data-aos="fade-up">
      <div className="section-title">
          
          <h3>A Digital Revolution in <span>Manufacturing</span></h3>
          <p>Experience the power of a fully integrated platform with Diac Labs</p>
        </div>
        <div className="row" >
            {Revolution.map((item)=>{
              return(
          <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" >
            <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" >
             
              <img src={ImgUrl+item.image} alt="" style={{width:'100%'}} />
              <h4 className="title"><a href="">{item.title}</a></h4>
              <p className="description">{item.description} </p>
            </div>
          </div>
              )
            })}

          {/* <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
           
              <h4 className="title"><a href="">PCB Fabrication</a></h4>
              <p className="description">Choose gerber, layer count, material, surface finish, and quantity. Diac Labs ensures impeccable fabrication, even for the most intricate designs. Capabilities includes 1-24 Layers of PCB Manufacturing. </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
             
              <h4 className="title"><a href="">Electronic Components sourcing</a></h4>
              <p className="description">Provide your BOM and quantities. Our platform generates quotations along with precise delivery timelines. Genuine, Source traceable and latest date codes. </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            
              <h4 className="title"><a href="">Stencil Manufacturing</a></h4>
              <p className="description">Achieve perfection in PCB assembly. Our stencils are crafted for precision, leading to seamless soldering and reduced manufacturing errors. Different types of stencils are available with frame and with out frame stencil</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            
              <h4 className="title"><a href="">PCB Assembly</a></h4>
              <p className="description">Diac Labs blends automation and expertise for accurate and efficient assembly. Capabilities includes complete automated SMD and SMT assembly along with BGA assembly.</p>
            </div>
          </div> */}

        </div>

      </div>
    </section>

      
       

      
       
        <section className="Customer ">
          <div className="container">
          <div className="section-title">
            <h3>When you choose Diac Labs, you're choosing unmatched advantages:</h3>
            </div>
        
            <div className="row">
              {vision.map((item) => {
                return (
                  <div className="col-md-3">
                    <div className="box1">
                      <img src={ImgUrl + item.image} style={{ width: '50%' }} />
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                )
              })}

            </div>
           
          </div>
        </section>

        <section id="services" className="services mt-5">
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="section-title">
         
          <h3>A single platform for all your electronic <span> manufacturing services</span></h3>
         
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
              {electronic.map((item)=>{
                return(
            <div className="icon-box">
                  
                
             
              <img src={ImgUrl+item.image} alt="" style={{width:"100%"}}/>
              <h4><a href="">{item.title}</a></h4>
              <p>
                {item.description}
              </p>
            </div>
            )
              })}
          </div>

          {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              
              <h4><a href="">Instant Automated Quoting</a></h4>
              <p>We understand the importance of quick decisions, and that's why we provide instant, transparent quotes. No more waiting around for estimates; you'll know the cost upfront, allowing you to make informed choices without any delays.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              
              <h4><a href="">Rapid Turnaround Time</a></h4>
              <p>Time is of the essence, and we take this seriously. Once your order is confirmed, our rapid production process ensures that you get your products promptly. Whether you have tight deadlines or need results quickly, we've got you covered.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
            
              <h4><a href="">Live Order Tracking</a></h4>
              <p>We believe in transparency, and that's why we provide a real-time order tracking system. You'll never be in the dark about the status of your project. Stay updated as your order </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              
              <h4><a href="">Secure Payments</a></h4>
              <p>our trust is essential to us, and we take the security of your financial information seriously. Our secure payment system ensures that your transactions are safe, </p>
            </div>
          </div> */}

         

        </div>

      </div>
    </section>

       
        <section className="Industries pt-2 pb-3 mt-4">
          <div className="container">
            <div className="section-title">
              <h2>Industries We Serves</h2>
              <h1>
                Powerful Features of Proven Expertise In Industrial Partnerships
              </h1>
              <p>
                We feel inspired when we look at a CT Scanner saving a life in a
                hospital. We feel thrilled when we see a Satellite saving lives with
                its accurate weather forecasts. We feel moved when a new community
                living scheme is developed with mammoth construction tools. Because
                we know, that somewhere within the realms of these life-changing
                machines, we have made a small contribution with our offerings
              </p>
            </div>
            <div className="row">
              {industries.map((item) => {
                return (
                  <div className="col-md-3">
                    <div className="box-3">
                      <img src={ImgUrl + item.image} />
                      <h6>{item.title}</h6>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </section>
        {/* ======= Counts Section ======= */}
        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-emoji-smile" />
                  <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                    <span
                    // data-purecounter-start={0}
                    // data-purecounter-end={232}
                    // data-purecounter-duration={1}
                    // className="purecounter"

                    >
                      {conterOn && <Countup start={0} end={232} duration={1} delay={0} />}


                    </span>
                  </ScrollTrigger>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="bi bi-journal-richtext" />
                  <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                    <span
                    // data-purecounter-start={0}
                    // data-purecounter-end={232}
                    // data-purecounter-duration={1}
                    // className="purecounter"

                    >
                      {conterOn && <Countup start={0} end={521} duration={1} delay={0} />}


                    </span>
                  </ScrollTrigger>
                  <p>Projects</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-headset" />
                  <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                    <span
                    // data-purecounter-start={0}
                    // data-purecounter-end={232}
                    // data-purecounter-duration={1}
                    // className="purecounter"

                    >
                      {conterOn && <Countup start={0} end={1463} duration={1} delay={0} />}
                    </span>
                  </ScrollTrigger>
                  <p>Hours Of Support</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-people" />
                  <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                    <span
                    // data-purecounter-start={0}
                    // data-purecounter-end={232}
                    // data-purecounter-duration={1}
                    // className="purecounter"

                    >
                      {conterOn && <Countup start={0} end={15} duration={1} delay={0} />}


                    </span>
                  </ScrollTrigger>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Counts Section */}
        {/* ======= Testimonials Section ======= */}
        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="zoom-in ">

            <div
              className="testimonials-slider "
              data-aos="fade-up"
              data-aos-delay={100}
            >


              <Slider {...sliderSettings}>
                {testimonial.map((item) => {
                  return (
                    <div className="swiper-slide">


                      <div className="testimonial-item">
                        <img
                          src={ImgUrl + item.image}
                          className="testimonial-img"
                          alt=""
                        />
                        <h3>{item.title}</h3>
                        <h4>{item.desination}</h4>
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left" />
                          {item.description}
                          <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                      </div>
                    </div>
                  )
                })}
                {/* End testimonial item */}


              </Slider>
              {/* End testimonial item */}


              <div className="swiper-pagination" />
            </div>

          </div>
        </section>
        {/* End Testimonials Section */}
        <section id="clients" className="clients section-bg">
          <div className="container aos-init aos-animate" data-aos="zoom-in">
            <div className="row">
              {client.map((item) => {

                return (

                  <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img
                      src={ImgUrl + item.image}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                )
              })}

            </div>
          </div>
        </section>
      </main>
      {/* End #main */}

      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam noster
                  magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
       
      </footer>
      {/* End Footer */}
      <div id="preloader">
        <div className="preloader-1">
          {" "}
          {/* <img src={logoLeft}/>{" "} */}
        </div>
      </div>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </section>
  </>);
}

export default Home;