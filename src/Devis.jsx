import React, { useState } from 'react';
import axios from 'axios';

const Devis = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    adresse: '',
    informations: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = 'Nom est requis.';
    if (!formData.lastName) tempErrors.lastName = 'Prénom est requis.';
    if (!formData.email) tempErrors.email = 'Email est requis.';
    if (!formData.mobileNumber) tempErrors.mobileNumber = 'N° de téléphone est requis.';
    if (!formData.adresse) tempErrors.adresse = 'Adresse de l\'entreprise est requise.';
    if (!formData.informations) tempErrors.informations = 'Informations complémentaires sont requises.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post("http://localhost:5000/api/devis", formData)
        .then(res => {
          console.log(res.data);
          alert("Votre demande a été envoyée avec succès");
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            mobileNumber: '',
            adresse: '',
            informations: ''
          });
          setErrors({});
        })
        .catch(err => {
          if (err.response && err.response.data && err.response.data.errors) {
            const backendErrors = err.response.data.errors;
            let tempErrors = {};
            Object.keys(backendErrors).forEach((key) => {
              tempErrors[key] = backendErrors[key].message;
            });
            setErrors(tempErrors);
          } else {
            console.log(err);
            alert("Une erreur est survenue");
          }
        });
    }
  };

  return (
    <section className="dark:bg-slate-800" id="devis">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold text-gray-700 dark:text-white">Demande de devis Best Distribution</h1>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">Nom</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 pl-2 pr-4  dark:border-dark-3 dark:bg-dark dark:text-gray-300"
            />
            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Prénom</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 pl-2 pr-4  dark:border-dark-3 dark:bg-dark dark:text-gray-300"
            />
            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 pl-2 pr-4  dark:border-dark-3 dark:bg-dark dark:text-gray-300"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium leading-6 text-gray-900">N° de téléphone</label>
            <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              autoComplete="tel"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 pl-2 pr-4  dark:border-dark-3 dark:bg-dark dark:text-gray-300"
            />
            {errors.mobileNumber && <p className="text-red-500 text-xs">{errors.mobileNumber}</p>}
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <label htmlFor="adresse" className="block text-sm font-medium leading-6 text-gray-900">Adresse de l'entreprise</label>
            <input
              type="text"
              name="adresse"
              id="adresse"
              autoComplete="address-line1"
              value={formData.adresse}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 pl-2 pr-4  dark:border-dark-3 dark:bg-dark dark:text-gray-300"
            />
            {errors.adresse && <p className="text-red-500 text-xs">{errors.adresse}</p>}
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <label htmlFor="informations" className="block text-sm font-medium leading-6 text-gray-900">Informations complémentaires</label>
            <textarea
              id="informations"
              name="informations"
              rows="4"
              value={formData.informations}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 pl-2 pr-4  dark:border-dark-3 dark:bg-dark dark:text-gray-300"
            />
            {errors.informations && <p className="text-red-500 text-xs">{errors.informations}</p>}
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <button type="submit" className="w-32 bg-green-800 text-white px-6 py-3 font-xl rounded-md">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Devis;
