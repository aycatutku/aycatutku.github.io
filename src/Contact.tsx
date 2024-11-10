import React from "react";
import contactMe from './assets/contactme.png';
import {useTranslation} from "react-i18next";

const Contact: React.FC = () => {
    const {t} = useTranslation();
    return (
        <section
            id="contact"
            className="flex flex-col items-center min-h-screen bg-darkPurple p-4 sm:p-6 md:p-8"
        >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gold mb-8">{t('contact')}</h1>
            <img
                src={contactMe}
                alt={'Contact me'}
                className="md:w-2/3 object-cover md:ml-32 md:-mt-36 -mt-20"
            />
        </section>
    )
}

export default Contact;
