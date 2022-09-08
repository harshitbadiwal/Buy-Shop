import axios from "axios";

const Login_url= "https://reqres.in/api/login"
const Product_url = "https://fakestoreapi.com/products"

export const login = async(data)=>{
    try{return await axios.post(Login_url,data)}
    catch(error){
        console.log("error while calling login api ", error.message)
    }
}

export const ProductList = async(data)=>{
    try{
        return await axios.get(Product_url)
    }
catch(error){
        console.log("error while calling ProductList api",error.message)
}
}