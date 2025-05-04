import Body from "../components/Body"; 
import Button from "../components/Button";
// import HyperText from "../components/HyperText";
import Card from "../components/Card";
import User from "../components/User";

export default function UsersList(){
    return(
        <Body>
            <Card height={"h-4/5"} width={"w-4/12"}>
                <User showStatus={false} imgWidth={"w-24"} imgPath={"/images/popePic.jpg"} message={"Active now"} userName={"Pope Benedict"}>
                    <Button text={"Home"} extraStyles={["h-3/6"]} width={"w-1/6"}/>
                    <Button text={"Logout"} extraStyles={["h-3/6"]} width={"w-1/6"}/>
                </User>
                {/* <div className="flex w-full items-center gap-4 border-gray-300 border-solid border-b p-4">
                    <img src="/images/popePic.jpg" alt="profile-pic" className="rounded-full w-24"/>
                    <div>
                        <h1 className="text-2xl font-semibold">Pope Benedict</h1>
                        <p>Active now</p>
                    </div>
                    <Button text={"Home"} extraStyles={["h-3/6"]} width={"w-1/6"}/>
                    <Button text={"Logout"} extraStyles={["h-3/6"]} width={"w-1/6"}/>
                </div> */}

                <p className="m-2 text-2xl">Select user to start chat</p>

                {/* <div className="flex w-full items-center gap-4 border-gray-300 border-solid border-b p-4">
                    <img src="/images/no-image.jpg" alt="profile-pic" className="rounded-full w-16"/>
                    <div>
                        <h1 className="text-2xl font-semibold">John Doe</h1>
                        <p>No message available</p>
                    </div>
                    <div className="rounded-full bg-green-700 w-5 h-5 ml-40"></div>
                </div> */}
                <User isActive={true} showStatus={true} userName={"Anita Kahenya"} message={"Great work Pope😂👌🏾"}/>
                <User showStatus={true} imgPath={"/images/graduationPhoto.jpg"} userName={"Ken Odhiambo"}/>
                <User isActive={true} showStatus={true} imgPath={"/images/resourcesImage2.jpg"}/>
                <User showStatus={true} imgPath={"/images/resourcesImage3.jpg"} userName={"Jasmine Nasike"} message={"Hey Cuz😂"}/>

            </Card>
        </Body>
    );
    return(
        <Body>
            <Card height={"h-4/5"} width={"w-4/12"}>
                <div className="flex w-full items-center gap-4 border-gray-300 border-solid border-b p-4">
                    <img src="/images/popePic.jpg" alt="profile-pic" className="rounded-full w-24"/>
                    <div>
                        {/* <p className="text-2xl">Pope Benedict</p> */}
                        <h1 className="text-2xl font-semibold">Pope Benedict</h1>
                        <p>Active now</p>
                    </div>
                    <Button text={"Home"} extraStyles={["h-3/6"]} width={"w-1/6"}/>
                    <Button text={"Logout"} extraStyles={["h-3/6"]} width={"w-1/6"}/>
                </div>

                <p className="m-2 text-2xl">Select user to start chat</p>

                <div className="flex w-full items-center gap-4 border-gray-300 border-solid border-b p-4">
                    <img src="/images/no-image.jpg" alt="profile-pic" className="rounded-full w-16"/>
                    <div>
                        {/* <p className="text-2xl">Pope Benedict</p> */}
                        <h1 className="text-2xl font-semibold">John Doe</h1>
                        <p>No message available</p>
                    </div>
                    <div className="rounded-full bg-green-700 w-5 h-5 ml-40"></div>
                </div>

            </Card>
        </Body>
    );
}