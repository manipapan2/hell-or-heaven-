import {useNavigate} from 'react-router-dom';
import { useEffect } from "react";
import { Wrapper } from '../Cumponents/Cumponents';
import "./Home.css"





export default function Home(){

    useEffect(() => {
        // document.querySelector("body").style.position="fixed"
        const gorbe = document.getElementById("gorbe")
        // document.getElementById("container").style.height=window.innerHeight + "px"
        // var wo = window.innerWidth + 100
        // console.log(window.innerWidth,wo)
        gorbe.style.transform="translateX(" + 100 + "px)"
        gorbe.style.display="flex"
    
    }, [])
    


    const navigate = useNavigate();

    const randomizer = () => {
        const nameValue = document.getElementById("nameValue").value
        const lastNameValue = document.getElementById("lastNameValue").value
        const random = Math.floor(Math.random() * 2)

    if(nameValue === 'baran' && lastNameValue === 'pazoki' || nameValue === 'mani' && lastNameValue === 'papan' ||
     nameValue === 'ilia' && lastNameValue === 'akbari' || nameValue === 'raouf' && lastNameValue === 'sharifi' ||
     nameValue === 'farhad' && lastNameValue === 'gholami'  )
     {
        // navigate("/heaven")
        navigate("/heaven");
    }

    else if(nameValue === 'arshia' ){
        navigate("/hell");
    }


    else if( nameValue === 'd42MEM$%(asd3323d$1sad&@DJ' && lastNameValue === 'dfj^&$(3245'){
        console.log("ff");
        const fullscreenDiv = document.createElement("div");
        fullscreenDiv.classList.add("full")
        document.body.appendChild(fullscreenDiv);
        const crash = document.createElement("div");
        crash.classList.add("crash")
        fullscreenDiv.appendChild(crash);
        setInterval(function() {
                crash.innerHTML += "Bakeri Love's Exotic" + "  ";
            }, 10);
        
    }


    else if( nameValue === '' || lastNameValue === ''){
        alert('pls fill the box')
    }
    
    else{
        if(random === 1){
            navigate("/heaven");
        }
        if(random === 0){
            navigate("/hell");
        }
    }

    }
      
    return(
        <>

        <Wrapper wstyle="wrapper" istyle="myImage">
                <div className="inputHolder">
                    <label htmlFor="firstInput">Your Name</label>
                    <input type="text" placeholder="dont be shy :)" id="nameValue" name="firstInput" autoCorrect="off" autoSave="off" autoComplete="off"/>
                    <label htmlFor="secondInput">Your Last Name</label>
                    <input type="text" name="secondInput" placeholder="here..." id="lastNameValue" autoCorrect="off" autoSave="off" autoComplete="off"/>
                    <button onClick={randomizer}></button>
                </div>
        </Wrapper>




        <div className="positionCome">
            <p className="comeId">come a little closer then u see</p>
            <p>name:d42MEM$%(asd3323d$1sad&@DJ</p>
            <p>lastname:dfj^&$(3245</p>
        </div>

        <div className="container" id='container'>
            <div className="gorbe" id="gorbe"></div>
        </div>
        </>
    )
}

setInterval(() => {
    const time = new Date()
    console.log(time)
}, 1000);

let times = setInterval(() => {
    const time = new Date()
    if (time.getHours() === 23 && time.getMinutes() === 41) {
        gorbee()
      }
}, 1000);


// function crashexo(){
//     const elementt = document.getElementById("dem");
//     setInterval(function() {
//       elementt.innerHTML += "Bakeri Love's Exotic" + "  ";
//     }, 10);
//       console.log("fd")
//     return(
//         <div className='crash'>
//             <p id="dem" style={{ overflowWrap: "break-word",color:"black"}}></p>
//         </div>
//     )
// }


function gorbee()
{
    const gorbe = document.getElementById("gorbe")
    clearInterval(times)
    // console.log("yo")
    gorbe.style.transition = "5s"
    gorbe.style.transform="translateX(0px)"
    setTimeout(() => {
        gorbe.style.backgroundImage="url(/img/gorbe.gif)"
    }, "5000");

    setTimeout(() => {
        gorbe.style.backgroundImage="url(/img/gorbe.png)"
    }, 11500);

    setTimeout(() => {
        gorbe.style.transform="translateX(" + 100 +"px)"
    }, 14000);
}