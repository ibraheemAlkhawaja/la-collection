import { useAnimation, motion, useInView ,AnimatePresence, easeIn} from "framer-motion"
import Card from "../../Components/Card/Card"
import useGet from "../../Custom Hook/useGet"
import ProductsService from "../../Services/ProductsService"
import "./Products.css"
import { useEffect, useRef, useState } from "react"
import { btnIn, btnLeft, cardIn } from "../../Utils/Motion/motion"
import { all } from "axios"
const Products = ({ Aref }) => {

const [loading ,data] =useGet(ProductsService.allProducts())
const [filterType,setFilterType]=useState("all")
const [filteredArray,setFilteredArray] = useState()


    // const [status, setStatus] = useState(false)
    // const pAnimation = useAnimation()
    // console.log(Aref)
    // const handleAnimation = () => {
    //     setStatus(!status)
    //     pAnimation.start({
    //         x: status ? 100 : 0,
    //         opacity: status ? .5 : 1
    //     })
    // }




useEffect(()=>{
if (filterType == "all"){
    setFilteredArray(data)
}
else if ( filterType == "men's clothing"){
const filter = data.filter(item => item.category == "men's clothing")
setFilteredArray(filter)
}
else if(filterType == "women's clothing"){
    const filter =data.filter(item=> item.category == "women's clothing")
setFilteredArray(filter)
}
else if(filterType == "jewelery"){
    const filter =data.filter(item=> item.category == "jewelery")
setFilteredArray(filter)
}
else if(filterType == "electronics"){
    const filter =data.filter(item=> item.category == "electronics")
setFilteredArray(filter)
}


},[filterType,data])
    return (
        <>
            <div ref={Aref} className="product">
                <div className="text-product">
                    <p>latest products</p>
                </div>
                <div className="btn-product">


                    <motion.button

                    onClick={()=>{setFilterType("all")}}
                        variants={btnIn}
                        initial="initial"
                        whileInView="animate"
                        transition={{ duration: 1 , type :"spring",stiffness: 120,mass : .5 ,damping : 5 }}

                        type="button" class="btn btn-outline-secondary">All</motion.button >
                    <motion.button
                    onClick={()=>{setFilterType("men's clothing")}}
                        variants={btnIn}
                        initial="initial"
                        whileInView="animate"
                        transition={{ duration: 1.5 , type :"spring",stiffness: 120,mass : .8 ,damping : 5 }}
                        type="button" class="btn btn-outline-secondary">Mens clothing</motion.button >
                    <motion.button
                    onClick={()=>{setFilterType("women's clothing")}}
                        variants={btnIn}
                        initial="initial"
                        whileInView="animate"
                        transition={{ duration: 2 , type :"spring",stiffness: 120,mass :1.1 ,damping : 5 }}
                        type="button" class="btn btn-outline-secondary">womens clothing</motion.button >
                    <motion.button
                    onClick={()=>{setFilterType("jewelery")}}
                        variants={btnIn}
                        initial="initial"
                        whileInView="animate"
                        transition={{ duration: 3 , type :"spring" ,stiffness: 120,mass :1.4 ,damping : 5 }}
                        type="button" class="btn btn-outline-secondary">Jewelery</motion.button >
                    <motion.button
                    onClick={()=>{setFilterType("electronics")}}
                        variants={btnIn}
                        initial="initial"
                        whileInView="animate"
                        transition={{ duration: 4, type :"spring" ,stiffness: 120,mass :1.7 ,damping : 5 }}
                        type="button" class="btn btn-outline-secondary">Electronic</motion.button>
                </div>
                <div className="container-flid card-products">
                    <div className="row row-cols-md-4 row-cols-sm-2 mx-0">
                        <AnimatePresence>
                        {filteredArray && filteredArray.map((item) => (
                            <motion.div
                            variants={cardIn}
                            initial="initial"
                            whileInView="animate"
                            // animate="animate"
                            exit="initial"
                            transition={{duration:.5,
                            }}
                             className="col mx-0 center" key={item.id} >
                                <Card img={item.image} category={item.category} price={item.price} id={item.id}/>
                            </motion.div>
                        ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products