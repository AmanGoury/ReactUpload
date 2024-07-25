import Header from "./Header";
import layer from '../layer.svg'
import bord from '../pcb-board.svg'
import flex from '../flexpcb.png'
import circtbord from '../circuit-board.svg'
import chip from '../chip.svg'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JavaScript (if needed)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {useState} from 'react'

function Service() {
    const [stencilSize,setStencilSize]=useState('')
    const [stencilVariant,setStencilVar]=useState('')
    const [stencilName,setStencilName]=useState('')
    const [stencilTime,setStencilTime]=useState(3)
    const [upload,setUpload]=useState([])
    // console.log(stencilName,stencilSize,stencilVariant,stencilTime)
    // console.log(stencilSize,"size of stencil")
    // console.log(upload.size)
   const [pcbName,setPcbname]=useState('')
   const [pcbLayer,setPcblayer]=useState('')
   const [pcbComp,setPcbcomp]=useState('')
   const [pcbTime,setPcbtime]=useState('')

    if(upload.size>5e+6){
        alert("file size must be only 5MB")
    }
    let price=0
    let totalPrice=0
    //  THIS FUNCTIONS FOR PASTE STENCIL
    if(stencilSize==1)
    {price=6000
        totalPrice=7080
    }else if(stencilSize==2){
        price=6000
        totalPrice=7080
    }else if(stencilSize==3){
        price=6750
        totalPrice=7965
    }else if(stencilSize==4){
        price=7200
        totalPrice=8496
    }else if(stencilSize==5){
        price=7500  
        totalPrice=8850
    }

    

   
   if(stencilVariant=="Mini stencil"){
    
   }

    // ........

    return (

        <>
           

            <section className="container-fluid py-5 service" >
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                    <div className="tab_oppo d-flex align-items-center">
                                        <img src={layer} />
                                        <span>PCB Layout</span>
                                    </div>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                    <div className="tab_oppo d-flex align-items-center">
                                        <img src={bord} />
                                        <span>PCB Fabrication & PCB Assembly</span>
                                    </div>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                    <div className="tab_oppo d-flex align-items-center">
                                        <img src={flex} />
                                        <span>PCB Fabrication (Flex)</span>
                                    </div>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact-pcb" type="button" role="tab" aria-controls="pills-contact-pcb" aria-selected="false">
                                    <div className="tab_oppo d-flex align-items-center">
                                        <img src={chip} />
                                        <span>PCB Stencil</span>
                                    </div>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact-pcs" type="button" role="tab" aria-controls="pills-contact-pcs" aria-selected="false">
                                    <div className="tab_oppo d-flex align-items-center">
                                        <img src={circtbord} />
                                        <span>Component Sourcing</span>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                    >
                        <form>
                            <div className="row mt-4">
                                <div className="col-lg-8">
                                    <div className="layout_tabs_main mb-4">
                                        <div className="row">
                                            <div className="col-sm-4 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            PCB Name: <sup>*</sup>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="Layer_custum_css"
                                                            id="exampleInputtext"
                                                            placeholder="PCB Name"
                                                            aria-describedby="emailHelp"
                                                            value={pcbName}
                                                            onChange={e=>setPcbname(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            Layer: <sup>*</sup>
                                                        </label>
                                                        <select className="w-100 Layer_custum_css" value={pcbLayer} onChange={e=>setPcblayer(e.target.value)}>
                                                            <option value={'layer1'}>Layer 1</option>
                                                            <option value={'layer2'}>Layer 2</option>
                                                            <option value={'layer4'}>Layer 4</option>
                                                            <option value={'layer6'}>Layer 6</option>
                                                            <option value={'layer8'}>Layer 8</option>
                                                            <option value={'layer10'}>Layer 10</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            No. of Components: <sup>*</sup>
                                                        </label>
                                                        <select className="w-100 Layer_custum_css" value={pcbComp} onChange={e=>setPcbcomp(e.target.value)}>
                                                            <option value={0-50}>0-50</option>
                                                            <option value={52-100}>52-100</option>
                                                            <option value={101-150}>101-150</option>
                                                            <option value={151-200}>151-200</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            Lead Time: <sup>*</sup>
                                                        </label>
                                                        <select className="w-100 Layer_custum_css" value={pcbTime} onChange={e=>setPcbtime(e.target.value)}>
                                                            <option value={7}>7 Working Days</option>
                                                            <option value={10}>10 Working Days</option>
                                                            <option value={14}>14 Working Days</option>
                                                            <option value={20}>20 Working Days</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-sm-6 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            Schematic: <sup>*</sup>
                                                        </label>
                                                        <div id="wrapper" className="dropify-wrapper">
                                                            <input
                                                                type="file"
                                                                name="f-img"
                                                                className="form-control"
                                                                onChange={e=>setUpload(e.target.files[0])}
                                                            />
                                                            <div className="dropify-message">
                                                                <div className="dropify-message-1">
                                                                    <svg
                                                                        width="18px"
                                                                        height="18px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M13 13V18.585L14.8284 16.7574L16.2426 18.1716L12 22.4142L7.75736 18.1716L9.17157 16.7574L11 18.585V13H13ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z" />
                                                                    </svg>
                                                                    <p>Drag and drop a file here or click</p>
                                                                </div>
                                                                {/* <p className="dropify-error">Ooops, something wrong appended.</p> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-12">
                                                <div className="add_to_card">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary add-to-card"
                                                    >
                                                        Add to Card
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="layout_tabs_main">
                                        <div className="calculated_price_heading">
                                            <h5 className="text-center w-100 text-green fontw-600 mb-0">
                                                Calculated Price (₹)
                                            </h5>
                                        </div>
                                        <div className="stencil_calculated_price calculated_price_padding">
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Lead Time:</label>
                                                <label className="price-content">{pcbTime}</label>
                                            </div>
                                            <hr className="price-hr" />
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Order Value:</label>
                                                <label id="OrderValue" className="price-content">
                                                    {price}
                                                </label>
                                            </div>{" "}
                                            <hr className="price-hr" />
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Tax(%):</label>
                                                <label id="OrderTax" className="price-content">
                                                    18
                                                </label>
                                            </div>
                                            <hr className="price-hr" />
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Total Price:</label>
                                                <label
                                                    id="TotalOrderPrice"
                                                    className="price-content total-price"
                                                >
                                                    {totalPrice}
                                                </label>
                                            </div>
                                            <hr className="price-hr" />{" "}
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">
                                                    Tentative Shipment Date:
                                                </label>{" "}
                                                <label id="ShipmentDate" className="price-content">
                                                    08/07/2023
                                                </label>
                                            </div>{" "}
                                            <hr className="price-hr" />
                                        </div>
                                        <div>
                                            <h5 className="text-center w-100 text-green fontw-600">
                                                Alternatives
                                            </h5>
                                            <div className="calculator-table calculated_price_padding">
                                                <div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">Lead Time:</label>{" "}
                                                        <label id="A1WDays" className="price-content">
                                                            7 WD
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">PCB Layout:</label>{" "}
                                                        <label id="A1OrderValue" className="price-content">
                                                            5250
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">Tax(%):</label>{" "}
                                                        <label id="alttax1" className="price-content">
                                                            18
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">Total Price:</label>{" "}
                                                        <label
                                                            id="A1Totalvalue"
                                                            className="price-content total-price"
                                                        >
                                                            6195
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="price-hr" />
                                            <div className="calculator-table calculated_price_padding">
                                                <div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">Lead Time:</label>{" "}
                                                        <label id="A2WDays" className="price-content">
                                                            10 WD
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">PCB Layout:</label>{" "}
                                                        <label id="A2OrderValue" className="price-content">
                                                            3500
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">Tax(%):</label>{" "}
                                                        <label id="alttax2" className="price-content">
                                                            18
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">Total Price:</label>{" "}
                                                        <label
                                                            id="A2Totalvalue"
                                                            className="price-content total-price"
                                                        >
                                                            4130
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-end fix-validation-text">
                                                        <label className="text-red" style={{ fontSize: 10 }}>
                                                            * WD = Working Days
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                        <div className="row">
                            <div className="col-lg-8 mb-3">
                                <div className="layout_tabs_main">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="layout_tabs_main_chile">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        PCB Name: <sup>*</sup>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="Layer_custum_css"
                                                        id="exampleInputtext"
                                                        placeholder="PCB Name"
                                                        aria-describedby="emailHelp"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mt-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                PCB Assembly: <sup>*</sup>
                                            </label>
                                            <br />
                                            <div className="radio-button">
                                                <input
                                                    type="radio"
                                                    name="radio52"
                                                    id="radioacl"
                                                    defaultChecked=""
                                                />
                                                <label htmlFor="radioacl">No</label>
                                                <input type="radio" name="radio52" id="radiobl" />
                                                <label htmlFor="radiobl">Yes</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Board Size (mm): <sup>*</sup>
                                            </label>
                                            <div className="Dimensions_input d-flex align-items-center">
                                                <input type="text" defaultValue={5} name="f" />
                                                <span>X</span>
                                                <input type="text" defaultValue={6} name="ff" />
                                                <span>MM</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                PCB Qty: <sup>*</sup>
                                            </label>
                                            <input
                                                type="text"
                                                defaultValue={10}
                                                name="from"
                                                oninput=""
                                                className="form__field Quantity Layer_custum_css"
                                            />
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <div className="layout_tabs_main_chile">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        Material: <sup>*</sup>
                                                    </label>
                                                    <select className="w-100 Layer_custum_css">
                                                        <option>FR4</option>
                                                        <option>MCPCB</option>
                                                        <option>RT5880</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <div className="layout_tabs_main_chile">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        Layer: <sup>*</sup>
                                                    </label>
                                                    <select className="w-100 Layer_custum_css">
                                                        <option>1 Layer</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <div className="layout_tabs_main_chile">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        Board Thickness (mm): <sup>*</sup>
                                                    </label>
                                                    <select className="w-100 Layer_custum_css">
                                                        <option>0.4</option>
                                                        <option>0.5</option>
                                                        <option>0.3</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <div className="layout_tabs_main_chile">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        Surface Finish: <sup>*</sup>
                                                    </label>
                                                    <select className="w-100 Layer_custum_css">
                                                        <option>HAL</option>
                                                        <option>HAL(Sn-Pd)</option>
                                                        <option>immersion Tin</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <div className="layout_tabs_main_chile">
                                                <div className="mb-3">
                                                    <div id="accordion">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <a
                                                                    className="btn"
                                                                    data-bs-toggle="collapse"
                                                                    href="#collapseOne"
                                                                >
                                                                    Technology
                                                                </a>
                                                            </div>
                                                            <div
                                                                id="collapseOne"
                                                                className="collapse show"
                                                                data-bs-parent="#accordion"
                                                            >
                                                                <div className="card-body">
                                                                    <div className="row">
                                                                        <div className="col-lg-9">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Carbon Contacts: <sup>*</sup>
                                                                            </label>
                                                                            <div className="size_active mt-2">
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a2510"
                                                                                        name="check-substitution-2"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a2510"
                                                                                    >
                                                                                        17.50
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a5020"
                                                                                        name="check-substitution-2"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a5020"
                                                                                    >
                                                                                        35.00
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a7520"
                                                                                        name="check-substitution-2"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a7520"
                                                                                    >
                                                                                        60-50
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a7420"
                                                                                        name="check-substitution-2"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a7420"
                                                                                    >
                                                                                        70-50
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3">
                                                                            <div className="form_group mt-4">
                                                                                <label className="form__label">
                                                                                    PCB Qty:{" "}
                                                                                </label>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a11"
                                                                                        name="check-substitution-2d"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a11"
                                                                                    >
                                                                                        0
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 mb-3">
                                                                            <div className="layout_tabs_main_chile">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        htmlFor="exampleInputEmail1"
                                                                                        className="form-label"
                                                                                    >
                                                                                        Solder Mask Top: <sup>*</sup>
                                                                                    </label>
                                                                                    <select className="w-100 Layer_custum_css">
                                                                                        <option>Green</option>
                                                                                        <option>No Soldermask</option>
                                                                                        <option>red</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 mb-3">
                                                                            <div className="layout_tabs_main_chile">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        htmlFor="exampleInputEmail1"
                                                                                        className="form-label"
                                                                                    >
                                                                                        Solder Mask Bottom: <sup>*</sup>
                                                                                    </label>
                                                                                    <select className="w-100 Layer_custum_css">
                                                                                        <option>Green</option>
                                                                                        <option>No Soldermask</option>
                                                                                        <option>red</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 mb-2">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Legend Top: <sup>*</sup>
                                                                            </label>
                                                                            <div className="size_active mt-2">
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a2510"
                                                                                        name="check-substitution-222"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a2510"
                                                                                    >
                                                                                        No Legend
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a5020"
                                                                                        name="check-substitution-222"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a5020"
                                                                                    >
                                                                                        White
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a7520"
                                                                                        name="check-substitution-222"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a7520"
                                                                                    >
                                                                                        Black
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 mb-2">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Legend Bottom: <sup>*</sup>
                                                                            </label>
                                                                            <div className="size_active mt-2">
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a2510"
                                                                                        name="check-substitution-225"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a2510"
                                                                                    >
                                                                                        No Legend
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a5020"
                                                                                        name="check-substitution-225"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a5020"
                                                                                    >
                                                                                        White
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a7520"
                                                                                        name="check-substitution-225"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a7520"
                                                                                    >
                                                                                        Black
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 mb-2">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Peel Off: <sup>*</sup>
                                                                            </label>
                                                                            <div className="size_active mt-2">
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a2510"
                                                                                        name="check-substitution-229"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a2510"
                                                                                    >
                                                                                        No
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a5020"
                                                                                        name="check-substitution-229"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a5020"
                                                                                    >
                                                                                        Bottom Side
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a7520"
                                                                                        name="check-substitution-229"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a7520"
                                                                                    >
                                                                                        Top Side
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a7520"
                                                                                        name="check-substitution-229"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a7520"
                                                                                    >
                                                                                        Both Side
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 mb-2">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Counter Sunk: <sup>*</sup>
                                                                            </label>
                                                                            <div className="size_active mt-2">
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a2510"
                                                                                        name="check-substitution-230"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a2510"
                                                                                    >
                                                                                        NPTH
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a5020"
                                                                                        name="check-substitution-230"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a5020"
                                                                                    >
                                                                                        No
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 mb-3">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Impedance Control: <sup>*</sup>
                                                                            </label>
                                                                            <br />
                                                                            <div className="radio-button">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio5112"
                                                                                    id="radioacaa"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <label htmlFor="radioacaa">No</label>
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio5112"
                                                                                    id="acoppo"
                                                                                />
                                                                                <label htmlFor="acoppo">Yes</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 mb-3">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Via Fill: <sup>*</sup>
                                                                            </label>
                                                                            <br />
                                                                            <div className="radio-button">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio0000"
                                                                                    id="radioacaa00"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <label htmlFor="radioacaa00">No</label>
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio0000"
                                                                                    id="acoppo00"
                                                                                />
                                                                                <label htmlFor="acoppo00">Yes</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <a
                                                                    className="collapsed btn"
                                                                    data-bs-toggle="collapse"
                                                                    href="#collapseTwo"
                                                                >
                                                                    Additional Options
                                                                </a>
                                                            </div>
                                                            <div
                                                                id="collapseTwo"
                                                                className="collapse"
                                                                data-bs-parent="#accordion"
                                                            >
                                                                <div className="card-body">
                                                                    <div className="row">
                                                                        <div className="col-lg-9">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Carbon Contacts: <sup>*</sup>
                                                                            </label>
                                                                            <div className="size_active mt-2">
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a25"
                                                                                        name="check-substitution-2"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a25"
                                                                                    >
                                                                                        No
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a50"
                                                                                        name="check-substitution-2"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a50"
                                                                                    >
                                                                                        Bottom Side
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a75"
                                                                                        name="check-substitution-2"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a75"
                                                                                    >
                                                                                        Top Side
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a74"
                                                                                        name="check-substitution-2"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a74"
                                                                                    >
                                                                                        Both Side
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3">
                                                                            <div className="quantity ">
                                                                                <label
                                                                                    htmlFor="exampleInputEmail1"
                                                                                    className="form-label"
                                                                                >
                                                                                    Hard Gold: <sup>*</sup>
                                                                                </label>
                                                                                <div className="counter mt-2">
                                                                                    <span
                                                                                        className="down"
                                                                                        onclick="decreaseCount(event, this)"
                                                                                    >
                                                                                        -
                                                                                    </span>
                                                                                    <input type="text" defaultValue={1} />
                                                                                    <span
                                                                                        className="up"
                                                                                        onclick="increaseCount(event, this)"
                                                                                    >
                                                                                        +
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 mt-3">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Manufacturer's Logo: <sup>*</sup>
                                                                            </label>
                                                                            <div className="radio-button">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio1"
                                                                                    id="radio1"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <label htmlFor="radio1">No</label>
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio1"
                                                                                    id="radio2"
                                                                                />
                                                                                <label htmlFor="radio2">Yes</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 mt-3">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Serialization For PCB: <sup>*</sup>
                                                                            </label>
                                                                            <div className="radio-button">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio2"
                                                                                    id="radio3"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <label htmlFor="radio3">No</label>
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio2"
                                                                                    id="radio4"
                                                                                />
                                                                                <label htmlFor="radio4">Yes</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 mt-3">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Round Edge Plating: <sup>*</sup>
                                                                            </label>
                                                                            <div className="radio-button">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio3"
                                                                                    id="radio5"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <label htmlFor="radio5">No</label>
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio3"
                                                                                    id="radio6"
                                                                                />
                                                                                <label htmlFor="radio6">Yes</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 mt-3">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Bevelling: <sup>*</sup>
                                                                            </label>
                                                                            <div className="radio-button">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio4"
                                                                                    id="radio7"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <label htmlFor="radio7">No</label>
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio4"
                                                                                    id="radio8"
                                                                                />
                                                                                <label htmlFor="radio8">Yes</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 mt-3">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                UL Sign: <sup>*</sup>
                                                                            </label>
                                                                            <div className="radio-button">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio5"
                                                                                    id="radioa"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <label htmlFor="radioa">No</label>
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio5"
                                                                                    id="radiob"
                                                                                />
                                                                                <label htmlFor="radiob">Yes</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 mt-3">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Date Code: <sup>*</sup>
                                                                            </label>
                                                                            <div className="radio-button">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio46"
                                                                                    id="radioc"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <label htmlFor="radioc">No</label>
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio46"
                                                                                    id="radiod"
                                                                                />
                                                                                <label htmlFor="radiod">Yes</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 mt-3">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Data Approval: <sup>*</sup>
                                                                            </label>
                                                                            <div className="radio-button">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio7"
                                                                                    id="radioef"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <label htmlFor="radioef">No</label>
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio7"
                                                                                    id="radiofg"
                                                                                />
                                                                                <label htmlFor="radiofg">Yes</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 mt-3">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                ET Symbol: <sup>*</sup>
                                                                            </label>
                                                                            <div className="radio-button">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio8"
                                                                                    id="radiog"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <label htmlFor="radiog">No</label>
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio8"
                                                                                    id="radioh"
                                                                                />
                                                                                <label htmlFor="radioh">Yes</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 mt-3">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Microsection Report: <sup>*</sup>
                                                                            </label>
                                                                            <div className="radio-button">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio9"
                                                                                    id="radio7a"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <label htmlFor="radio7a">No</label>
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio9"
                                                                                    id="radio8b"
                                                                                />
                                                                                <label htmlFor="radio8b">Yes</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <a
                                                                    className="collapsed btn"
                                                                    data-bs-toggle="collapse"
                                                                    href="#collapseThree"
                                                                >
                                                                    Assembly Options
                                                                </a>
                                                            </div>
                                                            <div
                                                                id="collapseThree"
                                                                className="collapse"
                                                                data-bs-parent="#accordion"
                                                            >
                                                                <div className="card-body">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Component Sourcing: <sup>*</sup>
                                                                            </label>
                                                                            <div className="size_active mt-2">
                                                                                <div className="row">
                                                                                    <div className="col-lg-4">
                                                                                        <div className="button ab oppo">
                                                                                            <input
                                                                                                type="radio"
                                                                                                id="a75 a751"
                                                                                                name="check-substitution-2"
                                                                                            />
                                                                                            <label
                                                                                                className="btn btn-default"
                                                                                                htmlFor="a75"
                                                                                            >
                                                                                                <div className="text-center oppo_1">
                                                                                                    <h6>Turnkey</h6>
                                                                                                    <p>PCB Power Market supply parts</p>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-4">
                                                                                        <div className="button ab oppo">
                                                                                            <input
                                                                                                type="radio"
                                                                                                id="a75 a751"
                                                                                                name="check-substitution-2"
                                                                                            />
                                                                                            <label
                                                                                                className="btn btn-default"
                                                                                                htmlFor="a75"
                                                                                            >
                                                                                                <div className="text-center oppo_1">
                                                                                                    <h6>Combo</h6>
                                                                                                    <p>
                                                                                                        You supply some parts we do the
                                                                                                        rest
                                                                                                    </p>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-4">
                                                                                        <div className="button ab oppo">
                                                                                            <input
                                                                                                type="radio"
                                                                                                id="a75 a751"
                                                                                                name="check-substitution-2"
                                                                                            />
                                                                                            <label
                                                                                                className="btn btn-default"
                                                                                                htmlFor="a75"
                                                                                            >
                                                                                                <div className="text-center oppo_1">
                                                                                                    <h6>Consigned</h6>
                                                                                                    <p>You supply parts</p>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 mt-3">
                                                                            <div className="layout_tabs_main_chile">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        htmlFor="exampleInputEmail1"
                                                                                        className="form-label"
                                                                                    >
                                                                                        Assembly Qty(PCB): <sup>*</sup>
                                                                                    </label>
                                                                                    <input
                                                                                        type="text"
                                                                                        className="Layer_custum_css Layer_custum_css_2"
                                                                                        id="exampleInputtext"
                                                                                        placeholder="PCB Assembly Qty"
                                                                                        aria-describedby="emailHelp"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 mt-3">
                                                                            <div className="layout_tabs_main_chile">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        htmlFor="exampleInputEmail1"
                                                                                        className="form-label"
                                                                                    >
                                                                                        Nr of Thorugh Hole Component / PCB:{" "}
                                                                                        <sup>*</sup>
                                                                                    </label>
                                                                                    <input
                                                                                        type="text"
                                                                                        className="Layer_custum_css Layer_custum_css_2"
                                                                                        id="exampleInputtext"
                                                                                        placeholder="Nr of Thorugh Hole Component / PCB"
                                                                                        aria-describedby="emailHelp"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 mt-3">
                                                                            <div className="layout_tabs_main_chile">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        htmlFor="exampleInputEmail1"
                                                                                        className="form-label"
                                                                                    >
                                                                                        Nr of SMD Components / PCB: <sup>*</sup>
                                                                                    </label>
                                                                                    <input
                                                                                        type="text"
                                                                                        className="Layer_custum_css Layer_custum_css_2"
                                                                                        id="exampleInputtext"
                                                                                        placeholder="Nr of SMD Components / PCB"
                                                                                        aria-describedby="emailHelp"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 mt-3">
                                                                            <div className="layout_tabs_main_chile">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        htmlFor="exampleInputEmail1"
                                                                                        className="form-label"
                                                                                    >
                                                                                        Nr of BGA/QFN/LGA Components / PCB:{" "}
                                                                                        <sup>*</sup>
                                                                                    </label>
                                                                                    <input
                                                                                        type="text"
                                                                                        className="Layer_custum_css Layer_custum_css_2"
                                                                                        id="exampleInputtext"
                                                                                        placeholder="Nr of BGA/QFN/LGA Components / PCB:"
                                                                                        aria-describedby="emailHelp"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 mt-3">
                                                                            <div className="layout_tabs_main_chile">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        htmlFor="exampleInputEmail1"
                                                                                        className="form-label"
                                                                                    >
                                                                                        Total Nr of Components / PCB: <sup>*</sup>
                                                                                    </label>
                                                                                    <input
                                                                                        type="text"
                                                                                        className="Layer_custum_css Layer_custum_css_2"
                                                                                        id="exampleInputtext"
                                                                                        placeholder="Total Nr of Components / PCB"
                                                                                        aria-describedby="emailHelp"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 mt-3">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Conformal Coating: <sup>*</sup>
                                                                            </label>
                                                                            <div className="radio-button">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio39"
                                                                                    id="radio59"
                                                                                    defaultChecked=""
                                                                                />
                                                                                <label htmlFor="radio59">No</label>
                                                                                <input
                                                                                    type="radio"
                                                                                    name="radio39"
                                                                                    id="radio69"
                                                                                />
                                                                                <label htmlFor="radio69">Yes</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Assembly Side : <sup>*</sup>
                                                                            </label>
                                                                            <div className="size_active mt-2">
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a2555"
                                                                                        name="check-substitution-4"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a2555"
                                                                                    >
                                                                                        Top
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a50"
                                                                                        name="check-substitution-4"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a50"
                                                                                    >
                                                                                        Bottom
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a7588"
                                                                                        name="check-substitution-4"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a7588"
                                                                                    >
                                                                                        Both
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <label
                                                                                htmlFor="exampleInputEmail1"
                                                                                className="form-label"
                                                                            >
                                                                                Stencil Side: <sup>*</sup>
                                                                            </label>
                                                                            <div className="size_active mt-2">
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a2501"
                                                                                        name="check-substitution-9"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a2501"
                                                                                    >
                                                                                        Top
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a5002"
                                                                                        name="check-substitution-9"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a5002"
                                                                                    >
                                                                                        Bottom
                                                                                    </label>
                                                                                </div>
                                                                                <div className="button mt-2">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="a7503"
                                                                                        name="check-substitution-9"
                                                                                    />
                                                                                    <label
                                                                                        className="btn btn-default"
                                                                                        htmlFor="a7503"
                                                                                    >
                                                                                        tow
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-3">
                                            <div className="layout_tabs_main_chile">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        PCB Production Lead Time: <sup>*</sup>
                                                    </label>
                                                    <select className="w-100 Layer_custum_css">
                                                        <option>7 Working Day</option>
                                                        <option>6 Working Day</option>
                                                        <option>5 Working Day</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-3">
                                            <div className="layout_tabs_main_chile">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        PCB Assembly Lead Time: <sup>*</sup>
                                                    </label>
                                                    <select className="w-100 Layer_custum_css">
                                                        <option>7 Working Day</option>
                                                        <option>6 Working Day</option>
                                                        <option>5 Working Day</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-3">
                                            <div className="layout_tabs_main_chile">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        Component Sourcing Lead Time: <sup>*</sup>
                                                    </label>
                                                    <select className="w-100 Layer_custum_css">
                                                        <option>5-7 Working Day</option>
                                                        <option>10-14 Working Day</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mb-3">
                                            <div className="layout_tabs_main_chile">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        Gerber Data: <sup>*</sup>
                                                    </label>
                                                    <div id="wrapper" className="dropify-wrapper">
                                                        <input
                                                            type="file"
                                                            name="f-img"
                                                            className="form-control"
                                                        />
                                                        <div className="dropify-message">
                                                            <div className="dropify-message-1">
                                                                <svg
                                                                    width="18px"
                                                                    height="18px"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M13 13V18.585L14.8284 16.7574L16.2426 18.1716L12 22.4142L7.75736 18.1716L9.17157 16.7574L11 18.585V13H13ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z" />
                                                                </svg>
                                                                <p>Drag and drop a file here or click</p>
                                                            </div>
                                                            {/* <p className="dropify-error">Ooops, something wrong appended.</p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mb-3">
                                            <div className="layout_tabs_main_chile">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        Bill of Material: <sup>*</sup>
                                                    </label>
                                                    <div id="wrapper" className="dropify-wrapper">
                                                        <input
                                                            type="file"
                                                            name="f-img"
                                                            className="form-control"
                                                        />
                                                        <div className="dropify-message">
                                                            <div className="dropify-message-1">
                                                                <svg
                                                                    width="18px"
                                                                    height="18px"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M13 13V18.585L14.8284 16.7574L16.2426 18.1716L12 22.4142L7.75736 18.1716L9.17157 16.7574L11 18.585V13H13ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z" />
                                                                </svg>
                                                                <p>Drag and drop a file here or click</p>
                                                            </div>
                                                            {/* <p className="dropify-error">Ooops, something wrong appended.</p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mb-3">
                                            <div className="layout_tabs_main_chile">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        Pick &amp; Place: <sup>*</sup>
                                                    </label>
                                                    <div id="wrapper" className="dropify-wrapper">
                                                        <input
                                                            type="file"
                                                            name="f-img"
                                                            className="form-control"
                                                        />
                                                        <div className="dropify-message">
                                                            <div className="dropify-message-1">
                                                                <svg
                                                                    width="18px"
                                                                    height="18px"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M13 13V18.585L14.8284 16.7574L16.2426 18.1716L12 22.4142L7.75736 18.1716L9.17157 16.7574L11 18.585V13H13ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z" />
                                                                </svg>
                                                                <p>Drag and drop a file here or click</p>
                                                            </div>
                                                            {/* <p className="dropify-error">Ooops, something wrong appended.</p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="add_to_card">
                                                <button type="submit" className="btn btn-primary add-to-card">
                                                    Add to Card
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="layout_tabs_main">
                                    <div className="calculated_price_heading">
                                        <h5 className="text-center w-100 text-green fontw-600 mb-0">
                                            Calculated Price (₹)
                                        </h5>
                                    </div>
                                    <div className="stencil_calculated_price calculated_price_padding">
                                        <div className="d-flex justify-content-between">
                                            <label className="price-title">Service</label>
                                            <label className="price-content price-title">
                                                PCB Fabrication
                                            </label>
                                            <label
                                                id="lblasm"
                                                className="price-content price-title div1 hide"
                                            >
                                                PCB Assembly
                                            </label>
                                        </div>{" "}
                                        <hr className="price-hr" />
                                        <div className="d-flex justify-content-between">
                                            <label className="price-title">Lead Time:</label>
                                            <label id="PriceLeadTime" className="price-content">
                                                7 WD
                                            </label>
                                            <label
                                                id="PriceAssemblyLeadTime"
                                                className="price-content div1 hide"
                                            >
                                                7 WD
                                            </label>
                                        </div>{" "}
                                        <hr className="price-hr" />
                                        <div className="d-flex justify-content-between">
                                            <label className="price-title">Quantity:</label>
                                            <label id="CalpcbQty" className="price-content">
                                                10
                                            </label>
                                            <label
                                                id="qtyAsm"
                                                className="price-content div1 hide getExtraPadding"
                                            >
                                                -
                                            </label>
                                        </div>{" "}
                                        <hr className="price-hr" />
                                        <div className="d-flex justify-content-between">
                                            <label className="price-title">Unit Price:</label>
                                            <label id="FabUnitPrice" className="price-content">
                                                148
                                            </label>
                                            <label
                                                id="AssUnitPrice"
                                                className="price-content div1 hide getExtraPadding"
                                            >
                                                -
                                            </label>
                                        </div>{" "}
                                        <hr className="price-hr" />
                                        <div className="d-flex justify-content-between">
                                            <label className="price-title">Order Price:</label>
                                            <label id="FabOrderPrice" className="price-content">
                                                
                                            </label>{" "}
                                            <label
                                                id="AssOrderPrice"
                                                className="price-content div1 hide getExtraPadding"
                                            >
                                                -
                                            </label>
                                        </div>{" "}
                                        <hr className="price-hr" />
                                        <div className="d-flex justify-content-between">
                                            <label className="price-title">Tax(%):</label>
                                            <label id="FabTax" className="price-content">
                                                18
                                            </label>
                                            <label
                                                id="AssTax"
                                                className="price-content div1 hide getExtraPadding"
                                            >
                                                -
                                            </label>
                                        </div>{" "}
                                        <hr className="price-hr" />
                                        <div className="d-flex justify-content-between">
                                            <label className="price-title">Total Price:</label>
                                            <label id="PcbTotalPrice" className="total-price price-content">
                                                1746
                                            </label>
                                            <label
                                                id="AssTotalPrice"
                                                className="total-price price-content div1 hide getExtraPadding"
                                            >
                                                -
                                            </label>
                                        </div>{" "}
                                        <hr className="price-hr" />
                                        <div className="bottom-10"></div>
                                        <div className="d-flex justify-content-between">
                                            <label className="price-title">Maximum Sq Meter:</label>{" "}
                                            <label className="price-content">8</label>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <label className="price-title">Your Sq Meter:</label>
                                            <label id="YourSqmeter" className="price-content">
                                                0.00
                                            </label>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <label className="price-title">Setup Charges:</label>
                                            <label className="price-content total-price">Free</label>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <label className="price-title">Delivery Charges:</label>{" "}
                                            <label className="price-content total-price">Free</label>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <label className="price-title">Electrical Testing:</label>
                                            <label className="price-content total-price">Free</label>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <label className="price-title">Tentative Shipment Date:</label>{" "}
                                            <label className="price-content total-price">23/08/2023</label>
                                        </div>
                                        <div className="d-flex justify-content-end fix-validation-text">
                                            <label className="text-red" style={{ fontSize: 10 }}>
                                                * WD = Working Days
                                            </label>
                                        </div>
                                    </div>
                                    <hr className="price-hr" />
                                    <div className="text-center bottom-10 d-flex justify-content-center align-items-center">
                                        <a type="submit" className="button button--green top-20u">
                                            <span>Compare prices</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                    >
                        <form>
                            <div className="row mt-4">
                                <div className="col-lg-8">
                                    <div className="layout_tabs_main mb-4">
                                        <div className="row">
                                            <div className="col-sm-6 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            PCB Name: <sup>*</sup>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="Layer_custum_css"
                                                            id="exampleInputtext"
                                                            placeholder="PCB Name"
                                                            aria-describedby="emailHelp"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                    PCB Qty: <sup>*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue={10}
                                                    name="from"
                                                    oninput=""
                                                    className="form__field Quantity Layer_custum_css"
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                    Board Size (mm): <sup>*</sup>
                                                </label>
                                                <div className="Dimensions_input d-flex align-items-center">
                                                    <input type="text" defaultValue={5} name="f" />
                                                    <span>X</span>
                                                    <input type="text" defaultValue={6} name="ff" />
                                                    <span>MM</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            Material: <sup>*</sup>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            disabled=""
                                                            className="Layer_custum_css"
                                                            id="exampleInputtext"
                                                            placeholder="PCB Name"
                                                            aria-describedby="emailHelp"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            Layer: <sup>*</sup>
                                                        </label>
                                                        <select className="w-100 Layer_custum_css">
                                                            <option>1 Layer</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            FPC Thickness (mm): <sup>*</sup>
                                                        </label>
                                                        <select className="w-100 Layer_custum_css">
                                                            <option>0.06</option>
                                                            <option>0.11</option>
                                                            <option>0.12</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            Surface Finish: <sup>*</sup>
                                                        </label>
                                                        <select className="w-100 Layer_custum_css">
                                                            <option>Only Coper</option>
                                                            <option>ENIG</option>
                                                            <option>Immersion Tin</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form_group mt-3">
                                                    <label className="form__label">PCB Qty: </label>
                                                    <div className="buttoll mt-1">
                                                        <input
                                                            type="text"
                                                            className="directory_disable Layer_custum_css"
                                                            disabled=""
                                                            name="tamp"
                                                            defaultValue=" High Tg (230 deg)"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            PCB Production Lead Time: <sup>*</sup>
                                                        </label>
                                                        <select className="w-100 Layer_custum_css">
                                                            <option>15 Working Day</option>
                                                            <option>20 Working Day</option>
                                                            <option>25 Working Day</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            Gerber Data: <sup>*</sup>
                                                        </label>
                                                        <div id="wrapper" className="dropify-wrapper">
                                                            <input
                                                                type="file"
                                                                name="f-img"
                                                                className="form-control"
                                                            />
                                                            <div className="dropify-message">
                                                                <div className="dropify-message-1">
                                                                    <svg
                                                                        width="18px"
                                                                        height="18px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M13 13V18.585L14.8284 16.7574L16.2426 18.1716L12 22.4142L7.75736 18.1716L9.17157 16.7574L11 18.585V13H13ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z" />
                                                                    </svg>
                                                                    <p>Drag and drop a file here or click</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="add_to_card">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary add-to-card"
                                                    >
                                                        Add to Card
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="layout_tabs_main">
                                        <div className="calculated_price_heading">
                                            <h5 className="text-center w-100 text-green fontw-600 mb-0">
                                                Calculated Price (₹)
                                            </h5>
                                        </div>
                                        <div className="stencil_calculated_price calculated_price_padding">
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Service</label>
                                                <label className="price-content price-title">
                                                    PCB Fabrication Flex
                                                </label>
                                            </div>{" "}
                                            <hr className="price-hr" />
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Lead Time:</label>
                                                <label id="PriceLeadTime" className="price-content">
                                                    7 WD
                                                </label>
                                            </div>
                                            <hr className="price-hr" />
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Quantity:</label>
                                                <label id="CalpcbQty" className="price-content">
                                                    10
                                                </label>
                                            </div>{" "}
                                            <hr className="price-hr" />
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Unit Price:</label>
                                                <label id="FabUnitPrice" className="price-content">
                                                    148
                                                </label>
                                            </div>{" "}
                                            <hr className="price-hr" />
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Order Price:</label>
                                                <label id="FabOrderPrice" className="price-content">
                                                    1480
                                                </label>
                                            </div>{" "}
                                            <hr className="price-hr" />
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Tax(%):</label>
                                                <label id="FabTax" className="price-content">
                                                    18
                                                </label>
                                            </div>{" "}
                                            <hr className="price-hr" />
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Total Price:</label>
                                                <label
                                                    id="PcbTotalPrice"
                                                    className="total-price price-content"
                                                >
                                                    1746
                                                </label>
                                            </div>{" "}
                                            <hr className="price-hr" />
                                            <div className="bottom-10"></div>
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Maximum Sq Meter:</label>{" "}
                                                <label className="price-content">8</label>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Your Sq Meter:</label>
                                                <label id="YourSqmeter" className="price-content">
                                                    0.00
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Setup Charges:</label>
                                                <label className="price-content total-price">Free</label>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Delivery Charges:</label>{" "}
                                                <label className="price-content total-price">Free</label>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Electrical Testing:</label>
                                                <label className="price-content total-price">Free</label>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">
                                                    Tentative Shipment Date:
                                                </label>{" "}
                                                <label className="price-content total-price">
                                                    23/08/2023
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-end fix-validation-text">
                                                <label className="text-red" style={{ fontSize: 10 }}>
                                                    * WD = Working Days
                                                </label>
                                            </div>
                                        </div>
                                        <hr className="price-hr" />
                                        <div className="text-center bottom-10 d-flex justify-content-center align-items-center">
                                            <a type="submit" className="button button--green top-20u">
                                                <span>Compare prices</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-contact-pcb"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                    >
                        <form>
                            <div className="row mt-4">
                                <div className="col-lg-8">
                                    <div className="layout_tabs_main mb-4">
                                        <div className="row">
                                            <div className="col-sm-12 mb-3 lg-12">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            Stencil Name: <sup>*</sup>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="Layer_custum_css"
                                                            id="exampleInputtext"
                                                            placeholder="Stencil Name"
                                                            aria-describedby="emailHelp"
                                                            value={stencilName}
                                                            onChange={e=>setStencilName(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 mb-2">
                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                    Stencil Size: <sup>*</sup>
                                                </label>
                                                <div className="size_active ">
                                                    <select className="w-100 Layer_custum_css" value={stencilSize} onChange={e=> setStencilSize(e.target.value)} >
                                                        <option value={1}>15" x 20.5"</option>
                                                        <option value={2}>18 " x18 "</option>
                                                        <option value={3}>22" x 22"</option>
                                                        <option value={4}>23"x 23"</option>
                                                        <option value={5}>29" x 29"</option>
                                                    </select>

                                                </div>
                                            </div>
                                            <div className="col-sm-4 mb-2">
                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                    stencil variants: <sup>*</sup>
                                                </label>
                                                <div className="size_active">
                                                    <select className="w-100 Layer_custum_css" value={stencilVariant} onChange={e=>setStencilVar(e.target.value)}>
                                                        <option value={'paste stencil'}>paste stencil</option>
                                                        <option value={'glue stencil'}>glue stencil</option>
                                                        <option value={'Step up / step down stencil'}>Step up / step down stencil</option>
                                                        <option value={'Nickel stencil'}>Nickel stencil</option>
                                                        <option value={'Mini stencil'}>Mini stencil</option>
                                                        {/* <option >paste stencil</option> */}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 mb-2">
                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                    Lead Time: <sup>*</sup>
                                                </label>
                                                <div className="size_active">
                                                    {/* <div className="button">
                                                        <input
                                                            type="radio"
                                                            id="a2510"
                                                            name="check-substitution-237"
                                                        />
                                                        <label className="btn btn-default" htmlFor="a2510">
                                                            Framed
                                                        </label>
                                                    </div>
                                                    <div className="button">
                                                        <input
                                                            type="radio"
                                                            id="a5020"
                                                            name="check-substitution-237"
                                                        />
                                                        <label className="btn btn-default" htmlFor="a5020">
                                                            Frameless
                                                        </label>
                                                    </div> */}
                                                    <select className="w-100 Layer_custum_css" value={stencilTime} onChange={e=>setStencilTime(e.target.value)}>
                                                        <option value="3">3 Working</option>
                                                        
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            Schematic: <sup>*</sup>
                                                        </label>
                                                        <div id="wrapper" className="dropify-wrapper">
                                                            <input
                                                                type="file"
                                                                name="f-img"
                                                                className="form-control"
                                                            />
                                                            <div className="dropify-message">
                                                                <div className="dropify-message-1">
                                                                    <svg
                                                                        width="18px"
                                                                        height="18px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M13 13V18.585L14.8284 16.7574L16.2426 18.1716L12 22.4142L7.75736 18.1716L9.17157 16.7574L11 18.585V13H13ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z" />
                                                                    </svg>
                                                                    <p>Drag and drop a file here or click</p>
                                                                </div>
                                                                {/* <p className="dropify-error">Ooops, something wrong appended.</p> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            Bill of Material: <sup>*</sup>
                                                        </label>
                                                        <div id="wrapper">
                                                            <input
                                                                type="file"
                                                                name="f-img"
                                                                className="form-control opcity_set"
                                                            />
                                                            <div className="dropify-message">
                                                                <div className="dropify-message-1">
                                                                    <svg
                                                                        width="18px"
                                                                        height="18px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M13 13V18.585L14.8284 16.7574L16.2426 18.1716L12 22.4142L7.75736 18.1716L9.17157 16.7574L11 18.585V13H13ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z" />
                                                                    </svg>
                                                                    <p>Drag and drop a file here or click</p>
                                                                </div>
                                                                {/* <p className="dropify-error">Ooops, something wrong appended.</p> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                            {/* <div className="col-lg-6">
                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                    Size X and Y: <sup>*</sup>
                                                </label>
                                                <div className="Dimensions_input d-flex align-items-center">
                                                    <input type="text" defaultValue={5} name="f" />
                                                    <span>X</span>
                                                    <input type="text" defaultValue={6} name="ff" />
                                                    <span>MM Y</span>
                                                    <input type="text" defaultValue={51} name="ff" />
                                                    <span>MM</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-2">
                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                    Thickness (mil): <sup>*</sup>
                                                </label>
                                                <div className="size_active ">
                                                    <div className="button">
                                                        <input
                                                            type="radio"
                                                            id="a2510"
                                                            name="check-substitution-240"
                                                        />
                                                        <label className="btn btn-default" htmlFor="a2510">
                                                            4
                                                        </label>
                                                    </div>
                                                    <div className="button">
                                                        <input
                                                            type="radio"
                                                            id="a5020"
                                                            name="check-substitution-240"
                                                        />
                                                        <label className="btn btn-default" htmlFor="a5020">
                                                            5
                                                        </label>
                                                    </div>
                                                    <div className="button">
                                                        <input
                                                            type="radio"
                                                            id="a7520"
                                                            name="check-substitution-240"
                                                        />
                                                        <label className="btn btn-default" htmlFor="a7520">
                                                            6
                                                        </label>
                                                    </div>
                                                    <div className="button">
                                                        <input
                                                            type="radio"
                                                            id="a7520"
                                                            name="check-substitution-240"
                                                        />
                                                        <label className="btn btn-default" htmlFor="a7520">
                                                            8
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="row">
                                                    <div className="col-sm-6 mb-3">
                                                        <div className="layout_tabs_main_chile">
                                                            <div className="mb-3">
                                                                <label
                                                                    htmlFor="exampleInputEmail1"
                                                                    className="form-label"
                                                                >
                                                                    Lead Time: <sup>*</sup>
                                                                </label>
                                                                <select className="w-100 Layer_custum_css">
                                                                    <option>5 Working</option>
                                                                    <option>1 Working</option>
                                                                    <option>3 Working</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            Quantity: <sup>*</sup>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            defaultValue={1}
                                                            name="from"
                                                            oninput=""
                                                            className="form__field Quantity Layer_custum_css"
                                                        />
                                                    </div>
                                                    <div className="col-12 mb-3">
                                                        <div className="order_comment">
                                                            <svg
                                                                width="20px"
                                                                height="20px"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M22 20H2V18H3V11.0314C3 6.04348 7.02944 2 12 2C16.9706 2 21 6.04348 21 11.0314V18H22V20ZM5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z" />
                                                            </svg>
                                                            <p className="ms-2">
                                                                Order Price is the landed cost of goods at the
                                                                location included in the invoice. Please keep a buffer
                                                                day beyond our committed delivery date to mitigate
                                                                downstream delays.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            Stencil Data: <sup>*</sup>
                                                        </label>
                                                        <div id="wrapper" className="dropify-wrapper">
                                                            <input
                                                                type="file"
                                                                name="f-img"
                                                                className="form-control"
                                                            />
                                                            <div className="dropify-message">
                                                                <div className="dropify-message-1">
                                                                    <svg
                                                                        width="18px"
                                                                        height="18px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M13 13V18.585L14.8284 16.7574L16.2426 18.1716L12 22.4142L7.75736 18.1716L9.17157 16.7574L11 18.585V13H13ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z" />
                                                                    </svg>
                                                                    <p>Drag and drop a file here or click</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="col-12">
                                                <div className="add_to_card">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary add-to-card"
                                                    >
                                                        Add to Card
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="layout_tabs_main">
                                        <div className="calculated_price_heading">
                                            <h5 className="text-center w-100 text-green fontw-600 mb-0">
                                                Calculated Price (₹)
                                            </h5>
                                        </div>
                                        <div className="stencil_calculated_price calculated_price_padding">
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Lead Time:</label>
                                                <label className="price-content">3 WD</label>
                                            </div>
                                            <hr className="price-hr" />
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Order Value:</label>
                                                <label id="OrderValue" className="price-content">
                                                {price}
                                                </label>
                                            </div>{" "}
                                            <hr className="price-hr" />
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Tax(%):</label>
                                                <label id="OrderTax" className="price-content">
                                                    18
                                                </label>
                                            </div>
                                            <hr className="price-hr" />
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">Total Price:</label>
                                                <label
                                                    id="TotalOrderPrice"
                                                    className="price-content total-price"
                                                >
                                                    {totalPrice}
                                                </label>
                                            </div>
                                            <hr className="price-hr" />{" "}
                                            <div className="d-flex justify-content-between">
                                                <label className="price-title">
                                                    Tentative Shipment Date:
                                                </label>{" "}
                                                <label id="ShipmentDate" className="price-content">
                                                    08/07/2023
                                                </label>
                                            </div>{" "}
                                            <hr className="price-hr" />
                                        </div>
                                        <div>
                                            {/* <h5 className="text-center w-100 text-green fontw-600">
                                                Alternatives
                                            </h5> */}
                                            {/* <div className="calculator-table calculated_price_padding">
                                                <div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">Lead Time:</label>{" "}
                                                        <label id="A1WDays" className="price-content">
                                                            7 WD
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">PCB Layout:</label>{" "}
                                                        <label id="A1OrderValue" className="price-content">
                                                            5250
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">Tax(%):</label>{" "}
                                                        <label id="alttax1" className="price-content">
                                                            18
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">Total Price:</label>{" "}
                                                        <label
                                                            id="A1Totalvalue"
                                                            className="price-content total-price"
                                                        >
                                                            6195
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="price-hr" />
                                            <div className="calculator-table calculated_price_padding">
                                                <div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">Lead Time:</label>{" "}
                                                        <label id="A2WDays" className="price-content">
                                                            10 WD
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">PCB Layout:</label>{" "}
                                                        <label id="A2OrderValue" className="price-content">
                                                            3500
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">Tax(%):</label>{" "}
                                                        <label id="alttax2" className="price-content">
                                                            18
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <label className="price-title">Total Price:</label>{" "}
                                                        <label
                                                            id="A2Totalvalue"
                                                            className="price-content total-price"
                                                        >
                                                            4130
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-end fix-validation-text">
                                                        <label className="text-red" style={{ fontSize: 10 }}>
                                                            * WD = Working Days
                                                        </label>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-contact-pcs"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                    >
                        <form>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="layout_tabs_main mb-4">
                                        <div className="row">
                                            <div className="col-sm-4 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            PCB Name: <sup>*</sup>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="Layer_custum_css"
                                                            id="exampleInputtext"
                                                            placeholder="PCB Name"
                                                            aria-describedby="emailHelp"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 mb-2">
                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                    Lead Time: <sup>*</sup>
                                                </label>
                                                <div className="size_active">
                                                    <div className="button">
                                                        <input
                                                            type="radio"
                                                            id="a2510"
                                                            name="check-substitution-2311"
                                                        />
                                                        <label className="btn btn-default" htmlFor="a2510">
                                                            5-7 Working Days
                                                        </label>
                                                    </div>
                                                    <div className="button">
                                                        <input
                                                            type="radio"
                                                            id="a5020"
                                                            name="check-substitution-2311"
                                                        />
                                                        <label className="btn btn-default" htmlFor="a5020">
                                                            10-14 Working Days
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                    Quantity: <sup>*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue={1}
                                                    name="from"
                                                    oninput=""
                                                    className="form__field Quantity Layer_custum_css"
                                                />
                                            </div>
                                            <div className="col-sm-6 mb-3">
                                                <div className="layout_tabs_main_chile">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label"
                                                        >
                                                            Bill of Material: <sup>*</sup>
                                                        </label>
                                                        <div id="wrapper" className="dropify-wrapper">
                                                            <input
                                                                type="file"
                                                                name="f-img"
                                                                className="form-control"
                                                            />
                                                            <div className="dropify-message">
                                                                <div className="dropify-message-1">
                                                                    <svg
                                                                        width="18px"
                                                                        height="18px"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M13 13V18.585L14.8284 16.7574L16.2426 18.1716L12 22.4142L7.75736 18.1716L9.17157 16.7574L11 18.585V13H13ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z" />
                                                                    </svg>
                                                                    <p>Drag and drop a file here or click</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-3 d-flex align-items-center justify-content-center">
                                                <div className="login_inqury">
                                                    <h4>
                                                        Please <a href="#">Login</a> to place an inquiry.
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>

    );
}

export default Service;