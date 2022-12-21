import React from "react";


class aboutRouter extends React.Component{
    render(){
        return(
            <div >
                <div>
                    <h1>Om hvordan  ta ibruk router i en react applikasjon. </h1>
                P.s dette er min erfaring og hvordan jeg selv har kommet over det. <br></br>Nedest legger jeg ved linker til sider jeg har brukt for å lære meg dette.
                 (mulig noe er feil også, eller blir gjort på en bedre måte)
                 <p>Først er det viktig å innstallere router i prosjektet, det jeg gjorde var: stå i cmd terminalen i mappen jeg hadde laget, deretter skrev jeg 
                    <h3>install react-router-dom@6 </h3>og enter. passet derretter på at det var kommet opp i package.json filen</p>
                 <p>
                    Det jeg fort fant ut etterpå var at det er viktig å importere i index.js. Det jeg måtte importere var:  
                    <h3>
                    <ul><code>import &#123; BrowserRouter, Routes, Route &#125; from "react-router-dom"</code></ul> 
                    <ul><code>import &#123; aboutRouter  &#125; from " ./components/AboutRoute.js"</code><tt>(komponenten jeg hadde laget)</tt></ul>
                    </h3>
                 </p>

                 <p> 
                    andre ting som jeg måtte ha i index.js var: <br>
                    </br>
                    <h3>
                        {`
                        <BrowserRouter>
                            <Routes>   `}<br></br>
                               <ul>{` <Route path="/" element= {"<App/>"} ></Route>`}</ul>
                                <ul>{` <Route path="/ar" element= {"<AboutRouter />"}></Route>`}</ul>
                                {` </Routes>
                        </BrowserRouter>
                        `}<br></br>
                        </h3>
                   <p> Dette måtte innenfor render og react.StrictMode</p>
                 </p>
                 </div>
                 <div>
                    I App.js så har jeg importert: <br></br>
                    <h3>
                        <ul><code>import &#123; useNavigate &#125; from "react-router-dom"</code></ul> 
                        <ul> i function App har jeg laget en const variabel som jeg har kalt navigate = useNavigate()</ul>
                        <ul>Og denne har jeg brukt på en knapp slik : {`onClick={()=>navigate(/'ar')}`} <tt>('/ar' er path til AboutRouter.js)</tt></ul>
                    </h3>
                 </div>

                 <div>
                    Linker til nettsider jeg har brukt til dette: <br></br>

                 <a href="https://www.tutorialspoint.com/reactjs/reactjs_router.htm">En side jeg kom over ang rounting og componenter, enkel torturial</a> <br></br>
                 <a href="https://refine.dev/blog/usenavigate-react-router-redirect/"> En side jeg kom over som bruker useNavigate</a><br></br>
                 <a href="https://www.w3schools.com/react/react_components.asp"> w3schools forklaring om componenter</a>
                 <a href="https://www.youtube.com/watch?v=SLfhMt5OUPI">link til youtube video om navigasjonsbar</a>
                 </div>
                

                 
            </div>
        )
            
        

    }
}

export default aboutRouter;