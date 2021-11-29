 import React from 'react'
 import Header from '../Header'
 import Footer from '../Footer'
 import HomePageImage from '../HomePageImage'
 import StoreContainer from '../StoreContainer'
 import MostWantedContainer from '../MostWantedContainer'
 
 function Home() {
     return (
         <>
             <Header/>
             <HomePageImage/>
             <HomePageImage/>
             <StoreContainer/>
             <MostWantedContainer/>
             <Footer/>
         </>
     )
 }
 
 export default Home
 