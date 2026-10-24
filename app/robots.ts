import {origin} from '../data/site.config';
export default function robots(){return {rules:{userAgent:'*',allow:'/'},sitemap:`${origin}/sitemap.xml`}}
