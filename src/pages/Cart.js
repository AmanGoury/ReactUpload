import Header from "./Header";
import emtyCart from '../pages/../assets/img/empty/emptyCart.png'
import {Link} from "react-router-dom"
import { useState, useEffect } from 'react'

function Cart() {
    const [cart, setCart] = useState([])
    const [product, setProduct] = useState([])
    let totalCart=0
    // const [count, setCount] = useState([])
    
    let ImgUrl = "https://admin.makemybizdchub.in/image/"

    const token = localStorage.getItem("token")
    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log(token, "token for cart")


        fetch('https://admin.makemybizdchub.in/ViewCart', {
            headers: {
                Authorization: `${token}`
            }
        }
        ).then((res) => res.json()).then((data) => {
            // console.log(data,"value of cart")
            console.log(data, 'data')
            setCart(data.message)


            // console.log(cart)

            // const catdata = data.message.map((item) => {
            //     // setCount(item.quantity)
            //     console.log(item.quantity, "item  data")
            //     // console.log(count, "item count data")


            // })
            // const levelUp = cart.filter((item) => {
            //     setProduct(item.product)
            //     // console.log(product)

            // })

            // setProduct(cart.product)
            // console.log(product,"filter data")

        })
    }, [])



    const incrementCount = (id) => {

        console.log(cart, "cart value")



        setCart(cart => cart.map((item) => {
            console.log(item.quantity)
            return id === item.id ? { ...item, quantity: item.quantity + 1 } : item

        }
        ))



    }

    function decrementCount(id) {
        setCart(cart => cart.map((item) => {
            console.log(item.quantity)
            return id === item.id ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) } : item
        }
        ))
    }

    const [table, setTable] = useState('')

    const updateCart = () => {
        let dfgfdgd = cart.map((item) => {
            return (item.product.map((result) => {

               return setTable(result.price * item.quantity)

            }))
        })

        console.log(dfgfdgd,"cart table")
    }

    return (<>
        
        {token ?
        <>
        <div className="container mt-5">
            <h1 className="text-start"> Cart</h1>

            <table className="table table-hover " style={{ border: '1px solid whiteSmoke' }}>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        totalCart +=item.price*item.quantity
                        return (
                            <tr>

                                <td style={{ cursor: 'pointer ', fontSize: '1.5rem', }}>×</td>


                                {item.product.map((result) => {
                                    return (
                                        <>
                                            <td> <img src={ImgUrl + result.image} alt="" style={{ width: '100px' }} /> </td>
                                            <td>{result.title}</td>
                                            <td id="totalPrice">{result.price}</td>
                                        </>
                                    )
                                })}


                                <td ><span className="btn  btn-primary" onClick={() => incrementCount(item.id)}>+</span> <span>{item.quantity}</span>  <span className="btn  btn-primary" onClick={() => decrementCount(item.id)}>-</span> </td>
                                <td>{item.product.map((result) => {
                                    return (
                                        result.price * item.quantity
                                    )
                                })}</td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
            <div>
                <button onClick={() => updateCart()}>Update</button>
            </div>

        </div>
        <div className="container">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <h3>Cart Totals</h3>
                    <table cellspacing="0" className="shop_table shop_table_responsive">

                        <tbody>
                            <div>

                                <tr className="cart-subtotal">
                                    <th>Subtotal</th>

                                    <td data-title="Subtotal" style={{ marginLeft: '100%' }}><span className="woocommerce-Price-amount amount "><bdi><span className="woocommerce-Price-currencySymbol">₹</span>{totalCart}</bdi></span></td>
                                </tr>
                                <tr className="order-total">
                                    <th>Total</th>
                                    <td data-title="Total"><strong><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>375.00</bdi></span></strong> </td>
                                </tr>
                            </div>

                        </tbody></table>
                </div>
            </div>
        </div>
    </>
        :
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <img src={emtyCart} alt=""  style={{width:'500px'}}/>
                </div>
                <div className="col-md-3">
                </div>
                <h1><span className="text-primary">Ooops!</span> Your cart is empty <span className="text-danger">Please add some Products</span></h1>
                 
                <button className="btn btn-primary mt-5 mb-5" >Go to Products</button>
                
            </div>
        </div>
        }
    </>
    );
}

export default Cart;