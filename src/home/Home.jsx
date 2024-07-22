import React, { useEffect, useState } from 'react';
import img1 from './images/4.png';
import img2 from './images/5.jpg';
import img3 from './images/6.jpg';
import Cards from './Cards';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './About';
import ItemDetails from './ItemDetails'
import ContactForm from '../ContactForm';

const Home = () => {
    const images = [img1, img2, img3];

    return (
        <div>
            <Navbar />
            <div className="w-full">
            <Carousel slides={images} />
            </div>
            <Cards />
            <About />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;

const Carousel = ({ autoSlide = true, autoSlideInterval = 3000, slides }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (autoSlide) {
            const slideInterval = setInterval(next, autoSlideInterval);
            return () => clearInterval(slideInterval);
        }
    }, [autoSlide, autoSlideInterval]);

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative w-full h-[70vh] overflow-hidden rounded-lg">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute block w-full h-full duration-700 ease-in-out ${index === curr ? 'block' : 'hidden'}`}
                        data-carousel-item
                    >
                        <img src={slide} className="absolute block w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === curr ? 'bg-blue-500' : 'bg-gray-500'}`}
                        aria-current={index === curr}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                        onClick={() => setCurr(index)}
                    ></button>
                ))}
            </div>
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={prev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={next}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};
