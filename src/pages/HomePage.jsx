import Body from "../components/Body";
import Card from "../components/Card";

export default function HomePage(){
    return(
        <Body alignItems={"items-end"}>
            <Card noShadow={true} extraStyles={["mx-1","mt-1","mb-5"]} width={"w-2/12"}></Card>
            <Card noShadow={true} extraStyles={["mx-1","mt-1","mb-5"]} width={"w-2/12"}></Card>
            <Card noShadow={true} extraStyles={["mx-1","mt-1","mb-5"]} width={"w-2/12"}></Card>
            <Card noShadow={true} extraStyles={["mx-1","mt-1","mb-5"]} width={"w-2/12"}></Card>
            <Card noShadow={true} extraStyles={["mx-1","mt-1","mb-5"]} width={"w-2/12"}></Card>
        </Body>
    );
}