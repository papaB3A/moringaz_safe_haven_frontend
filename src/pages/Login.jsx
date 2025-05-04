import Body from "../components/Body"; 
// import Onboarding from "../components/Onbording";
import FormContainer from "../components/FormContainer";
import Input from "../components/Input";
import Button from "../components/Button";
import HyperText from "../components/HyperText";
import Card from "../components/Card";

import { useContext } from "react";
import { InputFieldsContext } from "../App";

export default function Login(){
    // const inputFields= useContext(InputFieldsContext);
    // const loginInputFields= inputFields.filter((element)=> element.name !== "fname" && element.name !== "lname" && element.name !== "image");
    const loginInputFields= useContext(InputFieldsContext).filter((element)=> element.name !== "fname" && element.name !== "lname" && element.name !== "image");

    return(
        <Body>
            <Card height={"h-3/6"} width={"w-4/12"}>
                <FormContainer>
                    {/* <Input label={"Email Address"} type={"email"} placeholder={"Enter your email"}/>
                    <Input label={"Password"} type={"password"} placeholder={"Enter new password"}/> */}
                    {/* {inputFields.map((inputField, index)=>(
                        <Input label={inputField.label} type={inputField.type} placeholder={inputField.placeholder} name={inputField.name} key={`inputField${index}`}/>
                    ))} */}
                    {loginInputFields.map((field, index)=>(
                        <Input label={field.label} type={field.type} placeholder={field.placeholder} name={field.name} key={`inputField${index}`}/>
                    ))}
                    <Button text={"Continue to Home Page"} type={"submit"} width={"w-full"} extraStyles={["mt-6"]}/>
                    <HyperText texts={["Not yet signed up?","Signup now"]}/> 
                </FormContainer>
            </Card>
        </Body>
    );
}