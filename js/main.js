/* ===== PROFILE DATA ===== */
const profiles = [
  {
    name: "Sophia",
    age: 26,
    city: "München · Berlin",
    price: "ab 300 €/Std.",
    badge: "VIP",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=700&q=80",
    tags: ["Dinner", "Reisen", "Events", "Business"],
    stats: { Größe: "172 cm", Figur: "Schlank", Augen: "Grün", Sprachen: "DE · EN · FR" },
    bio: "Sophia ist eine kultivierte und weltgewandte Begleiterin mit einem Hintergrund in der Modebranche. Sie glänzt auf jedem gesellschaftlichen Parkett und ist die perfekte Begleiterin für exklusive Events, internationale Reisen und unvergessliche Abende. Mit ihrem natürlichen Charme und ihrer Intelligenz wird jede Begegnung zu einem unvergesslichen Erlebnis."
  },
  {
    name: "Isabella",
    age: 29,
    city: "Frankfurt · Hamburg",
    price: "ab 250 €/Std.",
    badge: null,
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&q=80",
    tags: ["Kultur", "Business", "Reisen", "Dinner"],
    stats: { Größe: "168 cm", Figur: "Kurvig", Augen: "Braun", Sprachen: "DE · EN · IT" },
    bio: "Isabella hat Rechtswissenschaften studiert und begleitet Sie mit Kompetenz und Eleganz zu Business-Dinners, Konferenzen und Kulturveranstaltungen. Ihr Humor, ihre Bildung und ihr Stil machen sie zur idealen Partnerin auf Reisen und bei repräsentativen Anlässen."
  },
  {
    name: "Valentina",
    age: 24,
    city: "Düsseldorf · Köln",
    price: "ab 220 €/Std.",
    badge: null,
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=700&q=80",
    tags: ["Mode", "Kunst", "Dinner", "Events"],
    stats: { Größe: "175 cm", Figur: "Schlank", Augen: "Blau", Sprachen: "DE · EN · ES" },
    bio: "Valentina – ein echtes Naturtalent in Sachen Stil und Eleganz. Die leidenschaftliche Kunstliebhaberin und Hobbyfotografin begeistert durch ihre lebhafte Persönlichkeit und ihr modisches Gespür. Galerie-Eröffnungen, Modeevents und exklusive Dinners sind ihr Element."
  },
  {
    name: "Elena",
    age: 31,
    city: "Wien · Zürich",
    price: "ab 350 €/Std.",
    badge: "VIP",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&q=80",
    tags: ["Events", "Business", "Wellness", "Reisen"],
    stats: { Größe: "170 cm", Figur: "Athletisch", Augen: "Grau", Sprachen: "DE · EN · RU" },
    bio: "Elena verbindet östeuropäische Eleganz mit westlichem Lifestyle. Die ehemalige Ballett-Tänzerin besticht durch außergewöhnliche Anmut und Kultiviertheit. Ob Opernball in Wien, Galadinner in Zürich oder Wellness-Retreat – Elena ist immer die strahlende Begleiterin an Ihrer Seite."
  },
  {
    name: "Mia",
    age: 23,
    city: "Stuttgart · München",
    price: "ab 200 €/Std.",
    badge: null,
    img: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=700&q=80",
    tags: ["Sport", "Reisen", "Dinner", "Events"],
    stats: { Größe: "165 cm", Figur: "Sportlich", Augen: "Grün", Sprachen: "DE · EN" },
    bio: "Mia ist die jüngste und spontanste unserer Damen – voller Energie, Lebensfreude und einer ansteckenden Herzlichkeit. Die Sport-Enthusiastin begeistert mit ihrer unkomplizierten Art und ist die perfekte Begleiterin für Ausflüge, Reisen und entspannte Abendveranstaltungen."
  },
  {
    name: "Natalie",
    age: 27,
    city: "Berlin · Leipzig",
    price: "ab 230 €/Std.",
    badge: null,
    img: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=700&q=80",
    tags: ["Theater", "Musik", "Reisen", "Dinner"],
    stats: { Größe: "169 cm", Figur: "Schlank", Augen: "Braun", Sprachen: "DE · EN · FR" },
    bio: "Natalie hat Musikwissenschaften studiert und liebt Theater, Oper und klassische Konzerte. Ihre tiefe Allgemeinbildung, ihr Witz und ihr warmes Lächeln machen jedes Gespräch zu einem Vergnügen. Die perfekte Begleiterin für Kulturereignisse und feinsinnige Abende zu zweit."
  }
];

/* ===== AGE GATE ===== */
function confirmAge() {
  sessionStorage.setItem('ageVerified', '1');
  document.getElementById('ageGate').classList.add('hidden');
}

if (sessionStorage.getItem('ageVerified') === '1') {
  document.getElementById('ageGate').classList.add('hidden');
}

/* ===== NAV SCROLL ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ===== BURGER MENU ===== */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ===== MODEL FILTER ===== */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.model-card').forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else {
        const tags = card.dataset.tags || '';
        card.classList.toggle('hidden', !tags.includes(filter));
      }
    });
  });
});

/* ===== PROFILE MODAL ===== */
function openProfile(index) {
  const p = profiles[index];
  const modal = document.getElementById('profileModal');
  const content = document.getElementById('modalContent');

  content.innerHTML = `
    <div class="modal-img">
      <img src="${p.img}" alt="${p.name}" />
    </div>
    <div class="modal-details">
      <div>
        <h2>${p.name}, ${p.age}</h2>
        <p style="color:var(--text-muted);font-size:13px;margin-top:4px;">${p.city}</p>
      </div>
      ${p.badge ? `<span class="model-card__badge" style="display:inline-block;position:static;">${p.badge}</span>` : ''}
      <div class="model-card__tags">
        ${p.tags.map(t => `<span>${t}</span>`).join('')}
      </div>
      <div class="modal-stats">
        ${Object.entries(p.stats).map(([k, v]) => `
          <div class="modal-stat">
            <p class="modal-stat__label">${k}</p>
            <p class="modal-stat__val">${v}</p>
          </div>
        `).join('')}
      </div>
      <p class="modal-bio">${p.bio}</p>
      <div>
        <p style="color:var(--gold);font-size:14px;margin-bottom:14px;">${p.price}</p>
        <a href="#contact" class="btn btn--gold" onclick="closeProfile()">Jetzt anfragen</a>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProfile() {
  document.getElementById('profileModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProfile();
});

/* ===== CONTACT FORM ===== */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.style.display = 'block';
  this.reset();
  setTimeout(() => { success.style.display = 'none'; }, 5000);
});

/* ===== SCROLL REVEAL ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.model-card, .service-card, .rate-card, .testimonial, .contact-info__item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
