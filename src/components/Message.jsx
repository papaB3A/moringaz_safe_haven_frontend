// this component is dynamic for sent and received message

export default function Message(){
    return(
        <>
         <p className="text-center text-2xl mx-1">
            No messages are available. Once you send messages they will appear here.
         </p>
        </>
        // <>
        //     <div className="h-1/6 text-white flex justify-end items-center mt-5" style={{width: "95%"}}>
        //         {/* h-4/5  w-1/6 p-4 Hi there my love*/}
        //         <div className="bg-gray-700 py-4 px-7 text-center rounded-t-3xl rounded-bl-3xl">Hi there my love...I've missed you</div>
        //     </div>
            
        //     <div className="h-1/6 text-gray-700 flex justify-start items-center mt-5" style={{width: "95%"}}>
        //         {/* h-4/5  w-1/6 p-4 Hi there my love*/}
        //         <div className="flex ml-6 gap-3">
        //             <img src="/images/popePic.jpg" alt="profile-pic" className="rounded-full w-16"/>
        //             <div className="bg-white py-4 px-7 text-center rounded-t-3xl rounded-br-3xl">Hey sweet cheeks...OMG I missed you too</div>
        //             {/* <div className="py-4 px-7 text-center rounded-t-3xl rounded-br-3xl" style={{backgroundColor: "#FFFFFF"}}>Hey sweet cheeks...OMG I missed you too</div> */}
        //         </div>
        //     </div>
        // </>
    );
}