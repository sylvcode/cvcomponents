import React from 'react'
import './Contact.css'
import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import mynd3 from './Mynd3.jpg'

const positions = [
  {
    email: 'contact@donchev.is',
    github: ['github.com/donchev7'],
    github2: ['github.com/neurocode-io'],
    mobile: '+49 176-3447-6447',
  },
]

export default function Contact() {
  return (
    <div className="contact">
      <div>
        <ul>
          {positions.map((position) => {
            return (
              <li className="contactlist">
                <img src={mynd3} className="mynd" alt="mynd" />
                <br />
                <h2>CONTACT INFO</h2>

                <h6 className="email">
                  <MdEmail /> {position.email}
                </h6>
                <h6 className="github">
                  {' '}
                  <FaGithub />{' '}
                  <a href="https://github.com/donchev7"> {position.github}</a>
                </h6>
                <h6 className="github2">
                  {' '}
                  <FaGithub />{' '}
                  <a href="https://github.com/neurocode-io">
                    {' '}
                    {position.github2}
                  </a>
                </h6>
                <h4>
                  <AiFillPhone /> {position.mobile}
                </h4>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
