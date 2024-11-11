import {resolve} from "path";

export default async function About(){
    await new Promise((resolve)=>{
        setTimeout(resolve, 3000);

    });
    return(
        <div className="flex-col bg-green-200 text-center h-screen text-3xl" >All you want to know about us
        <h1 className="flex-col items-center justify-center"></h1>

        </div>
    );

}