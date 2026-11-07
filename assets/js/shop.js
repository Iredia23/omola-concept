/* ==========================================================================
   Omola Concept: shop page (shop.html)
   Shows every product, with category filters and sorting.
   A category can be linked directly, e.g. shop.html?category=dresses
   ========================================================================== */

const grid = document.getElementById('product-grid');
const filterBar = document.getElementById('category-filters');
const sortSelect = document.getElementById('sort-select');
const resultCount = document.getElementById('result-count');

const params = new URLSearchParams(window.location.search);
let activeCategory = CATEGORIES[params.get('category')] ? params.get('category') : 'all';

/** Draw the category buttons, highlighting the active one. */
function renderFilters() {
    const options = [['all', 'All'], ...Object.entries(CATEGORIES)];
    filterBar.innerHTML = options.map(([key, label]) => {
        const active = key === activeCategory;
        return `<button type="button" data-category="${key}" aria-pressed="${active}"
                    class="px-5 py-2 rounded-full border text-sm font-semibold transition ${active
                        ? 'bg-pink-600 border-pink-600 text-white'
                        : 'border-gray-300 hover:border-pink-600 hover:text-pink-600'}">${label}</button>`;
    }).join('');
}

/** Return the products to show, filtered and sorted. */
function visibleProducts() {
    const list = PRODUCTS.filter((p) => activeCategory === 'all' || p.category === activeCategory);
    switch (sortSelect.value) {
        case 'price-asc':
            return [...list].sort((a, b) => a.price - b.price);
        case 'price-desc':
            return [...list].sort((a, b) => b.price - a.price);
        case 'newest':
            return [...list].sort((a, b) => Number(b.isNew) - Number(a.isNew));
        default:
            return list; // "Featured": the order in products.js
    }
}

function renderProducts() {
    const list = visibleProducts();
    resultCount.textContent = `${list.length} ${list.length === 1 ? 'piece' : 'pieces'}`;
    grid.innerHTML = list.length
        ? list.map(productCardHTML).join('')
        : '<p class="col-span-full text-center text-gray-600 py-12">No pieces in this category yet. Check back soon!</p>';
}

filterBar.addEventListener('click', (e) => {
    const button = e.target.closest('button[data-category]');
    if (!button) return;
    activeCategory = button.dataset.category;

    // Keep the address bar in sync so the filtered page can be shared.
    const url = new URL(window.location.href);
    if (activeCategory === 'all') {
        url.searchParams.delete('category');
    } else {
        url.searchParams.set('category', activeCategory);
    }
    history.replaceState(null, '', url);

    renderFilters();
    renderProducts();
});

sortSelect.addEventListener('change', renderProducts);

renderFilters();
renderProducts();
