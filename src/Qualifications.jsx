import React from 'react'
import './Contact.css'
import { VscCircleOutline } from 'react-icons/vsc'
const positions = [
  {
    qualification:
      'Very good knowledge of cloud offerings and how to develop cloud applications',
    qualification2: 'Strong kubernetes expertise',
    qualification3:
      'Implementing domain-driven design with microservice architecture',
    qualification4:
      'Experienced with interpreted languages including NodeJS and Python',
    qualification5: 'Experienced with compiled languages (Go and Java)',
    qualification6:
      'Experienced with all things data. Streaming, schemas, schemaless',
    qualification7:
      'Power user of the Linux system (at work and at home from a young age)',
  },
]

export default function Qualifications() {
  return (
    <div className="contact">
      <div>
        <ul>
          {positions.map((position) => {
            return (
              <li>
                <h2>CORE QUALIFICATIONS</h2>

                <h6 className="qualification">
                  {' '}
                  <VscCircleOutline /> {position.qualification}
                </h6>
                <h6 className="qualification">
                  {' '}
                  <VscCircleOutline /> {position.qualification2}
                </h6>
                <h6 className="qualification">
                  {' '}
                  <VscCircleOutline /> {position.qualification3}
                </h6>
                <h6 className="qualification">
                  {' '}
                  <VscCircleOutline /> {position.qualification4}
                </h6>
                <h6 className="qualification">
                  {' '}
                  <VscCircleOutline /> {position.qualification5}
                </h6>
                <h6 className="qualification">
                  {' '}
                  <VscCircleOutline /> {position.qualification6}
                </h6>
                <h6 className="qualification">
                  {' '}
                  <VscCircleOutline /> {position.qualification7}
                </h6>
                <h4>{position.mobile}</h4>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
