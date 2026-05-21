/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play } from 'lucide-react';

interface MarcadorImagenProps {
  src?: string;
  texto?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MarcadorImagen: React.FC<MarcadorImagenProps> = ({ src, texto, className, style }) => (
  <div 
    className={`bg-transparent flex items-center justify-center text-gray-400 font-semibold text-center overflow-hidden ${className}`} 
    style={style}
  >
    {src ? (
      <img src={src} alt={texto} className="w-full h-full object-cover" />
    ) : (
      texto
    )}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-0 flex justify-center font-sans @container mobile-frame-wrapper">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
          .font-montserrat { font-family: 'Montserrat', sans-serif; }
          
          /* Force centering and background styling on larger screens manually since tailwind breakpoints are disabled */
          @media (min-width: 480px) {
            .mobile-frame-wrapper {
              padding-top: 2.5rem;
              padding-bottom: 2.5rem;
              background-color: #d1d5db; /* gray-300 */
            }
            .mobile-frame {
              border-radius: 1rem;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            }
          }
        `}
      </style>

      <div className="w-full max-w-[480px] bg-white overflow-x-hidden relative font-montserrat mobile-frame">
        <header className="relative py-6 md:py-8 px-6 md:px-12 flex flex-col md:flex-row bg-[#F9A1DB] items-center justify-center">
          <div className="w-full md:w-[50%] flex flex-col items-center md:items-start order-1 text-center md:text-left justify-center">
            <img src="https://i.imgur.com/JK5duGM.png" alt="Logo" className="w-[70px] md:w-[90px] h-auto object-contain drop-shadow-sm" />
          </div>
          <div className="w-full md:w-[50%] relative flex flex-col items-center order-2 mt-2 md:mt-0 scale-105 md:scale-110 origin-center">
            <img src="https://i.imgur.com/90GvhzT.png" alt="Zootopia" className="w-[320px] md:w-[460px] h-auto object-contain mt-12 mb-4 drop-shadow-lg" />
            <img src="https://i.imgur.com/ffLTnZ2.png" alt="Judy/Nick" className="w-[280px] md:w-[360px] h-auto object-contain select-none pointer-events-none drop-shadow-md mt-4" onError={(e) => { (e.target as HTMLImageElement).className = "hidden"; }} />
          </div>
        </header>

        <section className="bg-gradient-to-r from-[#ff6830] to-[#ff8c3a] text-white px-6 md:px-16 py-12 md:py-20 relative z-20 flex flex-col md:flex-row items-start overflow-hidden">
          <div className="w-full md:w-[60%]">
            <h2 className="text-2xl md:text-3xl font-black mb-8 tracking-wide uppercase text-center md:text-left">PROCESO DE COMPRA</h2>
            <div className="space-y-6 text-base md:text-lg font-medium text-white/95">
              <ul className="list-decimal pl-5 space-y-3">
                <li>Escríbeme la <span className="font-bold">fecha de tu evento</span> para verificar disponibilidad (tomar en cuenta tiempos de paquetería en caso de ser envío nacional).</li>
                <li>Indícame la <span className="font-bold">cantidad y especificaciones</span> de los productos de tu interés.</li>
                <li>Te enviaré la <span className="font-bold">cotización</span>.</li>
                <li>Se agenda con el <span className="font-bold">50%</span> y el resto antes de enviarlo (pedidos menores a ₡10.000 se agendan con el 100%).</li>
                <li>¡Envíame tu <span className="font-bold">comprobante de pago</span> para apartar tu espacio y empezar a trabajar!</li>
              </ul>
              <p className="italic text-white/80 pt-4 border-t border-white/20">
                Una vez que el pedido es entregado a la paquetería, Subli’ Party no se hace responsable por retrasos, pérdidas o incidencias ajenas a nuestro control.
              </p>
              <div className="pt-6">
                <h4 className="font-black text-xl mb-3 underline">Importante</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>No hacemos devoluciones de dinero por cancelación de eventos.</li>
                  <li>Los precios incluyen 2 cambios en el diseño (tipo de letra, acomodo de info, paleta de color).</li>
                  <li>Si se requiere cambiar totalmente de temática/diseño, se cotiza un nuevo diseño desde cero.</li>
                  <li>Tomar en cuenta que cada cambio retrasa la producción del pedido.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%] flex justify-end items-end h-full">
            <img src="https://i.imgur.com/E0PWdNO.png" alt="Nick" className="w-[280px] md:w-[420px] h-auto object-contain scale-x-[-1] opacity-95 translate-y-[5rem] md:translate-y-[9rem]" onError={(e) => { (e.target as HTMLImageElement).className = "hidden"; }} />
          </div>
        </section>

        <section className="bg-[#3963a7] pt-20 pb-16 md:pt-32 md:pb-24 px-6 flex justify-center relative z-10">
          <div className="w-full md:w-[85%] max-w-[750px] aspect-video relative rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.6)] group cursor-pointer overflow-hidden">
            <MarcadorImagen texto="[Video]" className="w-full h-full border-none bg-[#2e5aa5] text-blue-200" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
              <Play className="text-white w-12 h-12" fill="white" />
            </div>
          </div>
        </section>

        {/* Sección de Productos actualizada con diseño Premium */}
        <section className="bg-gradient-to-b from-[#FFF5F7] to-[#F3E8F5] pt-24 pb-20 px-6 md:px-16 relative">
          {/* Wave Distorcionada / Separador */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-[#3963a7]"></path>
            </svg>
          </div>

          <div className="max-w-[900px] mx-auto text-center relative z-10">
            <div className="flex flex-col items-center justify-center mb-12">
              <img src="https://i.imgur.com/ruiW0M4.png" alt="Decoración Catálogo" className="max-w-[200px] md:max-w-[300px] h-auto object-contain mb-6 drop-shadow-md" />
              <h2 className="text-3xl font-black text-[#D8A7B1] tracking-widest uppercase italic">Cajas</h2>
            </div>
            


            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {[
                { 
                  id: 1, 
                  image: "https://i.imgur.com/2iV6Elh.jpeg",
                  title: "Caja Lonchera",
                  price: "₡2,500",
                  minOrder: "8 unidades",
                  description: "Incluye impresión a color, listón o sticker arriba. Elementos en 3D.",
                  size: "16 X 7 X 11 CM"
                },
                { 
                  id: 2, 
                  image: "https://i.imgur.com/dW0ly3D.png",
                  title: "Caja de palomitas (Sin relieve)",
                  price: "₡900",
                  minOrder: "8 unidades",
                  description: "Diseño personalizado en toda la caja, se entregan vacías.",
                  size: "7,5 X 14 CM"
                },
                {
                  id: 3,
                  image: "https://i.imgur.com/CJ8uEGK.jpeg",
                  title: "Caja de palomitas (Con relieve)",
                  price: "₡1,250",
                  minOrder: "8 unidades",
                  description: "Diseño personalizado en toda la caja, incluye elementos en 3D, se entregan vacías.",
                  size: "7,5 X 14 CM"
                }
              ].map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  {/* Marco Arqueado Boutiques */}
                  <div className="w-full h-80 bg-white rounded-t-[100px] rounded-b-3xl border border-[#F9C5D1] shadow-md flex items-center justify-center mb-6 overflow-hidden relative">
                    {item.image ? (
                      <img src={item.image} alt={item.title || `Producto ${item.id}`} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[#F9C5D1] opacity-50">Producto {item.id}</span>
                    )}
                  </div>
                  
                  {/* Etiqueta Precio y Título */}
                  {item.title ? (
                    <div className="flex flex-col items-center mb-4">
                      <h3 className="text-xl font-bold text-[#D8A7B1] uppercase mb-2">{item.title}</h3>
                      <div className="px-6 py-2 bg-[#F9C5D1] text-white font-bold rounded-full shadow-sm text-lg">
                        {item.price}
                      </div>
                    </div>
                  ) : (
                    <div className="w-32 h-10 bg-[#F9C5D1] rounded-full shadow-sm mb-4"></div>
                  )}
                  
                  {/* Líneas Descripción */}
                  {item.description ? (
                    <div className="w-full px-4 text-center mt-2 space-y-1 text-[#8b6b72] font-medium text-sm md:text-base">
                      <p><span className="font-bold">Pedido mínimo:</span> {item.minOrder}</p>
                      <p><span className="font-bold">Tamaño:</span> {item.size}</p>
                      <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ) : (
                    <div className="w-full space-y-2 px-8">
                      <div className="h-2 bg-[#E8D8E0] rounded-full w-full"></div>
                      <div className="h-2 bg-[#E8D8E0] rounded-full w-2/3 mx-auto"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Despedida de Sección */}
            <div className="mt-6 flex justify-center w-full relative pt-8">
              <img 
                src="https://i.imgur.com/1CoRTEW.png" 
                alt="Despedida Zootopia" 
                className="w-[220px] md:w-[300px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 pointer-events-none select-none" 
              />
            </div>
          </div>
        </section>

        {/* Segunda Sección de Productos */}
        <section className="bg-gradient-to-b from-[#F0F8FF] to-[#E6F0FA] pt-24 pb-20 px-6 md:px-16 relative">
          {/* Wave Distorcionada / Separador */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-[#F3E8F5]"></path>
            </svg>
          </div>

          <div className="max-w-[900px] mx-auto text-center relative z-10">
            <div className="flex flex-col items-center justify-center mb-12">
              <h2 className="text-3xl font-black text-[#8CA8D1] tracking-widest uppercase italic mb-6">Más Productos</h2>
              <img src="https://i.imgur.com/TOe2n0f.png" alt="Decoración Más Productos" className="max-w-[200px] md:max-w-[300px] h-auto object-contain drop-shadow-md" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {[
                { 
                  id: 4, 
                  image: "https://i.imgur.com/hH37nTe.jpeg",
                  title: "Cake Topper",
                  price: "₡6,500",
                  minOrder: "1",
                  description: "Incluye impresión a color, Diseño personalizado en capas con elementos en 3D y palito",
                  size: "15 CM"
                },
                { 
                  id: 5, 
                  image: "https://i.imgur.com/faMCq2H.jpeg",
                  title: "Mini Toppers",
                  price: "₡2,000",
                  minOrder: "10 unidades",
                  description: "Paquete de 10 mini toppers temáticos. Incluye palito de madera pequeño.",
                  size: "5 CM"
                },
                {
                  id: 6,
                  image: "https://i.imgur.com/klYat5i.jpeg",
                  title: "Stickers",
                  price: "₡1,500",
                  minOrder: "10 stickers (Hoja completa)",
                  description: "Paquete de stickers de 10 unidades en una hoja. Diseño temático.",
                  size: "5 CM cada sticker"
                }
              ].map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  {/* Marco Arqueado Boutiques */}
                  <div className="w-full h-80 bg-white rounded-t-[100px] rounded-b-3xl border border-[#B4C9E8] shadow-md flex items-center justify-center mb-6 overflow-hidden relative">
                    {item.image ? (
                      <img src={item.image} alt={item.title || `Producto ${item.id}`} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[#B4C9E8] opacity-50">Producto {item.id}</span>
                    )}
                  </div>
                  
                  {/* Etiqueta Precio y Título */}
                  {item.title ? (
                    <div className="flex flex-col items-center mb-4">
                      <h3 className="text-xl font-bold text-[#8CA8D1] uppercase mb-2">{item.title}</h3>
                      <div className="px-6 py-2 bg-[#B4C9E8] text-white font-bold rounded-full shadow-sm text-lg">
                        {item.price}
                      </div>
                    </div>
                  ) : (
                    <div className="w-32 h-10 bg-[#B4C9E8] rounded-full shadow-sm mb-4"></div>
                  )}
                  
                  {/* Líneas Descripción */}
                  {item.description ? (
                    <div className="w-full px-4 text-center mt-2 space-y-1 text-[#6b7b8c] font-medium text-sm md:text-base">
                      <p><span className="font-bold">Pedido mínimo:</span> {item.minOrder}</p>
                      <p><span className="font-bold">Tamaño:</span> {item.size}</p>
                      <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ) : (
                    <div className="w-full space-y-2 px-8">
                      <div className="h-2 bg-[#D1E0F2] rounded-full w-full"></div>
                      <div className="h-2 bg-[#D1E0F2] rounded-full w-2/3 mx-auto"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Despedida de Sección 2 */}
            <div className="mt-6 flex justify-center w-full relative pt-8">
              <img 
                src="https://i.imgur.com/VghyErb.png" 
                alt="Despedida Zootopia 2" 
                className="w-[220px] md:w-[300px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 pointer-events-none select-none" 
              />
            </div>
          </div>
        </section>

        {/* Tercera Sección de Productos */}
        <section className="bg-gradient-to-b from-[#F2FBF5] to-[#E4F4E8] pt-24 pb-20 px-6 md:px-16 relative">
          {/* Wave Distorcionada / Separador */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-[#E6F0FA]"></path>
            </svg>
          </div>

          <div className="max-w-[900px] mx-auto text-center relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {[
                { 
                  id: 7, 
                  image: "https://i.imgur.com/Jx6Rqfr.jpeg",
                  title: "Invitación Digital (Imagen)",
                  price: "₡7,500",
                  minOrder: "1",
                  description: "Invitación digital personalizada lista para enviar por Whatsapp",
                  size: "Digital"
                },
                { 
                  id: 8, 
                  image: "https://i.imgur.com/VxMJFwY.jpeg",
                  title: "Paq. Vasos",
                  price: "₡3,500",
                  minOrder: "8 unidades",
                  description: "Paquete de vasos de cartón de 8 unidades, incluyen sticker temático de 6 CM",
                  size: "Sticker de 6 CM"
                },
                {
                  id: 9,
                  image: "https://i.imgur.com/Bp8rt3x.jpeg",
                  title: "paq. Pjillas",
                  price: "₡2,300",
                  minOrder: "8 unidades",
                  description: "Paquete de pajillas de 8 unidades, figura temática de 5 CM",
                  size: "Figura de 5 CM"
                }
              ].map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  {/* Marco Arqueado Boutiques */}
                  <div className="w-full h-80 bg-white rounded-t-[100px] rounded-b-3xl border border-[#A8D3B8] shadow-md flex items-center justify-center mb-6 overflow-hidden relative">
                    {item.image ? (
                      <img src={item.image} alt={item.title || `Producto ${item.id}`} className={`w-full h-full ${item.id === 7 ? 'object-contain p-1' : 'object-cover'}`} />
                    ) : (
                      <span className="text-[#A8D3B8] opacity-50">Producto {item.id}</span>
                    )}
                  </div>
                  
                  {/* Etiqueta Precio y Título */}
                  {item.title ? (
                    <div className="flex flex-col items-center mb-4">
                      <h3 className="text-xl font-bold text-[#82C09A] uppercase mb-2">{item.title}</h3>
                      <div className="px-6 py-2 bg-[#82C09A] text-white font-bold rounded-full shadow-sm text-lg">
                        {item.price}
                      </div>
                    </div>
                  ) : (
                    <div className="w-32 h-10 bg-[#A8D3B8] rounded-full shadow-sm mb-4"></div>
                  )}
                  
                  {/* Líneas Descripción */}
                  {item.description ? (
                    <div className="w-full px-4 text-center mt-2 space-y-1 text-[#6b7b8c] font-medium text-sm md:text-base">
                      <p><span className="font-bold">Pedido mínimo:</span> {item.minOrder}</p>
                      <p><span className="font-bold">Tamaño:</span> {item.size}</p>
                      <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ) : (
                    <div className="w-full space-y-2 px-8">
                      <div className="h-2 bg-[#C6E6D3] rounded-full w-full"></div>
                      <div className="h-2 bg-[#C6E6D3] rounded-full w-2/3 mx-auto"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
