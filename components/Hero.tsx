"use client"
import Button from "./Button";
import ScrollCard from "./ScrollCard";

export default function Hero(){
    return (
        <div className="h-screen bg-[#60CDFF] w-screen flex flex-col">
            <div className="flex justify-center items-center pt-16">
                <Button text="Personal" type="color" onClick={()=>{}}/>
            </div>
            <div className="text-5xl md:text-8xl font-extrabold text-center leading-tight tracking-tighter pt-12">
                Pay, send, and save
                <div className="text-5xl  md:text-8xl font-extrabold text-center tracking-tighter">
                    smarter
                </div>
            </div>
            <div className="flex justify-center items-center pt-20 ">
                <ScrollCard />
            </div>
        </div>
    )
}