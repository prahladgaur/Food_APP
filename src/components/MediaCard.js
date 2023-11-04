/* eslint-disable jsx-a11y/alt-text */
import React ,{ useState } from "react";
import "./Mybutton.css";

function MediaCard() {
 
    const title= "Codectopus";
    const body = "This is futurewebsite";
    const imageUrl=
        "https://media.licdn.com/dms/image/D5603AQHPzwUGnVU9RQ/profile-displayphoto-shrink_400_400/0/1696476995911?e=1703721600&v=beta&t=1htTx3BCDer9iv1y-q4kcTNjCFlM1Z87mKztn7vyFy4";
    
    
    
    const [isLit,setli] = useState(true);
        
    return (<>
     <h2>{title}</h2>
     <p>{body}</p>
     <img src={imageUrl}/>
     
<div className={`room-${isLit ? "lit" : "dark"}`} >
    hello
    <button onClick={() => setli(!isLit)}>
flip
</button>
      </div>
     
  </>)
}
export default MediaCard;