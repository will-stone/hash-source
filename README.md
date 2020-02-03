# DEPRECATED

This project is no longer being maintained, and I'm no longer fixing bugs. With
[the announcement](https://reacttraining.com/blog/reach-react-router-future/)
that Reach Router is being merged into React Router, this project is no longer
required and I suggest you move over to React Router. Please contact me if you
would like to adopt this project. You can also fork it on GitHub.

# Hash Source

This is an addon for [Reach Router](https://reach.tech/router) to allow you to
use hash history.

e.g.

```
example.com/#/about
example.com/#/contact
```

## Install

```sh
npm i hash-source
# or
yarn add hash-source
```

## Usage

```jsx
import { createHistory, Link, LocationProvider, Router } from '@reach/router'
import createHashSource from 'hash-source'
import React from 'react'
import ReactDOM from 'react-dom'
import About from './routes/About'
import Contact from './routes/Contact'
import Home from './routes/Home'

let source = createHashSource()
let history = createHistory(source)

const App = () => {
  return (
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
    </LocationProvider>
  )
}
```
