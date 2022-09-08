import {Card,CardActionArea,CardMedia,CardContent,Typography,Button, CardActions, Grid} from "@mui/material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"
import { useGetAllProductsQuery } from "./Features/ProductsApi"
import { addToCart } from "./Features/CartSlice"


const Product =()=>{
    let token = localStorage.getItem("token")
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!token) {
            navigate("/")
        }
    }, [token])

    const {data} = useGetAllProductsQuery()
    const dispatch= useDispatch()
    const handleAddToCart= (product) =>{
        dispatch(addToCart(product))
        navigate('/cart')
    }
    return<>
    <Navbar/>
    
    
   <Grid sx={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}> {
data?.map(product => (
   
   <Card sx={{ maxWidth: 250 , marginTop: 5, marginLeft:5,width:"40vh" }}>
      <CardActionArea>
        <CardMedia
        key={product.id}
          component="img"
          height="180"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography  variant="h7" >
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary"> $
            {product.price}
           <Button size="small" variant="outlined" sx={{display:"flex", justifyContent:"center",alignItems:"center"}} onClick={()=>handleAddToCart(product)} >Add to cart</Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
))
 }</Grid>
    </>
}
export default Product