// Contact details and links used across the site. Edit here once.
export const SITE = {
  name: 'NbS+C Consultancy',
  tagline: 'Designing resilience with nature',
  email: 'estifanos.Addisu.yimer@vub.be',
  phone: '+32 488 98 77 66',
  phoneHref: '+32488987766',
  address: ['Vrije Universiteit Brussel, Building T, Room 1.70', 'Pleinlaan 2, 1050 Brussels, Belgium'],
  // Optional: paste a real booking link here (Cal.com, Calendly, Microsoft Bookings...).
  // While it is empty, every "Book a 20-min call" button opens the contact form with the call topic selected.
  booking: '',
};

import { lp, type Lang } from '../i18n/ui';
/** Where "Book a 20-min call" goes: the booking link if set, otherwise the contact form. */
export const bookHref = (lang: Lang) => SITE.booking || lp(lang, '/contact/?topic=call#form');
