import { useNavigate } from "react-router-dom"
import "./Card.css"
const Card = (props) => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate(`/${props.id}`,
            {
                state: {
                    ID: props.id
                }
            }
        )
    }
    return (
        <>
            <div class="card">
                <img src={props.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.category}</h5>
                    <p class="card-text">${props.price}</p>
                    <button 
                    onClick={onClick}
                    // onClick={onClick}
                        type="button" class="btn btn-outline-secondary">Buy Now</button>
                </div>
            </div>
        </>
    )
}
export default Card