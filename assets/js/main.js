/* ==========================================================================
   Omola Concept: behaviour shared by every page
   --------------------------------------------------------------------------
   - mobile menu, back-to-top button, smooth scrolling (from the original page)
   - the shopping bag (saved in the visitor's browser)
   - "Added to bag" pop-up messages
   - sending an order to the boutique by Instagram DM or email
   ========================================================================== */

const INSTAGRAM_HANDLE = '_ire.dia';
const INSTAGRAM_DM_URL = `https://ig.me/m/${INSTAGRAM_HANDLE}`;
const SHOP_EMAIL = 'girlthat612@gmail.com';

/* ----- Mobile menu -------------------------------------------------------- */
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', String(isOpen));
    });
}

/* ----- Back-to-top button -------------------------------------------------- */
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('hidden', window.pageYOffset <= 300);
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ----- Smooth scrolling for links to a section on the same page ----------- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.length < 2) return;
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        e.preventDefault();
        window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });

        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

/* ----- Instagram button animation on hover (from the original page) -------- */
document.querySelectorAll('.instagram-btn').forEach((btn) => {
    const icon = btn.querySelector('i');
    if (!icon) return;
    btn.addEventListener('mouseenter', () => icon.classList.add('animate-pulse'));
    btn.addEventListener('mouseleave', () => icon.classList.remove('animate-pulse'));
});

/* ----- Current year in the footer ----------------------------------------- */
document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
});

/* ==========================================================================
   Shopping bag
   --------------------------------------------------------------------------
   The bag is a list of { id, size, quantity } saved in the browser's
   localStorage, so it survives page changes and refreshes. It never leaves
   the visitor's device. If storage is blocked (e.g. private browsing), the
   bag simply starts empty.
   ========================================================================== */
const Bag = {
    STORAGE_KEY: 'omola-bag',

    items() {
        try {
            const saved = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
            return Array.isArray(saved) ? saved : [];
        } catch (error) {
            return [];
        }
    },

    save(items) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
        } catch (error) {
            /* storage unavailable: the bag only lasts for this page */
        }
        this.updateCount();
    },

    add(id, size, quantity) {
        const items = this.items();
        const existing = items.find((item) => item.id === id && item.size === size);
        if (existing) {
            existing.quantity += quantity;
        } else {
            items.push({ id, size, quantity });
        }
        this.save(items);
    },

    setQuantity(id, size, quantity) {
        const items = this.items()
            .map((item) => (item.id === id && item.size === size ? { ...item, quantity } : item))
            .filter((item) => item.quantity > 0);
        this.save(items);
    },

    remove(id, size) {
        this.save(this.items().filter((item) => !(item.id === id && item.size === size)));
    },

    clear() {
        this.save([]);
    },

    /** Total number of pieces in the bag. */
    count() {
        return this.items().reduce((total, item) => total + item.quantity, 0);
    },

    /** Show the number of pieces on the bag icon in the navigation. */
    updateCount() {
        const count = this.count();
        document.querySelectorAll('[data-bag-count]').forEach((badge) => {
            badge.textContent = count;
            badge.classList.toggle('hidden', count === 0);
        });
    },
};

Bag.updateCount();

/* ----- Pop-up message ("Added to bag", "Order copied" ...) ----------------- */
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.setAttribute('role', 'status');
        toast.className = 'toast toast-hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg text-sm font-semibold max-w-[90vw] text-center';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.remove('toast-hidden');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.add('toast-hidden'), 3500);
}

/* ==========================================================================
   Sending an order
   --------------------------------------------------------------------------
   There is no online payment. Customers send their order to the boutique,
   which confirms availability, the delivery fee and payment details.
   ========================================================================== */

/** Copy text to the clipboard. Resolves to true if it worked. */
async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (error) {
        const helper = document.createElement('textarea');
        helper.value = text;
        helper.style.position = 'fixed';
        helper.style.opacity = '0';
        document.body.appendChild(helper);
        helper.select();
        let copied = false;
        try {
            copied = document.execCommand('copy');
        } catch (e) {
            copied = false;
        }
        helper.remove();
        return copied;
    }
}

/**
 * Copy the order message, then open an Instagram DM to the boutique so the
 * customer can paste it in.
 */
async function sendOrderOnInstagram(message) {
    // Open the tab straight away, because browsers block pop-ups opened later.
    // ("noopener" is not used here because it makes window.open return null.)
    const dmWindow = window.open(INSTAGRAM_DM_URL, '_blank');
    if (dmWindow) {
        dmWindow.opener = null; // the new tab cannot control this page
    }
    const copied = await copyText(message);
    showToast(copied
        ? 'Order copied! Paste it into your Instagram message to us.'
        : 'Opening Instagram… please type your order in the message.');
    if (!dmWindow) {
        // Pop-up blocked: give the message time to show, then go to Instagram.
        setTimeout(() => { window.location.href = INSTAGRAM_DM_URL; }, 1500);
    }
}

/** Open the visitor's email app with the order already written in. */
function sendOrderByEmail(subject, message) {
    window.location.href = `mailto:${SHOP_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}
