export default function Footer() {
  return (
    <div className={`bg-black text-white p-10 mt-10`}>
      <div className="container mx-auto flex flex-wrap justify-between gap-8 text-sm">
        <div className="w-full lg:w-auto mb-6 lg:mb-0">
          <img
            src="/assets/DevTalentyLogo.svg"
            alt="Dev Talenty"
            className="w-40"
          />
        </div>

        <div className="w-full lg:w-1/3">
          <h4 className="font-bold text-lg mb-4">Links de Interés</h4>
          <div className="grid grid-cols-2 gap-y-2 underline">
            <p className="whitespace-nowrap">Quienes Somos</p>
            <p className="whitespace-nowrap">Ayuda</p>
            <p className="whitespace-nowrap">Preguntas Frecuentes</p>
            <p className="whitespace-nowrap">Blog</p>
            <p className="whitespace-nowrap">Premios Repartidos</p>
            <p className="whitespace-nowrap">Mapa Web</p>
          </div>

          <div className="mt-6">
            <h4 className="font-bold text-lg">Otros Links</h4>
            <div className="mt-2 underline">
              <p>Comprar Lotería de Navidad</p>
              <p>Comprar Lotería del Niño</p>
              <p>Lotería de Navidad Para Empresas</p>
              <p>Bote XX Millones Euromillones</p>
              <p>Lotería Sorteo Especial</p>
              <p>Lotería Jueves y Sábado</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <h4 className="font-bold text-lg mb-4">Confianza y Seguridad</h4>
          <p className="mb-2">Sellos de Confianza</p>
          <div className="flex space-x-4 mb-4">
            <img src="/assets/trust-seal.svg" className="w-16 h-auto" />
            <img
              src="/assets/juegoResponsable.svg"
              alt="Juego Responsable"
              className="w-16 h-auto"
            />
          </div>
          <p className="mb-2">Métodos de Pago</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <img src="/assets/visa.svg" />
            <img src="/assets/maestro.svg" />
            <img src="/assets/mastercard.svg" />
            <img src="/assets/telepago.svg" />
            <img src="/assets/servi-red.svg" />
            <img src="/assets/bizum.svg" />
            <img src="/assets/lacaixa.svg" />
            <img src="/assets/bbva.svg" />
            <img src="/assets/santander.svg" />
            <img src="/assets/sabadell.svg" />
          </div>
        </div>

        <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
          <h4 className="font-bold text-lg mb-4">Textos Legales</h4>
          <div className="mb-4 underline">
            <p>Condiciones Generales</p>
            <p>Política de Privacidad</p>
            <p>Política de Cookies</p>
          </div>

          <h4 className="font-bold text-lg mb-4">Contacto</h4>
          <p className="underline mb-2 cursor-pointer">hello@devtalenty.com</p>
          <p>+506 124 356 789</p>
          <p className="underline cursor-pointer mb-2">Chat</p>
          <p className="mb-4">De lunes a viernes de 9:00h a 19:00h</p>

          <div className="flex items-center space-x-3">
            <p>Síguenos en:</p>
            <img src="/assets/social-facebook.svg" className="w-6" />
            <img src="/assets/social-instagram.svg" className="w-6" />
            <img src="/assets/social-twitter.svg" className="w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
