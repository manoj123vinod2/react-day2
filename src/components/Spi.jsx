import { Button, TextField, Typography } from '@mui/material'
import { set } from 'mongoose'
import React, { useState } from 'react'

const Spi = () => {

var[input,setName]=useState()
    const changeGallery=(e)=>{
        setName("Welcome to Gallery") 
    }
    var[input,setName]=useState()
    const changeHome=()=>{
        
setName("welcome to Home")
    }
    var[input,setName]=useState()
    const changeContact=()=>{
      
      setName('welcome to Contact')
  }
  


  return (
    <div style={{margin:'10%'}}>
        <Typography varient='h3'>{input}
        </Typography>
   
   <br/>
   <br/>
   
<Button onClick={changeGallery} variant="contained" color="success">

   Gallery
  </Button>
    
<Button onClick={changeHome} variant="contained" color="error">
  
  Home
</Button>  
<Button onClick={changeContact} variant="contained" color="primary">
  
    Contact us
  </Button>
    </div>
  )
}

export default Spi
