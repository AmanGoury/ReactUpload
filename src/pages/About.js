import custom_pcb_manufacturer from './images/About/custom_pcb_manufacturer.png'
import light_on from './images/About/light-on.png'
import design from './images/About/design.png'
import small_business from './images/About/small-business.png'
import Presentation from './images/About/Presentation.jpg'
import Header from './Header'
import { useState,useEffect } from 'react'


function About() {

  var handleClick = (e) => {
    const navbar = document.getElementById('navbar');
    
    // Toggle the class 'navbar-mobile' on the element with id 'navbar'
    navbar.classList.toggle('navbar-mobile');

    // Toggle the class 'bi-list' and 'bi-x' on the clicked element
    e.target.classList.toggle('bi-list');
    e.target.classList.toggle('bi-x');
  };
   var handleClick = (e) => {
    // Get the element with id 'navbar'
    const navbar = document.getElementById('navbar');

    // Check if the 'navbar' element has the class 'navbar-mobile'
    if (navbar.classList.contains('navbar-mobile')) {
      e.preventDefault();

      // Toggle the class 'dropdown-active' on the next sibling of the clicked element
      e.target.nextElementSibling.classList.toggle('dropdown-active');
    }
  };

  let ImgUrl = "https://admin.makemybizdchub.in/image/"


  const [aboutus, setAbout] = useState([])
  const [loading, setLoading] = useState(true);



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
    return ( 
        
        <>

        
<section className="container-fluid bg_img-12">
    	<div className="container">
    		<div className="Buy_Enclosure text-white">
    			<h1>About Us</h1>
    			<div className="Buy Enclosure_Icon d-flex align-items-center">
    				<a href="/">
    				  <svg height="18px" width="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 20.0001C20 20.5524 19.5523 21.0001 19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001ZM11 13.0001V19.0001H13V13.0001H11Z" fill="rgba(247,247,247,1)"></path>
    				  </svg>
                    </a> 
                    <span className="ms-2 mt-1 fw-bold"> : About Us</span>
    			</div>
    		</div>
    	</div>
    </section>


    <section className="About">
          <div className="container">
            {aboutus.map((item) => {
              return (

                <div className="row d-flex align-items-center" key={item.id}>
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
  <section className="container-fluid">
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <div className="quote_now_button text-center">
            <a href="#">GET A QUICK QUOTE NOW</a>
            <h3 className="elementor-heading-title elementor-size-default py-3">
              Electronic Product Design • Embedded Systems Design• IoT Hardware
              Design • Prototyping • Open Source Hardware design• Open Source
              Firmware Development • PCB Fabrication • PCB Assembly • PCB Box
              Building • Plastic Enclosure Design • Sheet Metal Enclosure design
              • Electronic Manufacturing services company• EMS Company
            </h3>
            <p>
              RioSH is run by a team of passionate designers and engineers. We
              have a track record of delivering numerous successful products in
              various domains.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="second_box mt-3 mb-3">
            <h1 className="elementor-heading-title elementor-size-default">
              Who we are
            </h1>
            <p>
              Riosh is an industrial product design company established in 2016.
              We have the experience and expertise of working with some of the
              largest companies across Globe.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="second_box mt-3 mb-3">
            <h1 className="elementor-heading-title elementor-size-default">
              What we do
            </h1>
            <p>
              We provide a wide range of tailor-made services for industrial
              design and product development. We enjoy working with constraints
              to create simple, elegant and irresistible products.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="second_box mt-3 mb-3">
            <h1 className="elementor-heading-title elementor-size-default">
              Why us
            </h1>
            <p>
              We believe that incremental innovation is the key to success. We
              have a track record of designing and delivering globally
              successful products. To know more about our offering please
              contact us.
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="quote_now_button text-center py-5">
            <a href="#">GET A FREE QUOTE NOW</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container-fluid bg--lgray--12 d-flex align-items-center justify-content-center">
    <div className="row">
      <div className="col-12">
        <div className="bg--lgray--12_text text-center">
          <h2 className="elementor-heading-title elementor-size-default mb-3">
            Do you have a great idea?
          </h2>
          <p className="ContactText text-center">
            From product sketching to technical inspiration, from feasibility to
            manufacturing we move your innovation into production.
          </p>
          <a href="#" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="container-fluid">
    <div className="container py-5">
      <div className="RioSH_creates text-center">
        <h2 className="elementor-heading-title">
          RioSH creates irresistible{" "}
          <span className="color--green">products</span> and brands
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="count_time_title_img text-center">
            <img src={light_on} className="w-25" alt="" />
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title mt-2 elementor-size-default">
                Product Ideation
              </h2>
              <p>
                Work with client to understand the problem solved through
                product and help them starting from ideation stage
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="count_time_title_img text-center">
            <img src={design} className="w-25" alt="" />
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title mt-2 elementor-size-default">
                Prototyping
              </h2>
              <p>
                Understand market requirements and offer flexible engagement
                model to deliver working prototype faster
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="count_time_title_img text-center">
            <img src={small_business} className="w-25" alt="" />
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title mt-2 elementor-size-default">
                Market-ready Product
              </h2>
              <p>
                Provide end to end product engineering services to support the
                innovative product to come in the market
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container-fluid py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="following_services">
            <h5 className="ms-3">
              <strong>RioSH provides the following services:</strong>
            </h5>
            <div>&nbsp;</div>
            <ul>
              <li>Electronic Product Design</li>
              <li>PCB Design</li>
              <li>IoT sensors &amp; hardware</li>
              <li>Embedded Systems Design</li>
              <li>Firmware programming</li>
              <li>Electronic Prototypes</li>
              <li>Electronic Manufacturing Services</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="following_services_img">
            <img src={Presentation} className="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container-fluid">
    <div className="container py-5">
      <div className="RioSH_creates text-center">
        <h2 className="elementor-heading-title">
          Our<span className="color--green"> Success</span> Stories
        </h2>
        <p>
          Consumer products and Industrial automation is changing at a rapid
          pace, clients are looking for products with next-gen technologies to
          cope with that pace. Our team has helped clients by taking complete
          responsibility for a product. RioSH has delivered more than 100
          projects in prototype designing and supported the same for production.{" "}
        </p>
      </div>
    </div>
  </section>
</>

        
     );
}

export default About;