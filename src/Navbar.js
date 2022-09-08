import { Grid,Typography } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar =()=>{
    const navigate = useNavigate()
    
    const userlogout=()=>{
        localStorage.removeItem("token");
        navigate("/")
    }
    const usercart = ()=>{
        navigate('/cart')
    }
    const cart = useSelector((state)=> state.cart)
    console.log(cart)
 
    return <>
    <Grid className="navbar">
        <Grid >
            <div className="Header_Name">Buy Shop</div>
        </Grid>
        <Grid>
            <div className="cart">
            <span>
                <ShoppingCartIcon sx={{color:"black" , marginTop:1.5,marginLeft:1.5 }} onClick={()=>usercart()} />
                    <span  style={{color:"black", backgroundColor:"red",padding:5, borderRadius:"100%"}}>{cart && cart.cartItems.length}</span>
                    </span>
                <LogoutIcon sx={{color:"black" , marginTop:1.5 , marginLeft:2}} onClick={()=>userlogout()} />
            </div>
            
        </Grid>
</Grid>
    </>
}
export default Navbar