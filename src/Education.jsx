import React from 'react'
import './App.css'
import { IoMdSchool } from 'react-icons/io'

const positions = [
  {
    school: 'University of Erlangen-Nuremberg',
    title: 'M.Sc. Information and Communication Engineering',
    date: '2013-2015',
  },
  {
    school: 'Reykjavik University',
    title: 'B.Sc. Mechatronics and Automation Engineering',
    date: '2007-2010',
  },
]

export default function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="card-body">
          <h5>
            {' '}
            <IoMdSchool /> EDUCATION
          </h5>
          <ul className="timeline">
            {positions.map((position) => {
              return (
                <li className="event" data-date={position.date}>
                  <h6 className="maintitle">{position.school}</h6>
                  <h4>{position.title}</h4>
                  <ul></ul>
                </li>
              )
            })}
            {}
          </ul>
        </div>
      </div>
    </div>
  )
}
