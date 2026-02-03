"use client"

import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import { IconChevronRight, IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

export default function NavBar(){

    const [open, setOpen] = useState(false);

    const header = [
        {title: "Personal"},
        {title: "Business"},
        {title: "Advertiser"},
        {title: "Developer"}
      ]
    
      return (
        <div className="h-20 min-w-full flex items-center bg-white" style={{ fontFamily: 'var(--font-inter)' }}>
          <div className="flex justify-around items-center w-full">
              <div className="flex justify-center items-center">
                  <div className="pr-3">
                    <div className=" p-1 h-14 w-14 hover:cursor-pointer border border-transparent hover:border-gray-300 rounded-xl">
                      <Logo />
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center items-center">
                    {header.map((u) => (
                      <div className="font-semibold px-1">
                        <div className="text-[16px] px-4 py-1 hover:text-blue-800 border border-transparent rounded-2xl hover:border-blue-100 hover:cursor-pointer">{u.title}</div>
                      </div>
                    ))}
                  </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="hidden md:block font-bold border border-transparent transition-transform rounded-3xl px-3 py-1 hover:border-gray-400 hover:text-blue-800 hover:cursor-pointer">
                    Help
                </div>
                <Button text="Log In" type="simple" onClick={()=>{}}/>
                <Button text="Sign Up" type="color" onClick={()=>{}}/>
                {!open ? (
                  <AnimatePresence>
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex flex-col gap-1"
                  >
                  <IconMenu2 />
                </motion.button>
                </AnimatePresence>) : (
                  <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex flex-col gap-1"
                  >
                    <IconX />
                  </button>
                )}
              </div>
              {open && (
                <motion.div 
                  initial={{ x: "-50%" }}
                  animate={{ x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    mass: 1.5,
                  }}
                  className="absolute top-20 w-full border-t border-gray-400 bg-white md:hidden h-96">
                  <div className="flex flex-col px-3 py-3 gap-4 font-bold text-[18px] text-blue-900">
                      {header.map(u => (
                        <div className="border-b border-gray-300 pt-4 pb-4 flex items-center justify-between">
                          <div>{u.title}</div>
                          <div className=""><IconChevronRight /></div>
                        </div>
                      ))}
                  </div>
                </motion.div>
              )}
          </div>
        </div>
      );
}