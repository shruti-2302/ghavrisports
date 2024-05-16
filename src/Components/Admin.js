import React, { useState } from 'react'
import Dashboard from './Dashboard';

import Login from './Login'


export default function Admin() {
    const [open,setopen]=useState(false)
  return (
    <div>
      {
      open ?  < Dashboard open={open} setopen={setopen}/> : <Login  open={open} setopen={setopen} />

    }
    </div>
  )
}