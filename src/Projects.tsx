import React from "react";
import ProjectCard from "./components/ProjectCard";
import sunduBisikletImage from './assets/project_assets/sundubisiklet/2.jpeg';
import falistanImage from './assets/project_assets/falistan/1.jpg';
import dildavImage from './assets/project_assets/dildav/2.jpeg';
import olurunedirImage from './assets/project_assets/olurunedir/1.jpeg';
import saglikasistanimImage from './assets/project_assets/saglikasistanim/1.jpg';
import cademImage from './assets/project_assets/cadem/1.jpg';
import {useTranslation} from "react-i18next";

const Projects: React.FC = () => {

    const {t} = useTranslation();

    const projectData = [
        {
            title: 'Sundu Bisiklet',
            description: t('projects.sundu_bisiklet'),
            link: 'https://play.google.com/store/apps/details?id=com.sundubike&gl=TR',
            image: sunduBisikletImage,
        },
        {
            title: 'Falistan',
            description: t('projects.falistan'),
            link: 'https://play.google.com/store/apps/details?id=com.falfalistan&gl=TR',
            image: falistanImage,
        },
        {
            title: 'Dildav',
            description: t('projects.dildav'),
            link: '',
            image: dildavImage,
        },
        {
            title: 'Oluru Nedir?',
            description: t('projects.oluru_nedir'),
            link: 'https://play.google.com/store/apps/details?id=com.olurunedir&gl=TR',
            image: olurunedirImage,
        },
        {
            title: 'Sağlık Asistanım',
            description: t('projects.saglik_asistanim'),
            link: 'https://play.google.com/store/apps/details?id=com.molekulyazilim.saglikasistanim&gl=TR',
            image: saglikasistanimImage,
        },
        {
            title: 'Çadem',
            description: t('projects.cadem'),
            link: 'https://play.google.com/store/apps/details?id=com.cadem.cdp&gl=TR',
            image: cademImage,
        },
    ];


    return (
        <section
            id="projects"
            className="flex flex-col items-center bg-darkPurple text-white p-4 sm:p-6 md:p-8"
        >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gold mb-8">{t('my_projects')}</h1>

            <div className="flex flex-col items-center">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        image={project.image}
                    />
                ))}
            </div>

        </section>
    )
}

export default Projects;
