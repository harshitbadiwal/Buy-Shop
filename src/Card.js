import {Card,CardActionArea,CardMedia,CardContent,Typography,Button, CardActions, Grid} from "@mui/material"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProductList } from "./Event/Api"

const Cards=()=>{
  const navigate = useNavigate()
  const [productList, setproductList] = useState([])


  useEffect(() => {
    getProductDetails()
}, [])
const getProductDetails = async (data) => {
  let response = await ProductList(data)
  setproductList(response.data)
}

const userCart=()=>{
navigate('/cart')
}

    return<>

   <Grid> {
productList.map(productData => (
   <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={productData.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography  variant="h7" >
            {productData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productData.price}
           <Button size="small" color="primary" onClick={()=>userCart()}>Add to cart</Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
))
 }</Grid>
   
</>
}
export default Cards