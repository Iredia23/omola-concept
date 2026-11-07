/* ==========================================================================
   Omola Concept: product details page (product.html?id=...)
   Fills the page with the product named in the address, lets the visitor
   choose a size and quantity, and add it to the bag or order on Instagram.
   ========================================================================== */

const productId = new URLSearchParams(window.location.search).get('id');

// What the visitor has chosen so far.
let selectedSize = null;
let quantity = 1;
const product = findProduct(productId);

const detailSection = document.getElementById('product-detail');
const notFoundSection = document.getElementById('product-not-found');

if (!product) {
    detailSection.classList.add('hidden');
    notFoundSection.classList.remove('hidden');
} else {
    showProduct(product);
}

function showProduct(p) {
    document.title = `${p.name} | Omola Concept`;
    document.querySelector('meta[name="description"]').setAttribute('content', p.description);

    document.getElementById('breadcrumb-category').textContent = CATEGORIES[p.category];
    document.getElementById('breadcrumb-category').href = `shop.html?category=${p.category}`;
    document.getElementById('breadcrumb-name').textContent = p.name;

    const image = document.getElementById('product-image');
    image.src = imageUrl(p.image, 1000);
    image.alt = p.name;

    document.getElementById('product-category').textContent = CATEGORIES[p.category];
    document.getElementById('product-name').textContent = p.name;
    document.getElementById('product-price').textContent = formatPrice(p.price);
    document.getElementById('product-description').textContent = p.description;
    document.getElementById('product-colour').textContent = p.colour;
    document.getElementById('product-details').innerHTML = p.details.map((d) => `<li>${d}</li>`).join('');

    const badge = document.getElementById('product-badge');
    if (p.isNew || p.bestseller) {
        badge.textContent = p.isNew ? 'New' : 'Bestseller';
        badge.classList.toggle('bg-black', !p.isNew);
        badge.classList.toggle('bg-pink-600', p.isNew);
        badge.classList.remove('hidden');
    }

    setUpSizes(p);
    setUpQuantity();
    setUpButtons(p);
    showRelated(p);
}

/* ----- Size choice ----------------------------------------------------------- */

function setUpSizes(p) {
    const container = document.getElementById('size-options');
    // A single size (e.g. "One Size") is chosen automatically.
    if (p.sizes.length === 1) {
        selectedSize = p.sizes[0];
    }
    container.innerHTML = p.sizes.map((size) => `
        <button type="button" class="size-option border border-gray-300 rounded-full px-4 py-2 text-sm font-semibold hover:border-pink-600"
                data-size="${size}" aria-pressed="${size === selectedSize}">${size}</button>`).join('');

    container.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-size]');
        if (!button) return;
        selectedSize = button.dataset.size;
        container.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
        document.getElementById('size-error').classList.add('hidden');
    });
}

function requireSize() {
    if (selectedSize) return true;
    document.getElementById('size-error').classList.remove('hidden');
    document.getElementById('size-options').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return false;
}

/* ----- Quantity -------------------------------------------------------------- */

function setUpQuantity() {
    const display = document.getElementById('quantity');
    document.getElementById('qty-minus').addEventListener('click', () => {
        quantity = Math.max(1, quantity - 1);
        display.textContent = quantity;
    });
    document.getElementById('qty-plus').addEventListener('click', () => {
        quantity = Math.min(10, quantity + 1);
        display.textContent = quantity;
    });
}

/* ----- Add to bag / order on Instagram --------------------------------------- */
function setUpButtons(p) {
    document.getElementById('add-to-bag').addEventListener('click', () => {
        if (!requireSize()) return;
        Bag.add(p.id, selectedSize, quantity);
        showToast(`Added to bag: ${p.name} (${selectedSize}) × ${quantity}`);
    });

    document.getElementById('order-instagram').addEventListener('click', () => {
        if (!requireSize()) return;
        const message = [
            'Hi Omola Concept! I would like to order:',
            `${p.name}, size ${selectedSize}, quantity ${quantity} (${formatPrice(p.price * quantity)})`,
            `Link: ${window.location.href}`,
        ].join('\n');
        sendOrderOnInstagram(message);
    });
}

/* ----- "You may also like" ----------------------------------------------------- */
function showRelated(p) {
    const sameCategory = PRODUCTS.filter((other) => other.category === p.category && other.id !== p.id);
    const others = PRODUCTS.filter((other) => other.category !== p.category && other.bestseller);
    const related = [...sameCategory, ...others].slice(0, 4);
    document.getElementById('related-products').innerHTML = related.map(productCardHTML).join('');
}
