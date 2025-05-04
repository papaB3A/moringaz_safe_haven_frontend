// Background body shared in Login and SignUp
// import Onboarding from "./Onbording";

import { useState } from "react";

export default function Body({children, justifyContent, alignItems}){
// export default function Body(){
    // const [fileName, setFileName]= useState("");

    // const handleFileChange= (e)=>{
    //     let file= e.target.files[0];
    //     if(file){
    //         setFileName(file.name);
    //     }
    // }
    return(
        <>
         <div className={`bg-gray-100 h-full w-full flex ${justifyContent ? justifyContent : "justify-center"} ${alignItems ? alignItems : "items-center"} shadow-lg text-lg`}>
            {/* <Onboarding/> */}
            {children}
            {/* <input type="file" name="" id="" onChange={handleFileChange}/> */}
            {/* <p>No file choosen</p> */}
            {/* <p>{fileName? fileName: "No file choosen"}</p> */}
         </div>
        </>
    );
}
// bg-black  bg-gray-200