export default function HyperText({texts}){
    return(
        // <div className="link w-full my-5 flex justify-center text-lg">
        //    Already signed up? <a href="#" className="underline ml-1">Login now</a>
        // </div>
        <div className="link w-full my-5 flex justify-center text-lg">
           {texts[0]} <a href="#" className="underline ml-1">{texts[1]}</a>
        </div>
    );
}