import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Homepage/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/contact/contact.jsx';
import Service  from './components/Services/Service.jsx';
import MyWork from './components/Work/Mywork.jsx';


function App() {
  return (
    <>
     <Navbar />
     <Home />
     <About />
     <Service/>
     <MyWork/>
     <Contact/>
    </>
  );
}


export default App;
