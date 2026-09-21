import React, { useState } from 'react';
import { Instagram, MessageCircle, MapPin, Heart, Shield, FileText, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content.ts';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string; text: string } | null>(null);

  const openPolicy = () => {
    setModalContent({
      title: 'Política de Privacidade',
      text: 'A Favo de Mel Festas Infantil valoriza a privacidade dos seus clientes e visitantes. As informações fornecidas através do nosso formulário de contato e WhatsApp são utilizadas exclusivamente para fins de atendimento, agendamento de visitas, orçamentos e organização do evento infantil contratado. Não compartilhamos nem comercializamos dados de clientes com terceiros. Em caso de dúvidas, fale conosco pelo canal oficial.',
    });
  };

  const openTerms = () => {
    setModalContent({
      title: 'Termos de Uso',
      text: 'O acesso a esta página tem finalidade institucional informativa. Todas as marcas, logotipos, fotografias e textos são de propriedade da Favo de Mel Festas Infantil ou utilizados com autorização. As reservas de datas de salão e contratação de serviços de máquinas e pintura facial estão sujeitas à confirmação prévia de disponibilidade por contrato formal de prestação de serviços.',
    });
  };

  return (
    <footer className="bg-black border-t border-neutral-900 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-amber-400/40 flex items-center justify-center text-[#FFD700]">
                <svg
                  viewBox="0 0 40 40"
                  className="w-6 h-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <polygon
                    points="20,4 34,12 34,28 20,36 6,28 6,12"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <polygon
                    points="20,10 28,15 28,25 20,30 12,25 12,15"
                    fill="currentColor"
                    fillOpacity="0.25"
                  />
                </svg>
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-white block leading-none">
                  Favo de Mel
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFD700]">
                  Festas Infantil
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              O salão de festas e buffet infantil de referência em São Miguel do Oeste. Mais de 100 celebrações com 4.2 estrelas de pura alegria e diversão para sua família.
            </p>

            {/* Social Icons: Instagram & WhatsApp */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga o Favo de Mel no Instagram"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Converse conosco no WhatsApp"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links Col */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li>
                <a href="#sobre" className="hover:text-[#FFD700] transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#FFD700] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#FFD700] transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-[#FFD700] transition-colors">
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#FFD700] transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#FFD700] transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openPolicy}
                  className="hover:text-[#FFD700] text-left transition-colors cursor-pointer"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openTerms}
                  className="hover:text-[#FFD700] text-left transition-colors cursor-pointer"
                >
                  Termos de Uso
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Summary Col */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Informações de Contato
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FFD700] font-semibold transition-colors"
                >
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] text-emerald-400 font-semibold">
                  ● {COMPANY_INFO.operatingHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with mandatory Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Favo de Mel Festas Infantil. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={openPolicy}
              className="hover:text-neutral-300 transition-colors"
            >
              Privacidade
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={openTerms}
              className="hover:text-neutral-300 transition-colors"
            >
              Termos
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Privacy Policy & Terms of Use */}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="glass-panel max-w-lg w-full rounded-2xl p-6 border border-neutral-800 shadow-2xl relative animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                {modalContent.title.includes('Privacidade') ? (
                  <Shield className="w-5 h-5 text-[#FFD700]" />
                ) : (
                  <FileText className="w-5 h-5 text-[#FFD700]" />
                )}
                {modalContent.title}
              </h3>
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="text-neutral-400 hover:text-white p-1 rounded-lg"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 text-sm text-neutral-300 leading-relaxed space-y-2">
              <p>{modalContent.text}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800 text-right">
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-semibold"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
