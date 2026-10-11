import { useState, useCallback, useEffect } from 'react';
import NetflixPreloader from './components/NetflixPreloader';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Featured from './components/Featured';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
function App(){const [loading,setLoading]=useState(()=>!window.matchMedia('(prefers-reduced-motion: reduce)').matches);const finish=useCallback(()=>setLoading(false),[]);useEffect(()=>{const timeout=setTimeout(finish,3000);return()=>clearTimeout(timeout)},[finish]);return <><a className="skip-link" href="#projects">Skip to projects</a>{loading&&<NetflixPreloader onComplete={finish}/>}<Nav/><CustomCursor/><main className="bg-[#050505] min-h-screen text-white selection:bg-red-600 selection:text-white"><Hero/><Featured/><About/><Expertise/><Skills/><Projects/><Contact/></main><Footer/></>}
export default App;
