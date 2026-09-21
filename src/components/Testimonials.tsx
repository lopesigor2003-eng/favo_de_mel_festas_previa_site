import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS_DATA, COMPANY_INFO } from '../data/content.ts';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="avaliacoes"
      aria-labelledby="avaliacoes-title"
      className="py-20 lg:py-24 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[#FFD700] text-xs font-semibold uppercase tracking-wider mb-3">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Avaliações Verificadas</span>
          </div>

          {/* Mandatory H2 */}
          <h2
            id="avaliacoes-title"
            className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            O que Nossos Clientes Dizem
          </h2>

          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            A satisfação das famílias de São Miguel do Oeste é o nosso maior orgulho. Confira depoimentos reais de quem já celebrou conosco.
          </p>

          {/* Prominent Showcase Card for 4.2 Estrelas & +100 Avaliações */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-5 rounded-2xl glass-panel border border-amber-400/30 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-extrabold text-[#FFD700]">
                {COMPANY_INFO.rating}
              </span>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1 text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? 'fill-[#FFD700]' : 'fill-[#FFD700]/40'}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-neutral-300 font-medium mt-0.5">
                  Classificação Oficial no Google
                </span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-neutral-800" />

            <div className="text-center sm:text-left">
              <span className="text-2xl font-extrabold text-white block leading-none">
                {COMPANY_INFO.reviewCount} Avaliações Positivas
              </span>
              <span className="text-xs text-neutral-400 font-medium">
                Pura alegria, satisfação e confiança das famílias
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <article
              key={item.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-neutral-800/90 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Quote icon and star ratings */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#FFD700]">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#FFD700]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-amber-500/30" />
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-[#FFD700] text-black font-bold text-sm flex items-center justify-center shadow-sm">
                  {item.avatarInitial}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-white flex items-center gap-1.5 leading-tight">
                    {item.author}
                    {item.verifiedReview && (
                      <CheckCircle
                        className="w-3.5 h-3.5 text-emerald-400"
                        aria-label="Avaliação verificada"
                      />
                    )}
                  </h3>
                  <p className="text-[11px] text-neutral-400">{item.role}</p>
                  <p className="text-[10px] text-amber-400/80 mt-0.5">{item.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
