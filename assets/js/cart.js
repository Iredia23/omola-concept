/* ==========================================================================
   Omola Concept: shopping bag page (cart.html)
   Lists what is in the bag, lets the visitor change quantities, and sends
   the order to the boutique by Instagram DM or email.
   ========================================================================== */

const bagList = document.getElementById('bag-items');
const bagContent = document.getElementById('bag-content');
const bagEmpty = document.getElementById('bag-empty');

/** Bag entries joined with their product information (unknown ids are skipped). */
function bagLines() {
    return Bag.items()
        .map((item) => ({ ...item, product: findProduct(item.id) }))
        .filter((line) => line.product);
}

function renderBag() {
    const lines = bagLines();
    bagEmpty.classList.toggle('hidden', lines.length > 0);
    bagContent.classList.toggle('hidden', lines.length === 0);
    if (!lines.length) return;

    bagList.innerHTML = lines.map(({ product, size, quantity }) => `
        <li class="flex gap-4 md:gap-6 py-6 border-b border-gray-200">
            <a href="product.html?id=${product.id}" class="shrink-0">
                <img src="${imageUrl(product.image, 300)}" alt="${product.name}" class="w-24 h-32 md:w-28 md:h-36 object-cover rounded-lg shadow-md">
            </a>
            <div class="flex-1 flex flex-col">
                <div class="flex justify-between gap-4">
                    <div>
                        <a href="product.html?id=${product.id}" class="heading-font text-lg font-bold hover:text-pink-600 transition">${product.name}</a>
                        <p class="text-sm text-gray-600 mt-1">Size: ${size} · Colour: ${product.colour}</p>
                        <p class="text-sm text-gray-600">${formatPrice(product.price)} each</p>
                    </div>
                    <p class="font-semibold whitespace-nowrap">${formatPrice(product.price * quantity)}</p>
                </div>
                <div class="flex items-center justify-between mt-auto pt-4">
                    <div class="flex items-center border border-gray-300 rounded-full">
                        <button type="button" class="w-9 h-9 hover:text-pink-600" data-action="minus" data-id="${product.id}" data-size="${size}" aria-label="Decrease quantity">−</button>
                        <span class="w-8 text-center font-semibold">${quantity}</span>
                        <button type="button" class="w-9 h-9 hover:text-pink-600" data-action="plus" data-id="${product.id}" data-size="${size}" aria-label="Increase quantity">+</button>
                    </div>
                    <button type="button" class="text-sm text-gray-500 hover:text-pink-600 transition" data-action="remove" data-id="${product.id}" data-size="${size}">
                        <i class="fas fa-trash-alt mr-1"></i> Remove
                    </button>
                </div>
            </div>
        </li>`).join('');

    const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
    const pieces = lines.reduce((sum, line) => sum + line.quantity, 0);
    document.getElementById('bag-pieces').textContent = `${pieces} ${pieces === 1 ? 'piece' : 'pieces'}`;
    document.getElementById('bag-subtotal').textContent = formatPrice(subtotal);
    document.getElementById('bag-total').textContent = formatPrice(subtotal);
}

bagList.addEventListener('click', (e) => {
    const button = e.target.closest('button[data-action]');
    if (!button) return;
    const { action, id, size } = button.dataset;
    const item = Bag.items().find((i) => i.id === id && i.size === size);
    if (!item) return;

    if (action === 'plus') Bag.setQuantity(id, size, Math.min(10, item.quantity + 1));
    if (action === 'minus') Bag.setQuantity(id, size, item.quantity - 1);
    if (action === 'remove') Bag.remove(id, size);
    renderBag();
});

/** The order written out as a message the boutique can read. */
function orderMessage() {
    const lines = bagLines();
    const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
    return [
        'Hi Omola Concept! I would like to order:',
        '',
        ...lines.map(({ product, size, quantity }, i) =>
            `${i + 1}. ${product.name}, size ${size}, qty ${quantity}: ${formatPrice(product.price * quantity)}`),
        '',
        `Subtotal: ${formatPrice(subtotal)}`,
        'Delivery address: ',
        'Phone number: ',
    ].join('\n');
}

document.getElementById('order-instagram').addEventListener('click', () => sendOrderOnInstagram(orderMessage()));
document.getElementById('order-email').addEventListener('click', () => sendOrderByEmail('New order from the website', orderMessage()));
document.getElementById('clear-bag').addEventListener('click', () => {
    if (confirm('Remove everything from your bag?')) {
        Bag.clear();
        renderBag();
    }
});

renderBag();
