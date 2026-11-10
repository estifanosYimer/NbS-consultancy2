# NbS+C website (Astro)

A fast, static website in English, Dutch and French. 232 pages: home, a catalogue of 48 measures (plus 3 supporting measures) with a page for each, services, 8 tool pages, projects, about, insights, 5 audience pages, contact, privacy and 404.

## Run it on your PC (Windows)
Double-click `run_local.bat`. It installs Node.js if needed, installs the packages and opens the site at http://localhost:4321.

## Put it online (GitHub + Vercel)
1. Upload everything in this folder to a GitHub repository, **except** `node_modules`, `dist` and `.astro`.
2. In Vercel, choose **Add New → Project**, import the repository and keep the detected settings (framework: Astro). Then click **Deploy**.
3. Under **Settings → Environment Variables**, add `SITE_URL` = your real domain (for example `https://nbs-c.com`). This is used for the sitemap and for links shared on social media.

## Where to edit things
| What | File |
|---|---|
| Email, phone, address, **booking link** | `src/data/site.ts` |
| All text in EN / NL / FR (menus, home, services, audiences, contact, privacy) | `src/i18n/ui.ts` |
| The measures (one file each, English) | `src/content/solutions/*.md` |
| Dutch and French names and summaries of the measures | `src/data/solutions-i18n.json` |
| Families of measures | `src/data/families.json` |
| Tools (all three languages) | `src/data/tools-full.json` |
| Blog posts (English) | `src/data/posts.json` |
| Videos (narrated in English, with a quiet music bed) | `public/media/*.mp4` |

### The "Book a 20-min call" button
`booking` in `src/data/site.ts` is empty, so every booking button opens the contact form with "Book a free 20-minute call" already selected. If you set up Cal.com, Calendly or Microsoft Bookings later, paste that link into `booking` and all the buttons will use it.

### Contact form
The form sends to Formspree (`https://formspree.io/f/xanoykkz`), the same form the old site used. Answers from the solution finder on the home page are added to the message automatically.

## Languages
- English lives at `/`, Dutch at `/nl/` and French at `/fr/`. The EN · NL · FR switcher keeps you on the same page.
- **The Dutch and French text needs to be checked by a native speaker before launch.**
- Blog posts are in English only. In NL and FR they are labelled "Article in English".

### If NL or FR pages show "404"
The Dutch and French pages are built from the folder `src/pages/[lang]` (with the square brackets). Check that this folder is in your GitHub repository with all its sub-folders. If it is missing, upload it again.

## Placeholders to replace before launch
- Projects: the Flanders and Ethiopia project summaries (marked "Coming soon").
- About: the publications list.
- Privacy: have the text reviewed.
- `SITE_URL` environment variable on Vercel.

## Commands
```
npm install
npm run dev       # local preview
npm run build     # builds the site into dist/
```
Requires Node.js 22.23 or newer.
