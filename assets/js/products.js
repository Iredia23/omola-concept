/* ==========================================================================
   Omola Concept: product catalogue
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to add, change or remove products.
   The shop, product pages, home page "New Arrivals" and the bag all read
   from the PRODUCTS list below.

   Each product has:
     id          unique, lowercase, words joined with dashes (used in the URL)
     name        product name shown on the site
     category    one of the keys in CATEGORIES below
     price       price in naira, as a plain number (no commas or ₦)
     image       the Unsplash photo id (the part after "photo-" in the URL),
                 or a full image URL / path such as "assets/img/my-dress.jpg"
     colour      main colour
     description one or two sentences
     details     list of bullet points (fabric, fit, care)
     sizes       list of sizes that can be chosen
     isNew       true shows a "New" badge and puts it in New Arrivals
     bestseller  true shows a "Bestseller" badge
   ========================================================================== */

const CATEGORIES = {
    dresses: 'Dresses',
    tops: 'Tops & Outerwear',
    bottoms: 'Bottoms',
    sets: 'Sets & Playsuits',
    accessories: 'Accessories',
};

const CLOTHING_SIZES = ['XS', 'S', 'M', 'L', 'XL'];
const TROUSER_SIZES = ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16'];
const SHOE_SIZES = ['EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'];
const ONE_SIZE = ['One Size'];

const PRODUCTS = [
    // ----- Dresses ---------------------------------------------------------
    {
        id: 'scarlet-swing-gown',
        name: 'Scarlet Swing Gown',
        category: 'dresses',
        price: 85000,
        image: '1595777457583-95e059d581b8',
        colour: 'Red',
        description: 'A floor-length statement gown with a fitted bodice and a full skirt that moves beautifully with every step. Made for weddings, galas and every moment you want all eyes on you.',
        details: ['Fitted bodice with sweetheart neckline', 'Full, flowing maxi skirt', 'Concealed back zip', 'Dry clean only'],
        sizes: CLOTHING_SIZES,
        isNew: true,
        bestseller: true,
    },
    {
        id: 'plum-off-shoulder-dress',
        name: 'Plum Off-Shoulder Dress',
        category: 'dresses',
        price: 62000,
        image: '1566174053879-31528523f8ae',
        colour: 'Plum',
        description: 'Elegant and effortless. A rich plum dress with an off-the-shoulder neckline that frames the collarbones perfectly.',
        details: ['Off-the-shoulder neckline', 'Bodycon fit through the waist', 'Stretch fabric for comfort', 'Hand wash cold'],
        sizes: CLOTHING_SIZES,
        isNew: true,
        bestseller: false,
    },
    {
        id: 'poppy-belted-midi-dress',
        name: 'Poppy Belted Midi Dress',
        category: 'dresses',
        price: 48500,
        image: '1572804013309-59a88b7e92f1',
        colour: 'Red floral',
        description: 'A cheerful floral midi with ruffled sleeves and a statement belt that cinches the waist. Perfect for brunches, birthdays and Sunday service.',
        details: ['Ruffle cap sleeves', 'Includes matching statement belt', 'Fit-and-flare midi length', 'Machine wash gentle'],
        sizes: CLOTHING_SIZES,
        isNew: false,
        bestseller: true,
    },
    {
        id: 'sky-wrap-maxi-dress',
        name: 'Sky Wrap Maxi Dress',
        category: 'dresses',
        price: 55000,
        image: '1539008835657-9e8e9680c956',
        colour: 'Sky blue',
        description: 'Light, airy and made for holidays. This wrap maxi dress has a deep V-neck and a high front slit for an easy, breezy silhouette.',
        details: ['Adjustable wrap tie', 'Thin adjustable straps', 'High front slit', 'Hand wash cold'],
        sizes: CLOTHING_SIZES,
        isNew: false,
        bestseller: false,
    },
    {
        id: 'rosa-floral-wrap-dress',
        name: 'Rosa Floral Wrap Dress',
        category: 'dresses',
        price: 45000,
        image: '1496747611176-843222e1e57c',
        colour: 'Ivory floral',
        description: 'Soft ivory fabric with a romantic rose print. A flattering wrap dress you can dress up with heels or down with sandals.',
        details: ['True wrap style with side tie', 'Short flutter sleeves', 'Midi length', 'Machine wash gentle'],
        sizes: CLOTHING_SIZES,
        isNew: false,
        bestseller: false,
    },
    {
        id: 'crimson-drape-dress',
        name: 'Crimson Drape Dress',
        category: 'dresses',
        price: 92000,
        image: '1612336307429-8a898d10e223',
        colour: 'Crimson',
        description: 'A show-stopping long-sleeve mini with a dramatic draped train. Designed for red-carpet moments and unforgettable entrances.',
        details: ['Long sleeves', 'Mini length with detachable draped train', 'Concealed back zip', 'Dry clean only'],
        sizes: CLOTHING_SIZES,
        isNew: true,
        bestseller: false,
    },
    {
        id: 'blush-puff-sleeve-dress',
        name: 'Blush Puff-Sleeve Dress',
        category: 'dresses',
        price: 58000,
        image: '1581044777550-4cfa60707c03',
        colour: 'Blush pink',
        description: 'Dreamy, feminine and full of volume. Dramatic puff sleeves and a delicate dotted print make this a dress to remember.',
        details: ['Oversized puff sleeves', 'Off-the-shoulder neckline', 'Lightweight dotted chiffon', 'Hand wash cold'],
        sizes: CLOTHING_SIZES,
        isNew: true,
        bestseller: false,
    },

    // ----- Tops & Outerwear ----------------------------------------------
    {
        id: 'daisy-embroidered-shirt',
        name: 'Daisy Embroidered Shirt',
        category: 'tops',
        price: 22000,
        image: '1564257631407-4deb1f99d992',
        colour: 'White',
        description: 'A crisp white shirt with delicate floral embroidery. Wear it buttoned, knotted at the waist or open over a camisole.',
        details: ['Floral embroidery on the front', 'Short sleeves', 'Relaxed fit', 'Machine wash cold'],
        sizes: CLOTHING_SIZES,
        isNew: false,
        bestseller: true,
    },
    {
        id: 'midnight-turtleneck-knit',
        name: 'Midnight Turtleneck Knit',
        category: 'tops',
        price: 24000,
        image: '1550639525-c97d455acf70',
        colour: 'Black',
        description: 'The polished essential every wardrobe needs. A fine-knit black turtleneck that layers under blazers or shines on its own.',
        details: ['Fine rib knit', 'Fitted turtleneck', 'Long sleeves', 'Hand wash cold, dry flat'],
        sizes: CLOTHING_SIZES,
        isNew: false,
        bestseller: false,
    },
    {
        id: 'essential-white-tee',
        name: 'Essential White Tee',
        category: 'tops',
        price: 9500,
        image: '1521572163474-6864f9cf17ab',
        colour: 'White',
        description: 'Soft, breathable and endlessly versatile. The everyday cotton tee that goes with everything in your wardrobe.',
        details: ['100% cotton', 'Crew neck', 'Regular fit', 'Machine wash warm'],
        sizes: CLOTHING_SIZES,
        isNew: false,
        bestseller: true,
    },
    {
        id: 'copper-bomber-jacket',
        name: 'Copper Bomber Jacket',
        category: 'tops',
        price: 42000,
        image: '1591047139829-d91aecb6caea',
        colour: 'Copper',
        description: 'A lightweight bomber in a warm copper tone. Easy to throw on over dresses, tees and jeans for instant cool.',
        details: ['Lightweight shell', 'Front zip with ribbed cuffs and hem', 'Utility sleeve pocket', 'Machine wash cold'],
        sizes: CLOTHING_SIZES,
        isNew: true,
        bestseller: false,
    },

    // ----- Bottoms -------------------------------------------------------
    {
        id: 'blush-jogger-trousers',
        name: 'Blush Jogger Trousers',
        category: 'bottoms',
        price: 19500,
        image: '1594633312681-425c7b97ccd1',
        colour: 'Blush pink',
        description: 'Comfort meets chic. High-waisted jogger trousers in soft blush, styled up with heels or down with trainers.',
        details: ['High waist', 'Front patch pockets', 'Elasticated cuffs', 'Machine wash cold'],
        sizes: TROUSER_SIZES,
        isNew: false,
        bestseller: false,
    },
    {
        id: 'patchwork-boyfriend-jeans',
        name: 'Patchwork Boyfriend Jeans',
        category: 'bottoms',
        price: 26000,
        image: '1541099649105-f69ad21f3246',
        colour: 'Mid-wash denim',
        description: 'Relaxed boyfriend jeans with playful patches and distressed details. Your new weekend favourite.',
        details: ['Relaxed boyfriend fit', 'Distressed knees and patch details', 'Five-pocket design', 'Machine wash cold inside out'],
        sizes: TROUSER_SIZES,
        isNew: false,
        bestseller: true,
    },

    // ----- Sets & Playsuits ----------------------------------------------
    {
        id: 'sunshine-lounge-set',
        name: 'Sunshine Lounge Set',
        category: 'sets',
        price: 35000,
        image: '1515886657613-9f3515b0c78f',
        colour: 'Mustard yellow',
        description: 'A bright two-piece set with a cropped hoodie and matching joggers. Lounge-wear that is good enough to wear out.',
        details: ['Cropped hoodie and matching joggers', 'Soft brushed fleece', 'Sold as a set', 'Machine wash cold'],
        sizes: CLOTHING_SIZES,
        isNew: true,
        bestseller: false,
    },
    {
        id: 'olive-belted-playsuit',
        name: 'Olive Belted Playsuit',
        category: 'sets',
        price: 27000,
        image: '1618932260643-eee4a2f652a6',
        colour: 'Olive',
        description: 'A sleek olive playsuit with a self-tie belt. One piece, no thinking required, and perfect for hot Lagos days.',
        details: ['Adjustable spaghetti straps', 'Self-tie belt', 'Relaxed shorts', 'Hand wash cold'],
        sizes: CLOTHING_SIZES,
        isNew: false,
        bestseller: false,
    },
    {
        id: 'pinstripe-shirt-skirt-set',
        name: 'Pinstripe Shirt & Skirt Set',
        category: 'sets',
        price: 38000,
        image: '1583496661160-fb5886a0aaaa',
        colour: 'Black & white',
        description: 'A sharp pinstripe shirt paired with a flared black skater skirt. Office-ready on weekdays, brunch-ready on weekends.',
        details: ['Pinstripe button-down shirt', 'High-waisted skater skirt', 'Sold as a set', 'Machine wash cold'],
        sizes: CLOTHING_SIZES,
        isNew: false,
        bestseller: false,
    },

    // ----- Accessories ---------------------------------------------------
    {
        id: 'ruby-top-handle-bag',
        name: 'Ruby Top-Handle Bag',
        category: 'accessories',
        price: 68000,
        image: '1584917865442-de89df76afd3',
        colour: 'Red',
        description: 'A structured top-handle bag in glossy red with a polished buckle. The finishing touch that elevates any outfit.',
        details: ['Structured silhouette', 'Top handle and detachable shoulder strap', 'Buckle closure', 'Wipe clean with a soft cloth'],
        sizes: ONE_SIZE,
        isNew: true,
        bestseller: true,
    },
    {
        id: 'teal-satchel-bag',
        name: 'Teal Satchel Bag',
        category: 'accessories',
        price: 54000,
        image: '1594223274512-ad4803739b7c',
        colour: 'Teal',
        description: 'A rich teal satchel with a gold-tone clasp. Roomy enough for the essentials, stylish enough for any occasion.',
        details: ['Gold-tone push-lock clasp', 'Top handle', 'Interior zip pocket', 'Wipe clean with a soft cloth'],
        sizes: ONE_SIZE,
        isNew: false,
        bestseller: false,
    },
    {
        id: 'woven-basket-bag',
        name: 'Woven Basket Bag',
        category: 'accessories',
        price: 47000,
        image: '1590874103328-eac38a683ce7',
        colour: 'Peach',
        description: 'A woven basket bag with a smooth top flap. Brings a sunny, holiday feel to everyday outfits.',
        details: ['Hand-woven body', 'Top handle', 'Flap with buckle closure', 'Spot clean only'],
        sizes: ONE_SIZE,
        isNew: false,
        bestseller: false,
    },
    {
        id: 'floral-stiletto-pumps',
        name: 'Floral Stiletto Pumps',
        category: 'accessories',
        price: 39000,
        image: '1543163521-1bf539c55dd2',
        colour: 'Blue floral',
        description: 'Pointed-toe stilettos in a bold floral print. The statement shoe that turns a simple dress into a look.',
        details: ['Pointed toe', '10 cm stiletto heel', 'Cushioned insole', 'Wipe clean'],
        sizes: SHOE_SIZES,
        isNew: false,
        bestseller: false,
    },
    {
        id: 'sapphire-drop-earrings',
        name: 'Sapphire Drop Earrings',
        category: 'accessories',
        price: 15000,
        image: '1535632066927-ab7c9ab60908',
        colour: 'Silver & blue',
        description: 'Sparkling drop earrings with a deep blue centre stone. Made for evenings out and special celebrations.',
        details: ['Crystal-set drop design', 'Blue centre stone', 'Push-back fastening', 'Store dry, away from perfume'],
        sizes: ONE_SIZE,
        isNew: false,
        bestseller: true,
    },
    {
        id: 'crescent-layered-necklace',
        name: 'Crescent Layered Necklace',
        category: 'accessories',
        price: 12500,
        image: '1599643478518-a784e5dc4c8f',
        colour: 'Gold',
        description: 'Two delicate gold-tone chains with a crescent moon and gemstone pendant. Layering made easy.',
        details: ['Two layered chains', 'Crescent and gemstone pendants', 'Adjustable length', 'Store dry, away from perfume'],
        sizes: ONE_SIZE,
        isNew: false,
        bestseller: false,
    },
    {
        id: 'rose-gold-bracelet',
        name: 'Rose Gold Crystal Bracelet',
        category: 'accessories',
        price: 18000,
        image: '1611591437281-460bfbe1220a',
        colour: 'Rose gold',
        description: 'A sparkling rose-gold bracelet with crystal-set links. Stack it or wear it alone.',
        details: ['Crystal-set links', 'Rose-gold tone', 'Secure clasp', 'Store dry, away from perfume'],
        sizes: ONE_SIZE,
        isNew: true,
        bestseller: false,
    },
];

/* ==========================================================================
   Helper functions used by the other scripts. You normally do not need to
   change anything below this line.
   ========================================================================== */

/** Format a number as naira, e.g. 85000 -> "₦85,000" */
function formatPrice(amount) {
    return '₦' + Number(amount).toLocaleString('en-NG');
}

/** Build an image URL. Unsplash ids are turned into a sized Unsplash link. */
function imageUrl(image, width) {
    if (image.startsWith('http') || image.includes('/')) {
        return image;
    }
    return `https://images.unsplash.com/photo-${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${width}&q=80`;
}

/** Find a product by its id (returns undefined if there is no such product). */
function findProduct(id) {
    return PRODUCTS.find((product) => product.id === id);
}

/** HTML for one product card, used on the home page, shop and product pages. */
function productCardHTML(product) {
    let badge = '';
    if (product.isNew) {
        badge = '<span class="absolute top-4 left-4 bg-pink-600 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">New</span>';
    } else if (product.bestseller) {
        badge = '<span class="absolute top-4 left-4 bg-black text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Bestseller</span>';
    }

    return `
        <a href="product.html?id=${product.id}" class="group block">
            <div class="relative overflow-hidden rounded-lg shadow-md bg-gray-100">
                <img src="${imageUrl(product.image, 600)}" alt="${product.name}" loading="lazy"
                     class="w-full h-80 object-cover transition duration-500 group-hover:scale-105">
                ${badge}
                <span class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-800 text-sm font-semibold px-5 py-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    View details
                </span>
            </div>
            <div class="pt-4">
                <p class="text-xs uppercase tracking-widest text-gray-500 mb-1">${CATEGORIES[product.category]}</p>
                <h3 class="heading-font text-lg font-bold group-hover:text-pink-600 transition">${product.name}</h3>
                <p class="text-pink-600 font-semibold mt-1">${formatPrice(product.price)}</p>
            </div>
        </a>`;
}
