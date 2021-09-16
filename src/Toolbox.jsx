import React from 'react'
import './Contact.css'

const toolbox = [
  'Docker',
  'Kubectl',
  'PostgreSQL',
  'Apache Kafka',
  'Kubeflow',
  'Git',
  'Python / Go / NodeJS / Bash',
]

export default function Qualifications() {
  return (
    <div className="toolbox1">
      <div>
        <ul>
          <li className="contactlist">
            <h2>TOOLBOX</h2>
            {toolbox.map((tool) => {
              return <h6 className="toolbox">{tool}</h6>
            })}
          </li>
        </ul>
      </div>
    </div>
  )
}
