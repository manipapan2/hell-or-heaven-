import { Link } from 'react-router-dom';
import './Cumponents.css'

export default function NavigationBar() {
    return (
      <nav>
        {/* <Link to="/home" style={{backgroundColor:"red", boxShadow:"0 0 15px 0 pink"}}>home</Link> */}
        <Link to="/">home</Link>
        <Link to="/aboutus">about us</Link>
        <Link to="/heaven">heaven</Link>
        <Link to="/hell">hell</Link>
      </nav>
    );
}

export function Wrapper(props){
  return(
    <div className={props.wstyle}>
      <div className={props.istyle}>
        {props.children}
      </div>
    </div>
  )
}