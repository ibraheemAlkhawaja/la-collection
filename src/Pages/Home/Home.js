import "./Home.css"
import img1 from "../../Assets/img/pexels-maliphoto-734726200-19845036-removebg-preview.png"
import { Products, SingleProduct } from "../../Section"
import {motion, useInView, useScroll, useTransform} from "framer-motion"
import { fadeIn } from "../../Utils/Motion/motion"
import { useEffect, useRef, useState } from "react"
const Home = () => {
//     const ref = useRef()
//     const {scrollYProgress} = useScroll({
//         target:ref,
//         offset: ["start start" ,"end start"]
//     })
// const scale = useTransform(scrollYProgress , [0,1] , [1 ,2])
// const opacity = useTransform(scrollYProgress , [0,1] , [1,0])



//     const isView = useInView(ref)
// const [count ,setCount] = useState(0)
//     useEffect(()=>{
// if(isView){
//     setInterval(()=>{
// setCount(count+1)
//     },1000)
// }
// console.log(count)
//     },[count])
    return (
        <>
        <div 
        // ref={ref}
         className="hero">
            <div className="content-hero">
                <motion.h1
                // style={{
                //     scale,
                //     opacity
                // }}
                variants={fadeIn}
                initial="initial"
                // animate="animate"
                transition={{
                    duration:1
                }}
                whileInView="animate"
                >new season arrivals</motion.h1>
                <motion.p
                variants={fadeIn}
                whileInView="animate"
                initial="initial"
                // animate="animate"
                transition={{
                    duration:1,
                    delay:.5
                }}
                >check out all the trends</motion.p>
            </div>
            <div className="img-hero">
                <img src={img1} />
            </div>
        </div>
        {/* <SingleProduct /> */}
        <Products  
        // Aref={ref}
        />
        </>
    )
}
export default Home