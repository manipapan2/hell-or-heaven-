import { Wrapper } from "../Cumponents/Cumponents";
import "./Aboutus.css"

export default function About() {
  return (

    <Wrapper wstyle="wrapper2" istyle="myImage2">
      <div className="pPosition">
          <a href="https://www.instagram.com/manipapan2/" target="_blank" rel="noreferrer" className="sA">instagram :</a>
          <a href="https://www.instagram.com/manipapan2/" target="_blank" rel="noreferrer">manipapan2</a>
          <br />
          <a href="https://mail.google.com" target="_blank" rel="noreferrer" className="sA">gmail :</a>
          <a href="https://mail.google.com" target="_blank" rel="noreferrer">manipapan2@gmail.com</a>
          <p style={{color:"black"}}>thanks to</p>
          <hr />
          <a href="https://mail.google.com" target="_blank" rel="noreferrer" className="sA">gmail :</a>
          <a href="https://mail.google.com" target="_blank" rel="noreferrer">Farhad.dev.contact@gmail.com</a>
          <p style={{color:"black"}}>AND ThANKS TO</p>
          <hr />
          <a href="https://instagram.com/burny_souls?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" className="sA">Instagram :</a>
          <a href="https://instagram.com/burny_souls?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">Burny_Souls</a>
        </div>
    </Wrapper>
  );
}
