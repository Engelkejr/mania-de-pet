"use client";

import { useState, useEffect, useRef } from "react";

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

const WHATSAPP_NUMBER = "5500999999999";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de mais informações sobre os seus serviços 🚀");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
const WHATSAPP_EMERGENCY = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("🚨 EMERGÊNCIA: Preciso de atendimento urgente!")}`;

const SERVICES = [
  {
    emoji: "⚙️",
    title: "Serviço 01",
    description: "Descrição detalhada do seu primeiro serviço principal. Explique como ele ajuda seus clientes.",
    items: ["Característica A", "Característica B", "Diferencial C", "Incluso no plano"],
    color: "from-teal-50 to-emerald-50",
    border: "border-teal-200",
    badge: "bg-teal-100 text-teal-700",
    highlight: true,
  },
  {
    emoji: "🛠️",
    title: "Serviço 02",
    description: "Descrição detalhada do segundo serviço. Destaque os benefícios e a qualidade da execução.",
    items: ["Opção 01", "Opção 02", "Opção 03", "Suporte incluso"],
    color: "from-purple-50 to-violet-50",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    emoji: "📦",
    title: "Serviço 03",
    description: "Descrição do terceiro serviço ou produto oferecido pela sua empresa com foco em resultados.",
    items: ["Vantagem X", "Vantagem Y", "Garantia Z", "Acessório extra"],
    color: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700",
  },
];

const TESTIMONIALS = [
  {
    name: "Cliente Exemplo 1",
    rating: 5,
    text: "Depoimento real do seu cliente sobre a experiência positiva que teve com o seu serviço.",
    subtext: "Cargo ou Localização",
    initial: "C",
    color: "bg-teal-500",
  },
  {
    name: "Cliente Exemplo 2",
    rating: 5,
    text: "Outro feedback positivo destacando pontos fortes do seu atendimento ou produto.",
    subtext: "Cliente desde 2023",
    initial: "E",
    color: "bg-purple-500",
  },
  {
    name: "Cliente Exemplo 3",
    rating: 5,
    text: "Mais um depoimento que reforça a confiança e a qualidade da sua marca no mercado.",
    subtext: "Empresa Parceira",
    initial: "P",
    color: "bg-sky-500",
  },
];

const DIFFERENTIALS = [
  { emoji: "⭐", title: "Qualidade Garantida", subtitle: "Confiança e Segurança", desc: "Explique aqui o principal motivo pelo qual as pessoas escolhem sua marca." },
  { emoji: "🚀", title: "Agilidade", subtitle: "Entrega Rápida", desc: "Como seu processo é otimizado para não fazer o cliente esperar." },
  { emoji: "🤝", title: "Suporte Total", subtitle: "Atendimento Especializado", desc: "Seu diferencial no atendimento humano e suporte pós-venda." },
  { emoji: "📍", title: "Fácil Acesso", subtitle: "Localização Estratégica", desc: "Sua presença física ou facilidade de contato para o cliente." },
  { emoji: "📅", title: "Agendamento Online", subtitle: "Praticidade Total", desc: "Marque seu horário ou serviço de forma rápida e digital." },
  { emoji: "🔔", title: "Lembretes Automáticos", subtitle: "Sempre Informado", desc: "Como você mantém seu cliente atualizado sobre os processos." },
];

export default function GenericLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [counter, setCounter] = useState({ stat1: 0, stat2: 0, stat3: 0 });
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
          animateCounter("stat1", 1000, 2000);
          animateCounter("stat2", 500, 2200);
          animateCounter("stat3", 10, 1500);
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
    <div className="min-h-screen font-sans bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .pattern-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.06'%3E%3Ccircle cx='30' cy='30' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .hero-gradient {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 40%, #f0f9ff 100%);
        }
        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .cta-pulse {
          animation: pulse-primary 2s infinite;
        }
        @keyframes pulse-primary {
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
                LOGO
              </div>
              <div>
                <span className="font-black text-teal-700 text-lg leading-none block">Sua Marca</span>
                <span className="text-xs text-gray-500 leading-none">Slogan da Empresa</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
              {[["serviços", "Serviços"], ["diferenciais", "Diferenciais"], ["depoimentos", "Depoimentos"], ["localizacao", "Localização"]].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="hover:text-teal-600 transition-colors">{label}</button>
              ))}
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-4 py-2 rounded-full text-sm transition-all shadow-md hover:shadow-lg">
              <WhatsappIcon /> Contato
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
              <WhatsappIcon /> Chamar no WhatsApp
            </a>
          </div>
        )}
      </nav>

      <section className="hero-gradient pattern-bg pt-24 pb-16 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 font-bold text-xs px-3 py-1.5 rounded-full mb-5">
                <span>⭐ Destaque no Segmento</span>
                <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                <span>Sua Região</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-5">
                A melhor solução para{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                  o seu problema
                </span>
                {" "} rápido e eficiente 🚀
              </h1>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="cta-pulse flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bf5b] text-white font-black px-8 py-4 rounded-2xl text-lg shadow-xl transition-all">
                  <WhatsappIcon />
                  Falar pelo WhatsApp
                </a>
                <button onClick={() => scrollTo("serviços")}
                  className="flex items-center justify-center gap-2 border-2 border-teal-300 text-teal-700 font-bold px-6 py-4 rounded-2xl hover:bg-teal-50 transition-all">
                  Ver Serviços
                </button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <ClockIcon />
                  <span>Seg–Sex, 9h–18h</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-1.5">
                  <MapPinIcon />
                  <span>Nome da Rua, 123 - Cidade, UF</span>
                </div>
              </div>
            </div>

            <div className="relative fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Imagem ilustrativa"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={counterRef} className="bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-700 py-10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-6 text-center text-white">
          <div>
            <div className="text-4xl font-black">{counter.stat1.toLocaleString()}+</div>
            <div className="text-teal-200 text-sm font-semibold mt-1">Clientes Felizes</div>
          </div>
          <div>
            <div className="text-4xl font-black">{counter.stat2.toLocaleString()}+</div>
            <div className="text-teal-200 text-sm font-semibold mt-1">Serviços Realizados</div>
          </div>
          <div>
            <div className="text-4xl font-black">{counter.stat3}+</div>
            <div className="text-teal-200 text-sm font-semibold mt-1">Anos de Experiência</div>
          </div>
        </div>
      </div>

      <section id="serviços" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <span className="inline-block bg-teal-100 text-teal-700 font-bold text-xs px-3 py-1.5 rounded-full mb-3">NOSSAS SOLUÇÕES</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Tudo o que você precisa</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Oferecemos o melhor suporte para garantir sua total satisfação.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((s, i) => (
            <div key={i} className={`card-hover relative rounded-3xl border bg-gradient-to-b ${s.color} ${s.border} p-8 flex flex-col gap-4 shadow-sm`}>
              {s.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-black px-3 py-1 rounded-full shadow">
                  ⭐ Destaque
                </div>
              )}
              <div className="text-5xl mb-2">{s.emoji}</div>
              <h3 className="font-black text-gray-900 text-xl">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              <ul className="space-y-2 mt-auto pt-4">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-teal-600 text-[10px] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} className="mt-4 flex items-center justify-center gap-2 bg-white border-2 border-current text-teal-700 font-bold text-sm py-3 rounded-xl hover:bg-teal-50 transition-all">
                Saber Mais
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="diferenciais" className="py-20 px-4 bg-gradient-to-b from-teal-700 to-emerald-800 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Por que nos escolher?</h2>
            <p className="text-teal-200 text-lg max-w-xl mx-auto">Trabalhamos com dedicação para entregar sempre o melhor resultado.</p>
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
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Quem conhece, aprova 💬</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="card-hover bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-black text-sm`}>{t.initial}</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.subtext}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">"{t.text}"</p>
              <div className="text-xs text-teal-600 font-bold">Feedback Confirmado ✓</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-black text-lg mb-3">Sua Marca</div>
            <p className="text-gray-400 text-sm leading-relaxed">Descrição curta sobre sua empresa e compromisso com o cliente.</p>
          </div>
          <div>
            <div className="font-black mb-3 text-sm uppercase text-gray-300">Contato</div>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2"><MapPinIcon /> Seu endereço completo aqui</p>
              <p className="flex items-center gap-2"><PhoneIcon /> (00) 99999-9999</p>
              <a href="https://instagram.com/seuperfil" className="flex items-center gap-2 text-pink-400 font-bold">
                <InstagramIcon /> @seuinstagram
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-teal-700">
              Chamar Agora
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-xs">
          © 2025 Sua Marca - Todos os direitos reservados.
        </div>
      </footer>

      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 cta-pulse w-14 h-14 bg-[#25D366] hover:bg-[#20bf5b] text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110">
        <WhatsappIcon />
      </a>

      <a href={WHATSAPP_EMERGENCY} target="_blank" rel="noopener noreferrer"
        className="emergency-btn fixed bottom-24 right-6 z-50 bg-red-500 hover:bg-red-600 text-white rounded-2xl flex items-center gap-2 px-4 py-2.5 shadow-xl text-xs font-black">
        <span>🚨</span>
        <span>Urgente</span>
      </a>
    </div>
  );
}
