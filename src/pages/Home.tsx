import React, { useState } from 'react';
// import CustomApp from '../components/fetchdata/2/app';
import Banner from '../components/banner';
// import CustomApp from '../repository/accordion/1/app';
// import CustomApp from '../repository/activeclass/1/app';
// import CustomApp from '../repository/alertbuttons/1/app';
// import CustomApp from '../repository/alerts/1/app';
// import CustomApp from '../repository/animateicons/1/app';
// import CustomApp from '../repository/animatedbuttons/1/app';
// import CustomApp from '../repository/animatedsearch/1/app';
// import CustomApp from '../repository/animation/1/app';
// import CustomApp from '../repository/arrows/1/app';
// import CustomApp from '../repository/aspectratio/1/app';
// import CustomApp from '../repository/autocomplete/1/app';
// import CustomApp from '../repository/avatarimages/1/app';
// import CustomApp from '../repository/banner/1/app';
// import CustomApp from '../repository/bigheader/1/app';
// import CustomApp from '../repository/blackwhiteimage/1/app';
// import CustomApp from '../repository/blockbuttons/1/app';
// import CustomApp from '../repository/bloglayout/1/app';
// import CustomApp from '../repository/blurbackgroundimage/1/app';
import CustomApp from '../repository/bodytext/1/app';

const Home = () => {
   
  return (
    <div className='content overflow-hidden'>
         <Banner style="font-bold text-[red] text-[30px]" title="Home" desc="Aute aliqua et quis non consequat velit anim sunt. Minim nostrud aliqua adipisicing et eu aliqua cupidatat labore mollit. Laborum ea excepteur velit occaecat occaecat laboris nisi. Elit aute irure qui sit non aliquip ad proident eiusmod amet excepteur."/>
         <CustomApp/>
    </div>
  )
}

export default Home