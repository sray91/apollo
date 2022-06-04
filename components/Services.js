import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, 
         faGlobe,
         faPhone,
         faRoute,
         faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <div className="h-screen bg-white" id="services-section">
        <h1 className="flex font-black text-8xl justify-center items-center pt-36 pb-12">Services</h1>
        <div className="flex justify-center items-center h-20">
          <FontAwesomeIcon icon={faComputer} size="2x"/>
        </div>
        <div className="flex justify-center items-center h-20">
          <FontAwesomeIcon icon={faGlobe} size="2x"/>
        </div>
        <div className="flex justify-center items-center h-20">
          <FontAwesomeIcon icon={faPhone} size="2x"/>
        </div>
        <div className="flex justify-center items-center h-20">
          <FontAwesomeIcon icon={faRoute} size="2x"/>
        </div>        
        <div className="flex justify-center items-center h-20">
          <FontAwesomeIcon icon={faFloppyDisk} size="2x"/>
        </div>
    </div>
  )
}

export default Services