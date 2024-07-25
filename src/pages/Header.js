import logoLeft from './images/RioSH-Final-01-1.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Header() {
  let navigate = useNavigate()
  const [show, setShow] = useState(false)



  function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }

  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }

  function closeNav() {
    const closebar = document.getElementById('navbar');
    // document.getElementById("navbar").style.display = "none";
    closebar.classList.toggle('close-nav');
  }

  // function openDropDown1() {
  //   document.getElementById('product').style.display = 'block'
  // }
  function openDropDown2() {
    document.getElementById('services').style.display = 'block'
  }
  function openDropDown3() {
    document.getElementById('resources').style.display = 'block'
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://admin.makemybizdchub.in/getAllCategory'; // Replace this with your API endpoint URL

    // Fetch data from the API using the fetch() function
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.message);
        console.log(data)// Extract the data array from the 'message' property
        setLoading(false); // Set loading state to false

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading state to false even in case of an error
      });
  }, []);

  const token = localStorage.getItem('token')

  function logout() {
    localStorage.removeItem("token")
    navigate('/')

  }

  return (
    <>
      <div className='Dif_header'>
        <section id="topbar" className="d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <div className=' d-flex align-items-center'>
                <i className="bi bi-envelope d-flex align-items-center text-light me-2">

                </i>
                <a href="mailto:contact@example.com" className='text-light'>contact@example.com</a>
              </div>
              <div className=' d-flex align-items-center'>
                <i className="bi bi-phone d-flex align-items-center ms-4 text-light">

                </i>
                <span className='text-light'> +1 5589 55488 55</span>
              </div>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="/" className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="/" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="/" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="/" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </section>
        {/* ======= Header ======= */}
        {!token ?
          <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
              <h1 className="logo">
                <a href="/">
                  <img src={logoLeft} />
                </a>
              </h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt=""></a>*/}
              <nav >
                <div id="navbar" className={show ? "navbar-mobile" : "navbar"}>

                  <span
                    className="closebtn"
                    onClick={() => setShow(false)}
                    title="Close Overlay"
                    style={{
                      position: 'absolute',
                      top: '5px',
                      right: '36px',
                      color: 'white',
                      fontSize: '2rem',
                    }}
                  >
                    ×
                  </span>
                  <ul>
                    {/* <i className='bi mobile-nav-toggle bi-x' id='cancel'  
            onClick={closeBtn}
           
            /> */}
                    <li>
                      <Link to='/' className=" scrollto" >
                        Home
                      </Link>
                      {/* <a href="/">
                        Home
                      </a> */}
                    </li>
                    <li>
                      <Link to='/about' className=" scrollto" >
                        About
                      </Link>
                    </li>

                    <li className="dropdown" onClick={openDropDown2}>
                      <Link to='/service' className=" scrollto" >

                        <span>Services</span>
                      </Link>
                      <ul id='services' style={{ display: 'none' }}>
                        {/* <li className="dropdown"><a href="#"><span>c</span> <i className="bi bi-chevron-right"></i></a>
            <ul>
              <li><a href="#">Deep Drop Down 1</a></li>
              <li><a href="#">Deep Drop Down 2</a></li>
              <li><a href="#">Deep Drop Down 3</a></li>
              <li><a href="#">Deep Drop Down 4</a></li>
              <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
          </li> */}

                      </ul>
                    </li>
                    {/* <li>
              <a className="nav-link scrollto " href="/productCatogery">
                Products
              </a>
            </li> */}
                    <li className="dropdown">
                      <Link to='/productCatogery'>
                        <span>Products</span>
                      </Link>

                      {/* <ul id='product' style={{ display: 'none' }}><i className="fa-solid fa-angle-down"></i>onClick={openDropDown1}
                      {/* <li><a href="/subproductCatogery">Soldering Solutions</a></li> */}
                      {/* {data.map((item) => (
                        <li>
                          <Link onClick={() => window.location.href = `/subproductCatogery/${item.id}`} to={`/subproductCatogery/${item.id}`}>{item.title}</Link>
                        </li>
                      ))} */}

                      {/* </ul> */}
                    </li>
                    <li className="dropdown" onClick={openDropDown3}><a href="#"><span>Resources</span> <i className="fa-solid fa-angle-down"></i></a>
                      <ul id='resources' style={{ display: 'none' }}>
                        <li><a href="#">Catogery 1</a></li>
                        <li><a href="#">Catogery 2</a></li>
                        <li><a href="#">Catogery 3</a></li>
                        <li><a href="#">Catogery 4</a></li>
                      </ul>
                    </li>
                    <li>

                      <Link to='/login' className='scrollto'>
                        login {""}
                      </Link>
                    </li>
                    <li>

                      <Link to='/registration' className=" scrollto">
                        Register{" "}
                      </Link>


                    </li>
                    <li>
                      {/* <a href="" className="nav-link scrollto"> */}
                      <div id="myOverlay" className="overlay  scrollto" >
                        <span
                          className="closebtn"
                          onClick={closeSearch}
                          title="Close Overlay"
                        >
                          ×
                        </span>
                        <div className="overlay-content">
                          <form action="/action_page.php">
                            <input
                              type="text"
                              placeholder="Search Here..."
                              name="search"
                            />
                            {/* <button type="submit"><i className="fa fa-search"></i></button> */}
                          </form>
                        </div>
                      </div>
                      <button className="openBtn" onClick={openSearch} id='myOverlay' >
                        <svg
                          width="20px"
                          height="20px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
                        </svg>
                      </button>
                      {/* </a> */}
                    </li>
                    <li>
                      <Link to='/cart' className=" scrollto" >

                        <svg
                          width="20px"
                          height="20px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.00488 7.99951V5.99951C7.00488 3.23809 9.24346 0.999512 12.0049 0.999512C14.7663 0.999512 17.0049 3.23809 17.0049 5.99951V7.99951H20.0049C20.5572 7.99951 21.0049 8.44723 21.0049 8.99951V20.9995C21.0049 21.5518 20.5572 21.9995 20.0049 21.9995H4.00488C3.4526 21.9995 3.00488 21.5518 3.00488 20.9995V8.99951C3.00488 8.44723 3.4526 7.99951 4.00488 7.99951H7.00488ZM7.00488 9.99951H5.00488V19.9995H19.0049V9.99951H17.0049V11.9995H15.0049V9.99951H9.00488V11.9995H7.00488V9.99951ZM9.00488 7.99951H15.0049V5.99951C15.0049 4.34266 13.6617 2.99951 12.0049 2.99951C10.348 2.99951 9.00488 4.34266 9.00488 5.99951V7.99951Z" />
                        </svg>
                      </Link>

                    </li>
                    <li>

                      <a
                        className="button button--promo mobile-none "

                        href="/"
                      >
                        Instant quote
                      </a>
                    </li>
                  </ul>
                </div>
                <i className="fa-solid fa-bars mobile-nav-toggle" id='open-menu'
                  onClick={() => setShow(true)} ></i>
              </nav>
            </div>
          </header>
          :
          <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
              <h1 className="logo">
                <a href="/">
                  <img src={logoLeft} />
                </a>
              </h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt=""></a>*/}
              <nav >
                <div id="navbar" className={show ? "navbar-mobile" : "navbar"}>

                  <span
                    className="closebtn"
                    onClick={() => setShow(false)}
                    title="Close Overlay"
                    style={{
                      position: 'absolute',
                      top: '5px',
                      right: '36px',
                      color: 'white',
                      fontSize: '2rem',
                    }}
                  >
                    ×
                  </span>
                  <ul>
                    {/* <i className='bi mobile-nav-toggle bi-x' id='cancel'  
            onClick={closeBtn}
           
            /> */}
                    <li>
                      <a className=" scrollto" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className=" scrollto" href="/about">
                        About Us
                      </a>
                    </li>
                   
                    <li className="dropdown" onClick={openDropDown2}>
                      <Link to='/service' className=" scrollto" >

                        <span>Services</span>
                      </Link>
                      <ul id='services' style={{ display: 'none' }}>
                        {/* <li className="dropdown"><a href="#"><span>c</span> <i className="bi bi-chevron-right"></i></a>
            <ul>
              <li><a href="#">Deep Drop Down 1</a></li>
              <li><a href="#">Deep Drop Down 2</a></li>
              <li><a href="#">Deep Drop Down 3</a></li>
              <li><a href="#">Deep Drop Down 4</a></li>
              <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
          </li> */}

                      </ul>
                    </li>
                    {/* <li>
              <a className="nav-link scrollto " href="/productCatogery">
                Products
              </a>
            </li> */}
                    <li className="dropdown"  ><a href="/productCatogery"><span>Products</span></a>

                    </li>
                    <li className="dropdown" onClick={openDropDown3}><a href="#"><span>Resources</span> <i className="fa-solid fa-angle-down"></i></a>
                      <ul id='resources' style={{ display: 'none' }}>
                        <li><a href="#">Catogery 1</a></li>
                        <li><a href="#">Catogery 2</a></li>
                        <li><a href="#">Catogery 3</a></li>
                        <li><a href="#">Catogery 4</a></li>
                      </ul>
                    </li>

                    <li>
                      {/* <a href="" className="nav-link scrollto"> */}
                      <div id="myOverlay" className="overlay nav-link scrollto" >
                        <span
                          className="closebtn"
                          onClick={closeSearch}
                          title="Close Overlay"
                        >
                          ×
                        </span>
                        <div className="overlay-content">
                          <form action="/action_page.php">
                            <input
                              type="text"
                              placeholder="Search Here..."
                              name="search"
                            />
                            {/* <button type="submit"><i className="fa fa-search"></i></button> */}
                          </form>
                        </div>
                      </div>
                      <button className="openBtn" onClick={openSearch} >
                        <svg
                          width="20px"
                          height="20px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
                        </svg>
                      </button>
                      {/* </a> */}
                    </li>
                    <li>
                      <a className=" scrollto" href="/cart">
                        <svg
                          width="20px"
                          height="20px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.00488 7.99951V5.99951C7.00488 3.23809 9.24346 0.999512 12.0049 0.999512C14.7663 0.999512 17.0049 3.23809 17.0049 5.99951V7.99951H20.0049C20.5572 7.99951 21.0049 8.44723 21.0049 8.99951V20.9995C21.0049 21.5518 20.5572 21.9995 20.0049 21.9995H4.00488C3.4526 21.9995 3.00488 21.5518 3.00488 20.9995V8.99951C3.00488 8.44723 3.4526 7.99951 4.00488 7.99951H7.00488ZM7.00488 9.99951H5.00488V19.9995H19.0049V9.99951H17.0049V11.9995H15.0049V9.99951H9.00488V11.9995H7.00488V9.99951ZM9.00488 7.99951H15.0049V5.99951C15.0049 4.34266 13.6617 2.99951 12.0049 2.99951C10.348 2.99951 9.00488 4.34266 9.00488 5.99951V7.99951Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="button button--promo mobile-none "

                        href="/"
                      >
                        Instant quote
                      </a>
                    </li>


                    <span className='me-2' style={{ position: 'relative', zIndex: '1' }}></span>
                    <span className='fa-solid fa-user' style={{ fontSize: '1rem', position: 'relative', zIndex: '1' }}></span>
                    <span className='ms-4' style={{ position: 'relative', zIndex: '1', fontSize: "1.3rem" }} onClick={logout}><i className="fa-solid fa-right-from-bracket ms-2"></i></span>
                    {/* <li>name</li> */}

                    {/* <li className="dropdown"><a href="#"><span></span> <i className="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="#">Drop Down 1</a></li>
          <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
            <ul>
              <li><a href="#">Deep Drop Down 1</a></li>
              <li><a href="#">Deep Drop Down 2</a></li>
              <li><a href="#">Deep Drop Down 3</a></li>
              <li><a href="#">Deep Drop Down 4</a></li>
              <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#">Drop Down 2</a></li>
          <li><a href="#">Drop Down 3</a></li>
          <li><a href="#">Drop Down 4</a></li>
        </ul>
      </li> */}

                  </ul>
                </div>
                <i className="fa-solid fa-bars mobile-nav-toggle" id='open-menu'
                  onClick={() => setShow(true)} ></i>
              </nav>
            </div>
          </header>}



      </div>
    </>
  );
}

export default Header;