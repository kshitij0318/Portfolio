import Image from "next/image";
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';

const Projects = () => {
    return (
        <section className="bg-black p-10 rounded-lg shadow-lg">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-center mb-6 text-white">Projects</h3>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap justify-center">
                <div className="basis-1/3 flex-1">
                    <a href="https://github.com/kshitij0318/dino-snake-game" target="_blank" rel="noopener noreferrer">
                        <Image
                            className="rounded-lg object-cover"
                            width={"100%"}
                            height={"50%"}
                            layout="responsive"
                            src={web1}
                        />
                    </a>
                    <p className="text-center mt-2 text-white">
                        A C++ project recreating classic offline games like Google Dino and Snake, 
                        adding unique twists with enhanced visual effects and a redesigned UI, 
                        while keeping the core gameplay mechanics intact for a familiar yet refreshed experience.
                    </p>
                </div>
                <div className="basis-1/3 flex-1">
                    <a href="https://github.com/kshitij0318/TIQI-TAQA-Football-Stats-Manager" target="_blank" rel="noopener noreferrer">
                        <Image
                            className="rounded-lg object-cover"
                            width={"100%"}
                            height={"50%"}
                            layout="responsive"
                            src={web2}
                        />
                    </a>
                    <p className="text-center mt-2 text-white">
                    A football statistics website project which focused on delivering an improved user 
                    experience and insightful football statistics through careful planning and execution.
                    </p>                
                    </div>
                <div className="basis-1/3 flex-1">
                        <a href="https://github.com/kshitij0318/CricketManagementSystem" target="_blank" rel="noopener noreferrer">
                        <Image
                            className="rounded-lg object-cover"
                            width={"100%"}
                            height={"50%"}
                            layout="responsive"
                            src={web3}
                        />
                    </a>
                    <p className="text-center mt-2 text-white">
                    A Java and DBMS-based project developed to manage and display IPL statistics, 
                    focusing on efficient data storage, retrieval, and user-friendly presentation of cricket stats.
                    </p>
                </div>
                <div className="basis-1/3 flex-1">
                    <a href="https://example.com/project4" target="_blank" rel="noopener noreferrer">
                        <Image
                            className="rounded-lg object-cover"
                            width={"100%"}
                            height={"50%"}
                            layout="responsive"
                            src={web4}
                        />
                    </a>
                    <p className="text-center mt-2 text-white">
                    A student master data management website for an NGO, serving as a central hub 
                    for students, parents, and teachers. It provides a secure, digitized interface 
                    for accessing and managing student information, focusing on efficient data storage, 
                    easy retrieval, and a user-friendly experience to enhance communication and engagement.                    
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Projects;
