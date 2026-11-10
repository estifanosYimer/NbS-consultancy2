import { getCollection } from 'astro:content';
import families from '../data/families.json';
import toolsFull from '../data/tools-full.json';
import solI18n from '../data/solutions-i18n.json';
import type { Lang } from './ui';

export type Fam = { id: string; name: string; intro: string; film: string | null; order: number; support: boolean };
export const famsFor = (lang: Lang): Fam[] =>
  families.map((f: any) => ({ id: f.id, film: f.film, order: f.order, support: f.support, name: lang === 'en' ? f.name : f[lang].name, intro: lang === 'en' ? f.intro : f[lang].intro }));

export type Tool = { id: string; status: string; statusClass: string; video: string | null; image: boolean; tech: string; n: string; q: string; w: string; plain: string; inputs: string[]; outputs: string[]; session: string[] };
export const toolsFor = (lang: Lang): Tool[] =>
  toolsFull.map((t: any) => ({ id: t.id, status: t.status[lang], statusClass: t.statusClass, video: t.video, image: t.image, tech: t.tech, ...t[lang] }));

export type Sol = { id: string; title: string; summary: string; family: string; benefits: string[]; tools: string[]; landscapes: string[]; order: number; supporting: boolean };
export async function solsFor(lang: Lang): Promise<Sol[]> {
  const all = await getCollection('solutions');
  const fo = Object.fromEntries(families.map((f: any) => [f.id, f.order]));
  return all
    .map((s) => {
      const tr = (solI18n as any)[s.id]?.[lang];
      return { id: s.id, ...s.data, title: lang === 'en' || !tr ? s.data.title : tr.t, summary: lang === 'en' || !tr ? s.data.summary : tr.s };
    })
    .sort((a, b) => fo[a.family] - fo[b.family] || a.order - b.order);
}
