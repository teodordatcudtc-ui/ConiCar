'use client';

import { useState, FormEvent } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    comments: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Numele este obligatoriu';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonul este obligatoriu';
    } else if (!/^[0-9+\s-]+$/.test(formData.phone)) {
      newErrors.phone = 'Format telefon invalid';
    }
    if (!formData.service) newErrors.service = 'Selectează un serviciu';
    if (!formData.date) newErrors.date = 'Data este obligatorie';
    if (!formData.time) newErrors.time = 'Ora este obligatorie';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulare submit (în producție, trimite la API)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Fallback: mailto dacă nu există backend
      const subject = encodeURIComponent(`Programare ConiCar - ${formData.service}`);
      const body = encodeURIComponent(
        `Nume: ${formData.name}\nTelefon: ${formData.phone}\nServiciu: ${formData.service}\nData: ${formData.date}\nOra: ${formData.time}\nComentarii: ${formData.comments || 'Niciun comentariu'}`
      );
      window.location.href = `mailto:contact@conicar.ro?subject=${subject}&body=${body}`;

      // Reset form după 3 secunde
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          comments: '',
        });
      }, 3000);
    }, 800);
  };

  const services = [
    'Diagnoză',
    'Schimbare kit ambreiaj',
    'Înlocuire kit-uri de distribuție',
    'Înlocuire subansamble tren de rulare',
    'Verificare și reparații sistem de frânare',
    'Înlocuiri și reparații motoare',
    'Schimb ulei / filtre',
    'Vulcanizare',
    'Altele',
  ];

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          className="mx-auto mb-4"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Cerere trimisă!</h3>
        <p className="text-green-700">
          Vă vom contacta în cel mai scurt timp pentru a confirma programarea.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Nume complet <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-primary focus:border-transparent`}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Telefon <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-primary focus:border-transparent`}
          placeholder="0722178964"
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Serviciu dorit <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.service ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-primary focus:border-transparent`}
          aria-invalid={errors.service ? 'true' : 'false'}
          aria-describedby={errors.service ? 'service-error' : undefined}
        >
          <option value="">Selectează un serviciu</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.service}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            Data <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-primary focus:border-transparent`}
            aria-invalid={errors.date ? 'true' : 'false'}
            aria-describedby={errors.date ? 'date-error' : undefined}
          />
          {errors.date && (
            <p id="date-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.date}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
            Ora <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            id="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.time ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-primary focus:border-transparent`}
            aria-invalid={errors.time ? 'true' : 'false'}
            aria-describedby={errors.time ? 'time-error' : undefined}
          />
          {errors.time && (
            <p id="time-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.time}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
          Comentarii (opțional)
        </label>
        <textarea
          id="comments"
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* reCAPTCHA placeholder - TODO: Adaugă cheia site */}
      <div className="text-xs text-gray-500">
        <p>
          Acest site este protejat de reCAPTCHA. Politica de confidențialitate și Termenii de
          utilizare se aplică.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary text-lg py-4 relative"
        aria-label="Trimite cererea de programare"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <span className="loader mr-3" />
            Se trimite...
          </span>
        ) : (
          'Trimite cererea'
        )}
      </button>
    </form>
  );
};

export default AppointmentForm;

