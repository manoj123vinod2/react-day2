import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[name,setName]  =useState("ps")
    const changename = () =>{
      console.log("button clkd");
      setName("nivu")
    }
  return (
    <div>
      <Typography varient='h2'>My name is  {name}</Typography>
      <Button varient='contained' onClick={changename}>change</Button>
    </div>
  )
}

export default StateBasics

