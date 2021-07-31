import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Login";
function App() {
  return (
    <>
        <p style={{display:"flex",justifyContent:"center",paddingTop:"100px"}}><h5 style={{fontSize:"200%",fontFamily:"Archivo Black, sans-serif",color:"#5a6dce"}}>Stackfindover</h5></p>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Login />
          </div>
          <a href="https://www.facebook.com/" style={{ textDecoration: "none",display:"flex",justifyContent:"center",paddingBottom:"400px",alignItems:"center"  }}><span style={{color:"#888a95"}}> Don't have an account?</span> Sign up</a>
        </div>
      
    
    </>

  );
}

export default App;