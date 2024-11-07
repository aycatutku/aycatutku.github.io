import React, {useState} from 'react';
import {motion} from 'framer-motion';
import Modal from 'react-modal';


interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, link, image}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="w-full max-w-3xl bg-red-200 bg-opacity-10 text-white rounded-lg shadow-md mb-6 transition-shadow hover:shadow-lg overflow-hidden flex flex-col md:flex-row"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, ease: "easeOut"}}
            whileHover={{scale: 1.02}}
        >
            <img
                src={image}
                alt={title}
                className="w-full md:w-48 h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                onClick={() => setIsOpen(!isOpen)}
            />

            <div className="flex flex-col justify-between p-4 md:p-6 flex-grow">
                <div className="text-right text-gold">
                    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                    <p className="mb-4">{description}</p>
                </div>
                <div className="text-right text-yellow">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:underline"
                    >
                        Projeyi İncele
                    </a>
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="Project Image"
                className="flex justify-center items-center outline-none fixed inset-0 z-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-40"
                ariaHideApp={false}
            >
                <div className="relative w-full h-full max-w-3xl max-h-[75vh] m-4 flex justify-center items-center">
                    <div className="relative w-full h-full" style={{ aspectRatio: '3/4' }}>
                        <img
                            src={image}
                            alt={title}
                            className="absolute inset-0 w-full h-full rounded-lg object-contain"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                </div>
            </Modal>

        </motion.div>
    );
};

export default ProjectCard;
