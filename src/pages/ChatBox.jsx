import Body from "../components/Body"; 
import Button from "../components/Button";
// import HyperText from "../components/HyperText";
import Card from "../components/Card";
import User from "../components/User";
import Message from "../components/Message";
import Input from "../components/Input";
import * as Icon from 'react-bootstrap-icons';

export default function ChatBox(){
    return(
        <Body>
            {/*gap-21 justify-evenly justify-around*/}
            <Card height={"h-4/5"} width={"w-4/12"} bgdColor={"#F7F6F2"} padding={"p-0"} extraStyles={["gap-21"]}>
              <div className="flex">
                <div style={{backgroundColor: "#FFFFFF"}} className="border-gray-300 border-solid border-b flex items-center w-1/12 rounded-t-lg">
                   <a href="#"><Icon.ArrowLeftShort size={50} color="#000000"/></a>
                </div>
                <User showStatus={false} message={"Active now"} extraStyles={["rounded-t-lg"]} width={"w-11/12"}/>
              </div>

              <div className="messages flex flex-col gap-8 h-3/4 justify-center">
                <Message/>
              </div>

              {/* If there are meesages use this commented section */}
              {/* <div className="messages flex flex-col gap-8 h-3/4">
                <Message/>
              </div> */}

              {/* <div className="w-full" style={{backgroundColor: "#FFFFFF"}}>
                <Input type={"text"} placeholder={"Enter message"}/>
              </div> */}
              <form className="w-full h-2/12 rounded-b-lg flex items-center justify-center" style={{backgroundColor: "#FFFFFF"}}>
                <Input type={"text"} placeholder={"Enter message"} width={"w-3/4"}/>
                {/* <Button type={"submit"} text={"Send"} extraStyles={["rounded-tl-none", "rounded-bl-none"]}/> */}
                <Button type={"submit"} text={true} extraStyles={["rounded-tl-none", "rounded-bl-none", "ml-1"]} bgColor={"bg-gray-500"} padding={"p-1"}>
                  <Icon.SendFill size={30} color="#FFFFFF"/>
                </Button>
              </form>
            </Card>
        </Body>
    );
}