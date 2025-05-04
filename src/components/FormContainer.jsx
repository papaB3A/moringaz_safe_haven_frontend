// Card component shared in Login and Register pages
// import Input from "./Input";

// import Card from "./Card";
// export default function Onboarding({children}){
export default function FormContainer({children, heading}){
  return(
    <>
      {/* <Card height={"h-4/6"} width={"w-4/12"}> */}
        <h1 className="border-gray-300 border-solid border-b p-2 text-3xl font-bold text-center">{heading? heading: "Moringa's Safe Haven"}</h1>

        <form action="#" className="flex flex-wrap">
          {children}
        </form>
      {/* </Card> */}
    </>
  );
    // return(
    //     <>
    //      {/* <div className="h-4/6 w-4/12 rounded-lg p-3" style={{backgroundColor: "#FFFFFF", boxShadow: '0 0 128px 0 rgba(0,0,0,0.1), 0 32px 64px -48px rgba(0,0,0,0.5)' }}> */}
    //      <div className="h-4/6 w-4/12 rounded-lg p-3 flex flex-col" style={{backgroundColor: "#FFFFFF", boxShadow: '0 0 128px 0 rgba(0,0,0,0.1), 0 32px 64px -48px rgba(0,0,0,0.5)' }}>
    //        <h1 className="border-gray-300 border-solid border-b p-2 text-3xl font-bold text-center">Moringa's Safe Haven</h1>

    //        <form action="#" className="flex flex-wrap">
    //         {/* <Input/> */}
    //         {children}
    //        </form>
    //      </div>
    //     </>
    // );
}