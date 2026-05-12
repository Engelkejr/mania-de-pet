"use client";

import { useState, useEffect, useRef } from "react";

// --- CONFIGURAÇÃO DO MODELO (Mude aqui para alterar o site todo) ---
const BRAND_DATA = {
  name: "Nome da Sua Marca",
  subtitle: "Seu Slogan ou Ramo de Atuação",
  description: "Descreva aqui brevemente o que sua empresa faz e como ela ajuda seus clientes de forma rápida e objetiva.",
  instagram: "@seuinstagram",
  whatsapp: "5500999999999",
  email: "contato@seuemail.com",
  address: "Rua Exemplo, 123 - Bairro, Cidade - UF",
  workingHours: "Seg–Sáb, 9h–18h",
  googleRating: "4.9",
  locationName: "Sua Cidade",
  primaryColor: "teal", // Use cores do Tailwind (teal, blue, indigo, etc)
};

const WHATSAPP_MSG = encodeURIComponent(`Olá! Vim pelo site e gostaria de saber mais sobre os serviços da ${BRAND_DATA.name} 🚀`);
const WHATSAPP_URL = `https://wa.me/${BRAND_DATA.whatsapp}?text=${WHATSAPP_MSG}`;
const EMERGENCY_URL = `https://wa.me/${BRAND_DATA.whatsapp}?text=${encodeURIComponent("🚨 URGENTE: Preciso de atendimento imediato!")}`;

const SERVICES = [
  {
    emoji: "🚀",
    title: "Serviço Principal",
    description: "Descrição detalhada do seu primeiro serviço principal. Explique os benefícios e o que está incluso.",
    items: ["Benefício 01", "Item incluso 02", "Diferencial 03", "Vantagem 04"],
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    highlight: true,
  },
  {
    emoji: "🛠️",
    title: "Serviço Secundário",
    description: "Descrição do seu segundo serviço. Foque em como ele resolve um problema específico do cliente.",
    items: ["Característica A", "Característica B", "Entrega rápida", "Suporte incluso"],
    color: "from-purple-50 to-violet-50",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    emoji: "📦",
    title: "Outro Serviço",
    description: "Fale sobre produtos ou serviços adicionais que complementam a experiência do seu cliente.",
    items: ["Produto X", "Acessório Y", "Garantia estendida", "Consultoria"],
    color: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700",
  },
];

const TESTIMONIALS = [
  {
    name: "Nome do Cliente 1",
    rating: 5,
    text: "Depoimento real do seu cliente sobre como o seu serviço impactou positivamente a vida ou o negócio dele.",
    subtext: "Cargo ou Cidade",
    initial: "C",
    color: "bg-blue-500",
  },
  {
    name: "Nome do Cliente 2",
    rating: 5,
    text: "Outro feedback positivo destacando a qualidade do atendimento ou a rapidez da entrega do serviço.",
    subtext: "Cliente desde 2023",
    initial: "J",
    color: "bg-purple-500",
  },
];

const DIFFERENTIALS = [
  { emoji: "⭐", title: "Qualidade Premium", subtitle: "Referência no mercado", desc: "Explique por que seu serviço tem qualidade superior à concorrência." },
  { emoji: "⚡", title: "Agilidade", subtitle: "Foco em resultados", desc: "Destaque a rapidez da sua entrega ou do seu atendimento ao cliente." },
  { emoji: "🔒", title: "Segurança", subtitle: "Confiança total", desc: "Sua empresa é segura e confiável? Diga isso claramente aqui." },
  { emoji: "📍", title: "Fácil Acesso", subtitle: "Localização estratégica", desc: "Mencione como é fácil chegar até você ou como seu serviço é acessível." },
  { emoji: "📱", title: "Atendimento Digital", subtitle: "Suporte via WhatsApp", desc: "Facilite o contato dizendo que você atende pelos canais digitais." },
  { emoji: "💰", title: "Preço Justo", subtitle: "Custo-benefício", desc: "Mostre que você oferece o melhor valor pelo investimento do cliente." },
];

// --- COMPONENTES DE ÍCONE ---
const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
);

export default function GenericLandingModel() {
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
          animateCounter("stat1", 1500, 2000);
          animateCounter("stat2", 900, 2200);
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
        html { scroll-behavior: smooth; }
        .hero-gradient { background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); }
        .wpp-pulse { animation: pulse-green 2s infinite; }
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50% { box-shadow: 0 0 0 12px rgba(34,197,94,0); }
        }
        .fade-in { animation: fadeInUp 0.6s ease both; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Navegação */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className={`w-10 h-10 rounded-xl bg-${BRAND_DATA.primaryColor}-600 flex items-center justify-center text-white text-xl shadow-lg`}>🚀</div>
            <div>
              <span className={`font-black text-${BRAND_DATA.primaryColor}-900 text-lg leading-none block`}>{BRAND_DATA.name}</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{BRAND_DATA.subtitle}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600">
            {["Serviços", "Diferenciais", "Depoimentos", "Contato"].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:text-black transition-colors">{item}</button>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`bg-${BRAND_DATA.primaryColor}-600 text-white px-5 py-2.5 rounded-full hover:scale-105 transition-transform shadow-md`}>Falar Agora</a>
          </div>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-800"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className={`inline-block bg-${BRAND_DATA.primaryColor}-100 text-${BRAND_DATA.primaryColor}-700 font-bold text-xs px-3 py-1 rounded-full mb-6`}>
              ✨ {BRAND_DATA.locationName} & Região
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
              Sua Chamada de <span className={`text-${BRAND_DATA.primaryColor}-600`}>Impacto Aqui</span>
            </h1>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-md">
              {BRAND_DATA.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="wpp-pulse bg-green-500 text-white font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 text-lg hover:bg-green-600 transition-all">
                <WhatsappIcon /> Chamar no WhatsApp
              </a>
              <button onClick={() => scrollTo("serviços")} className="border-2 border-gray-200 text-gray-700 font-bold px-8 py-4 rounded-2xl hover:bg-white transition-all">
                Conhecer Serviços
              </button>
            </div>
          </div>
          <div className="relative fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Dashboard" className="w-full h-[450px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div ref={counterRef} className={`bg-gray-900 py-12 px-4`}>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-white">{counter.stat1}+</div>
            <div className="text-gray-400 text-xs font-bold uppercase mt-2">Clientes Felizes</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white">{counter.stat2}+</div>
            <div className="text-gray-400 text-xs font-bold uppercase mt-2">Projetos Entregues</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white">{counter.stat3}+</div>
            <div className="text-gray-400 text-xs font-bold uppercase mt-2">Anos de Mercado</div>
          </div>
        </div>
      </div>

      {/* Serviços */}
      <section id="serviços" className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Nossas Soluções</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Tudo o que você precisa em um único lugar, com a qualidade que você merece.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <div key={i} className={`bg-white p-8 rounded-3xl border ${s.border} shadow-sm hover:shadow-xl transition-all`}>
              <div className="text-5xl mb-6">{s.emoji}</div>
              <h3 className="text-xl font-black mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{s.description}</p>
              <ul className="space-y-3 mb-8">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <span className={`text-${BRAND_DATA.primaryColor}-500`}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} className={`block text-center py-3 rounded-xl font-bold bg-${BRAND_DATA.primaryColor}-50 text-${BRAND_DATA.primaryColor}-700 hover:bg-${BRAND_DATA.primaryColor}-600 hover:text-white transition-all`}>Saber Mais</a>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className={`py-24 px-4 bg-${BRAND_DATA.primaryColor}-900 text-white`}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((d, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">{d.emoji}</div>
              <h4 className="font-black text-lg mb-1">{d.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black mb-4">O que dizem nossos clientes</h2>
          <div className="flex justify-center gap-1 text-yellow-400 text-xl">★★★★★</div>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <p className="text-gray-600 italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold`}>{t.initial}</div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.subtext}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-950 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="col-span-2">
            <div className="text-2xl font-black mb-4">{BRAND_DATA.name}</div>
            <p className="text-gray-400 max-w-sm mb-6">{BRAND_DATA.description}</p>
            <div className="flex gap-4">
              <a href={WHATSAPP_URL} className="p-3 bg-white/5 rounded-full hover:bg-green-500 transition-all"><WhatsappIcon /></a>
              <a href={`https://instagram.com/${BRAND_DATA.instagram.replace('@','')}`} className="p-3 bg-white/5 rounded-full hover:bg-pink-600 transition-all"><InstagramIcon /></a>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6 uppercase text-xs tracking-widest">Contato</h5>
            <div className="space-y-4 text-gray-400 text-sm">
              <p className="flex items-start gap-2"><MapPinIcon /> {BRAND_DATA.address}</p>
              <p className="flex items-center gap-2"><ClockIcon /> {BRAND_DATA.workingHours}</p>
              <p className="font-bold text-white underline">{BRAND_DATA.email}</p>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6 uppercase text-xs tracking-widest">Atendimento</h5>
            <a href={WHATSAPP_URL} className={`inline-block bg-${BRAND_DATA.primaryColor}-600 px-6 py-3 rounded-xl font-bold text-white shadow-lg`}>Solicitar Orçamento</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:row justify-between text-xs text-gray-600 gap-4">
          <p>© 2026 {BRAND_DATA.name}. Todos os direitos reservados.</p>
          <p>Desenvolvido com foco em resultados.</p>
        </div>
      </footer>

      {/* Botão Flutuante */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all wpp-pulse">
        <WhatsappIcon />
      </a>
      
      <a href={EMERGENCY_URL} target="_blank" rel="noopener noreferrer" className="fixed bottom-24 right-6 z-50 bg-red-600 text-white px-4 py-2 rounded-2xl font-black text-[10px] uppercase shadow-xl hover:bg-red-700 transition-all flex items-center gap-2">
        <span>🚨</span> Suporte Urgente
      </a>
    </div>
  );
}
