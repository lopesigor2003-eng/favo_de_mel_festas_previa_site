import { ServiceItem, TestimonialItem, GalleryImageItem, NavItem } from '../types.ts';

export const COMPANY_INFO = {
  name: 'Favo de Mel Festas Infantil',
  tagline: 'Celebre a Magia da Infância em São Miguel do Oeste!',
  phoneFormatted: '049 98428-1971',
  phoneRaw: '5549984281971',
  whatsappUrl: 'https://wa.me/5549984281971',
  instagramHandle: '@favomelfestas',
  instagramUrl: 'https://www.instagram.com/favomelfestas/',
  address: 'R. Nazareno Luiz Mocellin, 1927 - Centro, São Miguel do Oeste - SC, 89900-000',
  operatingHours: 'Aberto 24 horas',
  operatingHoursHighlight: 'Atendimento contínuo e flexibilidade para montagem do seu evento!',
  rating: '4.2',
  reviewCount: '+100',
  googleMapsIframeSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.600908868694!2d-53.52360742364028!3d-26.729127076757535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fa5cf5774b3935%3A0x4ac19b42df754c47!2sFavo%20de%20Mel%20Festas%20Infantil!5e0!3m2!1spt-BR!2sbr!4v1701377000000!5m2!1spt-BR!2sbr',
  googleMapsDirectLink:
    'https://www.google.com.br/maps/place/Favo+de+Mel+Festas+Infantil/@-26.729127,-53.521033,17z',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
  { label: 'Localização', href: '#localizacao' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'servico-algodao-doce',
    title: 'Aluguel de Máquina de Algodão Doce',
    shortDescription:
      'Nuvens doces e fofinhas preparadas na hora para a diversão de crianças e adultos.',
    fullDescription:
      'Máquina profissional com operador ou fácil manuseio. Açúcar colorido em diversos sabores e aromas, proporcionando momentos mágicos e fotos memoráveis durante todo o evento.',
    iconName: 'candy',
    highlights: ['Produção rápida e contínua', 'Variedade de cores vibrantes', 'Aroma irresistível'],
  },
  {
    id: 'servico-pipoca',
    title: 'Aluguel de Máquina de Pipoca',
    shortDescription:
      'Pipoca quentinha, crocante e fresquinha estilo cinema para animar todos os convidados.',
    fullDescription:
      'Pipoqueira elétrica com vitrine aquecida, garantindo pipoca sempre estalando na temperatura perfeita com temperos deliciosos e saquinhos personalizados.',
    iconName: 'popcorn',
    highlights: ['Pipoca crocante e quentinha', 'Milho selecionado especial', 'Ideal para todas as idades'],
  },
  {
    id: 'servico-pintura-facial',
    title: 'Pintura Facial Artística',
    shortDescription:
      'Transformamos as crianças nos seus personagens, heróis e animais favoritos com arte colorida.',
    fullDescription:
      'Profissionais carinhosos e qualificados utilizando tintas hipoalergênicas certificadas pela Anvisa, glitter biodegradável e ampla cartela de desenhos temáticos.',
    iconName: 'palette',
    highlights: ['Tintas 100% hipoalergênicas', 'Artistas atenciosos e criativos', 'Brilhos e cores seguras'],
  },
  {
    id: 'servico-espaco-brinquedos',
    title: 'Espaço com Brinquedos e Muito Mais! 🎂🍭',
    shortDescription:
      'Salão amplo, seguro e climatizado com piscina de bolinhas, cama elástica e área recreativa.',
    fullDescription:
      'Estrutura completa com mobiliário confortável para os pais, banheiros higienizados, copa para suporte de buffet e brinquedos modernos revisados com monitoramento.',
    iconName: 'castle',
    highlights: ['Brinquedos revisados e seguros', 'Ambiente limpo e climatizado', 'Capacidade para toda a família'],
  },
];

export const GALLERY_ITEMS: GalleryImageItem[] = [
  {
    id: 'galeria-1',
    title: 'Decoração Temática e Mesa de Bolo',
    category: 'Decorações',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnkHS4vcfE-eFXWlI0dBAIAtTZyLiByv6gZ0QKHNVHibapLtuZAV1-RTws0SrBxRJgBqCRssQ3l1m7QSeRCwQuA_vi_5DAu6sO1RT4rXAVtXMJt7zyAThNjO2q9JnTnM3k4ZbBTZA=w800-h600-k-no',
    mapsUrl:
      'https://www.google.com.br/maps/place/Favo+de+Mel+Festas+Infantil/@-26.729238,-53.5210219,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDO4O_1ogE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWnkHS4vcfE-eFXWlI0dBAIAtTZyLiByv6gZ0QKHNVHibapLtuZAV1-RTws0SrBxRJgBqCRssQ3l1m7QSeRCwQuA_vi_5DAu6sO1RT4rXAVtXMJt7zyAThNjO2q9JnTnM3k4ZbBTZA%3Dw86-h114-k-no!7i3024!8i4032!4m7!3m6!1s0x94fa5cf5774b3935:0x4ac19b42df754c47!8m2!3d-26.729127!4d-53.521033!10e5!16s%2Fg%2F11c509tkdf',
    alt: 'Decoração completa de festa infantil no Salão Favo de Mel em São Miguel do Oeste',
    description: 'Mesa de bolo com painel com iluminação cênica e arranjos de balões orgânicos.',
  },
  {
    id: 'galeria-2',
    title: 'Espaço dos Brinquedos e Recreação',
    category: 'Brinquedos',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkBxnrMO0FgasuUfBqMEjuue-sCAVsGXJ3bivbW044M1eRE_DGU4wiIt_hnij5lFGzNwFCaS7fbf43FiYZqQo7QEuWB2SijBa7cK_nMd-q9edQTxlviXyAsJNW2gCcc81V7MPL_=w800-h600-k-no',
    mapsUrl:
      'https://www.google.com.br/maps/place/Favo+de+Mel+Festas+Infantil/@-26.729238,-53.5210219,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDMnry5twE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWkBxnrMO0FgasuUfBqMEjuue-sCAVsGXJ3bivbW044M1eRE_DGU4wiIt_hnij5lFGzNwFCaS7fbf43FiYZqQo7QEuWB2SijBa7cK_nMd-q9edQTxlviXyAsJNW2gCcc81V7MPL_%3Dw203-h360-k-no!7i720!8i1280!4m7!3m6!1s0x94fa5cf5774b3935:0x4ac19b42df754c47!8m2!3d-26.729127!4d-53.521033!10e5!16s%2Fg%2F11c509tkdf',
    alt: 'Área de brinquedos interativos infantis e piscina de bolinhas protegida',
    description: 'Espaço pensado na total segurança dos pequenos para correr, pular e se encantar.',
  },
  {
    id: 'galeria-3',
    title: 'Ambiente do Salão e Mesas dos Convidados',
    category: 'Espaço',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmYvpUvfxCiazHYrGWe0S1hhpKSl9ZqTzH2eoGIJwc3gNaOR9MBXb7kiIqTr1_4n3-69nlnIRahVpcCczG8iPCLr_ruaEPve7j-ITnavd1tepdCsZxmPs8sstsm6RAS9T7s9dPU=w800-h600-k-no',
    mapsUrl:
      'https://www.google.com.br/maps/place/Favo+de+Mel+Festas+Infantil/@-26.729127,-53.521033,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDEkuqTFA!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWmYvpUvfxCiazHYrGWe0S1hhpKSl9ZqTzH2eoGIJwc3gNaOR9MBXb7kiIqTr1_4n3-69nlnIRahVpcCczG8iPCLr_ruaEPve7j-ITnavd1tepdCsZxmPs8sstsm6RAS9T7s9dPU%3Dw203-h114-k-no!7i2560!8i1440!4m7!3m6!1s0x94fa5cf5774b3935:0x4ac19b42df754c47!8m2!3d-26.729127!4d-53.521033!10e5!16s%2Fg%2F11c509tkdf',
    alt: 'Salão de festas amplo, mesas organizadas e climatização de alto conforto',
    description: 'Layout aconchegante que integra os convidados à diversão das crianças.',
  },
  {
    id: 'galeria-4',
    title: 'Detalhes e Cenários Mágicos',
    category: 'Ambientes',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWksDOAe1z9R0tcguXeypb_pAQCpdhtSIlD6Ufkmvv9RwOa3umD6x8_JUPH9sQNEWMYjgx7QeyWkgGq2bk0IpeuDwFwBWOZos32VUGBHSC-7ox2xyEmeGoX6FhFp9NBRPG4j1Mjj=w800-h600-k-no',
    mapsUrl:
      'https://www.google.com.br/maps/place/Favo+de+Mel+Festas+Infantil/@-26.729238,-53.5210219,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgID49tWmCA!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWksDOAe1z9R0tcguXeypb_pAQCpdhtSIlD6Ufkmvv9RwOa3umD6x8_JUPH9sQNEWMYjgx7QeyWkgGq2bk0IpeuDwFwBWOZos32VUGBHSC-7ox2xyEmeGoX6FhFp9NBRPG4j1Mjj%3Dw203-h360-k-no!7i2340!8i4160!4m7!3m6!1s0x94fa5cf5774b3935:0x4ac19b42df754c47!8m2!3d-26.729127!4d-53.521033!10e5!16s%2Fg%2F11c509tkdf',
    alt: 'Ambiente decorado com luzes, arranjos festivos e espaço para fotos de aniversário',
    description: 'Cenografia pensada nos mínimos detalhes para registrar sorrisos inesquecíveis.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'depoimento-1',
    author: 'Mariana Silveira',
    role: 'Mãe do Bernardo (4 anos)',
    date: 'Festa realizada em Agosto/2026',
    rating: 5,
    avatarInitial: 'M',
    comment:
      'Comemorei o aniversário de 4 anos do meu filho no Favo de Mel e foi simplesmente impecável! A máquina de pipoca e o algodão doce foram a sensação da criançada. Espaço limpo, aconchegante e equipe muito atenciosa. Recomendo de olhos fechados!',
    verifiedReview: true,
  },
  {
    id: 'depoimento-2',
    author: 'Carlos Eduardo Schmitt',
    role: 'Pai da Sofia e do Pedro',
    date: 'Festa realizada em Julho/2026',
    rating: 5,
    avatarInitial: 'C',
    comment:
      'O melhor espaço para festas infantis de São Miguel do Oeste! Localização central fácil de encontrar, brinquedos bem cuidados e seguros. Os pais puderam conversar tranquilos enquanto as crianças aproveitavam cada minuto.',
    verifiedReview: true,
  },
  {
    id: 'depoimento-3',
    author: 'Juliana Fagundes',
    role: 'Mãe da Alice (2 anos)',
    date: 'Festa realizada em Junho/2026',
    rating: 5,
    avatarInitial: 'J',
    comment:
      'A pintura facial foi um arraso, a artista tem muita paciência com os pequenos! O atendimento 24 horas para tirar dúvidas e acertar os detalhes da festa fez toda a diferença na nossa organização. Nota 10!',
    verifiedReview: true,
  },
  {
    id: 'depoimento-4',
    author: 'Rodrigo Fontana',
    role: 'Organizador de Aniversário de Família',
    date: 'Festa realizada em Maio/2026',
    rating: 5,
    avatarInitial: 'R',
    comment:
      'Comprovado o motivo de mais de 100 avaliações positivas! Espaço excelente, preço justo e estrutura completa. Tudo o que precisávamos para comemorar com alegria e sem estresse.',
    verifiedReview: true,
  },
];
