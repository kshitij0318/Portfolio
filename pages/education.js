import React from 'react';

const Education = () => {
    return (
        <section className="max-w-full mx-auto p-8 bg-black p-10 rounded-lg shadow-lg" id="EducationalDetails">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Education</h2>
            <div className="flex flex-wrap justify-center gap-6">
                <ul className="flex w-full gap-6 justify-center">
                    <li className="p-6 w-full sm:w-1/2 md:w-1/3 bg-[#16423C] rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-600">B.Tech, Symbiosis Institute of Technology <br /> (22-26)</h3>
                            <p className="text-blue-600">Course: Computer Science & Enginnering</p>
                        </div>
                    </li>
                    <li className="p-6 w-full sm:w-1/2 md:w-1/3 bg-[#16423C] rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div>
                            <h3 className="text-2xl font-semibold text-green-600">12th, DPS Greater Noida (2022)</h3>
                            <p className="text-green-500">Stream: <span className="text-green-500">Science</span></p>
                        </div>
                    </li>
                    <li className="p-6 w-full sm:w-1/2 md:w-1/3 bg-[#16423C] rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                        <div>
                            <h3 className="text-2xl font-semibold text-yellow-600">10th DPS Greater Noida (2020)</h3>
                            <p className="text-yellow-600">Academic Marks: 85%</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Education;