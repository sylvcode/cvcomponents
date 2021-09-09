import React from 'react'
import './Education.css'
import { IoMdSchool } from 'react-icons/io'

const positions = [
  {
    school: 'University of Erlangen-Nuremberg',
    title: 'M.Sc. Information and Communication Engineering',
    date: '2015-2013',
  },
  {
    school: 'Reykjavik University',
    title: 'B.Sc. Mechatronics and Automation Engineering',
    date: '2007-2010',
  },
]

export default function Education() {
  return (
    <div className="card-body">
      <h5>
        {' '}
        <IoMdSchool /> EDUCATION
      </h5>
      <ul className="timeline">
        {positions.map((position) => {
          return (
            <li className="event" date-date={position.date}>
              <h6 className="maintitle">{position.school}</h6>
              <h4>{position.title}</h4>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
