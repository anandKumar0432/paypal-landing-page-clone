"use client"
import Button from "./Button";

export default function Hero(){
    return (
        <div className="h-screen bg-[#60CDFF] w-screen">
            <div className="flex items-center justify-center pt-16">
                <Button text="Personal" type="color" onClick={()=>{}}/>
            </div>
            <div className="text-5xl md:text-8xl font-extrabold text-center leading-tight tracking-tighter pt-12">
                Pay, send, and save
                <div className="text-5xl  md:text-8xl font-extrabold text-center tracking-tighter">
                    smarter
                </div>
            </div>
            <div></div>
        </div>
    )
}