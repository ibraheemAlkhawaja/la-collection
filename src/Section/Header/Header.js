import { NavLink } from "react-router-dom";
import "./Header.css";
import { IoPersonAddSharp } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6"; 
import { useDispatch, useSelector } from "react-redux";
const Header =()=>{
  const count =useSelector(state =>state.ProductSlice.count)
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">la collection</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/product">product</NavLink>
        </li>
        <li class="nav-item">
          <NavLink >about</NavLink>
        </li>
        <li class="nav-item">
          <NavLink>contact</NavLink>
        </li>
      </ul>
      <div className="navbar-icons">
        <ul className="navbar-nav ms-auto">
          <li className="nav-icon">
            <NavLink to="/SignIn"><div className="icon"><FiLogIn /></div> login</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-icon">
            <NavLink to="/Register"><div className="icon"><IoPersonAddSharp size={15}/></div> register</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-icon">
            <NavLink to="/Cart"><div className="icon"><FaCartShopping /> </div>cart(<span> {count}  </span>)</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}
export default Header