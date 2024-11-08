import Image from 'next/image';
import design from '../public/design.png'; // Adjust the path as necessary
import code from '../public/code.png'; // Adjust the path as necessary
import consulting from '../public/consulting.png'; // Adjust the path as necessary

const Services = () => {
    return (
        <section className="bg-black p-10 rounded-lg shadow-lg">
            <div>
                <h3 className="text-3xl font-bold text-center mb-6 text-white">Services I provide</h3>
                <p className="text-md py-2 leading-8 text-gray-800 text-white">
                    Since the beginning of my journey as a designer and developer, I have honed skills in 
                    <span className="text-teal-500"> programming languages</span> like Python, JavaScript, and SQL,
                    developed expertise in <span className="text-teal-500">front-end frameworks</span> such as React and Vue,
                    and excelled in <span className="text-teal-500">UI/UX design</span> with tools like Figma and Adobe XD.
                    Additionally, I have expanded my knowledge in <span className="text-teal-500">data analysis</span> and 
                    <span className="text-teal-500"> machine learning</span>, collaborating with talented individuals to deliver impactful digital solutions.
                </p>

                <p className="text-md py-2 leading-8 text-gray-800 text-white">
                    I offer from a wide range of services, including design,
                    programming and teaching.
                </p>
            </div>
            <div className="lg:flex gap-10 bg-grey">
                <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out" style={{ backgroundColor: '#16423C' }}>
                    <Image src={design} width={100} height={100} />
                    <h3 className="py-4 text-teal-600">Design Tools I Use</h3>
                    <p className="text-white py-1">Photoshop</p>
                    <p className="text-white py-1">Illustrator</p>
                    <p className="text-white py-1">Figma</p>
                    <p className="text-white py-1">Indesign</p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1 hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out" style={{ backgroundColor: '#16423C' }}>
                    <Image src={code} width={100} height={100} />
                    <h3 className="py-4 text-teal-600">Languages I Use</h3>
                    <p className="text-white py-1">HTML/CSS</p>
                    <p className="text-white py-1">Javascript</p>
                    <p className="text-white py-1">Nextjs</p>
                    <p className="text-white py-1">React</p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1 hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out" style={{ backgroundColor: '#16423C' }}>
                    <Image src={consulting} width={100} height={100} />
                    <h3 className="py-4 text-teal-600">Technologies I Use</h3>
                    <p className="text-white py-1">AmazonWeb Services</p>
                    <p className="text-white py-1">Cubernetes</p>
                    <p className="text-white py-1">SQL Databases</p>
                    <p className="text-white py-1">Bash Scripting</p>
                </div>
            </div>
        </section>
    );
};

export default Services;