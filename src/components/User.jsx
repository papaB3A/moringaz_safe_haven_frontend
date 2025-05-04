export default function User({isActive, showStatus, children, imgWidth, userName, message, imgPath, extraStyles, width, padding}){
    return(
        <div className={`flex ${width ? width : "w-full"} items-center gap-4 border-gray-300 border-solid border-b ${padding ? padding : "p-4"} ${extraStyles? extraStyles.join(" ") : ""}`} style={{backgroundColor: "#FFFFFF"}}>
            <img src={imgPath? imgPath : "/images/no-image.jpg"} alt="profile-pic" className={`rounded-full ${imgWidth? imgWidth : "w-16"}`}/>
            <div>
                {/* <p className="text-2xl">Pope Benedict</p> */}
                <h1 className="text-2xl font-semibold">{userName? userName : "Jane Doe"}</h1>
                <p>{message? message: "No message available"}</p>
            </div>
            <div className={`rounded-full ${isActive? "bg-green-700" : "bg-gray-400"} w-4 h-4 ml-40 ${showStatus? "" : "hidden"}`}></div>
            {children}
        </div>
    );
}