"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Purchase = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }, []);
  
    const scaleDimensions = () => {
      return isMobile ? [0.7, 0.9] : [0.9, 1.1];
    };
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], scaleDimensions());

  return (
    <>
      <div className="-mt-60" ref={containerRef}>
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-2xl text-gray-300 font-bold md:text-4xl">
              Digital Edition.
            </h2>
          </div>
          <motion.div style={{
            scale: scale,
          }}>
            <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
              <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
                <div
                  aria-hidden="true"
                  className="absolute top-0 w-full h-full rounded-2xl bg-[#101720] shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
                ></div>
                <div className="relative p-6 space-y-6 lg:p-8">
                  <h3 className="text-3xl text-gray-600 font-semibold text-center">
                    Organisation
                  </h3>
                  <div>
                    <div className="relative flex justify-around">
                      <div className="flex items-end">
                        <span className="text-8xl text-gray-400 font-bold leading-0">
                          35
                        </span>
                        <div className="pb-2">
                          <span className="block text-2xl text-gray-500 font-bold">
                            %
                          </span>
                          <span className="block text-xl text-blue-600 font-bold">
                            Off
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    role="list"
                    className="w-max space-y-4 py-6 m-auto text-gray-600"
                  >
                    <li className="space-x-2">
                      <span className="text-blue-500 font-semibold">
                        First premium advantage
                      </span>
                    </li>
                    <li className="space-x-2">
                      <span className="text-blue-500 font-semibold">
                        Second advantage weekly
                      </span>
                    </li>
                    <li className="space-x-2">
                      <span className="text-blue-500 font-semibold">
                        Third advantage donate to project
                      </span>
                    </li>
                  </ul>
                  <p className="flex items-center justify-center space-x-4 text-lg text-gray-600 text-center">
                    <span>Call us at</span>
                    <a
                      href="tel:+24300"
                      className="flex space-x-2 items-center text-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                      <span className="font-semibold">+1 000 000</span>
                    </a>
                    <span>or</span>
                  </p>
                  <button
                    type="submit"
                    title="Submit"
                    className="block w-full py-3 px-6 text-center rounded-xl transition bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-indigo-600"
                  >
                    <span className="text-white font-semibold">
                      Send us an email
                    </span>
                  </button>
                </div>
              </div>

              <div className="relative group md:w-6/12 lg:w-7/12">
                <div
                  aria-hidden="true"
                  className="absolute top-0 w-full h-full rounded-2xl bg-[#101720] shadow-lg transition duration-500 group-hover:scale-105"
                ></div>
                <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                  <div className="max-w-lg mx-auto flex flex-col">
                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mt-5"
                      type="button"
                      data-dropdown-toggle="dropdown"
                    >
                      India
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mt-5"
                      type="button"
                      data-dropdown-toggle="dropdown"
                    >
                      Steam
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mt-5"
                      type="button"
                      data-dropdown-toggle="dropdown"
                    >
                      Digital Edition
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    <div
                      className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
                      id="dropdown"
                    >
                      <div className="px-4 py-3">
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block text-sm font-medium text-gray-900 truncate">
                          name@flowbite.com
                        </span>
                      </div>
                      <ul className="py-1" aria-labelledby="dropdown">
                        <li>
                          <a
                            href="#"
                            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                          >
                            Earnings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between gap-6"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
