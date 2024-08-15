import { animate } from "framer-motion"

export const fadeIn = {
initial:{
    y:-100,
    opacity:0,
    rotate:"90deg"
},
animate:{
    y:0,
    opacity:1,
    rotate:"0deg"
}
}

export const btnIn ={
    initial :{
        y : 120 ,
        opacity : 0 ,

    },
    animate : {
        y: 0,
        opacity :1,
    }
}
export const cardIn = {
    initial :{
        y:200,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1
    }
}
