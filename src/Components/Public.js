import { Link } from "react-router-dom";

import React from 'react'

const Public = () => {
  const content =(
    <section className="public">
        <header>
          <h1> Welcome to LMS</h1>
        </header>
        <main className="public_main">
            <h1>random text</h1>
        </main>
        <footer>
        <Link to="/login">Login</Link>
        </footer>
    </section>
  ) 
  return content
}

export default Public