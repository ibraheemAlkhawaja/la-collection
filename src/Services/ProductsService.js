import { PublicAxios } from "./AxiosHandler"

class ProductsService{
    static endPoint = "/products"
    static allProducts(){
        return PublicAxios.get(`${ProductsService.endPoint}`)
    }
    static limitedProducts(limit){
        return PublicAxios.get(`${ProductsService.endPoint}?limit=${limit}`)
    }
    static SingleProduct(num){
        return PublicAxios.get(`${ProductsService.endPoint}/${num}`)
    }

} 
export default ProductsService