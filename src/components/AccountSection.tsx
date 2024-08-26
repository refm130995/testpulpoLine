"use client";

export default function AccountSection({ className = "" }: AccountSectionProps) {
  return (
    <>
      <section
        className={`font-montserrat flex w-full flex-col gap-y-4 rounded-xl bg-white p-4 text-center font-semibold capitalize leading-5 tracking-[0px] drop-shadow-lg max-w-xs mb-4 ${className}`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-left">Hilla Amanda</h2>
          <aside className="bg-yellow-400 px-2 py-1 text-xs rounded-sm">Saldo: 10,00 €</aside>
        </div>
        <div className="flex items-center justify-between text-sm space-x-2">
          <button className="w-1/2 border border-neutral-900 px-3 py-2 rounded">Retirar Premios</button>
          <button className="w-1/2 bg-sky-500 text-white px-3 py-2 rounded">Recargar Saldo</button>
        </div>
      </section>

      <div className="flex flex-col items-start gap-4 bg-white shadow p-4 rounded-xl max-w-xs">
        <h2 className="font-bold">Mi Cuenta</h2>

        <div className="flex items-center px-2 cursor-pointer hover:text-sky-500">
          <img src="/assets/UserIconBlack.svg" alt="User Icon" className="h-4 w-4" />
          <div className="pl-2">Mis Datos Personales</div>
        </div>

        <div className="flex items-center px-2 cursor-pointer hover:text-sky-500">
          <img src="/assets/DolarIcon.svg" alt="Dolar Icon" className="h-4 w-4" />
          <div className="pl-2">Datos Bancarios</div>
        </div>

        <div className="flex items-center px-2 cursor-pointer hover:text-sky-500">
          <img src="/assets/NotificationIcon.svg" alt="Notification Icon" className="h-4 w-4" />
          <div className="pl-2">Mis Notificaciones</div>
        </div>

        <h2 className="font-bold pt-2">Historial</h2>

        <div className="flex items-center px-2 cursor-pointer hover:text-sky-500">
          <img src="/assets/BetIcon.svg" alt="Bet Icon" className="h-4 w-4" />
          <div className="pl-2">Mis Apuestas</div>
        </div>

        <div className="flex items-start px-2 flex-col space-y-2">
          <div className="flex items-center cursor-pointer hover:text-sky-500">
            <img src="/assets/ReloadIcon.svg" alt="Reload Icon" className="h-4 w-4" />
            <div className="pl-2">Mis Renovaciones</div>
          </div>
          <div className="flex items-center cursor-pointer hover:text-sky-500">
            <img src="/assets/MyMovesIcon.svg" alt="My Moves Icon" className="h-4 w-4" />
            <div className="pl-2">Mis Movimientos</div>
          </div>
        </div>

        <div className="flex items-center px-2 cursor-pointer hover:text-sky-500">
          <img src="/assets/SendIcon.svg" alt="Send Icon" className="h-4 w-4" />
          <div className="pl-2">Mis Envíos</div>
        </div>

        <h2 className="font-bold pt-2">Ayuda y Contacto</h2>

        <div className="flex items-start px-2 flex-col space-y-2">
          <div className="flex items-center cursor-pointer hover:text-sky-500">
            <img src="/assets/HelpIcon.svg" alt="Help Icon" className="h-4 w-4" />
            <div className="pl-2">Preguntas Frecuentes</div>
          </div>
          <div className="flex items-center cursor-pointer hover:text-sky-500">
            <img src="/assets/CartIcon.svg" alt="Cart Icon" className="h-4 w-4" />
            <div className="pl-2">Nuestros Productos</div>
          </div>
        </div>

        <div className="flex items-center px-2 cursor-pointer hover:text-sky-500">
          <img src="/assets/CallIcon.svg" alt="Call Icon" className="h-4 w-4" />
          <div className="pl-2">Contacto</div>
        </div>

        <div className="flex justify-center items-center mx-auto pt-4 cursor-pointer hover:text-sky-500">
          <img src="/assets/PowerIcon.svg" alt="Power Icon" className="h-4 w-4" />
          <button className="pl-2 underline text-neutral-800">Cerrar Sesión</button>
        </div>
      </div>
    </>
  );
}

interface AccountSectionProps {
  className?: string;
}
