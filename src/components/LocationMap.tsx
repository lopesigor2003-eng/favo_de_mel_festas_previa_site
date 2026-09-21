import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/content.ts';

export const LocationMap: React.FC = () => {
  return (
    <section
      id="localizacao"
      aria-labelledby="localizacao-title"
      className="py-20 lg:py-24 bg-[#0A0A0A] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[#FFD700] text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Fácil Acesso</span>
          </div>

          {/* Mandatory H2 */}
          <h2
            id="localizacao-title"
            className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            Onde Estamos
          </h2>

          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Localização privilegiada no Centro de São Miguel do Oeste com estacionamento nas proximidades e fácil acesso para você e seus convidados.
          </p>
        </div>

        {/* Map Container and Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Info Panel (Left) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-panel border border-neutral-800">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-[#FFD700] mb-5">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Favo de Mel Festas Infantil
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {COMPANY_INFO.address}
              </p>

              <div className="mt-6 space-y-3 pt-6 border-t border-neutral-800">
                <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Funcionamento 24 horas para reservas e eventos</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                  <Navigation className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                  <span>Ponto de referência: Região central de fácil acesso</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 space-y-3">
              <a
                href={COMPANY_INFO.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-sm rounded-xl transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Traçar Rota no GPS</span>
              </a>

              <a
                href={COMPANY_INFO.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold rounded-xl border border-neutral-700 transition-colors"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Google Maps Iframe (Right) */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-neutral-800 glass-panel shadow-xl min-h-[420px] lg:min-h-[460px] relative">
            <iframe
              title="Localização do Salão Favo de Mel Festas Infantil no Google Maps"
              src={COMPANY_INFO.googleMapsIframeSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-[1.05] brightness-[0.95]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
