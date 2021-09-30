import React from 'react'
import './App.css'
import Contact from './Contact'
import Career from './Career'
import Education from './Education'
import Qualifications from './Qualifications'
import Toolbox from './Toolbox'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Career />
            {}
            <Education />
          </div>
          <div className="col-6 col-md-4">
            <br />
            <Contact />
            <br />
            <Qualifications />
            <br />
            <Toolbox />
          </div>
        </div>
      </div>
    </div>
  )
}
