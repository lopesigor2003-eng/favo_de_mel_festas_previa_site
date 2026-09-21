import React from 'react';
import { Award, HeartHandshake, Sparkles, CheckCircle2, Shield, Users } from 'lucide-react';
import { COMPANY_INFO } from '../data/content.ts';

export const AboutUs: React.FC = () => {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="py-20 lg:py-24 bg-neutral-950 border-t border-neutral-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mission, Credibility & Highlight */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[#FFD700] text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-4 h-4" />
              <span>Nossa História & Compromisso</span>
            </div>

            {/* Mandatory H2 */}
            <h2
              id="sobre-title"
              className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug"
            >
              Quem Somos:{' '}
              <span className="text-[#FFD700]">Mais de 100 Avaliações</span>, 4.2 Estrelas de Pura Alegria!
            </h2>

            {/* Mandatory Highlight */}
            <div className="mt-6 p-4 rounded-xl bg-neutral-900/80 border-l-4 border-[#FFD700] text-neutral-200 font-medium text-lg leading-relaxed shadow-sm">
              <p className="italic text-amber-200/95 font-semibold">
                “Há anos transformando sonhos em realidade para crianças e famílias.”
              </p>
            </div>

            {/* Mandatory Paragraphs & Info */}
            <div className="mt-6 space-y-4 text-neutral-300 text-base leading-relaxed">
              <p>
                A <strong>Favo de Mel Festas Infantil</strong> nasceu no coração de São Miguel do Oeste com um propósito claro: oferecer um ambiente acolhedor, vibrante e seguro onde cada aniversário seja uma experiência verdadeiramente inesquecível.
              </p>
              <p>
                Nosso compromisso inegociável é com a diversão das crianças e a tranquilidade dos pais. Dispomos de um <strong>buffet infantil completo e espaço para eventos</strong>, combinando gastronomia festiva com atrações interativas de primeira linha.
              </p>
              <p>
                A experiência positiva dos nossos clientes reflete-se na nossa média comprovada de <strong>4.2 estrelas no Google</strong> com mais de uma centena de famílias satisfeitas e sorrisos eternizados.
              </p>
            </div>

            {/* Key Pillars Checklist */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <span>Buffet infantil completo e espaço para eventos</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <span>Equipe carinhosa e monitores atenciosos</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <span>Brinquedos higienizados e revisados</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <span>Localização central com fácil acesso</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Trust & Metrics Grid */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-amber-400/25">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl" />

              <h3 className="font-heading text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FFD700]" />
                <span>Nossa Reputação em Números</span>
              </h3>

              <div className="space-y-4">
                {/* Rating Card */}
                <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-extrabold text-[#FFD700]">4.2 ★</span>
                    <p className="text-xs text-neutral-400 font-medium mt-0.5">Nota Média Oficial Google</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 font-semibold border border-emerald-800">
                      Excelente
                    </span>
                  </div>
                </div>

                {/* Reviews Card */}
                <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-extrabold text-white">+100</span>
                    <p className="text-xs text-neutral-400 font-medium mt-0.5">Avaliações Verificadas</p>
                  </div>
                  <div className="p-2 rounded-lg bg-amber-400/10 text-[#FFD700]">
                    <Users className="w-6 h-6" />
                  </div>
                </div>

                {/* Safety & Dedication Card */}
                <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-white">100% Diversão</span>
                    <p className="text-xs text-neutral-400 font-medium mt-0.5">Infraestrutura Segura e Monitorada</p>
                  </div>
                  <div className="p-2 rounded-lg bg-amber-400/10 text-[#FFD700]">
                    <Shield className="w-6 h-6" />
                  </div>
                </div>

                {/* Highlight Quote Card */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FFD700] text-black font-bold flex items-center justify-center flex-shrink-0">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Buffet Infantil Completo</p>
                      <p className="text-[11px] text-neutral-400">Desde o lanche até a atração principal.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to chat */}
              <div className="mt-6 pt-6 border-t border-neutral-800 text-center">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-sm rounded-xl transition-all"
                >
                  <span>Converse com Nossa Equipe</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
