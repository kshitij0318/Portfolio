import Image from 'next/image';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';

const deved = '/path/to/image.jpg'; // Replace with the actual path to the image

const About = () => {
    return (
        <div className="bg-black p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start">
            <div className="flex-1 p-10 py-10">
                <h2 className="text-5xl py-2 text-white font-high md:text-6xl">
                    Kshitij Gurbuxani
                </h2>
                <h3 className="text-2xl py-2 text-white md:text-3xl">
                    Software Developer.
                </h3>
                <p className="text-md py-5 leading-8 text-white max-w-xl md:text-xl">
                    I enjoy problem-solving challenges and team-building situations and 
                    I am eager to apply my academic knowledge and practical experience 
                    to real-world challenges in dynamic and growth-oriented environments.
                </p>
                <div className="text-5xl flex justify-center md:justify-start gap-16 py-3 text-white">
                    <a href="https://www.instagram.com/kshitij_gurbuxani/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6500] hover:text-teal-400">
                        <AiFillInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/kshitij-gurbuxani/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6500] hover:text-teal-400">
                        <AiFillLinkedin />
                    </a>
                    <a href="https://x.com/Kshitij_1803" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 hover:text-[#FF6500] ">
                        <AiFillTwitterCircle />
                    </a>
                    <a href="https://github.com/kshitij0318" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 hover:text-[#FF6500] ">
                        <AiFillGithub />
                    </a>
                </div>
            </div>
            <div className="flex-shrink-0 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:mt-0 md:ml-10 md:h-96 md:w-96 animate-floating">
                <Image src="/avatar.png" alt="Profile picture of Kshitij Gurbuxani" layout="fill" objectFit="cover" />
            </div>
        </div>
    );
};

export default About;
