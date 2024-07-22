import React, { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
const Cards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const navigate = useNavigate();

  const cardsData = [
    {
      imgSrc: `../../${import.meta.env.BASE_URL}/images/s1.png`,
      
      title: "Sac Biodégradable 1",
      description: "Ceci est un sac biodégradable qui aide à réduire l'impact environnemental.",
    },
    {
      imgSrc: `../../${import.meta.env.BASE_URL}/images/s2.png`,
      title: "Sac Biodégradable 2",
      description: "Sac biodégradable écologique parfait pour une utilisation quotidienne.",
    }
  ];

  const handlePurchaseClick = (card) => {
    navigate('/details', { state: { item: card } });
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
        <h1 className="font-heading mb-4 font-bold tracking-tight text-green-700 dark:text-white text-3xl sm:text-3xl">Nos Produits</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:space-x-4">
        {cardsData.map((card, index) => (
          <Fade key={index}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transform transition duration-300 hover:scale-105" data-aos="fade-up">
              <img className="w-full" src={card.imgSrc} alt={card.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-900">{card.title}</div>
                <p className="text-gray-700 text-base">
                  {card.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-center">
                <button
                  onClick={() => handlePurchaseClick(card)}
                  className="bg-transparent hover:bg-green-700 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded transition-colors duration-300"
                >
                  Acheter
                </button>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Cards;
