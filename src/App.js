import { useEffect, useState } from "react";
import Message from "./components/Message"

function App() {
  
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("I am inside useEffect")
  },[])
  return (
    <div className="flex flex-col items-center bg-yellow-500 justify-center h-screen gap-10">
      <h1 className="text-6xl">{count}</h1>
      <div className="flex items-center justify-normal gap-4">
      <button type="button" className="border border-blue-500 bg-blue-200 px-4 py-2 rounded-lg"
      onClick={() => {
        setCount(count+1)
      }}> Increment </button>
      <button type="button" className="border border-blue-500 bg-blue-200 px-4 py-2 rounded-lg"
      onClick={() => {
        setCount(count-1)
      }}> decrement </button>
      
      </div>
      {count === 10 ? <Message msg1="I have reached 10 now. Stop increments." /> : <Message msg1="I am not yet 10. Keep going."/>}
    </div>
  );
}

export default App;
