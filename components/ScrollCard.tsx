import { motion } from "framer-motion";

export default function ScrollCard() {
  return (
    <div className="flex justify-center items-center rounded-t-2xl bg-white">
      
      <div className="relative h-[369px] w-[400px] rounded-[36px] border border-white/40 flex items-center justify-center">
        
        <div className="h-[330px] w-[350px] rounded-[28px] border border-white/60 overflow-hidden">
          
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: "-40%" }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-[160%] w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1557683316-973673baf926"
              alt="scroll"
              className="h-full w-full object-cover"
            />
          </motion.div>

        </div>
      </div>

    </div>
  );
}
