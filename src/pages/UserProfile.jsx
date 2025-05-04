import Body from "../components/Body"; 
// import FormContainer from "../components/FormContainer";
import Card from "../components/Card";
import Button from "../components/Button";

export default function UserProfile(){
    return(
        <>
         <Body>
            <Card height={"h-2/4"}  width={"w-4/12"} extraStyles={["items-center","justify-center"]}>
                <img src="/images/popePic.jpg" alt="profile-pic" className="w-72 h-72 rounded-full"/>
                <p className="m-3 text-5xl">Papa Akumu</p>
                <div>
                    <Button text={"Edit Profile"} extraStyles={["m-1"]}/>
                    <Button text={"Home"} extraStyles={["m-1"]}/>
                    <Button text={"Logout"} extraStyles={["m-1"]}/>
                </div>
            </Card>
         </Body>
        </>
    );
}