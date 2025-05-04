import Body from "../components/Body"; 
// import Onboarding from "../components/Onbording";
import FormContainer from "../components/FormContainer";
import Input from "../components/Input";
import Button from "../components/Button";
import HyperText from "../components/HyperText";
import Card from "../components/Card";

import { useContext } from "react";
import { InputFieldsContext } from "../App";

export default function Register(){
    const inputFields= useContext(InputFieldsContext);

    return(
        <Body>
            <Card height={"h-4/5"} width={"w-4/12"}>
                <FormContainer>
                    {/* <Input label={"Email Address"} type={"email"} placeholder={"Enter your email"}/>
                    <Input label={"Password"} type={"password"} placeholder={"Enter new password"}/> */}
                    {inputFields.map((inputField, index)=>(
                        <Input label={inputField.label} type={inputField.type} placeholder={inputField.placeholder} name={inputField.name} key={`inputField${index}`}/>
                    ))}

                    <img src="/images/no-image.jpg" alt="" className="w-28 mb-3 rounded-full"/>

                    <Button text={"Continue to Home Page"} type={"submit"} width={"w-full"}/>
                    <HyperText texts={["Already signed up?", "Login now"]}/> 
                </FormContainer>
            </Card>
        </Body>
    );
    // return(
    //     <Body>
    //         <Onboarding>
    //             {/* <Input label={"Email Address"} type={"email"} placeholder={"Enter your email"}/>
    //             <Input label={"Password"} type={"password"} placeholder={"Enter new password"}/> */}
    //             {inputFields.map((inputField, index)=>(
    //                 <Input label={inputField.label} type={inputField.type} placeholder={inputField.placeholder} name={inputField.name} key={`inputField${index}`}/>
    //             ))}
    //             <Button/>
    //             <HyperText/> 
    //         </Onboarding>
    //     </Body>
    // );
}