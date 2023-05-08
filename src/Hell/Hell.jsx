import { useEffect } from 'react';
import { Wrapper } from "../Cumponents/Cumponents";
import "./Hell.css";

export default function Hell(){
    useEffect(() => {
        const myimage33 = document.getElementById("myImage3");
        for (let i = 0; i < 8; i++) {
            var randoms = Math.random() * (1.5 - 0.7) + 0.7;
            var atish = document.createElement("div");
            atish.style.scale = randoms;
            atish.classList.add("helli");
            var x = Math.floor(Math.random() * (myimage33.offsetWidth - 100));
            var y = Math.floor(Math.random() * (myimage33.offsetHeight - 100));
            atish.style.left = x  + "px";
            atish.style.top = y  + "px";
            myimage33.append(atish);
        }
    }, []);

    return(
        <Wrapper wstyle="wrapper3" istyle="myImage3" id="myImage3">
            <p>welcome to hell</p>
        </Wrapper>
    )
}
