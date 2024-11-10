import React from "react";
import {useTranslation} from "react-i18next";

const About: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center min-h-screen bg-darkPurple p-4 sm:p-6 md:p-8"
        >
            <div className="max-w-3xl mx-auto text-center px-4 sm:px-8 text-gold">

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gold mb-4" >{t('about_me')}</h1>

                <p className="text-lg sm:text-xl leading-relaxed">
                    {t('about_me_description.introduction')}
                </p>
                <p className="text-lg sm:text-xl mt-4 leading-relaxed">
                    {t('about_me_description.body')}
                </p>
                <p className="text-lg sm:text-xl mt-4 leading-relaxed">
                    {t('about_me_description.conclusion')}
                </p>
            </div>
        </section>
    );
};

export default About;
