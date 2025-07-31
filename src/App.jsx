import React from "react";
import { LoadingScreen } from "./components/loading";
import { Navbar } from "./components/navbar";
import { MobileMenu } from "./components/mobleMenu";
import { Home } from "./components/sections/home";
import { About } from "./components/sections/about";
import { Skills } from "./components/sections/skills";
import { Projects } from "./components/sections/projects";
import { Contact } from "./components/sections/contact";

function App(){
  const[isLoaded , setIsLoaded] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState( false) ;

  return(
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded (true)} />}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
          <Navbar menuOpen={menuOpen} setMenuOpen = {setMenuOpen}></Navbar>
          <MobileMenu menuOpen={menuOpen} setMenuOpen = {setMenuOpen} ></MobileMenu>
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
        </div>
    </>
  )
}
export default App;