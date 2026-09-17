// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//   <div className="App">
//       <header className="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//    );
// }

// export default App;



import './App.css';
import Rlogo from './Rlogo.jpg';
import Rohanlogo from './Rohan.jpeg';

function App() {
  return (
  <>
  <nav className ="Navbar"> 
    <div className ="logo">
      <img className ="img" src={Rlogo} alt="logo"/> 
    </div>
                
    <div className ="links">
      <div className ="items"><a href="#home">HOME</a></div>
      <div className ="items"><a href="#skill">SKILL</a></div>
      <div className ="items"><a href="#education">EDUCATION</a></div>
      <div className ="items"><a href="#about">ABOUT</a></div>
    </div>
             
  </nav> 

  <section id="home">
            <div class="home-content">
                <div class="home-text">
                    <h1>Hi,I'm Rohan Baroliya</h1>

                    <h2>Computer Science Student</h2>

                    <p> 
                        I am a CSE student interested in Web Development Programming and Technology
                    </p>

                    <button>View My Work</button>
                </div>

                <div class=" home-image">
                  <img src={Rohanlogo} alt="Rohan"/>
                </div>
            </div>
        
        </section>

  </>
  
 );
}
export default App;

