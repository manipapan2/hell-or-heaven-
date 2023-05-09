import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Cumponents.css'

export default function NavigationBar(props) {
    return (
      <nav>
        {/* <Link to="/home" style={{backgroundColor:"red", boxShadow:"0 0 15px 0 pink"}}>home</Link> */}
        <Link to="/" className={props.hclass}>home</Link>
        <Link to="/aboutus" className={props.aclass}>about us</Link>
        <Link to="/heaven" className={props.heavenclass}>heaven</Link>
        <Link to="/hell" className={props.hellclass}>hell</Link>
      </nav>
    );
}

export function Wrapper(props){
  return(
    <div className={props.wstyle}>
      <div className={props.istyle} id={props.id}>
        {props.children}
      </div>
    </div>
  )
}

export function Crashexo() {
  useEffect(() => {
    const elementt = document.getElementById("dem");
    setInterval(function() {
      elementt.innerHTML += "Bakeri Love's Exotic" + "  ";
    }, 10);
    console.log("fd");
  }, []);

  return (
    <div className="crash">
      <p id="dem" style={{ overflowWrap: "break-word", color: "black" }}></p>
    </div>
  );
}

export function Test(){
  return(
    <div>salam</div>
    )
}