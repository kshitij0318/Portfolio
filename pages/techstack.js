import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiCplusplus, SiTailwindcss, SiMongodb } from 'react-icons/si';

const TechStack = () => {
    return (
        <section className="max-w-full mx-auto p-8 bg-black p-10 rounded-lg shadow-lg" id="TechStack">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Tech Stack</h2>
            <div className="flex flex-wrap justify-between gap-6">
                <ul className="flex flex-wrap w-full gap-6 justify-center">
                    <li className="p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#16423C] rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex items-center">
                            <FaJava className="text-4xl text-blue-600 mr-4" />
                            <h3 className="text-2xl font-semibold text-blue-600">Java</h3>
                        </div>
                    </li>
                    <li className="p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#16423C] rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex items-center">
                            <SiCplusplus className="text-4xl text-yellow-600 mr-4" />
                            <h3 className="text-2xl font-semibold text-yellow-600">C/C++</h3>
                        </div>
                    </li>
                    <li className="p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#16423C] rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex items-center">
                            <FaPython className="text-4xl text-green-600 mr-4" />
                            <h3 className="text-2xl font-semibold text-green-600">Python</h3>
                        </div>
                    </li>
                    <li className="p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#16423C] rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex items-center">
                            <FaHtml5 className="text-4xl text-red-600 mr-4" />
                            <h3 className="text-2xl font-semibold text-red-600">HTML5</h3>
                        </div>
                    </li>
                    <li className="p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#16423C] rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex items-center">
                            <FaCss3Alt className="text-4xl text-indigo-600 mr-4" />
                            <h3 className="text-2xl font-semibold text-indigo-600">CSS3</h3>
                        </div>
                    </li>
                    <li className="p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#16423C] rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex items-center">
                            <FaReact className="text-4xl text-teal-600 mr-4" />
                            <h3 className="text-2xl font-semibold text-teal-600">React</h3>
                        </div>
                    </li>
                    <li className="p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#16423C] rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex items-center">
                            <FaNodeJs className="text-4xl text-green-600 mr-4" />
                            <h3 className="text-2xl font-semibold text-green-600">Node.js</h3>
                        </div>
                    </li>
                    <li className="p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#16423C] rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex items-center">
                            <SiTailwindcss className="text-4xl text-blue-600 mr-4" />
                            <h3 className="text-2xl font-semibold text-blue-600">Tailwind CSS</h3>
                        </div>
                    </li>
                    <li className="p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#16423C] rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="flex items-center">
                            <SiMongodb className="text-4xl text-green-600 mr-4" />
                            <h3 className="text-2xl font-semibold text-green-600">MongoDB</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default TechStack;