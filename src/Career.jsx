import React from 'react'
import Intro from './Intro'
import './Career.css'

import { BsFillBriefcaseFill } from 'react-icons/bs'

const positions = [
  {
    title: 'AI Architect (CEO)',
    company: 'neurocode I/O GmbH',
    date: '05/2020',
    features: [
      'Big and small projects mainly NLP and recommender systems',
      'From prototyping to production',
      'Customers included Ergo Group and Daimler',
    ],
  },
  {
    title: 'DevOps Engineer (Freelancer)',
    company: 'TIER mobility GmbH',
    date: '06/2020 - 11/2020',
    features: [
      'Architected the infrastrucutre and security needed to pivot from an IaaS application to a containerized kubernetes application',
      'Delivered the application in a highly regulated environment with many restrictions (HSM integration, mTLS communication between services, fraud alerts,...)',
      'Microservices on top of Istio and kubernetes',
    ],
  },
  {
    title: 'Data Engineer (Freelancer)',
    company: 'Vaillant Group Business Services GmbH',
    date: '07/2019 - 11/2019',
    features: [
      'Help the IoT team implement a platform for data ingestion & data analysis',
      'Building a streaming data pipeline on top of Apache Kafka',
      'Introduced best practices around workloads in kubernetes and streaming applications',
      'Wrote a ReactJS dashboard for recommendating spare parts',
    ],
  },

  {
    title: 'Lead Developer (Freelancer)',
    company: 'TOMcode GmbH',
    date: '03/2019 - 07/2019',
    features: [
      'Wrote azure infrastructure provisioning / automation microservices using Go',
      'The solution was used by KAPSCH in their autoticket project for the german government',
      'By a click of a button the customer was able to provision a kubernetes environment with all necessary infrastructure components',
    ],
  },

  {
    title: 'Lead Developer (Freelancer)',
    company: 'Yunar.de (a product by Deutsche Bank)',
    date: '03/2018 - 03/2019',
    features: [
      'Architected an event-driven application with microservices using event sourcing and CQRS',
      'Wrote NodeJS microservices for the multibank aggregation bounded context',
      'Wrote the logging library for the microservices in order to standardize the logging between services',
      'Designed and implemented the authentication part of the application using Keycloak and Oauth2',
    ],
  },
  {
    title: 'Data Engineer (Freelancer)',
    company: 'Continental Automotive GmbH (Eschborn)',
    date: '09/2017 - 03/2018',
    features: [
      'Designed a serverless data ingestion platform on AWS',
      'Architected and implemented a solution regarding data governance and IAM',
      'Adopted CKAN a Python based data portal software',
    ],
  },
  {
    title: 'Cloud Engineer (Freelancer)',
    company: 'Hughes Network Systems GmbH',
    date: '01/2016 - 09/2017',
    features: [
      'Designed a centralized fault tolerant monitor system for 100.000 network devices using syslog-ng, Apache Kafka and PostgreSQL on AWS cloud',
      'Designing a dashboard / reporting system for customers hosted on AWS',
      'Monitoring the health of the network by running self-developed system scripts',
      'Production services and build pipline ran in Kubernetes, 3 Kubernetes clusters in total. Jenkins was utilized for CI and CD',
    ],
  },
  {
    title: 'Systems Engineer',
    company: 'Nova ehf',
    date: '01/2010 - 06/2014',
    features: [
      'Designed a high availability KPI system using QlikView and MS SQL',
      'Developed automization scripts for tasks performed by department members',
      'Monitoring the health of the network by running self-developed system scripts',
      'Designed a monitoring system that displayed network alarms (minor, major, critical) on Google Earth',
    ],
  },
]

export default function Career() {
  return (
    <div className="container">
      <div className="row">
        <div className="card-body">
          <Intro />
          <h5>
            {' '}
            <BsFillBriefcaseFill /> CAREER HISTORY
          </h5>
          <ul className="timeline">
            {positions.map((position) => {
              return (
                <li className="event" data-date={position.date}>
                  <h6 className="maintitle">{position.title}</h6>
                  <h4>{position.company}</h4>
                  <ul>
                    {position.features.map((feature) => (
                      <li>{feature}</li>
                    ))}
                    {}
                  </ul>
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
