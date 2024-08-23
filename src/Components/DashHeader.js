import { Link } from 'react-router-dom'
import React from 'react'

const DashHeader = () => {
  const content=(
  <header className="dash-header">
    <div className="dash-header-container">
        <Link to="/dash">
            <h1 className="dash=header-title">LMS-Dashboard</h1>
        </Link>
        <nav className="dash-header-nav">
            {/**nav buttons */}
        </nav>
    </div>
  </header>
)
return content}

export default DashHeader