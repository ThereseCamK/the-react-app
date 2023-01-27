
 import { useMatch, useResolvedPath } from "react-router-dom";
 import { useNavigate } from 'react-router';
 export default function Navbar() {
    const navigate = useNavigate();
    return (
      <nav className="nav">
     
        <button onClick={()=> navigate('/')} className="btn"><CustomLink to="/">Hjem</CustomLink></button>
        <button  onClick={()=> navigate('/ar')} className="btn"><CustomLink to="/ar">Om Routing</CustomLink></button>
        <button  onClick={()=> navigate('/aun')} className="btn"><CustomLink to="/aun">Om useNavigate</CustomLink></button>
        
        
      
      </nav>
    )
  }
  
  function CustomLink({ to, children}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  //children er teksten på knappen (hjem, Om Routing)
  //to er pathName (/, /ar)

    return (

    <div className={isActive ? "active" : ""} to={to} >
        {children}
    </div>
    )
  }