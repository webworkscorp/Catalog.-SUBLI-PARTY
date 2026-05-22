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
        <header className="relative pt-6 md:pt-8 pb-10 md:pb-16 overflow-hidden px-6 md:px-12 flex flex-col md:flex-row bg-[#A9D0F5] items-center justify-center">
          <div className="w-full md:w-[50%] flex flex-col items-center md:items-start order-1 text-center md:text-left justify-center relative z-10">
            <img src="https://i.imgur.com/JK5duGM.png" alt="Logo" className="w-[80px] md:w-[110px] h-auto object-contain drop-shadow-sm -mt-4 md:-mt-6" />
          </div>
          <div className="w-full md:w-[50%] relative flex flex-col items-center order-2 mt-6 md:mt-8 scale-[0.85] md:scale-95 origin-center z-10">
            <img src="https://i.imgur.com/90GvhzT.png" alt="Zootopia" className="w-[340px] md:w-[480px] max-w-none h-auto object-contain -mt-16 md:-mt-20 mb-4 drop-shadow-lg scale-[1.15] md:scale-125" />
            <img src="https://i.imgur.com/nx51AlX.png" alt="Character" className="w-[240px] md:w-[320px] h-auto object-contain select-none pointer-events-none drop-shadow-md mt-4 md:mt-6 -mb-6 md:-mb-8" onError={(e) => { (e.target as HTMLImageElement).className = "hidden"; }} />
          </div>
          {/* Separador de sección */}
          <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFE8CC"></path>
            </svg>
          </div>
        </header>

        <section className="bg-[#FFE8CC] text-orange-950 px-6 md:px-16 pt-12 pb-6 md:pt-20 md:pb-12 relative z-20 flex flex-col md:flex-row items-start overflow-hidden">
          <div className="w-full md:w-[60%] relative z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-8 tracking-wide uppercase text-center md:text-left">PROCESO DE COMPRA</h2>
            <div className="space-y-6 text-base md:text-lg font-medium text-orange-950/90">
              <ul className="list-decimal pl-5 space-y-3">
                <li>Escríbeme la <span className="font-bold">fecha de tu evento</span> para verificar disponibilidad (tomar en cuenta tiempos de paquetería en caso de ser envío nacional).</li>
                <li>Indícame la <span className="font-bold">cantidad y especificaciones</span> de los productos de tu interés.</li>
                <li>Te enviaré la <span className="font-bold">cotización</span>.</li>
                <li>Se agenda con el <span className="font-bold">50%</span> y el resto antes de enviarlo (pedidos menores a ₡10.000 se agendan con el 100%).</li>
                <li>¡Envíame tu <span className="font-bold">comprobante de pago</span> para apartar tu espacio y empezar a trabajar!</li>
              </ul>
              <p className="italic text-orange-950/80 pt-4 border-t border-orange-950/20">
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
          <div className="w-full md:w-[40%] flex justify-center md:justify-end items-end h-full mt-4 md:mt-0 relative z-10">
            <img src="https://i.imgur.com/mUfLHZD.png" alt="Character" className="w-[360px] md:w-[480px] max-w-none h-auto object-contain scale-x-[-1] opacity-95 translate-y-4 md:translate-y-8" onError={(e) => { (e.target as HTMLImageElement).className = "hidden"; }} />
          </div>
          {/* Separador de sección */}
          <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-0">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[30px] md:h-[50px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFF5F7"></path>
            </svg>
          </div>
        </section>

        {/* Sección de Productos actualizada con diseño Premium */}
        <section className="bg-gradient-to-b from-[#FFF5F7] to-[#F3E8F5] pt-24 pb-0 px-6 md:px-16 relative">

          <div className="max-w-[900px] mx-auto text-center relative z-10">
            



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
                <div key={item.id} className="flex flex-col items-center w-full">
                  {/* Marco Arqueado Boutiques */}
                  <div className="w-full bg-white rounded-t-[100px] rounded-b-3xl border border-[#F9C5D1] shadow-md flex items-center justify-center mb-6 overflow-hidden relative">
                    {item.image ? (
                      <img src={item.image} alt={item.title || `Producto ${item.id}`} className="w-full h-auto block select-none pointer-events-none" />
                    ) : (
                      <div className="h-80 flex items-center justify-center">
                        <span className="text-[#F9C5D1] opacity-50">Producto {item.id}</span>
                      </div>
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
            <div className="-mt-24 md:-mt-32 -mb-16 md:-mb-24 flex justify-center w-full relative z-10 pointer-events-none select-none">
              <img 
                src="https://i.imgur.com/ORaE8mG.png" 
                alt="Despedida Zootopia" 
                className="w-[300px] md:w-[420px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 pointer-events-none select-none" 
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
                <div key={item.id} className="flex flex-col items-center w-full">
                  {/* Marco Arqueado Boutiques */}
                  <div className="w-full bg-white rounded-t-[100px] rounded-b-3xl border border-[#B4C9E8] shadow-md flex items-center justify-center mb-6 overflow-hidden relative">
                    {item.image ? (
                      <img src={item.image} alt={item.title || `Producto ${item.id}`} className="w-full h-auto block select-none pointer-events-none" />
                    ) : (
                      <div className="h-80 flex items-center justify-center">
                        <span className="text-[#B4C9E8] opacity-50">Producto {item.id}</span>
                      </div>
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
                  image: "https://i.imgur.com/tHB2OsI.jpeg",
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
                <div key={item.id} className="flex flex-col items-center w-full">
                  {/* Marco Arqueado Boutiques */}
                  <div className={`w-full bg-white rounded-t-[100px] rounded-b-3xl border border-[#A8D3B8] shadow-md flex items-center justify-center mb-6 overflow-hidden relative ${item.id === 7 ? 'max-w-[280px] md:max-w-[310px]' : ''}`}>
                    {item.image ? (
                      <img src={item.image} alt={item.title || `Producto ${item.id}`} className="w-full h-auto block select-none pointer-events-none" />
                    ) : (
                      <div className="h-80 flex items-center justify-center">
                        <span className="text-[#A8D3B8] opacity-50">Producto {item.id}</span>
                      </div>
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

            {/* Despedida de Sección 3 */}
            <div className="mt-4 md:mt-8 -mb-16 md:-mb-24 flex justify-center w-full relative z-10 pointer-events-none select-none">
              <img 
                src="https://i.imgur.com/VdzyfIU.png" 
                alt="Despedida Zootopia 3" 
                className="w-[280px] md:w-[420px] h-auto object-contain scale-x-[-1] -translate-x-6 md:-translate-x-12 drop-shadow-2xl hover:scale-x-[-1.05] hover:scale-y-[1.05] transition-transform duration-300 pointer-events-none select-none" 
              />
            </div>
          </div>
        </section>

        {/* Cuarta Sección de Productos (Amarillo Pastel) */}
        <section className="bg-gradient-to-b from-[#FFFDF0] to-[#FFF9D0] pt-24 pb-2 px-6 md:px-16 relative">
          {/* Wave Distorcionada / Separador */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-[#E4F4E8]"></path>
            </svg>
          </div>

          <div className="max-w-[900px] mx-auto text-center relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {[
                { 
                  id: 10, 
                  image: "https://i.imgur.com/iZ3Ou3W.jpeg",
                  title: "Banderín (Letra)",
                  price: "₡1,000",
                  minOrder: "5 piezas",
                  description: "Incluye diseño personalizado, figura del inicio y final gratis.",
                  size: "12,5 X 15 CM APROX."
                },
                { 
                  id: 11, 
                  image: "https://i.imgur.com/pimv9Ai.jpeg",
                  title: "Chip Bags",
                  price: "₡650",
                  minOrder: "10 unidades",
                  description: "Diseño personalizado de la tematica, incluye cinta doble cara para pegarlas. Para snack o dulces delgados, tipo Tosty de 25g. se entregan vacias.",
                  size: "13,5 X 18 CM"
                },
                { 
                  id: 12, 
                  image: "https://i.imgur.com/XeYeFmW.jpeg",
                  title: "Gorritos",
                  price: "₡1,100",
                  minOrder: "8 unidades",
                  description: "Impresión en todo el gorrito, diseño personalizado. incluye cinta o liga elástica",
                  size: "17 CM de alto Aprox."
                },
                { 
                  id: 13, 
                  image: "https://i.imgur.com/PqmHD3r.jpeg",
                  title: "Mini libritos",
                  price: "₡1,600",
                  minOrder: "Paquete de 10 unidades",
                  description: "Diseño personalizado en la portada, incluye 6 hojitas para colorear. (No incluye crayolas)",
                  size: "12 X 8 CM"
                }
              ].map((item) => (
                <div key={item.id} className="flex flex-col items-center w-full">
                  {/* Marco Arqueado Boutiques */}
                  <div className="w-full bg-white rounded-t-[100px] rounded-b-3xl border border-[#F5DDA6] shadow-md flex items-center justify-center mb-6 overflow-hidden relative">
                    {item.image ? (
                      <img src={item.image} alt={item.title || `Producto ${item.id}`} className="w-full h-auto block select-none pointer-events-none" />
                    ) : (
                      <div className="h-80 flex items-center justify-center">
                        <span className="text-[#F5DDA6] opacity-50">Producto {item.id}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Etiqueta Precio y Título */}
                  {item.title ? (
                    <div className="flex flex-col items-center mb-4">
                      <h3 className="text-xl font-bold text-[#C6921B] uppercase mb-2">{item.title}</h3>
                      <div className="px-6 py-2 bg-[#F5C75D] text-white font-bold rounded-full shadow-sm text-lg">
                        {item.price}
                      </div>
                    </div>
                  ) : (
                    <div className="w-32 h-10 bg-[#F5DDA6] rounded-full shadow-sm mb-4"></div>
                  )}
                  
                  {/* Líneas Descripción */}
                  {item.description ? (
                    <div className="w-full px-4 text-center mt-2 space-y-1 text-[#7B6F55] font-medium text-sm md:text-base">
                      <p><span className="font-bold">Pedido mínimo:</span> {item.minOrder}</p>
                      <p><span className="font-bold">Tamaño:</span> {item.size}</p>
                      <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ) : (
                    <div className="w-full space-y-2 px-8">
                      <div className="h-2 bg-[#F5DDA6] rounded-full w-full"></div>
                      <div className="h-2 bg-[#F5DDA6] rounded-full w-2/3 mx-auto"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Despedida de Sección 4 */}
            <div className="-mt-16 md:-mt-28 flex justify-center w-full relative z-10 select-none pointer-events-none">
              <img 
                src="https://i.imgur.com/QjM4lNo.png" 
                alt="Despedida Zootopia final" 
                className="w-[280px] md:w-[400px] h-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105 pointer-events-none select-none" 
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
