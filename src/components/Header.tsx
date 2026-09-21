import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '../data/content.ts';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0A]/90 backdrop-blur-md border-b border-amber-500/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* SVG Logo Placeholder */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1"
          aria-label="Favo de Mel Festas Infantil - Página Inicial"
        >
          {/* Logo SVG Icon */}
          <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center bg-neutral-900 border border-amber-400/40 rounded-xl group-hover:border-amber-400 transition-colors shadow-sm">
            <svg
              viewBox="0 0 40 40"
              className="w-7 h-7 text-[#FFD700]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Outer Hexagon */}
              <polygon
                points="20,4 34,12 34,28 20,36 6,28 6,12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              {/* Honeycomb Center */}
              <polygon
                points="20,10 28,15 28,25 20,30 12,25 12,15"
                fill="currentColor"
                fillOpacity="0.25"
              />
              {/* Sparkle / Party Star Motif */}
              <path
                d="M20 13 L21.5 17.5 L26 19 L21.5 20.5 L20 25 L18.5 20.5 L14 19 L18.5 17.5 Z"
                fill="currentColor"
              />
            </svg>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FFD700] rounded-full animate-ping opacity-75" />
          </div>

          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl tracking-tight text-white group-hover:text-[#FFD700] transition-colors leading-none">
              Favo de Mel
            </span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-[#FFD700] mt-1">
              Festas Infantil
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Navegação Principal"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-[#FFD700] hover:bg-neutral-900/60 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button: WhatsApp Fale Conosco */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp pelo número 049 98428-1971"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFD700] hover:bg-[#E6C200] text-black font-semibold text-sm rounded-lg shadow-sm hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fale Conosco</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contato via WhatsApp"
            className="p-2 bg-[#FFD700] text-black rounded-lg sm:hidden"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-amber-500/20 px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-1" aria-label="Menu Mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 text-base font-medium text-neutral-200 hover:text-[#FFD700] hover:bg-neutral-800/60 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-neutral-800">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#FFD700] text-black font-semibold text-base rounded-lg shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Fale Conosco no WhatsApp</span>
              </a>
              <p className="text-xs text-center text-neutral-400 mt-2">
                Atendimento: 049 98428-1971 • Aberto 24 Horas
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
