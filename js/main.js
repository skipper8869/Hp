/* ============================================================
   ÉLÉGANCE — Modern JS
   ============================================================ */

/* ===== DATA ===== */
const profiles = [
  {
    name: "Sophia", age: 26, city: "München · Berlin", price: "300 €", badge: "VIP",
    tags: ["blonde", "vip"], chips: ["Dinner", "Reisen", "Events"],
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
    stats: { Größe: "172 cm", Figur: "Schlank", Augen: "Grün", Sprachen: "DE · EN · FR" },
    bio: "Sophia ist eine kultivierte, weltgewandte Begleiterin mit Hintergrund in der Modebranche. Sie glänzt auf jedem gesellschaftlichen Parkett — die perfekte Begleiterin für exklusive Events und internationale Reisen."
  },
  {
    name: "Isabella", age: 29, city: "Frankfurt · Hamburg", price: "250 €", badge: null,
    tags: ["brunette"], chips: ["Kultur", "Business", "Reisen"],
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    stats: { Größe: "168 cm", Figur: "Kurvig", Augen: "Braun", Sprachen: "DE · EN · IT" },
    bio: "Isabella hat Rechtswissenschaften studiert und begleitet Sie mit Kompetenz und Eleganz zu Business-Dinners und Kulturveranstaltungen. Bildung, Humor und Stil zeichnen sie aus."
  },
  {
    name: "Valentina", age: 24, city: "Düsseldorf · Köln", price: "220 €", badge: null,
    tags: ["blonde"], chips: ["Mode", "Kunst", "Dinner"],
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
    stats: { Größe: "175 cm", Figur: "Schlank", Augen: "Blau", Sprachen: "DE · EN · ES" },
    bio: "Valentina — ein Naturtalent in Sachen Stil. Die leidenschaftliche Kunstliebhaberin begeistert durch ihre lebhafte Persönlichkeit. Galerie-Eröffnungen und exklusive Dinners sind ihr Element."
  },
  {
    name: "Elena", age: 31, city: "Wien · Zürich", price: "350 €", badge: "VIP",
    tags: ["brunette", "vip"], chips: ["Events", "Business", "Wellness"],
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    stats: { Größe: "170 cm", Figur: "Athletisch", Augen: "Grau", Sprachen: "DE · EN · RU" },
    bio: "Elena verbindet osteuropäische Eleganz mit westlichem Lifestyle. Die ehemalige Ballett-Tänzerin besticht durch außergewöhnliche Anmut — ob Opernball, Galadinner oder Wellness-Retreat."
  },
  {
    name: "Mia", age: 23, city: "Stuttgart · München", price: "200 €", badge: null,
    tags: ["blonde"], chips: ["Sport", "Reisen", "Dinner"],
    img: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800&q=80",
    stats: { Größe: "165 cm", Figur: "Sportlich", Augen: "Grün", Sprachen: "DE · EN" },
    bio: "Mia ist die spontanste unserer Damen — voller Energie und ansteckender Herzlichkeit. Die Sport-Enthusiastin ist die perfekte Begleiterin für Ausflüge, Reisen und entspannte Abende."
  },
  {
    name: "Natalie", age: 27, city: "Berlin · Leipzig", price: "230 €", badge: null,
    tags: ["brunette"], chips: ["Theater", "Musik", "Reisen"],
    img: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=800&q=80",
    stats: { Größe: "169 cm", Figur: "Schlank", Augen: "Braun", Sprachen: "DE · EN · FR" },
    bio: "Natalie hat Musikwissenschaften studiert und liebt Theater, Oper und klassische Konzerte. Tiefe Allgemeinbildung, Witz und ein warmes Lächeln machen jedes Gespräch zum Vergnügen."
  }
];

const arrowSvg = `<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/* ===== RENDER MODEL CARDS ===== */
const grid = document.getElementById('modelsGrid');
grid.innerHTML = profiles.map((p, i) => `
  <article class="card" data-tags="${p.tags.join(' ')}" data-reveal style="transition-delay:${i * 60}ms">
    <div class="card__img">
      ${p.badge ? `<span class="card__badge">${p.badge}</span>` : ''}
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
    </div>
    <div class="card__body">
      <h3 class="card__name">${p.name}, ${p.age}</h3>
      <p class="card__city">📍 ${p.city}</p>
      <div class="card__tags">${p.chips.map(c => `<span>${c}</span>`).join('')}</div>
      <div class="card__foot">
        <p class="card__price">ab <b>${p.price}</b>/Std.</p>
        <button class="card__btn" aria-label="Profil ansehen" data-profile="${i}">${arrowSvg}</button>
      </div>
    </div>
  </article>
`).join('');

/* Make whole card clickable for profile */
grid.querySelectorAll('.card').forEach((card, i) => {
  card.addEventListener('click', () => openProfile(i));
});

/* ===== POPULATE LADY SELECT ===== */
const ladySelect = document.getElementById('ladySelect');
profiles.forEach(p => {
  const opt = document.createElement('option');
  opt.textContent = p.name;
  ladySelect.appendChild(opt);
});

/* ===== AGE GATE ===== */
function confirmAge() {
  sessionStorage.setItem('ageVerified', '1');
  document.getElementById('ageGate').classList.add('hide');
}
if (sessionStorage.getItem('ageVerified') === '1') {
  document.getElementById('ageGate').classList.add('hide');
}

/* ===== NAV ===== */
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  burger.classList.remove('open');
}));

/* ===== FILTERS ===== */
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const f = chip.dataset.filter;
    grid.querySelectorAll('.card').forEach(card => {
      const show = f === 'all' || (card.dataset.tags || '').includes(f);
      card.classList.toggle('hide', !show);
    });
  });
});

/* ===== PROFILE MODAL ===== */
const modal = document.getElementById('profileModal');
const modalContent = document.getElementById('modalContent');

function openProfile(i) {
  const p = profiles[i];
  modalContent.innerHTML = `
    <div class="modal__img"><img src="${p.img}" alt="${p.name}" /></div>
    <div class="modal__details">
      <h2 class="modal__name">${p.name}, ${p.age}<span>📍 ${p.city}</span></h2>
      <div class="card__tags">${p.chips.map(c => `<span>${c}</span>`).join('')}</div>
      <div class="modal__stats">
        ${Object.entries(p.stats).map(([k, v]) => `<div class="modal__stat"><b>${k}</b><span>${v}</span></div>`).join('')}
      </div>
      <p class="modal__bio">${p.bio}</p>
      <p class="modal__price">ab ${p.price} / Stunde</p>
      <a href="#contact" class="btn btn--primary btn--lg" data-close>Jetzt anfragen ${arrowSvg}</a>
    </div>`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProfile() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

modal.addEventListener('click', e => { if (e.target.hasAttribute('data-close')) closeProfile(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProfile(); });

/* ===== CONTACT FORM ===== */
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const ok = document.getElementById('formOk');
  ok.classList.add('show');
  this.reset();
  setTimeout(() => ok.classList.remove('show'), 5000);
});

/* ===== SCROLL REVEAL ===== */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });

document.querySelectorAll('.section__head, .card, .bento__item, .rate, .quote, .about__media, .about__text, .contact-intro, .form')
  .forEach(el => { el.setAttribute('data-reveal', ''); io.observe(el); });
