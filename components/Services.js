import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, 
         faGlobe,
         faPhone,
         faRouter,
         faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <div className="h-screen bg-white">
        <h1 className="flex font-black text-8xl justify-center items-center py-8">Services</h1>
        <div className="flex justify-center items-center py-6">
          <FontAwesomeIcon icon={faComputer} size="2x"/>
        </div>
        <div className="flex justify-center items-center py-6">
          <FontAwesomeIcon icon={faGlobe} size="2x"/>
        </div>
        <div className="flex justify-center items-center py-6">
          <FontAwesomeIcon icon={faPhone} size="2x"/>
        </div>
        <div className="flex justify-center items-center py-6">
          <FontAwesomeIcon icon={faRouter} size="2x"/>
        </div>        
        <div className="flex justify-center items-center py-6">
          <FontAwesomeIcon icon={faFloppyDisk} size="2x"/>
        </div>
    </div>
  )
}

export default Services