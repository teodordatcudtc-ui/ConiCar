'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  delay?: number;
}

const ServiceCard = ({ id, icon, title, description, benefits, delay = 0 }: ServiceCardProps) => {
  const [imageError, setImageError] = useState(false);

  // Mapare ID servicii la nume fișiere imagini
  const imageNames: Record<string, string> = {
    diagnoza: 'diagnoza.jpg',
    'kit-ambreiaj': 'kit-ambreiaj.jpg',
    'kit-distributie': 'kit-distributie.jpg',
    'tren-rulare': 'tren-rulare.jpg',
    'sistem-franare': 'sistem-franare.jpg',
    'reparatii-motoare': 'reparatii-motoare.jpg',
    'schimb-ulei-filtre': 'schimb-ulei-filtre.jpg',
    vulcanizare: 'vulcanizare.jpg',
    'geometrie-3d': 'geometrie-3d.jpg',
    echilibrare: 'echilibrare.jpg',
    'indreptare-roluri-jante': 'indreptare-roluri-jante.jpg',
    dejantat: 'dejantat.jpg',
  };

  const imageName = imageNames[id] || 'vulcanizare.jpg';
  const imagePath = `/images/servicii/${imageName}`;

  return (
    <div
      className="bg-white rounded-2xl shadow-lg card-hover border border-gray-100 flex flex-col overflow-hidden"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Image Section - mai mică */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        {!imageError ? (
          <>
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" />
            {/* Icon and title overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white z-10">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-white/20 backdrop-blur-sm rounded-xl text-white">
                {icon}
              </div>
              <h3 className="text-2xl font-bold text-center">{title}</h3>
            </div>
          </>
        ) : (
          // Fallback gradient dacă imaginea nu există
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark flex flex-col items-center justify-center p-6">
            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-white/20 backdrop-blur-sm rounded-xl text-white">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-center text-white">{title}</h3>
          </div>
        )}
      </div>

      {/* Content Section - 1/4 din înălțime */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm">{description}</p>
        <ul className="space-y-2 mb-6">
          {benefits.slice(0, 3).map((benefit, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f6d607"
                strokeWidth="2.5"
                className="flex-shrink-0 mt-0.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <Link
            href={`/servicii/${id}`}
            className="inline-block w-full text-center btn-secondary text-sm py-3"
          >
            Află mai mult
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

