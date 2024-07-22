import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="bg-gray-100" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
           
              <h2 className="font-heading mb-4 font-bold tracking-tight text-green-700 dark:text-white text-3xl sm:text-5xl">
                Contactez-Nous
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous contacter via le formulaire ci-dessous ou en utilisant les informations de contact.
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center text-center sm:text-left">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  Vous avez des questions ou des commentaires ? Nous sommes disponibles pour vous aider. Envoyez-nous un message ou venez nous rendre visite aux horaires d'ouverture indiqués ci-dessous.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="sm:flex block">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-green-700 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-700 dark:text-white">Notre Adresse</h3>
                      <p className="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
                      <p className="text-gray-600 dark:text-slate-400">Paris , France</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-green-700 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-700 dark:text-white">Contact</h3>
                      <p className="text-gray-600 dark:text-slate-400">Mobile : +1 (123) 456-7890</p>
                      <p className="text-gray-600 dark:text-slate-400">Email : contact@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-green-700 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-700 dark:text-white">Horaires d'Ouverture</h3>
                      <p className="text-gray-600 dark:text-slate-400">Lundi - Vendredi : 08:00 - 17:00</p>
                      <p className="text-gray-600 dark:text-slate-400">Samedi & Dimanche : 08:00 - 12:00</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">Prêt à Nous Contacter ?</h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                        <input type="text" id="name" autoComplete="given-name" placeholder="Votre nom" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                        <input type="email" id="email" autoComplete="email" placeholder="Votre adresse email" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Écrivez votre message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="w-full bg-green-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Envoyer le Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        />
      </div>
    </>
  );
};
