
const About1 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-green-700 pb-4">À Propos de Nous</h1>
                    <p className="font-normal text-base leading-6 text-gray-600">
                        Nous sommes une société engagée dans l'achat de sacs biodégradables. Notre mission est de promouvoir des solutions respectueuses de l'environnement en offrant des alternatives durables aux produits plastiques traditionnels. Nous croyons fermement en la protection de notre planète et travaillons activement pour réduire l'empreinte écologique grâce à nos initiatives éco-responsables.
                    </p>
                </div>
                <div className="w-full lg:w-8/12">
                <img className="w-full h-full" src={`../../${import.meta.env.BASE_URL}/images/3.webp`} />

                </div>
            </div>
        </div>
    );
};

export default About1;
