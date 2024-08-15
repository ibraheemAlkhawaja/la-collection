import { Outlet } from "react-router-dom"
import { Header } from "./Section"

const Root =()=>{
    return(
        <>
        <Header />
        <div className="App">
            <Outlet />
        </div>
        </>
    )
}
export default Root