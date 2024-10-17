
import React from 'react';
import Feature from './components/feature/feature';
import DigitalSoftware from './components/DigitalSoftwares/DigitalSoftware';
import SignageInfo from './components/SignageInfo/SignageInfo';
import DigitalSoftwareConsole from './components/DigitalSoftwareConsole/DigitalSoftwareConsole';
import Faq from './components/Faq/Faq';

const page = () => {
  return (
    <div>
        <Feature />
        <SignageInfo />
        <DigitalSoftware />
        <DigitalSoftwareConsole />
        <Faq />
    </div>
  )
}

export default page