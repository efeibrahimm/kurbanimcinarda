"use client";
import React from "react";
import { motion } from "framer-motion";

export type Testimonial = {
  text: string;
  name: string;
  location: string;
  initial: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, location, initial }, i) => (
                <div className="p-6 sm:p-8 rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50 max-w-xs w-full" key={i}>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-4 h-4 text-orange-500 fill-orange-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-gray-700 text-[14px] font-medium leading-[1.6]">{text}</div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-extrabold text-[15px]">
                      {initial}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-extrabold tracking-tight text-gray-900 leading-[1.2]">{name}</div>
                      <div className="text-gray-500 text-[12.5px] font-medium tracking-tight mt-0.5">{location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
