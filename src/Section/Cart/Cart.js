import { useSelector } from "react-redux"
import "./Cart.css"
import { useEffect, useState } from "react"
const Cart =()=>{
    const product =useSelector(state =>state.ProductSlice.product)

                const price =product.map(item=>item.price)
                const [addPrice,setNewPrice] =useState(price)
                const [count ,setCount] =useState(1)
                const hadelEditPrice =()=>{
                    setNewPrice(+addPrice + +price)
                    setCount(count+1)
                }

                const decrementPrice =()=>{
                    setNewPrice(+addPrice - +price)
                    setCount(count-1)
                }

    return(
    <>
    {product &&product.map((item ,i)=>{
    return(
            <div className="cart">
            <div className="container-fluid">
                <div className={count == 0 ? "row row-cols-md-2 row-cols-1 head" : "row row-cols-md-2 row-cols-1"}>
                    <div className="col">
                        <div className="img-cart">
                            <img src={item.image} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-cart">
                            <h3>{item.title}</h3>
                            <p>${addPrice} / {count}</p>
                            <div className="btn-cart">
                            <button type="button" class="btn btn-outline-dark" onClick={decrementPrice}>-</button>
                            <button type="button" class="btn btn-outline-dark" onClick={hadelEditPrice}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )}
    )}

    </>)
}
export default Cart