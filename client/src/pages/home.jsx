import React from 'react';
import Header from '../components/header';
import CallTo from '../components/callTo';
import PriceSect from '../components/PriceSect';
import Usage from '../components/usage';
import Slider from '../components/slider';
import Footer from '../components/Footer';

import NewHome from '../components/newHome';
import CTA2 from '../components/Cta2';
import CtA3 from '../components/CTA3';
import Cta4 from '../components/cta4';
import Navigation from '../components/navigation';




function home() {

  return (
    <div>
      
      <Navigation/>
        <NewHome />
        <CtA3/>
        <Cta4 />
        <CallTo />
        <PriceSect />
        <Usage />
        <Slider />
        <CTA2 />
        <Footer />
       
      
      
    </div>
  )
}

export default home
