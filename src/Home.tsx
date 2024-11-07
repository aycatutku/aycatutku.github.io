import React from 'react';

const Home: React.FC = () => {
    return (
        <section
            id="home"
            className="flex flex-col items-center bg-darkPurple text-white p-4 sm:p-6 md:p-8"
        >
            <div className="flex flex-col justify-center items-center gap-3 max-w-3xl mx-auto">
                <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEER7j6zFAHHQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1672926073217?e=1736380800&v=beta&t=ZCu5Dv_uDOd43V7FOqLjyouUAefpnOTDFu_1nhhv7-I"
                    alt="Ayça Tutku Arslan"
                    className="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-2 border-yellow mb-4"
                />
                <div className="text-center px-4 sm:px-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gold">
                        Ayça Tutku Arslan
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl mt-2 text-gold">
                        React Native Developer
                    </h2>
                    <h2 className="text-xl sm:text-2xl md:text-3xl mt-4 text-gold px-4 sm:px-8 md:px-12">
                        Mobil uygulama geliştirmede uzmanlaşmış, kullanıcı odaklı projelere
                        {' '}
                        <span className="text-yellow font-semibold">'tutku'</span>{' '}
                        duyan bir React Native geliştiricisiyim.
                    </h2>

                    <div className="flex w-full justify-center mt-10">
                        <div className="flex items-center gap-8">
                            <a target="_blank" href="https://www.linkedin.com/in/ay%C3%A7a-tutku-arslan-03079b167"
                               className="text-gray-600 hover:text-gray-900 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                     fill="none" stroke="#FFD4B0" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="w-8 h-8">
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a target="_blank" href="https://github.com/aycatutku"
                               className="text-gray-600 hover:text-gray-900 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                     fill="none" stroke="#FFD4B0" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="w-8 h-8">
                                    <path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                                <span className="sr-only">Github</span>
                            </a>
                            <a href="mailto:tutkuarslaan@gmail.com"
                               className="text-gray-600 hover:text-gray-900 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                     fill="none" stroke="#FFD4B0" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="w-8 h-8">
                                    <path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Home;
