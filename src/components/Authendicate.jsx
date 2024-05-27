import { useRef, useState } from "react"
import Menu from "./Menu"
import { CgLockUnlock } from "react-icons/cg";


function Authendicate() {
  const [pin ,setPin]=useState(["","","",""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const [pincorrect,setPincorrect]=useState(false);
  const password="7653";
  localStorage.setItem("password",password);
  const handleChange = (index, event) => {
    const value = event.target.value;
    const regex = /^[a-zA-Z]+$/;
    if(regex.test(value)){
      console.log("true")
    }else{
      if(value>9){

      }else{
 if(index === 3 && value>9 ){
      console.log(index)
    }else{
      if (value.length >= 1 && inputRefs[index + 1]) {
        inputRefs[index + 1].current.focus();
      }
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin); 
    }
      }
   
  }
    
  };

  const handleArrowKeys = (event, index) => {
    if (event.key === "ArrowRight" && inputRefs[index + 1]) {
      event.preventDefault();
      inputRefs[index + 1].current.focus();
    } else if (event.key === "ArrowLeft" && inputRefs[index - 1]) {
      event.preventDefault();
      inputRefs[index - 1].current.focus();
    } else if (event.key === "Backspace" && index > 0) {
      event.preventDefault();
      const newPin = [...pin];
      newPin[index] = "";
      setPin(newPin); 
      inputRefs[index - 1].current.focus();
    }
  };



  function handleSubmit()
  {
    const newpin=pin.join("");
    const check=localStorage.getItem("password");
    if(check===newpin)
    {
      localStorage.setItem("authendicate",true);
      setPincorrect(true);
    }
    else
    {
      
    }
  };
  if(pincorrect)
  {
    return <Menu/>;
  }
  return (
    <div className="h-screen flex items-center justify-center bg-blue-600 ">
      <div className="flex flex-col items-center bg-white py-10 px-20 rounded-2xl">
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRug7n4fvr-HQ0gCenzJeO5pwP6OD5SF3zXLQ&s" style={{height:"45px"},{width:"42px"}}></img> */}
      <CgLockUnlock  size={40}/>
      <h3  className=" font-bold my-2 text-2xl"> Enter the pin </h3>
      <div className="flex gap-1 mt-2">
        {pin.map((value,index) =>(  
          <input 
          key={index} 
          type={"tel"}
          min="0"
          max="9"
          ref={inputRefs[index]}
          className="border border-black text-center rounded-md focus:border-blue-500 outline-none"
          style={{ height: "45px", width: "42px" }}
          value={value}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleArrowKeys(event, index)}
          
          />
        ))}
      </div>
      <div>
        <button className=" font-bold mt-4 text- px-10 py-2 bg-blue-500 px-4 rounded-xl text-center text-white border border-white" onClick={handleSubmit}>SUBMIT</button>
      </div>
      </div>
    </div>
  )
}

export default Authendicate