import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"




export default function App() { 
   return (
     <div className="app">
      <Header/>
      <MainContent/>
      <Footer />
     </div>
   )
}

