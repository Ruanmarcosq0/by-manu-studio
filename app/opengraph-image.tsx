import {ImageResponse} from 'next/og';
export const runtime='nodejs';
export const alt='By Manu Studio — Cílios e sobrancelhas em São Paulo';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function OG(){return new ImageResponse(<div style={{background:'#111',color:'#f5f5f3',width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:'80px'}}><div style={{fontSize:22,letterSpacing:7}}>BY MANU STUDIO</div><div style={{fontFamily:'serif',fontSize:110,marginTop:45}}>O olhar tem assinatura.</div><div style={{fontSize:24,marginTop:40}}>CÍLIOS & SOBRANCELHAS · SÃO PAULO</div></div>,size)}
