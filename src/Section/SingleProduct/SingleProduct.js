import { NavLink, useLocation, useParams } from "react-router-dom"
import "./SingleProduct.css"
import ProductsService from "../../Services/ProductsService"
import useGet from "../../Custom Hook/useGet"
import { useDispatch, useSelector } from "react-redux"
import { addproduct, increment } from "../../Redux/ProductSlice"


const SingleProduct = () => {
    const location = useLocation()
    const params = useParams()
    const [loading, data] = useGet(ProductsService.SingleProduct(params.p))

    const product =useSelector(state=>state.ProductSlice.product)
    const dispatch =useDispatch()
    return (
        <>
            <div className="singleproduct">
                <div className="container content-singleproduct">
                    <div className="row row-cols-md-2">
                        <div className="col">
                            <div className="img-singleproduct">
                                <img src={data&&data.image} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="text-singelproduct">
                                <p>{data&& data.category}</p>
                                <h3>{data && data.title}</h3>
                                <p>rating {data && data.rating.rate}</p>
                                <p>$ {data && data.price}</p>
                                <p>{data &&data.description}
                                </p>
                                <div className="btn-sinleproduct">
                                    <button type="button" class="btn btn-outline-secondary" onClick={()=>{dispatch(increment())
                                        dispatch(addproduct(data))
                                    }}>add to card</button>
                                    <button type="button" class="btn btn-outline-secondary"><NavLink to="/cart" className="navlink">go to card</NavLink></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleProduct