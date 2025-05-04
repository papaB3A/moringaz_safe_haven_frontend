// I want the component to be reused in Register, Login, UserProfile, UsersList, UpdateProfile pages
export default function Card({children, height, width, extraStyles, bgdColor, padding, noShadow}){
    return(
        <>
         {/* h-4/6 w-4/12 rounded-lg p-3 flex flex-col */}
         {/* extraStyles.map((extraStyle, index)=>(extraStyle)) */}
         {/* join method, for each, map */}
         {/* #FFFFFF #F7F6F2 ..color for chatbox*/}
         <div className={`${height? height: "h-2/5"} ${width? width: "w-6/12"} rounded-lg ${padding? padding : "p-3"} flex flex-col ${extraStyles? extraStyles.join(" ") : ""}`} style={{backgroundColor: `${bgdColor? bgdColor: "#FFFFFF"}`, boxShadow: `${ noShadow ? "" : "0 0 128px 0 rgba(0,0,0,0.1), 0 32px 64px -48px rgba(0,0,0,0.5)"}` }}>
            {children}
         </div>
        </>
    );
}