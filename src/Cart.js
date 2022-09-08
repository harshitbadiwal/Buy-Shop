import { Grid, Typography ,TableHead ,TableCell,Button,Table,styled,styledTable,Box,CardContent,TextField,Card,CardMedia, TableBody} from "@mui/material"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { Delete } from "@mui/icons-material"
import {useSelector,useDispatch} from "react-redux"
import { getTotals, removeFromCart } from "./Features/CartSlice"

const StyledTable = styled(Table)
    `width:90%;
margin:25px auto 0 auto
`

const Cart =()=>{
    const cart = useSelector((state)=> state.cart)
const dispatch = useDispatch()

 const [total, setTotal] = useState()

useEffect(()=>{
    dispatch(getTotals())
    },[cart,dispatch])

    useEffect(()=>{
       let totalItem = 0
        if(cart.cartItems){
            
            for (let i = 0; i < cart.cartItems.length; i++) {
                totalItem = totalItem + cart.cartItems[i].price *cart.cartItems[i].cartQuentity
                
            }
            setTotal(totalItem)
        }
        
        },[cart,dispatch])
   

    const handleRemoveFromCart=(cartItem)=>{
          dispatch(removeFromCart(cartItem))
          
    }
    return <>
    <Navbar/>
       
    <Grid  sx={{display:"flex" , alignItems:"center" , justifyContent:"center"}}> 
    <Typography variant="h4">Shopping Cart</Typography>
    </Grid>
    <div>
    <Typography sx={{display:"flex" , alignItems:"center" , justifyContent:"center"}}>{cart && cart.cartItems.length} item in your cart</Typography>
    </div>
    
<Grid>
  <Grid sx={{display:"flex",justifyContent:"center",alignItem:"center", marginTop:3}}>
  <Grid sx={{display:"flex",alignItem:"center", justifyContent:"center" }}>
    <Typography></Typography>
    </Grid>
    <Grid sx={{display:"flex",alignItem:"center", justifyContent:"center", marginRight:20}}>
        <Typography>Product Name</Typography>
    </Grid>
    <Grid sx ={{display:"flex",alignItem:"center", justifyContent:"center",marginLeft:35,marginRight:-25}}>
        <Typography>Price</Typography>
    </Grid>
    <Grid sx={{display:"flex",alignItem:"center", justifyContent:"center", marginLeft:50}}>
        <Typography>Quentity</Typography>
    </Grid>
  </Grid>
            <TableBody>
            
                {cart.cartItems?.map(cartItem => (
                    <TableBody>
                    
                    <TableCell>
         <CardMedia
    component="img"
    sx={{ width: 151 }}
    image={cartItem.image}
    alt="Live from space album cover"
  />
  </TableCell>
 
        <TableCell>
         <Typography sx={{ display: 'flex',flex: '1 0 auto'  }} component="div" variant="h5">
           {cartItem.title}
          </Typography>
          </TableCell>
          <TableCell>
          <Typography sx={{ display: 'flex',flex: '1 0 auto', marginRight:10  }} variant="subtitle1" color="text.secondary" component="div">
             ${cartItem.price*cartItem.cartQuentity}
          </Typography>
          </TableCell>
        
     
       <TableCell>
        <TextField variant="outlined"  sx={{display:'flex',alignItem:"center", justifyContent:"center",width:"7vw",marginRight:13}} value={cartItem.cartQuentity} />
        </TableCell>
        <TableCell>
        <Grid  sx={{display:'flex',alignItem:"center", justifyContent:"center" ,margintop:2,flex: '1 0 auto',marginRight:5 }}>
        <Delete  onClick={()=>handleRemoveFromCart(cartItem)}  />
      </Grid>
      </TableCell>
   
  
    </TableBody>
    ))
    }
    </TableBody>
    </Grid>
    
    <Grid sx={{display:"flex" , justifyContent:"flex-end",marginTop:5}}>
        <Typography variant="h4" sx={{display:"flex", marginTop:5}}>Total Amount</Typography>
        <Typography variant="h5" sx={{diaplay:"flex ", marginRight:10}}> $ {total} </Typography>
        
    </Grid>
    <Grid sx={{ width:"90%",display:"flex" , justifyContent:"flex-end"}}>
    <Button variant="contained" >Check Out</Button>
    </Grid>
    </>
}
export default Cart