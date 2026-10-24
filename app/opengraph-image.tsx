import {ImageResponse} from 'next/og';
export const runtime='nodejs';
export const alt='By Manu Studio — Manuella Borges, cílios e sobrancelhas em São Paulo';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function OG(){return new ImageResponse(<div style={{background:'#f7f4ee',color:'#393531',width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:'80px'}}><div style={{fontSize:22,letterSpacing:6,color:'#716152'}}>BY MANU STUDIO</div><div style={{fontFamily:'serif',fontSize:90,marginTop:40}}>Beleza no olhar.</div><div style={{fontFamily:'serif',fontStyle:'italic',fontSize:76,color:'#716152'}}>Identidade em cada detalhe.</div><div style={{fontSize:22,marginTop:45}}>MANUELLA BORGES · CÍLIOS & SOBRANCELHAS · SÃO PAULO</div></div>,size)}
