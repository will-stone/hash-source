import { createHistory, Link, LocationProvider, Router } from '@reach/router'
import React from 'react'
import ReactDOM from 'react-dom'
import createHashSource from './dist/createHashSource'
import About from './routes/About'
import Contact from './routes/Contact'
import Home from './routes/Home'

let source = createHashSource()
let history = createHistory(source)

ReactDOM.render(
  <LocationProvider history={history}>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </header>

    <hr />

    <Router>
      <Home path="/" />
      <About path="about" />
      <Contact path="contact" />
    </Router>
  </LocationProvider>,
  document.getElementById('root')
)
