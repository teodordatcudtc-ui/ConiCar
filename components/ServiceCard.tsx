'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  delay?: number;
}

const ServiceCard = ({ id, icon, title, description, benefits, delay = 0 }: ServiceCardProps) => {
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-gray-100 flex flex-col"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 rounded-xl text-primary transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{description}</p>
      <ul className="space-y-2 mb-6">
        {benefits.map((benefit, index) => (
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
          href={`/servicii#${id}`}
          className="inline-block w-full text-center btn-secondary text-sm py-3"
        >
          Află mai mult
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

