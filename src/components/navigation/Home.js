 import React from 'react'
 import Header from '../Header'
 import Footer from '../Footer'
 import HomePageImage from '../HomePageImage'
 import StoreContainer from '../StoreContainer'
 import MostWantedContainer from '../MostWantedContainer'
 import HomepageWoman01 from '../../images/HomepageWoman01.png'
 import HomepageMan01 from '../../images/HomepageMan01.png'

 
 function Home() {
     return (
         <>
             <Header/>
             <HomePageImage imageSource={HomepageMan01} imageAlt="Shop Men's Collection Image"/>
             <HomePageImage imageSource={HomepageWoman01} imageAlt="Shop Women's Collection Image"/>
             <StoreContainer/>
             <MostWantedContainer/>
             <Footer/>
         </>
     )
 }
 
 export default Home
 