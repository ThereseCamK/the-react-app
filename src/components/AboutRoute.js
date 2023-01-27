import React from "react";


class aboutRouter extends React.Component{
    render(){
        return(
            <div >
                <div>
                    <h1>Om hvordan  ta i bruk router i en react applikasjon. </h1>
                P.s dette er min erfaring og hvordan jeg selv har kommet over det. <br></br>Nedest legger jeg ved linker til sider jeg har brukt for å lære meg dette.
                 (mulig noe er feil også, eller blir gjort på en bedre måte)
                 <p>Først er det viktig å innstallere router i prosjektet, det jeg gjorde var: stå i cmd terminalen i mappen jeg hadde laget, deretter skrev jeg 
                    <h3>install react-router-dom@6 </h3>og enter. passet derretter på at det var kommet opp i package.json filen</p>
                 <p>
                    Det jeg fort fant ut etterpå var at det er viktig å importere i index.js. Det jeg måtte importere var:  
                    <h3>
                    <ul><code>import &#123; BrowserRouter &#125; from "react-router-dom"</code></ul> 
                    <ul><code>import App from " ./App"</code><tt>(landingssiden)</tt></ul>
                    </h3>
                 </p>

                 <p> 
                    andre ting som jeg måtte ha i index.js var: <br>
                    </br>
                    <h3>
                        {`
                        <BrowserRouter>
                            <App> </App>
                        </BrowserRouter>
                        `}<br></br>
                        </h3>
                   <p> Dette måtte innenfor render og react.StrictMode</p>
                 </p>
                 </div>
                 <div>
                    I App.js så har jeg importert: <br></br>
                    <h3>
                        <ul><code>import &#123; Routes, Route &#125; from "react-router-dom"</code></ul> 
                        <ul><code>import &#123; Navbar &#125; from "./components/Navbar"</code><tt>(navigasjonsbaren)</tt></ul> 
                        <ul><code>import &#123; MainPage &#125; from "./components/MainPage"</code><tt>(hjem siden)</tt></ul> 
                        <ul> i function App har jeg en return </ul>
                        <p>
                            Inne i div så har jeg en div som er header, en div for navigasjonsbaren og en for der teksen endrer seg altså "hovedboksen". 
                            <br></br>
                            Slik satt jeg det opp: <br></br>
                            </p>
                            <ul> {`
                            
                            <div className="App">
                            <header className="App-header">
                              <p>
                                Therese sin react side for å lære react
                              </p>
                    
                            </header>
                            <div className='App-sidebar'>
                              <Navbar></Navbar>
                            </div>

                            <div className='App-content'> 
                            <Routes>
                              <Route path="/" element={<MainPage/> } />
                              <Route path="/ar" element={<AboutRouter />} />
                            </Routes>
                      
                           </div>
                         
                          
                          </div>
                                `}
                            </ul>
                            <br></br>
                            <p>Da bytter App-content innhold i henhold til den knappen jeg har trykket på i navbar. </p>
                            <tt>Hvordan knappene fungerer med useNavigate() (også innenfor router)  kan du finne under Om useNavigate. :) </tt>
                            
           
                        {/* <ul>Og denne har jeg brukt på en knapp slik : {`onClick={()=>navigate(/'ar')}`} <tt>('/ar' er path til AboutRouter.js)</tt></ul> */}
                    </h3>
                 </div>

                 <div>
                    Linker til nettsider jeg har brukt til dette: <br></br>

                 <a href="https://www.tutorialspoint.com/reactjs/reactjs_router.htm">En side jeg kom over ang rounting og componenter, enkel torturial</a> <br></br>
                 <a href="https://www.w3schools.com/react/react_components.asp"> w3schools forklaring om componenter</a>
      
                 </div>
                

                 
            </div>
        )
            
        

    }
}

export default aboutRouter;