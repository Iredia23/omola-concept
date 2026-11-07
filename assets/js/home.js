/* ==========================================================================
   Omola Concept: home page (index.html)
   Fills the "New Arrivals" section with up to four products marked isNew.
   ========================================================================== */

const newArrivalsGrid = document.getElementById('new-arrivals-grid');
const newArrivals = PRODUCTS.filter((product) => product.isNew).slice(0, 4);

newArrivalsGrid.innerHTML = newArrivals.map(productCardHTML).join('');
