import ComponentsDesktopProductTabsItem from "./ComponentsDesktopProductTabsItem";

export default function NavigationBar({ className = "" }: NavigationBarProps) {
  return (
    <>
      <div
        className={`bg-[#00A9E0] px-4 lg:px-8 py-2 font-montserrat flex items-center justify-between text-white`}
      >
        <div className="lg:hidden flex items-center">
          <button className="text-white text-2xl mr-4">&#8592;</button>{" "}
          <h1 className="text-lg font-semibold">Gestión de Saldo</h1>
        </div>

        <div className="hidden lg:flex flex-wrap items-end justify-center gap-x-8 font-medium">
          <div className="flex items-center pb-2">
            <img
              src="/assets/VerticalLine.svg"
              alt="Vertical Line"
              className="h-9 w-0.5"
            />
          </div>
          <a className="pb-2">Inicio</a>
          <a className="pb-2">Resultados y Botes</a>
          <a className="pb-2">Quiénes Somos</a>
          <a className="pb-2">Ayuda</a>
        </div>

        <div className="flex items-center justify-center gap-x-4 lg:gap-x-8">
          <div className="flex flex-col items-center gap-y-1">
            <img
              src="/assets/UserIcon.svg"
              alt="User Icon"
              className="h-6 w-6"
            />
            <span className="text-center font-semibold">0,00€</span>
          </div>
          <img
            src="/assets/ShoppingCartIcon.svg"
            alt="Shopping Cart"
            className="h-6 w-6"
          />
          <button className="lg:hidden text-white text-2xl border-2 border-white rounded-full h-7 w-7 flex items-center justify-center">
            &times;
          </button>
        </div>
      </div>

      <div className="hidden lg:flex w-full px-4 py-1.5">
        <div className="font-montserrat flex flex-grow flex-wrap items-center justify-between gap-x-3.5 pt-0.5 text-center text-xs tracking-[0px] flex-nowrap">
          <ComponentsDesktopProductTabsItem
            name="Euromillones"
            value={"17.000.000"}
            currency="€"
          />
          <ComponentsDesktopProductTabsItem
            name="Euromillones"
            value={"17.000.000"}
            currency="€"
          />
          <ComponentsDesktopProductTabsItem
            name="Euromillones"
            value={"17.000.000"}
            currency="€"
          />
          <ComponentsDesktopProductTabsItem
            name="Euromillones"
            value={"17.000.000"}
            currency="€"
          />
          <ComponentsDesktopProductTabsItem
            name="Euromillones"
            value={"17.000.000"}
            currency="€"
          />
          <ComponentsDesktopProductTabsItem
            name="Euromillones"
            value={"17.000.000"}
            currency="€"
          />
          <ComponentsDesktopProductTabsItem
            name="Euromillones"
            value={"17.000.000"}
            currency="€"
          />
          <ComponentsDesktopProductTabsItem
            name="Euromillones"
            value={"17.000.000"}
            currency="€"
          />
          <ComponentsDesktopProductTabsItem
            name="Euromillones"
            value={"17.000.000"}
            currency="€"
          />
          <ComponentsDesktopProductTabsItem
            name="Euromillones"
            value={"17.000.000"}
            currency="€"
          />
        </div>
      </div>
    </>
  );
}

interface NavigationBarProps {
  className?: string;
}
