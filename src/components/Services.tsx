import React, { useState } from 'react';
import { Candy, Popcorn, Palette, Castle, Check, MessageSquareText, Sparkles, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/content.ts';
import { ServiceItem } from '../types.ts';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'candy':
        return <Candy className="w-7 h-7 text-[#FFD700]" />;
      case 'popcorn':
        return <Popcorn className="w-7 h-7 text-[#FFD700]" />;
      case 'palette':
        return <Palette className="w-7 h-7 text-[#FFD700]" />;
      case 'castle':
      default:
        return <Castle className="w-7 h-7 text-[#FFD700]" />;
    }
  };

  const handleRequestQuote = (serviceTitle?: string) => {
    const message = serviceTitle
      ? `Olá! Gostaria de solicitar um orçamento para o serviço: ${serviceTitle} no Favo de Mel Festas Infantil.`
      : 'Olá! Gostaria de solicitar um orçamento completo para minha festa infantil no Favo de Mel.';
    const encoded = encodeURIComponent(message);
    window.open(`${COMPANY_INFO.whatsappUrl}?text=${encoded}`, '_blank');
  };

  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="py-20 lg:py-24 bg-[#0A0A0A] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[#FFD700] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Buffet & Atrações</span>
          </div>

          {/* Mandatory H2 */}
          <h2
            id="servicos-title"
            className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            Serviços Completos para Sua Festa Inesquecível
          </h2>

          {/* Mandatory H3 */}
          <h3 className="mt-3 text-lg sm:text-xl text-[#FFD700] font-medium">
            O que oferecemos:
          </h3>

          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Estrutura de ponta e atrações interativas para garantir a alegria total de aniversariantes e convidados.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-neutral-800 transition-all duration-300 relative group"
            >
              <div>
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-xl bg-neutral-900 border border-amber-500/30 flex items-center justify-center mb-5 group-hover:border-[#FFD700] group-hover:bg-amber-400/10 transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                <h4 className="font-heading text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors leading-snug">
                  {service.title}
                </h4>

                <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Highlights list */}
                <ul className="mt-4 space-y-2 pt-4 border-t border-neutral-800/80">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Action */}
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
                >
                  Ver detalhes
                </button>

                <button
                  type="button"
                  onClick={() => handleRequestQuote(service.title)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/10 hover:bg-[#FFD700] text-[#FFD700] hover:text-black font-semibold text-xs transition-colors"
                  aria-label={`Solicitar orçamento para ${service.title}`}
                >
                  <span>Pedir</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory CTA Button: Solicitar Orçamento */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => handleRequestQuote()}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FFD700] hover:bg-[#E6C200] text-black font-extrabold text-base rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            <MessageSquareText className="w-5 h-5" />
            <span>Solicitar Orçamento</span>
          </button>
          <p className="text-xs text-neutral-400 mt-2.5">
            Resposta rápida no WhatsApp • Orçamento sem compromisso
          </p>
        </div>
      </div>

      {/* Modal / Detail Dialog for selected service */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div className="glass-panel max-w-lg w-full rounded-2xl p-6 sm:p-8 border border-amber-400/40 relative animate-fadeIn shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <h3 id="service-modal-title" className="font-heading font-bold text-xl text-white">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="text-neutral-400 hover:text-white p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label="Fechar detalhes"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-4 text-neutral-300 text-sm leading-relaxed">
              <p>{selectedService.fullDescription}</p>

              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 mb-2">
                  Destaques Inclusos:
                </h4>
                <ul className="space-y-1.5">
                  {selectedService.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs">
                      <Check className="w-4 h-4 text-[#FFD700]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-sm text-neutral-300 hover:text-white"
              >
                Fechar
              </button>
              <button
                type="button"
                onClick={() => {
                  handleRequestQuote(selectedService.title);
                  setSelectedService(null);
                }}
                className="px-5 py-2.5 bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-sm rounded-lg shadow-sm"
              >
                Solicitar Este Serviço
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
