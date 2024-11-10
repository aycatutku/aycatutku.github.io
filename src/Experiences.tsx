import React from "react";
import {useTranslation} from "react-i18next";

const Experiences: React.FC = () => {

    const {t} = useTranslation();

    const experiences = [
        {
            date: '09/2023 - 11/2024',
            position: 'React Native Developer',
            company: 'Webudi Yazılım Bilişim',
            description: t('companies.webudi'),
        },
        {
            date: '04/2022 - 09/2023',
            position: 'Mobile Developer',
            company: 'Molekül Teknoloji Ürünleri',
            description:t('companies.molekul'),
        },
        {
            date: '08/2018',
            position: t('companies.telekom.title'),
            company: 'Türk Telekom',
            description: t('companies.telekom.description'),
        },
    ];


    return (
        <section
            id="experiences"
            className="flex flex-col items-center bg-darkPurple p-4 sm:p-6 md:p-8"
        >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gold mb-8">{t('experiences')}</h1>
            <div className="relative w-full max-w-4xl">
                <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-0.5 h-full bg-bronze"></div>

                {experiences.map((exp, index) => (
                    <div key={index} className="relative mb-8 sm:mb-16">
                        <div className="absolute left-4 sm:left-1/2 transform -translate-y-1/2 sm:-translate-x-1/2 w-4 h-4 rounded-full bg-bronze border-2 border-bronze z-10"></div>
                        <div className={`relative ml-12 sm:ml-0 ${index % 2 === 0 ? 'sm:ml-auto sm:pr-8' : 'sm:mr-auto sm:pl-8'} sm:w-[calc(50%-16px)]`}>
                            <div className="p-4 bg-red-200 bg-opacity-10 rounded-lg shadow-md">
                                <span className="text-sm text-gold">{exp.date}</span>
                                <h3 className="text-xl font-semibold text-yellow mt-1">{exp.position}</h3>
                                <h4 className="text-lg text-gold">{exp.company}</h4>
                                <p className="mt-2 text-gold">{exp.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experiences;
