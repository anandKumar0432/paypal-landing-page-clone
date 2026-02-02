"use client"

import Button from "./Button";
import Logo from "./Logo";

export default function NavBar(){

    const header = [
        {title: "Personal"},
        {title: "Business"},
        {title: "Advertiser"},
        {title: "Developer"}
      ]
    
      return (
        <div className="h-20 w-screen flex items-center bg-white" style={{ fontFamily: 'var(--font-inter)' }}>
          <div className="flex justify-around items-center w-full">
              <div className="flex justify-center items-center">
                  <div className="pr-3">
                    <div className=" p-1 h-14 w-14 hover:cursor-pointer border border-transparent hover:border-gray-300 rounded-xl">
                      <Logo />
                    </div>
                  </div>
                  <div className="flex justify-center items-center"> 
                    {header.map((u) => (
                      <div className="font-semibold px-1">
                        <div className="text-[16px] px-4 py-1 hover:text-blue-800 border border-transparent rounded-2xl hover:border-blue-100 hover:cursor-pointer">{u.title}</div>
                      </div>
                    ))}
                  </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="font-bold border border-transparent transition-transform rounded-3xl px-3 py-1 hover:border-gray-400 hover:text-blue-800 hover:cursor-pointer">
                    Help
                </div>
                <Button text="Log In" type="simple" onClick={()=>{}}/>
                <Button text="Sign Up" type="color" onClick={()=>{}}/>
              </div>
          </div>
        </div>
      );
}