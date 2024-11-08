import { AiFillLinkedin, AiFillMail, AiFillPhone, AiOutlineWhatsApp } from 'react-icons/ai';

const ContactMe = () => {
    return (
        <div style={{ backgroundColor: 'black' }} className="p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start mt-8">
            <div className="flex-1 p-10 py-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium text-white md:text-6xl">
                    Get in Touch
                </h2>
                <p className="text-md py-5 leading-8 text-gray-800 text-white max-w-xl md:text-xl">
                    Whether you have a question, want to start a project, or just want to connect, feel free to reach out. 
                    I’d love to hear from you and am always open to discussing new opportunities.
                </p>
            </div>
            <div className="flex-1 p-10 py-10 md:ml-10">
                <div className="text-3xl flex flex-col gap-6 text-gray-600 text-gray-400">
                    <a href="mailto:kshitijgur@gmail.com" className="flex items-center gap-4 hover:text-teal-600 hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105">
                        <AiFillMail className="text-4xl" /> <span className="text-white">kshitijgur@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/kshitij-gurbuxani/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-teal-600 hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105">
                        <AiFillLinkedin className="text-4xl" /> <span className="text-white">LinkedIn</span>
                    </a>
                    <a href="tel:+91 9582477162" className="flex items-center gap-4 hover:text-teal-600 hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105">
                        <AiFillPhone className="text-4xl" /> <span className="text-white">+91 9582477162</span>
                    </a>
                    <a href="https://wa.me/9582477162" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-teal-600 hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105">
                        <AiOutlineWhatsApp className="text-4xl" /> <span className="text-white">WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
