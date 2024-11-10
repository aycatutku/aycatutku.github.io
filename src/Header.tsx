import {useState} from 'react';
import {useTranslation} from "react-i18next";

const Header = () => {
    const { t } = useTranslation();
    const [activeLink, setActiveLink] = useState("#home");

    const handleClick = (link: string) => {
        setActiveLink(link);
    };

    const navItems = [
        {href: "#home", text: t('header.home')},
        {href: "#about", text: t('header.about_me')},
        {href: "#projects", text: t('header.projects')},
        {href: "#skills", text: t('header.skills')},
        {href: "#experiences", text: t('header.experience')},
        {href: "#contact", text: t('header.contact')}
    ];

    return (
        <header
            className="bg-white bg-opacity-10 w-11/12 max-w-2xl mx-auto rounded-3xl mt-8 p-4 px-4 text-primary-foreground p-4">
            <div className="container mx-auto">
                <nav>
                    <ul className={`md:flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 text-sm md:text-base`}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={() => handleClick(item.href)}
                                    className={`transition duration-1000 ease-in-out block px-3 py-2 rounded-full hover:text-yellow text-gold transition-colors duration-200 ${activeLink === item.href ? 'bg-gray-500 bg-opacity-25 text-yellow' : ''}`}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
