export const site = {
  name: 'By Manu Studio', professional: 'Manuella Borges',
  legalDisplayName: 'Studio Manuella Borges',
  instagram: 'https://www.instagram.com/by_manustudio/',
  whatsapp: '5511992202767',
  booking: 'https://online.maapp.com.br/studiomanuellaborges',
  address: 'Rua Antônio Dias Pereira, 177 — Vila Dalva',
  city: 'São Paulo', state: 'SP', postalCode: '05388-130',
  maps: 'https://www.google.com/maps/search/?api=1&query=R.%20Ant%C3%B4nio%20Dias%20Pereira%2C%20177%20-%20Vila%20Dalva%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005388-130',
  services: [
    {name:'Cílios',label:'01 / CÍLIOS',description:'Extensões e lash lifting.',detail:'Clássico · Volume Brasileiro · Volume Inglês · Volume Egípcio Plus · Volume Luxo · Efeito Sirena · Fox Eyes · Efeito Molhado · Lash lifting'},
    {name:'Sobrancelhas',label:'02 / SOBRANCELHAS',description:'Design, henna e alinhamento dos fios.',detail:'Design personalizado · Henna · Tintura · Brow lamination'},
    {name:'Cuidados labiais',label:'03 / LÁBIOS',description:'Hidratação e acabamento.',detail:'HydraGloss Lips · Spa Labial. Consulte a indicação e os detalhes com a Manu.'},
  ],
  faq: [
    ['Como agendar?','Escolha o procedimento e o horário na agenda online. Se tiver dúvidas, converse com a Manu pelo WhatsApp.'],
    ['Onde vejo valores e duração?','Os detalhes estão na agenda oficial. Confirme as informações antes de reservar.'],
    ['Quais cuidados preciso seguir?','A preparação, os cuidados e a manutenção dependem do procedimento. Consulte a Manu antes do atendimento.'],
    ['Como cancelar ou remarcar?','Fale com o Studio para consultar as condições da sua reserva.'],
  ],
};
export const origin = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');
export const whatsapp = (service?:string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(service ? `Olá, Manu! Vi ${service} no site e gostaria de saber mais e consultar horários.` : 'Olá, Manu! Conheci o Studio pelo site e gostaria de consultar os procedimentos e horários disponíveis.')}`;
