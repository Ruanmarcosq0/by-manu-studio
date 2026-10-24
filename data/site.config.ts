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
    {name:'Extensão de cílios', label:'01 / LASH', description:'Do fio a fio, de efeito mais natural, aos volumes e efeitos que marcam o olhar. Conheça as técnicas e encontre suas referências.', detail:'Clássico · Volume Brasileiro · Volume Inglês · Volume Egípcio Plus · Volume Luxo · Efeito Sirena · Fox Eyes · Efeito Molhado'},
    {name:'Design de sobrancelhas',label:'02 / BROW',description:'Design personalizado para os seus traços. Opções com henna ou tintura e brow lamination para alinhar e modelar os fios.',detail:'Design personalizado · Henna · Tintura · Brow lamination'},
    {name:'Lash lifting',label:'03 / LIFT',description:'Curvatura e destaque para os cílios naturais. Converse com a Manu sobre o resultado desejado e a indicação para você.',detail:'Valorização dos cílios naturais'},
  ],
  faq: [
    ['Como agendar meu horário?','Você pode acessar a agenda online do Studio ou conversar pelo WhatsApp para consultar procedimentos e horários disponíveis.'],
    ['Onde fica o Studio?','Na Rua Antônio Dias Pereira, 177, Vila Dalva, São Paulo — SP, CEP 05388-130. Abra o mapa para planejar sua visita.'],
    ['Quais são os valores e a duração?','Consulte os valores e a duração de cada procedimento na agenda online ou pelo WhatsApp. Confirme os detalhes antes de reservar.'],
    ['Como escolher o efeito dos cílios?','Envie suas referências e conte o resultado que você procura. Converse com a Manu sobre as técnicas disponíveis e a opção adequada para você.'],
    ['Quais cuidados devo seguir e quando fazer manutenção?','Peça as orientações específicas para o procedimento escolhido. Confirme também a manutenção, a preparação e os cuidados antes de agendar.'],
    ['Como cancelar ou remarcar?','Entre em contato com o Studio para consultar a política de cancelamento e reagendamento aplicável à sua reserva.'],
  ],
};
export const origin = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');
export const whatsapp = (service?:string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(service ? `Olá, Manu! Vi ${service} no site e gostaria de saber mais e consultar horários.` : 'Olá, Manu! Conheci o Studio pelo site e gostaria de consultar os procedimentos e horários disponíveis.')}`;
