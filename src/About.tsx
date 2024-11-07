import React from "react";

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center min-h-screen bg-darkPurple p-4 sm:p-6 md:p-8"
        >
            <div className="max-w-3xl mx-auto text-center px-4 sm:px-8 text-gold">

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gold mb-4" >Hakkımda</h1>

                <p className="text-lg sm:text-xl leading-relaxed">
                    2022 yılında Kırıkkale Üniversitesi Bilgisayar Mühendisliği Bölümü'nden mezun oldum. Eğitim sürecim
                    boyunca yazılım geliştirme ve algoritma tasarımı gibi temel bilgisayar mühendisliği prensiplerine
                    dair güçlü bir altyapı edindim. Mezuniyetimin ardından, özellikle Front-End geliştirme alanına
                    odaklandım ve React Native ile mobil uygulama geliştirme konusunda uzmanlaştım. Bu alandaki
                    çalışmalarımda, kullanıcı dostu ve yüksek performanslı uygulamalar geliştirerek kullanıcı deneyimini
                    en üst düzeye çıkarma konusuna büyük önem veriyorum.
                </p>
                <p className="text-lg sm:text-xl mt-4 leading-relaxed">
                    React, TypeScript, HTML, CSS ve modern JavaScript teknolojilerine hakimim; bu teknolojilerle,
                    karmaşık projelerde dahi esnek ve sürdürülebilir çözümler üretebiliyorum. Projelerimdeki amacım,
                    sadece işlevsel değil, aynı zamanda estetik ve kullanıcı odaklı arayüzler oluşturarak uygulama
                    deneyimini geliştirmek. Aynı zamanda yeni teknolojilere olan merakım sayesinde sektördeki en son
                    trendleri ve yenilikleri takip ediyorum; böylece kendimi sürekli güncel tutarak projelerime değer
                    katıyorum.
                </p>
                <p className="text-lg sm:text-xl mt-4 leading-relaxed">
                    İleriye dönük kariyer hedeflerim arasında, daha geniş çaplı projelerde sorumluluk almak ve ekip
                    çalışmasının bir parçası olarak yenilikçi çözümler geliştirmek yer alıyor. İnovasyona önem veren bir
                    takımda yer alarak sektörde etki yaratmak istiyorum. Bununla birlikte, teknolojiye olan ilgim sadece
                    profesyonel hayatımla sınırlı değil; boş zamanlarımda oyun oynamak, yeni kodlama tekniklerini
                    keşfetmek
                    ve yan projeler geliştirmek benim için bir hobi haline geldi. Yazılım dünyasındaki gelişmeleri
                    yakından
                    takip ederek her zaman kendimi geliştirmeyi ve öğrendiğim bilgileri uygulamaya dökmeyi amaçlıyorum.
                    Uzun vadede, sektörde yetkin bir yazılımcı olarak uzmanlaşmak ve kullanıcı deneyimini merkeze alan
                    projelerde etkili çözümler sunmak en büyük hedefim.
                </p>
            </div>
        </section>
    );
};

export default About;
