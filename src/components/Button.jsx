// Golden button shared in multiple components
export default function Button({text, type, width, extraStyles, children, bgColor}){
    return(
        <>
          <button type={type? type: "button"} className={`${bgColor ? bgColor : "bg-yellow-500"} p-2 rounded-md ${width? width: ""} cursor-pointer ${extraStyles? extraStyles.join(" "): ""}`}>
            {text? text: "<Button>"}
            {children}
          </button>
          {/* <button type="button"></button> */}
        </>
    );
}