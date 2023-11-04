import React,{useState} from "react";
import '../App.css';

function Counter(){
    const [num, setnum] = useState(0);
    return(
        <>
            <div className="counter">
                <button className="des" onClick={()=>setnum(num-1)}>Decrease</button>
                   {num}
                <button className="inc" onClick={()=>setnum(num+1)}>Increase</button>
            </div>
        </>
    );
}
export default Counter;