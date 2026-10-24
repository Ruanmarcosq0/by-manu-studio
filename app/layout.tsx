import type { Metadata, Viewport } from 'next';
import { site, origin } from '../data/site.config';
import './globals.css';
export const viewport: Viewport = {themeColor:'#f7f4ee',colorScheme:'light'};
export const metadata: Metadata = {
 metadataBase:new URL(origin),title:'Cílios e Sobrancelhas em São Paulo | By Manu Studio',description:'Conheça os trabalhos de Manuella Borges. Extensão de cílios, design de sobrancelhas e lash lifting em Vila Dalva, São Paulo. Consulte horários e agende.',alternates:{canonical:'/'},openGraph:{type:'website',locale:'pt_BR',siteName:site.name,title:'By Manu Studio — Manuella Borges',description:'Cílios e sobrancelhas com Manuella Borges em São Paulo.',images:[{url:'/opengraph-image',width:1200,height:630}]},twitter:{card:'summary_large_image'},robots:{index:true,follow:true},icons:{icon:'/icon.svg'},other:{'darkreader-lock':'true','supported-color-schemes':'light'}
};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR" data-theme="light" style={{colorScheme:"only light"}}><body style={{backgroundColor:"#f7f4ee",color:"#393531"}}>{children}</body></html>}
