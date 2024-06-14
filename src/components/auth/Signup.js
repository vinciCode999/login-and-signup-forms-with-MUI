import React, {useState} from 'react'
import {Box, Typography, TextField, Button, Alert, InputAdornment, IconButton} from '@mui/material'
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
//import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { Link } from 'react-router-dom'


const Signup = () => {
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

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
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
    }
  }

  const handleClickShowPassword = ()=> setShowPassword(!showPassword)
  const handleClickShowConfirmPassword = ()=> setShowConfirmPassword(!showConfirmPassword)
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
          marginTop: 5,
          boxShadow: "5px 5px 10px #ccc",
          padding: '10px 0px',
          ":hover":{
            boxShadow: "10px 10px 20px #ccc"
          }
        }}
        maxWidth={400}
      >
        <Typography 
          variant="h5" 
          sx={{fontWeight: "bold", marginTop: "10%"}}
          textAlign={"center"}>
          Sign Up
        </Typography>
        <TextField
          label='username'
          variant="standard"
          margin="normal"
          sx={{width: "50%"}}
          type="text"
          value={values.username}
          onChange={handleChange('username')}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PortraitOutlinedIcon/>
              </InputAdornment>
            )
          }}
        />
        <TextField
          label='email'
          variant="standard"
          margin="normal"
          sx={{width: "50%"}}
          type="email"
          value={values.email}
          onChange={handleChange('email')}
          InputProps={{
            startAdornment: (
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
          sx={{width: "50%"}}
          type={showPassword ? "text" : "password"}
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

        <TextField
          label='confirm password'
          variant="standard"
          margin="normal"
          sx={{marginBottom: "5%", width: "50%"}}
          type={showConfirmPassword ? "text" : "password"}
          value={values.confirmPassword}
          onChange={handleChange('confirmPassword')}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                >
                  {showConfirmPassword ? <VisibilityOffOutlinedIcon/>: <VisibilityOutlinedIcon/>}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        {error && (
          <Alert severity="error" sx={{ width: '50%', marginBottom: 2 }}>
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
          type="submit"
          endIcon={<HowToRegOutlinedIcon/>}
        >
          SIGN UP
        </Button>

        <Typography variant="body2" sx={{ margin: '5% 0'}}>
          Already have an account?
          <Link to="/login" style={{ marginLeft: 5 }}>Login</Link>
        </Typography>
      </Box>
    </form>
  )
  
}

export default Signup