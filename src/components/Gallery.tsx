import React, { useState } from 'react';
import { Camera, ExternalLink, Maximize2, Sparkles, X } from 'lucide-react';
import { GALLERY_ITEMS, COMPANY_INFO } from '../data/content.ts';
import { GalleryImageItem } from '../types.ts';

export const Gallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryImageItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Decorações', 'Brinquedos', 'Espaço', 'Ambientes'];

  const filteredItems =
    selectedFilter === 'Todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <section
      id="galeria"
      aria-labelledby="galeria-title"
      className="py-20 lg:py-24 bg-neutral-950 border-t border-neutral-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[#FFD700] text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Portfólio de Festas</span>
          </div>

          {/* Mandatory H2 */}
          <h2
            id="galeria-title"
            className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            Explore Nossas Decorações e Ambientes Mágicos
          </h2>

          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Fotos reais tiradas em nosso espaço em São Miguel do Oeste. Veja o carinho em cada detalhe de iluminação, cenografia e brinquedos.
          </p>

          {/* Category Filters */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedFilter === cat
                    ? 'bg-[#FFD700] text-black shadow-sm'
                    : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group glass-panel rounded-2xl overflow-hidden border border-neutral-800 hover:border-amber-400/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with mandatory loading="lazy" & decoding="async" */}
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden cursor-pointer">
                <img
                  src={item.url}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if external Google Maps referer is restricted
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src =
                      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450"><rect width="600" height="450" fill="%23171717"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" fill="%23FFD700" font-family="sans-serif" font-weight="bold" font-size="20">Favo de Mel Festas Infantil</text><text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="%23A3A3A3" font-family="sans-serif" font-size="14">Decoração Mágica em São Miguel do Oeste</text></svg>';
                  }}
                />

                {/* Overlay with zoom action */}
                <div
                  onClick={() => setActivePhoto(item)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs"
                >
                  <span className="p-2.5 rounded-full bg-[#FFD700] text-black shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm border border-neutral-700 text-[11px] font-semibold text-amber-300">
                  {item.category}
                </span>
              </div>

              {/* Caption Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-base font-bold text-white group-hover:text-[#FFD700] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => setActivePhoto(item)}
                    className="text-[#FFD700] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Ver ampliado</span>
                  </button>

                  <a
                    href={item.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                    aria-label={`Ver foto no perfil do Google Maps de ${item.title}`}
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View full Google gallery action */}
        <div className="mt-12 text-center">
          <a
            href={COMPANY_INFO.googleMapsDirectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white text-sm font-semibold border border-neutral-700 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span>Ver todas as fotos e avaliações no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 text-neutral-400" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="photo-modal-title"
        >
          <div className="max-w-4xl w-full glass-panel rounded-2xl overflow-hidden border border-amber-400/40 relative animate-fadeIn shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:text-[#FFD700] focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Fechar foto ampliada"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.url}
                alt={activePhoto.alt}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Modal Info */}
            <div className="p-6 bg-neutral-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-[#FFD700] uppercase tracking-wider">
                  {activePhoto.category}
                </span>
                <h3 id="photo-modal-title" className="text-xl font-bold text-white mt-0.5">
                  {activePhoto.title}
                </h3>
                <p className="text-sm text-neutral-300 mt-1">{activePhoto.description}</p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold text-xs rounded-lg shadow-sm"
                >
                  Quero Essa Decoração
                </a>
                <a
                  href={activePhoto.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-700"
                  aria-label="Ver imagem original no Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
