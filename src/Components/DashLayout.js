import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import React from 'react'
import DashFooter from './DashFooter'

const DashLayout = () => {
  return (
   <>
    <DashHeader/>
    <div className="dash-conainer">
      <Outlet/>
    </div>
    <DashFooter />
   </> 
  )
}

export default DashLayout