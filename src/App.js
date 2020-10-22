import React from 'react';
import Header from './components/Header';
import WhyUs from './components/why/WhyUs';
import Services from './components/services/Services';
function App() {
  return (
    <React.Fragment>
      <Header />
       <Services />
       <WhyUs />
    </React.Fragment>
  );
}

export default App;
