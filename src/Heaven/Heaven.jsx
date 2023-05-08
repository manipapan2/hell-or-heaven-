import { Wrapper } from "../Cumponents/Cumponents"
import { useEffect } from "react";
import "./Heaven.css"
export default function Heaven(){
    useEffect(() => {
        const myimage33 = document.getElementById("myImage3");
        for (let i = 0; i < 8; i++) {
            var randoms = Math.random() * (1.5 - 0.7) + 0.7;
            var bal = document.createElement("div");
            bal.style.scale = randoms;
            bal.classList.add("bali");
            var x = Math.floor(Math.random() * (myimage33.offsetWidth - 100));
            var y = Math.floor(Math.random() * (myimage33.offsetHeight - 100));
            bal.style.left = x  + "px";
            bal.style.top = y  + "px";
            myimage33.append(bal);
        }
    }, []);

    return(
        <Wrapper wstyle="wrapper3" istyle="myImage3" id="myImage3">
            <p>welcome to heaven</p>
        </Wrapper>
    )
}