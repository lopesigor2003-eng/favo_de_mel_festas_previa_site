import React from 'react';
import { Star, Sparkles, Calendar, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/content.ts';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] py-20 lg:py-28"
    >
      {/* Background Decor: Festive geometric celebration particles & deep gold ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Golden ambient gradient orbs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-2xl" />
        <div className="absolute top-1/3 left-5 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />

        {/* Honeycomb grid overlay subtle pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="honeycomb-pattern"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1)"
          >
            <path
              d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
              fill="none"
              stroke="#FFD700"
              strokeWidth="1.5"
            />
            <path
              d="M28 0L28 33L0 50M28 33L56 50"
              fill="none"
              stroke="#FFD700"
              strokeWidth="1.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#honeycomb-pattern)" />
        </svg>

        {/* Subtle decorative celebration sparkles */}
        <div className="absolute top-1/4 left-1/6 text-[#FFD700]/40 animate-pulse">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-1/3 right-1/6 text-amber-400/30 animate-pulse delay-700">
          <Sparkles className="w-6 h-6" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Tag / Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-medium mb-8 shadow-sm">
          <span className="flex items-center gap-1 text-[#FFD700]">
            <Star className="w-4 h-4 fill-[#FFD700]" />
            <span className="font-bold">{COMPANY_INFO.rating}</span>
          </span>
          <span className="text-neutral-500">•</span>
          <span>{COMPANY_INFO.reviewCount} Avaliações Positivas no Google</span>
          <span className="text-neutral-500">•</span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 24 Horas
          </span>
        </div>

        {/* Mandatory H1 */}
        <h1
          id="hero-title"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]"
        >
          Favo de Mel Festas Infantil:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-amber-300 to-amber-500">
            Celebre a Magia da Infância
          </span>{' '}
          em São Miguel do Oeste!
        </h1>

        {/* Mandatory Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          O espaço perfeito para eventos inesquecíveis, com diversão garantida e mais de 100 avaliações positivas.
        </p>

        {/* Mandatory CTAs: Ver Serviços & Agende sua Festa */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agende sua Festa com Favo de Mel via WhatsApp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-base rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            <Calendar className="w-5 h-5 text-black" />
            <span>Agende sua Festa</span>
          </a>

          <a
            href="#servicos"
            aria-label="Ver todos os Serviços do Favo de Mel"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-base rounded-xl border border-neutral-700 hover:border-amber-400/50 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <span>Ver Serviços</span>
            <ArrowRight className="w-4 h-4 text-[#FFD700]" />
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto pt-8 border-t border-neutral-800/80 text-left">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 border border-neutral-800">
            <div className="w-9 h-9 rounded-md bg-amber-400/10 flex items-center justify-center text-[#FFD700] flex-shrink-0">
              <Star className="w-5 h-5 fill-[#FFD700]" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">4.2 Estrelas</p>
              <p className="text-xs text-neutral-400">Google Reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 border border-neutral-800">
            <div className="w-9 h-9 rounded-md bg-amber-400/10 flex items-center justify-center text-[#FFD700] flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">+100 Festas</p>
              <p className="text-xs text-neutral-400">Pais Satisfeitos</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 border border-neutral-800">
            <div className="w-9 h-9 rounded-md bg-amber-400/10 flex items-center justify-center text-[#FFD700] flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">Buffet Completo</p>
              <p className="text-xs text-neutral-400">Pipoca & Algodão</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 border border-neutral-800">
            <div className="w-9 h-9 rounded-md bg-amber-400/10 flex items-center justify-center text-[#FFD700] flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">24 Horas</p>
              <p className="text-xs text-neutral-400">Flexibilidade Total</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
