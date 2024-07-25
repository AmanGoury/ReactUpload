import Product_1 from './images/productImg/pcb_prototype_low_cost.jpg'
import pcb_online_store1 from './images/productImg/pcb_online_store1.jpg'
import pcb_online_calculator from './images/productImg/pcb_online_calculator_manufacturer.jpg'
import buy_electronic_board_1 from './images/productImg/buy_electronic_board_1.jpg'
import buy_electronic_board_india from './images/productImg/buy_electronic_board_india.jpg'
import pcb_board_material_manufacturer from './images/productImg/pcb_board_material_manufacturer.jpg'
import Header from './Header'

import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'

function ProductCatogery() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  let ImgUrl = "https://admin.makemybizdchub.in/image/"


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

  return (
    <>
     
      <div className="productList">

        <section className="container-fluid bg_img-12">
          <div className="container">
            <div className="Buy_Enclosure text-white">
              {/* <h1>Buy Enclosure</h1> */}
              <h1>All Categories</h1>
              <div className="Buy Enclosure_Icon d-flex align-items-center">
                <a href="/">
                  <svg height="18px" width="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 20.0001C20 20.5524 19.5523 21.0001 19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001ZM11 13.0001V19.0001H13V13.0001H11Z" fill="rgba(247,247,247,1)" /></svg>
                </a>

                <span className="ms-2 mt-1 fw-bold"></span>
                {/* <span className="ms-2 mt-1 fw-bold"> : Sub Catogery</span> */}
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid bg--lgray--1 py-5">
          <div className="container">
            <div className="customizable_quality">
            </div>
            <div className="row">
              {data.map((item) => {
                return (
                  <div className="col-lg-4 col-md-6 mt-3">
                    <Link to={`/subproductCatogery/${item.id}`}>
                    <div className="card">
                      <a href="#">
                        <img src={ImgUrl + item.image} className="card-img-top" alt="123" />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title text-success">{item.title}</h5>
                          {/* <button className='btn btn-primary rounded-4'>
                        Explore
                          </button> */}
                        {/* <a href="/subproductCatogery" className="btn btn-primary"></a> */}
                      </div>
                    </div>


                        </Link>
                  </div>
                )
              })}
             
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductCatogery;