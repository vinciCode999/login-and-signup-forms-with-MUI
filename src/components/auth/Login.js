import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Box, Typography, TextField, Button, Alert, InputAdornment, IconButton} from '@mui/material'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const handleChange = name=>event=>{
    setValues({...values, [name]: event.target.value})
  } 

  const handleSubmit = (event)=>{
    event.preventDefault()
    if(!values.email || !values.password){
      setError("invalid email or password")
    }else{
      setError("")
      console.log(values.email)
      setValues({
        email: "",
        password: ""
      })
    }
  }

  const handleClickShowPassword = ()=>setShowPassword(!showPassword)

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '10px',
          margin: 'auto',
          width: "500px",
          maxWidth: "400px",
          marginTop: 5,
          boxShadow: "5px 5px 10px #ccc",
          padding: '10px 0px',
          ":hover":{
            boxShadow: "10px 10px 20px #ccc"
          }
        }}
      >
        <Typography 
          variant="h5" 
          sx={{fontWeight: "bold", marginTop: "10%"}}
          textAlign={"center"}>
          LOGIN
        </Typography>
        <TextField
          label='email'
          variant="standard"
          margin="normal"
          sx={{width: "70%"}}
          type="email"
          value={values.email}
          onChange={handleChange('email')}
          InputProps={{
            startAdornment:(
              <InputAdornment position="start">
                <EmailOutlinedIcon/>
              </InputAdornment>
            )
          }}
        />
        <TextField
          label='password'
          variant="standard"
          margin="normal"
          sx={{marginBottom: "5%", width: "70%"}}
          type={showPassword?"text": "password"}
          value={values.password}
          onChange={handleChange('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOffOutlinedIcon/>: <VisibilityOutlinedIcon/>}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        {error && (
          <Alert severity="error" sx={{ width: '70%', marginBottom: 2 }}>
            {error}
          </Alert>
        )}
        <Button 
          variant='contained' 
          color='warning'
          sx={{
            margin: "5px",
            borderRadius: "20px", 
            width: "50%",
            transition: "transform o.3s ease",
            ":hover": {
              transform: "scale(1.02)"
            }
          }}
          endIcon={<LoginOutlinedIcon/>}
          type="submit"
        >
          Login
        </Button>

        <Typography variant="body2" sx={{ margin: '5% 0' }}>
          Do not have an account? 
          <Link to="/signup" style={{ marginLeft: 5 }}>Signup</Link>
        </Typography>
      </Box>
    </form>
  )
}

export default Login