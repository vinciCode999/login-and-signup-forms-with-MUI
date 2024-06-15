import React, {useState} from 'react'
import {Box, Typography, TextField, Button, Alert, InputAdornment, IconButton} from '@mui/material'
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
//import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { signup } from '../../routes/auth-routes';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const navigate = useNavigate()

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = name=>event=>{
    setValues({...values, [name]: event.target.value})
  } 

  const validateUsername = (username) => {
    const regex = /^[A-Za-z](?!.*(.)\1{2})[A-Za-z0-9]*$/;
    return regex.test(username)
  }

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email)
  }

  const handleValidation = ()=>{
    if (values.username.length < 3 || values.username.length > 15) {
      setError("username can only have a minimum of 3 and maximum of 15 characters");
      return false;
    } else if (!validateUsername(values.username)) {
      setError("please provide a valid username");
      return false;
    } else if (!validateEmail(values.email)) {
      setError("please provide a valid email");
      return false;
    } else if (values.password.length < 6) {
      setError("password should be at least 6 characters.");
      return false;
    } else if (values.password !== values.confirmPassword) {
      setError("confirm password and password do not match");
      return false;
    } else {
      setError("");
      // Perform your signup logic here
      return true;
    }
  }
  const handleSubmit = async(event)=>{
    event.preventDefault()
      if(handleValidation()){
        try{
          const response = await axios.post(signup, {
            username: values.username,
            email: values.email,
            password: values.password
          })
          console.log(response.data)
          navigate('/')
        }catch(error){
          switch(error.response){
            case 400:
              setError("invalid input. please check your data.");
              break;
            case 409: 
              setError("email or username already exists.");
              break;
            default: 
              setError("unexpected error occured please try again later.");
          }
        }
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
          width: "500px",
          maxWidth: "400px",
          margin: 'auto',
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
          Sign Up
        </Typography>
        <TextField
          label='username'
          variant="standard"
          margin="normal"
          sx={{width: "70%"}}
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
          sx={{width: "70%"}}
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
          sx={{width: "70%"}}
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
          sx={{marginBottom: "5%", width: "70%"}}
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