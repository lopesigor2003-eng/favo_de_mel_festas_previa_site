import React, { useState } from 'react';
import { MapPin, MessageCircle, Instagram, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content.ts';
import { ContactFormData } from '../types.ts';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: '',
    email: '',
    telefone: '',
    assunto: 'Reserva de Festa Infantil',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Olá! Meu nome é ${formData.nome || 'Cliente'}.
Assunto: ${formData.assunto}
Telefone: ${formData.telefone || 'Não informado'}
E-mail: ${formData.email || 'Não informado'}
Mensagem: ${formData.mensagem || 'Gostaria de saber mais sobre as datas e orçamentos da festa.'}`;

    const url = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="py-20 lg:py-24 bg-neutral-950 border-t border-neutral-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[#FFD700] text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Atendimento Rápido</span>
          </div>

          {/* Mandatory H2 */}
          <h2
            id="contato-title"
            className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            Entre em Contato e Faça Sua Reserva
          </h2>

          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Estamos prontos para planejar cada detalhe do dia mais especial do seu pequeno. Fale conosco agora mesmo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Contact Details Card (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            {/* 24 Hours Highlight Card */}
            <div className="p-6 rounded-2xl glass-panel border border-emerald-500/30 bg-emerald-950/20 relative overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Clock className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">
                    Horário de Funcionamento
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    {COMPANY_INFO.operatingHours}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    {COMPANY_INFO.operatingHoursHighlight}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Info Box */}
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-neutral-800 space-y-6">
              <h3 className="font-heading text-lg font-bold text-white border-b border-neutral-800 pb-3">
                Canais de Atendimento
              </h3>

              {/* WhatsApp Item */}
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-neutral-400 font-medium">WhatsApp / Telefone</p>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white group-hover:text-[#FFD700] transition-colors inline-flex items-center gap-1.5 mt-0.5"
                    aria-label="Abrir conversa no WhatsApp com o número 049 98428-1971"
                  >
                    <span>{COMPANY_INFO.phoneFormatted}</span>
                  </a>
                  <p className="text-[11px] text-emerald-400 mt-0.5">Atendimento ágil e orçamentos</p>
                </div>
              </div>

              {/* Instagram Item */}
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 flex-shrink-0 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:to-pink-500 group-hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-neutral-400 font-medium">Instagram Oficial</p>
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white group-hover:text-[#FFD700] transition-colors inline-flex items-center gap-1.5 mt-0.5"
                    aria-label="Acessar perfil do Instagram @favomelfestas"
                  >
                    <span>{COMPANY_INFO.instagramHandle}</span>
                  </a>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Siga fotos, novidades e eventos</p>
                </div>
              </div>

              {/* Endereço Item */}
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#FFD700] flex-shrink-0 group-hover:bg-[#FFD700] group-hover:text-black transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-neutral-400 font-medium">Endereço do Salão</p>
                  <p className="text-sm font-semibold text-neutral-200 mt-0.5 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                  <a
                    href="#localizacao"
                    className="text-xs text-[#FFD700] hover:underline mt-1 inline-block"
                  >
                    Ver no mapa abaixo ↓
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Mockup) (Right Column) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-neutral-800">
              <div className="mb-6">
                <h3 className="font-heading text-xl font-bold text-white">
                  Envie uma Mensagem
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Preencha os campos abaixo para consultar datas disponíveis ou esclarecer dúvidas.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-center animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white">Mensagem Preparada!</h4>
                  <p className="text-sm text-neutral-300 mt-2 max-w-md mx-auto">
                    Obrigado, <strong>{formData.nome || 'Amigo(a)'}</strong>! Para agilizar seu atendimento, você também pode enviar estes dados diretamente pelo WhatsApp.
                  </p>
                  <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm rounded-lg flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Abrir no WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-sm rounded-lg"
                    >
                      Nova Mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nome */}
                    <div>
                      <label htmlFor="form-nome" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Nome Completo <span className="text-[#FFD700]">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Ex: Ana Clara Souza"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Telefone */}
                    <div>
                      <label htmlFor="form-telefone" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Telefone / WhatsApp <span className="text-[#FFD700]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="form-telefone"
                        name="telefone"
                        required
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(49) 99999-9999"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* E-mail */}
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Assunto */}
                    <div>
                      <label htmlFor="form-assunto" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Assunto
                      </label>
                      <select
                        id="form-assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                      >
                        <option value="Reserva de Salão">Reserva do Salão de Festas</option>
                        <option value="Aluguel de Máquinas">Aluguel de Pipoca / Algodão Doce</option>
                        <option value="Pintura Facial">Pintura Facial Artística</option>
                        <option value="Pacote Completo">Pacote Buffet Completo</option>
                        <option value="Outro">Outro Assunto</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="form-mensagem" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Mensagem <span className="text-[#FFD700]">*</span>
                    </label>
                    <textarea
                      id="form-mensagem"
                      name="mensagem"
                      rows={4}
                      required
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Conte-nos a data prevista, idade do aniversariante e quantidade estimada de convidados..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-neutral-500">
                      Seus dados serão tratados com total sigilo.
                    </p>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#FFD700] hover:bg-[#E6C200] text-black font-extrabold text-sm rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
