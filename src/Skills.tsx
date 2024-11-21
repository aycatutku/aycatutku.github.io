import React from "react";
import {useTranslation} from "react-i18next";

const Skills: React.FC = () => {

    const {t} = useTranslation();

    const skills = [
        {name: 'React Native'},
        {name: 'TypeScript'},
        {name: 'JavaScript'},
        {name: 'React'},
        {name: 'HTML'},
        {name: 'CSS'},
        {name: 'Redux'},
        {name: 'Redux Toolkit'},
        {name: '.NET'},
        {name: 'RESTful API'},
        {name: 'OData'},
        {name: 'RTK Query'},
        {name: 'Axios'},
        {name: 'Firebase'},
        {name: 'Expo CLI'},
        {name: 'Git / GitHub'},
        {name: t('skills.responsive_web_design')},
        {name: t('skills.design_principles')},
        {name: t('skills.methodologies')},
    ];

    return (
        <section
            id="skills"
            className="flex flex-col items-center bg-darkPurple p-4 sm:p-6 md:p-8"
        >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gold mb-8">{t('my_skills')}</h1>

            <div className="rounded-lg md:w-2/3 ">
                <div className="flex flex-wrap self-center justify-center gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center bg-gray-500 bg-opacity-25 text-white p-3 rounded shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105"
                        >
                            <span className="text-sm font-semibold text-yellow">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Skills;
