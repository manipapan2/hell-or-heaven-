import "./Crashexo.css"

import { useEffect } from "react";

export default function Crashexo() {
  useEffect(() => {
    // document.querySelector("body").style.position="none"
    const element = document.getElementById("demo");
    setInterval(function() {
      element.innerHTML += "Bakeri Love's Exotic" + "  ";
    }, 10);
  }, []);

  return (
    <div className="ds">
      <p id="demo" style={{ overflowWrap: "break-word",color:"black"}}></p>
    </div>
  );
}
