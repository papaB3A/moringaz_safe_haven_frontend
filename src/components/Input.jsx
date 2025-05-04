// Input field shared in multiple components
import { useState } from "react";

export default function Input({label, type, placeholder, name, width}){
    const [fileName, setFileName]= useState("");

    const handleFileChange= (e)=>{
        let file= e.target.files[0];
        if(file){
            setFileName(file.name);
        }
    }

    if(name === 'lname' || name === 'fname'){
        return(
            // <div className={`inputField w-2/6 flex flex-col my-5 ${name === 'fname' && 'ml-2'}`}>
            // ${name === 'lname' ? 'ml-2' : ''}
            <div className={`inputField w-5/12 flex flex-col my-5 text-lg ${name === 'lname' ? 'ml-20' : ''}`}>
                <label htmlFor={name}>{label}</label>
                <input type={type} name={name} 
                    className="p-2 border-gray-300 border-solid border rounded-md" 
                    placeholder={placeholder} 
                    required
                />
            </div>
        );
    }else if(name === 'image'){
        // const [fileName, setFileName]= useState("");
        return(
            <div className={`inputField w-full flex my-5 text-lg`}>
                {/* <label htmlFor={name}>{label}</label> */}
                <label htmlFor="file" className="bg-gray-100 border-black border-solid border p-1 rounded-md text-center w-36">{label}</label>
                <input type={type} name={name} 
                    className="" 
                    placeholder={placeholder} 
                    style={{display:'none',}}
                    id="file"
                    onChange={handleFileChange}
                    accept="image/x-png,image/gif,image/jpeg,image/jpg"
                    required
                />
                {/* <p className="ml-3 w-6/12">no-image.jpg</p> */}
                {/* {fileName && (
                    <p className="ml-3 w-6/12">{fileName}</p>
                )} */}
                {/* {fileName? <p className="ml-3 flex-grow">{fileName}</p> : <p className="ml-3 flex-grow">No file chosen</p> } */}
                <p className="ml-3 flex-grow">{fileName? fileName: "No file chosen"}</p>
            </div>
        );
    }
    return(
        <>
            {/* { name === 'lname' || name === 'fname' && (
                <div className="inputField w-3/6 flex flex-col my-5">
                    <label htmlFor={name}>{label}</label>
                    <input type={type} name={name} 
                        className="p-2 border-gray-300 border-solid border rounded-md" 
                        placeholder={placeholder} 
                    />
                </div>
            )} */}

            {/* { name !== 'lname' || name !== 'fname' && (
                <div className="inputField w-full flex flex-col my-5">
                    <label htmlFor={name}>{label}</label>
                    <input type={type} name={name} 
                        className="p-2 border-gray-300 border-solid border rounded-md" 
                        placeholder={placeholder} 
                    />
                </div>
            )} */}

            <div className={`inputField ${width? width: "w-full"} flex flex-col my-3 text-lg`}>
                <label htmlFor={name}>{label}</label>
                <input type={type} name={name} 
                    className="p-2 border-gray-300 border-solid border rounded-md" 
                    placeholder={placeholder} 
                    required
                />
            </div>
        </>
    );
}

// type...name...id...placeholder will be dynamic