import React,{useState} from "react";
import "./App.css";
import RoundedNavbar from "./components/RoundNavbar";
//import MyButton from "./components/MyButton";
import MediaCard from "./components/MediaCard";
import Counter from "./components/Counter";

function App() {
  const [isLit,setli] = useState(true);
  return (
  <>   
    <div className={`room-${isLit ? "lit" : "dark"}`} >
        <RoundedNavbar />
        <Counter/>
        <button className="de" onClick={() => setli(!isLit)}>
         flip
        </button>
        <MediaCard />            
    </div>
    </>
    );
};

export default App;
