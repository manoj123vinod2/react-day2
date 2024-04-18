import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Counter = () => {
 var[count,setCount]=useState(0)
    return (
    <div style={{margin:'10%'}}>
      <Typography variant='contained'>{count}</Typography><br/>
      <Button variant='contained' onClick={()=>setCount(count+1)}><ArrowUpwardIcon></ArrowUpwardIcon></Button>
      <Button variant='contained' onClick={()=>setCount(count-1)}><ArrowDownwardIcon></ArrowDownwardIcon></Button>
    </div>
  )
}

export default Counter
