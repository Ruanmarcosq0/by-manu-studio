import {origin} from '../data/site.config';
export default function sitemap(){return [{url:origin,changeFrequency:'monthly' as const,priority:1},{url:`${origin}/politica-de-privacidade`,changeFrequency:'yearly' as const,priority:.2}]}
