// import Input from "./components/Input";
// import Button from "./components/Button";
// import Body from "./components/Body";
// import Onboarding from "./components/Onbording";
// import HyperText from "./components/HyperText";

import { createContext } from "react";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import UsersList from "./pages/UsersList";
import ChatBox from "./pages/ChatBox";
import HomePage from "./pages/HomePage";

export const InputFieldsContext= createContext(); 

export default function App(){
  // const inputFields= [
  //   {label: "First Name", type: "text", placeholder: "First Name", name: "fname"},
  //   {label: "Last Name", type: "text", placeholder: "Last Name", name: "lname"},
  //   {label: "Email Address", type: "email", placeholder: "Enter your email", name: "email"},
  //   {label: "Password", type: "password", placeholder: "Enter new password", name: "password"},
  //   {label: "Select Image", type: "file", placeholder: "Enter new password", name: "image"},
  // ];
  const inputFields= [
    {label: "First Name", type: "text", placeholder: "First Name", name: "fname"},
    {label: "Last Name", type: "text", placeholder: "Last Name", name: "lname"},
    {label: "Email Address", type: "email", placeholder: "Enter your email", name: "email"},
    {label: "Password", type: "password", placeholder: "Enter new password", name: "password"},
    {label: "Select Image", type: "file", placeholder: "Enter new password", name: "image"},
  ];

  return(
    <>
      <InputFieldsContext.Provider value={inputFields}>
        {/* <Register/> */}
        {/* <Login/> */}
        {/* <EditProfile/> */}
      </InputFieldsContext.Provider>
      {/* <UserProfile/> */}
      {/* <UsersList/> */}
      {/* <ChatBox/> */}
      <HomePage/>
    </>
  );

  // return(
  //   <>
  //    {/* <Input/> */}
  //    {/* <Button/> */}
  //    {/* <Body/> */}

  //    <Body>
  //     <Onboarding>
  //       {/* <Input label={"Email Address"} type={"email"} placeholder={"Enter your email"}/>
  //       <Input label={"Password"} type={"password"} placeholder={"Enter new password"}/> */}
  //       {inputFields.map((inputField, index)=>(
  //         <Input label={inputField.label} type={inputField.type} placeholder={inputField.placeholder} name={inputField.name} key={`inputField${index}`}/>
  //       ))}
  //       <Button/>
  //       <HyperText/> 
  //     </Onboarding>
  //    </Body>
  //    {/* <Body></Body> */}
  //   </>
  // );
}

// export default function App(){
//   return(
//     <h1 class="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   );
// }

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
