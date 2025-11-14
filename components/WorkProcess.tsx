'use client';

import { useState } from 'react';

interface ProcessStep {
  title: string;
  description: string;
  time: string;
  checklist: string[];
  icon: React.ReactNode;
}

const WorkProcess = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps: ProcessStep[] = [
    {
      title: 'Recepție',
      description: 'Bun venit la ConiCar! Analizăm cererea ta și documentăm starea inițială a vehiculului.',
      time: '10-15 minute',
      checklist: ['Verificare documente', 'Inspecție vizuală', 'Înregistrare cerere'],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      title: 'Diagnostic',
      description: 'Folosim echipamente moderne pentru a identifica exact problema și a estima timpul și costul.',
      time: '30-60 minute',
      checklist: ['Scanare computer', 'Testare componente', 'Raport detaliat'],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: 'Reparație',
      description: 'Echipa noastră de mecanicieni experimentați execută reparația cu piese de calitate și instrumente profesionale.',
      time: 'Variabil',
      checklist: ['Montare piese', 'Ajustări', 'Testare funcționalitate'],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      title: 'Test Drive',
      description: 'Verificăm că totul funcționează perfect în condiții reale de condus.',
      time: '15-20 minute',
      checklist: ['Testare pe drum', 'Verificare zgomote', 'Confirmare funcționalitate'],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
          <polygon points="12 15 17 21 7 21 12 15" />
        </svg>
      ),
    },
    {
      title: 'Predare',
      description: 'Îți explicăm ce am făcut, oferim garanție și te ajutăm cu orice întrebări.',
      time: '10 minute',
      checklist: ['Explicație lucrări', 'Documentație', 'Garanție'],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Procesul nostru de lucru
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          De la recepție la predare, fiecare pas este planificat pentru a-ți oferi cea mai bună experiență
        </p>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200" />
          <div className="grid grid-cols-5 gap-4 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setExpandedStep(index)}
                onMouseLeave={() => setExpandedStep(null)}
              >
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white z-10 border-4 border-white">
                  {step.icon}
                </div>
                <div
                  className={`mt-16 bg-white rounded-xl p-6 shadow-lg transition-all duration-300 flex flex-col min-h-[200px] ${
                    expandedStep === index
                      ? 'transform -translate-y-4 shadow-2xl scale-105'
                      : 'hover:shadow-xl'
                  }`}
                >
                  <h3 className="font-bold text-lg text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 flex-grow">{step.description}</p>
                  {expandedStep === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs font-semibold text-accent mb-2">
                        Timp estimat: {step.time}
                      </p>
                      <ul className="space-y-1">
                        {step.checklist.map((item, i) => (
                          <li key={i} className="text-xs text-gray-600 flex items-center space-x-2">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#f6d607"
                              strokeWidth="3"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <button
                onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
                aria-expanded={expandedStep === index}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.time}</p>
                  </div>
                </div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transform transition-transform ${
                    expandedStep === index ? 'rotate-180' : ''
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {expandedStep === index && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.checklist.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center space-x-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#f6d607"
                          strokeWidth="2.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

