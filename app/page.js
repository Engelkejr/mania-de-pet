"use client";

import { useState, useEffect, useRef } from "react";

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PawIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M8.35 3a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm7.3 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm15 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-7.5 1c-3.5 0-7 2.5-7 6 0 2.5 1.5 4 3 4 .8 0 1.5-.3 2.2-.6.5-.2 1-.4 1.8-.4s1.3.2 1.8.4c.7.3 1.4.6 2.2.6 1.5 0 3-1.5 3-4 0-3.5-3.5-6-7-6z" />
  </svg>
);

const StarIcon = ({ filled = true }) => (
  <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-1.243 1.088-2.219 2.325-2.06 2.094.267 4.033.963 5.742 2.01M15 10.5a3 3 0 01-3 3m0 0a3 3 0 01-3-3m3 3v3m0-6V6.75m0 6.75H9m3 0h3M2.25 6.338l2.105 12.63A2.25 2.25 0 006.57 21h10.86a2.25 2.25 0 002.215-1.898l1.67-10.02A2.25 2.25 0 0019.1 6.75H4.9a2.25 2.25 0 00-2.187 1.59l-.463-2.002z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WHATSAPP_NUMBER = "5521991832475";
const WHATSAPP_MSG = encodeURIComponent("Olá! Vim pelo site e gostaria de agendar um serviço para o meu pet 🐾");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
const WHATSAPP_EMERGENCY = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("🚨 EMERGÊNCIA: Meu pet precisa de atendimento urgente!")}`;

const SERVICES = [
  {
    emoji: "🩺",
    title: "Consultas & Exames",
    description: "Avaliação completa com veterinários experientes. Diagnóstico rápido e preciso para o seu pet.",
    items: ["Consulta clínica geral", "Exames laboratoriais", "Exames de imagem", "Retorno incluso"],
    color: "from-teal-50 to-emerald-50",
    border: "border-teal-200",
    badge: "bg-teal-100 text-teal-700",
  },
  {
    emoji: "💉",
    title: "Vacinação",
    description: "Cartela completa de vacinas com lembrete automático via WhatsApp. Proteção em dia!",
    items: ["V8, V10, Antirrábica", "Gripe canina & felina", "Giardia", "Calendário personalizado"],
    color: "from-purple-50 to-violet-50",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    emoji: "🛁",
    title: "Banho & Tosa",
    description: "Ambiente climatizado, toalhas individuais e muito carinho. Seu pet sai cheiroso e elegante!",
    items: ["Banho completo", "Tosa higiênica e na tesoura", "Hidratação capilar", "Perfume especial"],
    color: "from-sky-50 to-blue-50",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-700",
    highlight: true,
  },
  {
    emoji: "🛍️",
    title: "Pet Shop & Farmácia",
    description: "Medicamentos, rações premium, acessórios e tudo que seu pet precisa em um só lugar.",
    items: ["Medicamentos veterinários", "Rações e petiscos", "Antipulgas e vermífugos", "Acessórios e brinquedos"],
    color: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700",
  },
];

const TESTIMONIALS = [
  {
    name: "Ana Paula R.",
    rating: 5,
    text: "Atendimento maravilhoso! A veterinária é super atenciosa e paciente. Meu Bolinha ficou em ótimas mãos. Com certeza voltarei sempre!",
    pet: "tutora do Bolinha 🐶",
    initial: "A",
    color: "bg-teal-500",
  },
  {
    name: "Marcos Oliveira",
    rating: 5,
    text: "Melhor pet shop da Ilha do Governador! Levei minha gata para vacinação e fiquei impressionado com a estrutura e o carinho de todos.",
    pet: "tutor da Mimi 🐱",
    initial: "M",
    color: "bg-purple-500",
  },
  {
    name: "Fernanda Costa",
    rating: 5,
    text: "O serviço de banho e tosa é impecável. Minha Lola sempre volta linda e cheirosa. O pessoal trata como se fosse pet deles!",
    pet: "tutora da Lola 🐩",
    initial: "F",
    color: "bg-pink-500",
  },
  {
    name: "Roberto S.",
    rating: 5,
    text: "Preço justo e atendimento de primeira. Eles têm de tudo: vacinas, remédios, ração... Não preciso ir em outro lugar!",
    pet: "tutor do Thor 🐕",
    initial: "R",
    color: "bg-sky-500",
  },
];

const DIFFERENTIALS = [
  { emoji: "⭐", title: "4.9 no Google", subtitle: "Avaliação dos tutores", desc: "Mais de 100 avaliações 5 estrelas de tutores da região da Ilha do Governador." },
  { emoji: "🏠", title: "Tudo em Um Lugar", subtitle: "Clínica + Pet Shop", desc: "Não precisa correr de um lado para outro. Consulta, vacina, banho e ração no mesmo endereço." },
  { emoji: "❤️", title: "Atendimento Humanizado", subtitle: "Tratamos com amor", desc: "Nossa equipe trata cada pet como se fosse o seu. Porque para nós, eles são família." },
  { emoji: "📍", title: "Super Acessível", subtitle: "Ilha do Governador", desc: "Localização privilegiada na Estrada de Maracajás. Fácil acesso e estacionamento próximo." },
  { emoji: "📅", title: "Agendamento Fácil", subtitle: "Via WhatsApp", desc: "Marque sua consulta em segundos pelo WhatsApp, sem filas ou esperas desnecessárias." },
  { emoji: "🔔", title: "Lembrete de Vacinas", subtitle: "Nunca perca uma dose", desc: "Avisamos você quando seu pet estiver perto de precisar de reforço vacinal." },
];

export default function ManiadePetLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [counter, setCounter] = useState({ pets: 0, tutors: 0, years: 0 });
  const counterRef = useRef(null);
  const counterStarted = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counterStarted.current) {
          counterStarted.current = true;
          animateCounter("pets", 1200, 2000);
          animateCounter("tutors", 850, 2200);
          animateCounter("years", 5, 1500);
        }
      },
      { threshold: 0.4 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCounter = (key, target, duration) => {
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounter((prev) => ({ ...prev, [key]: Math.floor(eased * target) }));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans bg-white" style={{ fontFamily: "'Nunito', 'Poppins', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .paw-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.06'%3E%3Cpath d='M20 10a4 4 0 100 8 4 4 0 000-8zm12 0a4 4 0 100 8 4 4 0 000-8zm-18 8a4 4 0 100 8 4 4 0 000-8zm24 0a4 4 0 100 8 4 4 0 000-8zm-12 2c-5.6 0-11 4-11 9.6 0 4 2.4 6.4 4.8 6.4 1.28 0 2.4-.48 3.52-.96.8-.32 1.6-.64 2.88-.64 1.28 0 2.08.32 2.88.64 1.12.48 2.24.96 3.52.96 2.4 0 4.8-2.4 4.8-6.4C37 22 31.6 20 26 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .hero-gradient {
          background: linear-gradient(135deg, #f0fdf9 0%, #ecfdf5 40%, #f0f9ff 100%);
        }
        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(20,184,166,0.15);
        }
        .wpp-pulse {
          animation: pulse-green 2s infinite;
        }
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          50% { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
        }
        .fade-in {
          animation: fadeInUp 0.6s ease both;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .emergency-btn {
          animation: emergencyPulse 3s ease-in-out infinite;
        }
        @keyframes emergencyPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-black text-sm shadow">
                🐾
              </div>
              <div>
                <span className="font-black text-teal-700 text-lg leading-none block">Mania de Pet</span>
                <span className="text-xs text-gray-500 leading-none">Vet & PetShop</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
              {[["serviços", "Serviços"], ["diferenciais", "Diferenciais"], ["depoimentos", "Depoimentos"], ["localizacao", "Localização"]].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="hover:text-teal-600 transition-colors">{label}</button>
              ))}
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-4 py-2 rounded-full text-sm transition-all shadow-md hover:shadow-lg">
              <WhatsappIcon /> Agendar
            </a>

            <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen
                ? <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                : <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              }
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-lg">
            {[["serviços", "Serviços"], ["diferenciais", "Diferenciais"], ["depoimentos", "Depoimentos"], ["localizacao", "Localização"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left font-semibold text-gray-700 py-1 hover:text-teal-600">{label}</button>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-teal-600 text-white font-bold px-4 py-3 rounded-xl w-full">
              <WhatsappIcon /> Agendar pelo WhatsApp
            </a>
          </div>
        )}
      </nav>

      <section className="hero-gradient paw-bg pt-24 pb-16 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 font-bold text-xs px-3 py-1.5 rounded-full mb-5">
                <span>⭐ 4.9 no Google</span>
                <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                <span>Ilha do Governador · RJ</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-5">
                Seu pet merece{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                  o melhor cuidado
                </span>
                {" "}— tudo em um só lugar 🐾
              </h1>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Consultas, vacinação, banho & tosa e farmácia pet na{" "}
                <strong className="text-gray-800">Mania de Pet</strong>. Porque a saúde e a felicidade do seu bichinho não podem esperar.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="wpp-pulse flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bf5b] text-white font-black px-8 py-4 rounded-2xl text-lg shadow-xl transition-all">
                  <WhatsappIcon />
                  Agendar pelo WhatsApp
                </a>
                <button onClick={() => scrollTo("serviços")}
                  className="flex items-center justify-center gap-2 border-2 border-teal-300 text-teal-700 font-bold px-6 py-4 rounded-2xl hover:bg-teal-50 transition-all">
                  Ver serviços
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <ClockIcon />
                  <span>Seg–Sáb, 9h–18h</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-1.5">
                  <MapPinIcon />
                  <span>Maracajás, 823 – Loja C</span>
                </div>
              </div>
            </div>

            <div className="relative fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
                  alt="Pet feliz sendo cuidado"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-xl">⭐</div>
                <div>
                  <div className="font-black text-gray-900 text-xl leading-none">4.9</div>
                  <div className="text-xs text-gray-500 font-medium">Google Reviews</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-teal-600 rounded-2xl shadow-xl p-4 text-white">
                <div className="font-black text-2xl leading-none">+1200</div>
                <div className="text-xs text-teal-200 font-medium mt-0.5">pets atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={counterRef} className="bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-700 py-10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-6 text-center text-white">
          <div>
            <div className="text-4xl font-black">{counter.pets.toLocaleString()}+</div>
            <div className="text-teal-200 text-sm font-semibold mt-1">Pets atendidos</div>
          </div>
          <div>
            <div className="text-4xl font-black">{counter.tutors.toLocaleString()}+</div>
            <div className="text-teal-200 text-sm font-semibold mt-1">Tutores felizes</div>
          </div>
          <div>
            <div className="text-4xl font-black">{counter.years}+</div>
            <div className="text-teal-200 text-sm font-semibold mt-1">Anos de experiência</div>
          </div>
        </div>
      </div>

      <section id="serviços" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-teal-100 text-teal-700 font-bold text-xs px-3 py-1.5 rounded-full mb-3">NOSSOS SERVIÇOS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Tudo que seu pet precisa 🐾
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Clínica veterinária e pet shop completos para cachorros, gatos e muito mais.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className={`card-hover relative rounded-3xl border bg-gradient-to-b ${s.color} ${s.border} p-6 flex flex-col gap-4`}>
                {s.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-black px-3 py-1 rounded-full shadow">
                    🔥 Mais agendado
                  </div>
                )}
                <div className="text-4xl">{s.emoji}</div>
                <div>
                  <h3 className="font-black text-gray-900 text-lg">{s.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{s.description}</p>
                </div>
                <ul className="space-y-1.5 mt-auto">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-xs ${s.badge.replace("text-", "bg-").split(" ")[0]}`}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 bg-white border-2 border-current text-teal-700 font-bold text-sm py-2.5 rounded-xl hover:bg-teal-50 transition-all">
                  <WhatsappIcon /> Agendar agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-gray-900">Nossos pets em destaque 📸</h2>
              <p className="text-gray-500 text-sm mt-1">Momentos reais do nosso dia a dia</p>
            </div>
            <a href="https://www.instagram.com/maniadepetvet" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700">
              <InstagramIcon /> @maniadepetvet
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300&q=80",
              "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=300&q=80",
              "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=300&q=80",
              "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&q=80",
              "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?w=300&q=80",
              "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=300&q=80&fit=crop&crop=faces",
            ].map((url, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer relative">
                <img src={url} alt={`Pet ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/20 transition-all flex items-center justify-center">
                  <InstagramIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="py-20 px-4 bg-gradient-to-b from-teal-700 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 paw-bg opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block bg-white/20 text-white font-bold text-xs px-3 py-1.5 rounded-full mb-3">POR QUE NOS ESCOLHER?</span>
            <h2 className="text-3xl sm:text-4xl font-black mb-3">
              Amor, ciência e muita dedicação 💚
            </h2>
            <p className="text-teal-200 text-lg max-w-xl mx-auto">
              Mais do que um serviço, oferecemos tranquilidade para você e saúde para seu pet.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIALS.map((d, i) => (
              <div key={i} className="card-hover bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 flex gap-4 items-start">
                <div className="text-4xl flex-shrink-0">{d.emoji}</div>
                <div>
                  <div className="font-black text-lg leading-tight">{d.title}</div>
                  <div className="text-teal-300 text-xs font-bold mb-1">{d.subtitle}</div>
                  <p className="text-teal-100 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-yellow-100 text-yellow-700 font-bold text-xs px-3 py-1.5 rounded-full mb-3">⭐ DEPOIMENTOS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Quem ama, indica 💬
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Veja o que os tutores dizem sobre a Mania de Pet.
            </p>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="ml-2 font-black text-gray-800 text-lg">4.9</span>
              <span className="text-gray-400 text-sm ml-1">no Google</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card-hover bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.pet}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="text-xs text-teal-600 font-bold">Google Maps ✓</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-4">🐾</div>
          <h2 className="text-3xl font-black text-gray-900 mb-3">
            Seu pet está esperando!
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Agende agora mesmo pelo WhatsApp. É rápido, fácil e sem complicação.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="wpp-pulse inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bf5b] text-white font-black px-10 py-5 rounded-2xl text-xl shadow-2xl transition-all">
            <WhatsappIcon />
            Agendar pelo WhatsApp agora
          </a>
          <p className="text-gray-400 text-xs mt-4">Seg–Sáb, das 9h às 18h • Horário marcado</p>
        </div>
      </section>

      <section id="localizacao" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-teal-100 text-teal-700 font-bold text-xs px-3 py-1.5 rounded-full mb-3">📍 COMO CHEGAR</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Estamos pertinho de você!
            </h2>
            <p className="text-gray-500 text-lg">Ilha do Governador, Rio de Janeiro</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPinIcon />
                  </div>
                  <div>
                    <div className="font-black text-gray-900">Endereço</div>
                    <div className="text-gray-600 text-sm mt-0.5">Estrada de Maracajás, 823<br />Loja C – Ilha do Governador / Galeão<br />Rio de Janeiro – RJ</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ClockIcon />
                  </div>
                  <div>
                    <div className="font-black text-gray-900">Horário</div>
                    <div className="text-gray-600 text-sm mt-0.5">Segunda a Sábado<br />09:00 às 18:00</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <div className="font-black text-gray-900">WhatsApp</div>
                    <div className="text-gray-600 text-sm mt-0.5">(21) 99183-2475</div>
                  </div>
                </div>
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-black px-6 py-4 rounded-2xl text-base w-full hover:bg-[#20bf5b] transition-all shadow-lg">
                <WhatsappIcon /> Falar pelo WhatsApp
              </a>

              <a href="https://maps.google.com/?q=Estrada+de+Maracajas+823+Ilha+do+Governador+Rio+de+Janeiro" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-teal-300 text-teal-700 font-bold px-6 py-4 rounded-2xl text-sm w-full hover:bg-teal-50 transition-all">
                <MapPinIcon /> Ver no Google Maps
              </a>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-3xl overflow-hidden shadow-xl h-full min-h-[350px] border-4 border-white">
                <iframe
                  title="Mapa Mania de Pet"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5!2d-43.2!3d-22.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEstrada%20de%20Maracaj%C3%A1s%2C%20823%20Loja%20C%2C%20Ilha%20do%20Governador%2C%20Rio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-xl shadow">🐾</div>
                <div>
                  <div className="font-black text-lg leading-none">Mania de Pet</div>
                  <div className="text-xs text-gray-400">Vet & PetShop</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                PetShop e Clínica Veterinária completos na Ilha do Governador. Cuidado, carinho e saúde para o seu melhor amigo.
              </p>
            </div>

            <div>
              <div className="font-black mb-3 text-sm uppercase tracking-wide text-gray-300">Serviços</div>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Consultas & Exames", "Vacinação", "Banho & Tosa", "Farmácia Pet", "Acessórios"].map((s) => (
                  <li key={s}><button onClick={() => scrollTo("serviços")} className="hover:text-teal-400 transition-colors">{s}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-black mb-3 text-sm uppercase tracking-wide text-gray-300">Contato</div>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-2"><MapPinIcon /><span>Estrada de Maracajás, 823 Loja C – Ilha do Governador, RJ</span></div>
                <div className="flex items-center gap-2"><ClockIcon /><span>Seg–Sáb: 9h às 18h</span></div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 font-bold transition-colors">
                  <WhatsappIcon /> (21) 99183-2475
                </a>
                <a href="https://www.instagram.com/maniadepetvet" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-400 hover:text-pink-300 font-bold transition-colors">
                  <InstagramIcon /> @maniadepetvet
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-500 text-xs">
            <span>© 2025 Mania de Pet — Todos os direitos reservados.</span>
            <span>Feito com 💚 para os pets da Ilha do Governador</span>
          </div>
        </div>
      </footer>

      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 wpp-pulse w-14 h-14 bg-[#25D366] hover:bg-[#20bf5b] text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
        aria-label="Agendar pelo WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <a href={WHATSAPP_EMERGENCY} target="_blank" rel="noopener noreferrer"
        className="emergency-btn fixed bottom-24 right-6 z-50 bg-red-500 hover:bg-red-600 text-white rounded-2xl flex items-center gap-2 px-4 py-2.5 shadow-xl text-xs font-black transition-all hover:scale-105"
        aria-label="Emergência veterinária">
        <span className="text-base">🚨</span>
        <span>Emergência</span>
      </a>
    </div>
  );
}
