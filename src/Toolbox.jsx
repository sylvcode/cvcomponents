import React from 'react'
import './Contact.css'

const positions = [
  {
    tool1: 'Docker',
    tool2: 'Kubectl',
    tool3: 'PostgreSQL',
    tool4: 'Apache Kafka',
    tool5: 'Kubeflow',
    tool6: 'Git',
    tool7: 'Python / Go / NodeJS / Bash',
  },
]

export default function Qualifications() {
  return (
    <div className="toolbox1">
      <div>
        <ul>
          {positions.map((position) => {
            return (
              <li>
                <h2>TOOLBOX</h2>

                <h6 className="toolbox">{position.tool1}</h6>
                <h6 className="toolbox">{position.tool2}</h6>
                <h6 className="toolbox">{position.tool3}</h6>
                <h6 className="toolbox">{position.tool4}</h6>
                <h6 className="toolbox">{position.tool5}</h6>
                <h6 className="toolbox">{position.tool6}</h6>
                <h6 className="toolbox">{position.tool7}</h6>
                <h4>{position.mobile}</h4>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
