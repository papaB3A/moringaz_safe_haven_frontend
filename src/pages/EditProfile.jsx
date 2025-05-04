import Body from "../components/Body"; 
import FormContainer from "../components/FormContainer";
import Input from "../components/Input";
import Button from "../components/Button";
// import HyperText from "../components/HyperText";
import Card from "../components/Card";

import { useContext } from "react";
import { InputFieldsContext } from "../App";

export default function EditProfile(){
    const inputFields= useContext(InputFieldsContext);

    const editInputFields= inputFields.filter((element)=>element.name!=="password")
    return(
        <Body>
            <Card height={"h-4/6"} width={"w-4/12"}>
                <FormContainer heading={"Edit Profile"}>
                    {editInputFields.map((inputField, index)=>(
                        <Input label={inputField.label} type={inputField.type} placeholder={inputField.placeholder} name={inputField.name} key={`inputField${index}`}/>
                    ))}

                    <img src="/images/no-image.jpg" alt="" className="w-28 mb-5 rounded-full"/>

                    {/* <Button text={"Update"} type={"submit"} width={"w-1/5"}/> */}
                    <div className="flex w-full items-baseline">
                      <Button text={"Update"} type={"submit"} width={""}/>
                      <a href="#" className="ml-1 underline">Back to Profile</a>
                    </div>
                    {/* <HyperText texts={["Already signed up?", "Login now"]}/>  */}
                </FormContainer>
            </Card>
        </Body>
    );
}