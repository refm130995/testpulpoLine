export default function BottomNav() {
  return (
 <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-3 flex justify-around border-t border-gray-300 lg:hidden sm:flex">
      <div className="flex flex-col items-center">
        <img src="/assets/home.svg" alt="Inicio" className="w-6 h-6" />
        <span className="text-xs text-gray-500">Inicio</span>
      </div>
      <div className="flex flex-col items-center">
        <img src="/assets/global.svg" alt="Resultados" className="w-6 h-6" />
        <span className="text-xs text-gray-500">Resultados</span>
      </div>
      <div className="flex flex-col items-center">
        <img src="/assets/helpTab.svg" alt="Ayuda" className="w-6 h-6" />
        <span className="text-xs text-gray-500">Ayuda</span>
      </div>
    </div>
  );
}
