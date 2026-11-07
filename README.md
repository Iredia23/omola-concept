# Omola Concept

A responsive, multi-page website for **Omola Concept**, a fashion boutique in
Opebi, Ikeja, Lagos. Visitors can browse the collection, filter by category,
view product details, fill a shopping bag, and send their order to the
boutique by **Instagram DM** or **email**. They can also find sizing,
delivery and contact information.

It is a static website (HTML, CSS and JavaScript only). There is no server or
database, so it can be hosted free on **GitHub Pages** or opened straight from
the folder.

---

## Pages

| Page | File | What it does |
|---|---|---|
| Home | `index.html` | Hero banner, shop by category, new arrivals, our story, why shop with us, Instagram gallery, contact details |
| Shop | `shop.html` | All products, with category filters and sorting by price or newest |
| Product | `product.html?id=…` | Photo, price, description, size and quantity choice, add to bag, order on Instagram, related products |
| Bag | `cart.html` | Change quantities, remove items, order summary, send the order by Instagram or email |
| Lookbook | `lookbook.html` | Photo gallery with a full-screen viewer and "Shop the look" links |
| About | `about.html` | Brand story, mission, values, what we sell, visit the boutique |
| Contact | `contact.html` | Message form (opens the visitor's email app), address, hours, Instagram card, map |
| FAQs | `faq.html` | Questions on orders, payment, delivery, returns and sizing |
| Shipping & Returns | `shipping-returns.html` | Delivery times, returns and exchanges, damaged items |
| Size Guide | `size-guide.html` | How to measure, plus size charts for clothing, trousers and shoes |
| Privacy Policy | `privacy-policy.html` | What information is collected and how it is used |
| Terms & Conditions | `terms.html` | Terms for orders, prices and website use |
| Not Found | `404.html` | Shown by GitHub Pages for any address that doesn't exist |

## Features

- The same design on every page: Playfair Display and Montserrat fonts, pink accents, rounded buttons
- Works on phones, tablets and desktops, with a mobile menu
- Shopping bag saved in the visitor's browser, with an item count on the bag icon
- One-tap ordering: the order is copied and an Instagram DM to the boutique opens
- Shop filters can be linked directly, e.g. `shop.html?category=dresses`
- Lookbook viewer that works with the keyboard (← → Esc)
- Search-engine and social sharing details on every page, plus `sitemap.xml` and `robots.txt`
- Accessibility basics: image descriptions, labelled buttons and form fields, keyboard focus

## Folder structure

```
omola-concept/
├── index.html, shop.html, product.html, cart.html, ...   the pages
├── 404.html                 "page not found"
├── sitemap.xml, robots.txt  help search engines find the pages
└── assets/
    ├── css/styles.css       custom styles shared by every page
    ├── img/favicon.svg      browser-tab icon
    └── js/
        ├── products.js      THE PRODUCT CATALOGUE (edit this to change products)
        ├── main.js          shared behaviour: menu, bag, ordering, contact details
        ├── home.js          new arrivals on the home page
        ├── shop.js          shop filters and sorting
        ├── product.js       product details page
        ├── cart.js          bag page
        ├── lookbook.js      lookbook photo viewer
        └── contact.js       contact form
```

## How to…

**Add, change or remove a product.** Edit `assets/js/products.js`. Each product
is one block with a name, price, photo, sizes and description. Instructions are
at the top of the file. The shop, product pages, home page and bag update
automatically.

**Use your own photos.** Put them in `assets/img/` and set a product's `image`
to the path, for example `image: 'assets/img/scarlet-gown.jpg'`.

**Change the Instagram account or email for orders.** Edit the three lines at
the top of `assets/js/main.js`, and the same details in the pages' contact
sections and footers.

## Run it

There is nothing to install. Download or clone the repository and open
`index.html` in a web browser.

```bash
git clone https://github.com/Iredia23/omola-concept.git
```

## Put it online with GitHub Pages

1. In this repository, go to **Settings → Pages**.
2. Under **Branch**, choose `main` and `/ (root)`, then click **Save**.
3. After a minute or two the site is live at `https://iredia23.github.io/omola-concept/`.

## Before going live: checklist

Some content is a starting template and must be checked against how the
business really works:

- [ ] **Phone number.** `(212) 555-1234` is a placeholder (it was on the original page). Replace it everywhere it appears.
- [ ] **Products and prices.** The 23 products are examples using stock photos from Unsplash. Replace them with real stock, prices and photos.
- [ ] **Delivery, returns and payment.** Check the times, 7-day exchange rule, store pick-up and other details on the Shipping & Returns and FAQ pages.
- [ ] **Privacy Policy and Terms.** These are general templates, not legal advice. Have them reviewed if needed.
- [ ] **About page.** Personalise the brand story and values.
- [ ] **Customer reviews.** None are included on purpose. Add real ones with customers' permission.

## Built with

- HTML5 and vanilla JavaScript
- [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- [Font Awesome](https://fontawesome.com/) icons
- Google Fonts (Playfair Display and Montserrat)
- Images from [Unsplash](https://unsplash.com/)
