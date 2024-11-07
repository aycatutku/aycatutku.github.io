import {useState} from 'react';

const Header = () => {
    const [activeLink, setActiveLink] = useState("#home");

    const handleClick = (link: string) => {
        setActiveLink(link);
    };

    const navItems = [
        {href: "#home", text: "Ana Sayfa"},
        {href: "#about", text: "Hakkımda"},
        {href: "#projects", text: "Projeler"},
        {href: "#skills", text: "Beceriler"},
        {href: "#experiences", text: "Deneyim"},
        {href: "#contact", text: "İletişim"}
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
