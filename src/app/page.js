
import React from 'react';
import Feature from './components/feature/feature';
import DigitalSoftware from './components/DigitalSoftwares/DigitalSoftware';
import SignageInfo from './components/SignageInfo/SignageInfo';

const page = () => {
  return (
    <div>
        <Feature />
        <SignageInfo />
        <DigitalSoftware />
    </div>
  )
}

export default page