import { useState } from "react";

const PHONE_1 = "📞 637 183 253";
const PHONE_2 = "📞 670 118 608";
const ADDRESS = "📍 Av. Perez Galdos 21 B, Castellon de la Plana";

const menuCards = [
  { id: 1,  name: "Menú Taco",               price: "9.00€", img: "src/assets/food-images/taco.jpg" },
  { id: 2,  name: "Menú Kapsalon",            price: "9.00€", img: "src/assets/food-images/kapsalon.png" },
  { id: 3,  name: "Menú Gratinado",           price: "9.00€", img: "src/assets/food-images/gratinadoo.png" },
  { id: 4,  name: "Menú Kebab",               price: "6.50€", img: "src/assets/food-images/Kebab.png" },
  { id: 5,  name: "Menú Durum",               price: "7.00€", img: "src/assets/food-images/durum.png" },
  { id: 6,  name: "Menú Plato",               price: "8.00€", img: "src/assets/food-images/plato.png" },
  { id: 7,  name: "Menú Hamburguesa",         price: "7.00€", img: "src/assets/food-images/hamburguesa.png" },
  { id: 8,  name: "Menú Alitas de Pollo",     price: "7.00€", img: "src/assets/food-images/alitas.png" },
  { id: 9,  name: "Menú Nuggets de Pollo",    price: "7.00€", img: "src/assets/food-images/nuggets.png" },
  { id: 10, name: "Menú Tiras de Pollo",      price: "8.00€", img: "src/assets/food-images/tiras.png" },
  { id: 11, name: "Menú Box Kebab",           price: "5.50€", img: "src/assets/food-images/box.png" },
  { id: 12, name: "Menú Plato Seekh Kebab",   price: "9.00€", img: "src/assets/food-images/seekh-kebab.png" },

];

const menuSharing = [
  { id: 1,  name: "Menú 3 Durums ",          price: "22.00€", img: "src/assets/food-images/3durum.png", desc: "Ternera o Pollo con 3 Patatas y Bebida 2 Ltr." },
  { id: 2,  name: "Menú 3 Kebabs ",          price: "20.00€", img: "src/assets/food-images/3kebab.png", desc: "Ternera o Pollo con 3 Patatas y Bebida 2 Ltr."},

];

const foodItems = [
  { cat: "Kebabs, Tacos y más", items: [
    { name: "Durum Gratinado",   price: "7.00€", image: "src/assets/food-images/gratinadoo.png" },
    { name: "Taco",  price: "7.00€", image: "src/assets/food-images/taco.jpg" },
    { name: "Kapsalon",     price: "7.00€", image: "src/assets/food-images/kapsalon.png" },
    { name: "Kebab Normal",   price: "4.00€", image: "src/assets/food-images/Kebab.png" },
    { name: "Kebab Grande", price: "5.00€", image: "src/assets/food-images/Kebab.png"  },
    { name: "Durum Normal",   price: "4.00€", image: "src/assets/food-images/durum.png"  },
    { name: "Durum Grande", price: "5.00€", image: "src/assets/food-images/durum.png"  },
    { name: "Hamburguesa",   price: "4.00€", image: "src/assets/food-images/hamburguesa.png"  },
    { name: "Box Kebab", price: "4.50€", image: "src/assets/food-images/box.png"  },
    { name: "Samosa",   price: "4.00€", image: "src/assets/food-images/samosa.png"  },
    { name: "Pakora", price: "3.50€", image: "src/assets/food-images/pakora.png"  },
    { name: "Patatas Fritas",   price: "3.50€", image: "src/assets/food-images/patatas.png" },
    { name: "Patatas Fritas con Queso",   price: "4.50€", image: "src/assets/food-images/queso.png" },
    { name: "Ensalada Mixta",   price: "5.00€", image: "src/assets/food-images/ensalada.png" },

  ]},

  { cat: "Bebidas", items: [
    { name: "Agua pequeña",       price: "1.00€", image: "src/assets/food-images/pequeña.png"  },
    { name: "Agua grande", price: "1.50€", image: "src/assets/food-images/grande.png"  },
    { name: "Coca Cola o Coca Cola Zero",           price: "1.80€", image: "src/assets/food-images/cola.png"  },
    { name: "Fanta Naranja o Limon",        price: "1.80€", image: "src/assets/food-images/fanta.png" },
    { name: "Pepsi",        price: "1.80€", image: "src/assets/food-images/pepsi.png" },
    { name: "Sprite",        price: "1.80€", image: "src/assets/food-images/sprite.png"  },
    { name: "Cerveza Sin Alcohol",        price: "1.80€", image: "src/assets/food-images/cerveza.png"  },
    { name: "Zumos",        price: "1.80€", image: "src/assets/food-images/zumo.png" },
    { name: "Nestea",        price: "2.00€", image: "src/assets/food-images/nestea.png" },
    { name: "Aquarius",        price: "2.00€", image: "src/assets/food-images/aquarius.png"  },
  ]},
];

export default function App() {
  return (
    <div className="w-full text-stone-100 font-sans" style={{ background: "linear-gradient(135deg, #e8c9a0 0%, #c49a6c 30%, #8b5e3c 65%, #4a2c1a 100%)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; min-height: 100vh; }
        .font-display { font-family: 'Bebas Neue', cursive; }
        .font-body { font-family: 'Nunito', sans-serif; }
        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.25); }
      `}</style>

      {/* ── HEADER ── */}
      <header className="w-full bg-stone-900 border-b border-amber-600/40 shadow-2xl">
        <div className="w-full px-8 py-5">
          {/* Top bar – contact */}
          <div className="flex flex-wrap gap-3 justify-center text-xl text-stone-400 mb-5 font-body">
            <span>{PHONE_1}</span>
            <span className="text-stone-600">|</span>
            <span>{PHONE_2}</span>
            <span className="text-stone-600">|</span>
            <span>{ADDRESS}</span>
          </div>

          {/* Logo + Name */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="w-40 h-40 rounded-full border-1 border-amber-500 shadow-lg shadow-amber-900/40 flex-shrink-0 overflow-hidden">
              <img src="src/assets/image.png" alt="Grill Kebab y Tacos" className="w-full h-full object-cover" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="font-display text-4xl sm:text-7xl tracking-widest text-amber-400 leading-none">
                GRILL KEBAB Y TACOS
              </h1>

            </div>
          </div>
        </div>
      </header>

      {/* ── HERO STRIP ── */}
      <div className="w-full bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 py-3 text-center font-body font-bold text-stone-900 text-lg font-bold tracking-widest uppercase">
        🕐 Abierto de Lunes a Domingo · 11:30 – 15:00 y de 18:00 a 23:00 · 📞 Servicio a domicilio, pedído mínimo de 7€
      </div>

      <main className="w-full px-8 py-12 font-body">

        {/* ── MENUS GRID ── */}
        <section className="mb-16">
          <h2 className="font-display text-5xl text-stone-900 tracking-widest mb-2">NUESTROS MENÚS</h2>
          <p className="text-stone-800 mb-10 font-bold text-2xl">Todos los menús incluyen bebida y patatas 🥤🍟</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {menuCards.map((card) => (
              <div
                key={card.id}
                className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="w-full aspect-square bg-stone-100">
                  <img
                    src={card.img}
                    alt={card.name}
                    className="w-full h-full object-cover"
                    onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement.style.background = "#e7d5c0"; }}
                  />
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <p className="font-bold text-stone-800 text-lg sm:text-2xl">{card.name}</p>
                  <span className="font-bold text-amber-600 text-lg sm:text-2xl sm:flex-shrink-0 sm:ml-2">{card.price}</span>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ── MENUS GRID SHARING ── */}
        <section className="mb-16">
          <h2 className="font-display text-5xl text-stone-900 tracking-widest mb-2">MENÚS PARA COMPARTIR</h2>
          <p className="text-stone-800 mb-10 font-bold text-2xl">Todos los menús incluyen bebida y patatas 🥤🍟</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {menuSharing.map((card) => (
              <div
                key={card.id}
                className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="w-full aspect-square bg-stone-100">
                  <img
                    src={card.img}
                    alt={card.name}
                    className="w-full h-full object-cover"
                    onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement.style.background = "#e7d5c0"; }}
                  />
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <p className="font-bold text-stone-800 text-lg sm:text-2xl">{card.name}</p>
                    <span className="font-bold text-amber-600 text-lg sm:text-2xl sm:flex-shrink-0 sm:ml-2">{card.price}</span>
                  </div>
                  <p className="text-sm sm:text-md font-bold text-stone-900">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FULL MENU ── */}
        <section>
          <h2 className="font-display text-5xl text-stone-900 tracking-widest mb-2">CARTA COMPLETA</h2>
          <p className="text-stone-800 mb-10 font-bold text-2xl">Todo lo que tenemos para ofrecerte.</p>

          <div className="space-y-10">
            {foodItems.map((section) => (
              <div key={section.cat}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-0.5 w-8 bg-amber-500 rounded" />
                  <h3 className="font-display text-3xl text-stone-900 tracking-wider">{section.cat.toUpperCase()}</h3>
                  <div className="h-0.5 flex-1 bg-stone-300 rounded" />
                </div>
                <div className="grid sm:grid-cols-4 lg:grid-cols-4 gap-4">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="card-hover bg-white rounded-2xl shadow-lg p-5 flex flex-col gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-40 h-40 rounded-full object-cover border-2 border-amber-100 shadow-sm mx-auto"
                      />
                      <div>
                        <p className="font-bold text-stone-800 text-2xl leading-tight text-center">{item.name}</p>
                        <p className="text-stone-400 text-sm mt-1 leading-snug text-center">{item.desc}</p>
                      </div>
                      <span className="font-bold text-amber-600 text-xl text-center">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-stone-900 border-t border-amber-600/40 mt-16">
        <div className="w-full px-8 py-10 text-center">
          <div className="w-20 h-20 rounded-full border-2 border-amber-500 mx-auto mb-4 shadow-lg overflow-hidden">
            <img src="src/assets/image.png" alt="Grill Kebab y Tacos" className="w-full h-full object-cover" />
          </div>

          <h2 className="font-display text-4xl text-amber-400 tracking-widest mb-6">GRILL KEBAB Y TACOS</h2>

          <div className="flex flex-wrap justify-center gap-10 text-stone-400 font-body text-base mb-6">
            <div className="flex flex-col items-center gap-1">
              <span className="text-amber-500 font-bold uppercase text-xs tracking-widest mb-1">Teléfonos</span>
              <span>{PHONE_1}</span>
              <span>{PHONE_2}</span>
            </div>
            <div className="w-px bg-stone-700 hidden sm:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-amber-500 font-bold uppercase text-xs tracking-widest mb-1">Dirección</span>
              <span>{ADDRESS}</span>
            </div>
            <div className="w-px bg-stone-700 hidden sm:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-amber-500 font-bold uppercase text-xs tracking-widest mb-1">Horario</span>
              <span>🕐 Lunes – Domingo</span>
              <span>11:30 – 15:00 y de 18:00 - 23:00</span>
            </div>
          </div>

          <p className="text-stone-600 text-xs font-body">
            © {new Date().getFullYear()} Grill Kebab y Tacos
          </p>
        </div>
      </footer>
    </div>
  );
}