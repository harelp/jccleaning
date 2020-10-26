import React, {useRef} from 'react';
import Header from './components/Header';
import WhyUs from './components/why/WhyUs';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
function App() {
  const header = useRef();
  const services = useRef();
  const whyUs = useRef();
  const contact = useRef();

  return (
    <React.Fragment>
      <Header scrollTo={[header, services, whyUs, contact]}/>
       <Services scrollTo={services}/>
       <WhyUs scrollTo={whyUs}/>
       <Contact scrollTo={contact}/>
        <Footer />
    </React.Fragment>
  );
}

export default App;
