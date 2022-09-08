import { Grid, Typography, TextField, FormControl,FormControlLabel,Button,Checkbox } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { login } from "./Event/Api";

 const initialvalue={
  email:'',
  password:''
}

const Login = () => {
  const [user, setuser] = useState(initialvalue)
  const navigate = useNavigate()
  const onValueChange=(e)=>{
    setuser({...user,[e.target.name]:e.target.value})
  }
  const userlogin =async ()=>{
    let res = await login(user)
    localStorage.setItem("token",res.data.token)
    navigate('/product') 
   
  }

  return (
   
    <>
      <Grid sx={{  display: "flex",flexDirection: "column",justifyContent: "center", alignItems: 'center',marginTop:5 }}>
        <Grid>
          <Typography  variant="h4">Sign In</Typography>
        </Grid>
        <Grid container xs={12} sx={{ display: "flex", justifyContent: "center", alignItem: 'center',marginTop:5 }}>
        <Grid xs={6} item sx={{  display: "flex", flexDirection: "column",gap:3 }}>
          <FormControl>
            <Typography>Email address</Typography>
            <TextField onChange={(e)=>{onValueChange(e)}} name="email" label="Enter email" variant="outlined" />
          </FormControl>
          <FormControl>
            <Typography>Enter Password</Typography>
            <TextField onChange={(e)=>{onValueChange(e)}} name="password" label="Password" variant="outlined" />
          </FormControl>
          <FormControl>
            <FormControlLabel control={<Checkbox />} label="remember me" />
          </FormControl>
          <Button onClick={()=>userlogin()} variant="contained">Submit</Button>
          <Grid>
            
          </Grid>
        </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Login;
