"use client";
import { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/solid";

export default function CreditManager({
  className = "",
  onRechargeSuccess,
}: CreditManagerProps) {
  const [amountInput, setAmountInput] = useState<string | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("Tarjeta Bancaria");

  const [activeTab, setActiveTab] = useState("recargar");
  const [selectedCardOption, setSelectedCardOption] = useState<string>(
    "Tarjeta terminada en 0909"
  );
  const people = [
    { name: "Sabadell" },
    { name: "BBVA" },
    { name: "Santander" },
  ];

  const [isRechargeDisabled, setIsRechargeDisabled] = useState(true);

  useEffect(() => {
    if (amountInput && selectedPaymentMethod) {
      setIsRechargeDisabled(false);
    } else {
      setIsRechargeDisabled(true);
    }
  }, [amountInput, selectedPaymentMethod]);

  const formatAmount = (amount: string) => {
    return `${amount},00 €`;
  };

  const handleAmountClick = (amount: string) => {
    setAmountInput(formatAmount(amount));
  };

  const handlePaymentMethodChange = (method: string) => {
    if (method === "Tarjeta Bancaria") {
      setSelectedPaymentMethod("Tarjeta Bancaria");
      setSelectedCardOption("Tarjeta terminada en 0909");
    } else if (method === "Utilizar otra tarjeta") {
      setSelectedPaymentMethod("Tarjeta Bancaria");
      setSelectedCardOption(method);
    } else {
      setSelectedPaymentMethod(method);
      setSelectedCardOption("");
    }
  };

  const handleRecharge = () => {
    if (!isRechargeDisabled) {
      if (onRechargeSuccess) {
        onRechargeSuccess();
      }
    }
  };

  return (
    <div className={`font-montserrat w-full ${className}`}>
      <header className="hidden lg:block self-stretch text-2xl font-bold py-6">
        Gestión de Saldo
      </header>

      <section
        className={`flex space-x-4 font-medium leading-6 pt-6 ${className}`}
      >
        <div
          className={`cursor-pointer py-2 px-4 ${
            activeTab === "recargar"
              ? "text-black border-b-2 border-sky-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("recargar")}
        >
          Recargar Saldo
        </div>

        <div
          className={`py-2 px-4 ${
            activeTab === "retirar"
              ? "text-black border-b-2 border-sky-500"
              : "text-gray-500 py-2 px-4 cursor-not-allowed"
          }`}
        >
          Retirar Premios
        </div>
      </section>

      <section className="flex justify-center py-8">
        <div className="pr-36 text-center text-3xl font-bold">10,00 €</div>
      </section>
      <section className="flex justify-center">
        <div className="pr-36 text-center text-sm font-medium">Tu Saldo</div>
      </section>

      <section className="pt-6 font-bold">Selecciona Importe a Añadir:</section>
      <div className="flex items-end pt-6">
        <div className="flex-grow flex items-center border rounded p-4 focus-within:ring-2 ring-blue-500 bg-white">
          <input
            className="w-full font-medium text-gray-500 outline-none placeholder-gray-400"
            placeholder="Importe (€)"
            type="text"
            value={amountInput || ""}
            readOnly
          />
        </div>
      </div>
      <div className="pt-3 text-xs font-medium text-neutral-800">
        Importe mínimo 1€
      </div>

      <div className="flex w-full justify-center gap-4 pt-3 font-semibold capitalize">
        {["5", "10", "20", "50", "100"].map((amount) => (
          <button
            key={amount}
            onClick={() => handleAmountClick(amount)}
            className={`w-1/5 rounded py-4 ${
              amountInput === formatAmount(amount)
                ? "bg-sky-500 text-white"
                : "bg-sky-200"
            }`}
          >
            {amount} €
          </button>
        ))}
      </div>

      <section className="pt-6 font-bold">Método de pago</section>

      <div className="flex flex-col w-full border border-sky-500 rounded-lg p-4 bg-white shadow">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="payment-method"
              checked={selectedPaymentMethod === "Tarjeta Bancaria"}
              onChange={() => handlePaymentMethodChange("Tarjeta Bancaria")}
              className="w-4 h-4"
              aria-label="Tarjeta Bancaria"
            />
            <span className="text-sm">Tarjeta Bancaria</span>
            <img
              src="/assets/CircleIcon.svg"
              alt="Icono de Tarjeta"
              className="w-4 h-4"
            />
          </div>
          <span className="text-xs text-gray-500">Instántaneo</span>
        </div>

        <div className="flex flex-col gap-3 pt-4 ml-6">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="card-option"
              checked={selectedCardOption === "Tarjeta terminada en 0909"}
              onChange={() => handlePaymentMethodChange("Tarjeta Bancaria")}
              className="w-4 h-4"
              aria-label="Tarjeta terminada en 0909"
            />
            <span className="text-sm">Tarjeta terminada en 0909</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="card-option"
              checked={selectedCardOption === "Utilizar otra tarjeta"}
              onChange={() =>
                handlePaymentMethodChange("Utilizar otra tarjeta")
              }
              className="w-4 h-4"
              aria-label="Utilizar otra tarjeta"
            />
            <span className="text-sm">Utilizar otra tarjeta</span>
          </div>

          <Listbox>
            <div className="relative mt-2">
              <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-600 z-50">
                Elige TPV
              </label>
              <Listbox.Button className="w-full flex items-center justify-between border rounded-lg p-4 focus:outline-none">
                <span className="truncate">Sabadell</span>
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              </Listbox.Button>
              <Listbox.Options className="absolute mt-1 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 max-h-60 overflow-auto focus:outline-none">
                {people.map((person, idx) => (
                  <Listbox.Option
                    key={idx}
                    value={person.name}
                    className={({ active }) =>
                      `${
                        active
                          ? "bg-indigo-100 text-indigo-900"
                          : "text-gray-900"
                      }
                      cursor-default select-none py-2 px-4`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`${
                            selected ? "font-medium" : "font-normal"
                          } block truncate`}
                        >
                          {person.name}
                        </span>
                        {selected && (
                          <CheckIcon className="w-5 h-5 text-indigo-600" />
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
      </div>

      <div className="flex items-center w-full mt-4 border rounded-lg bg-white px-4 py-3 justify-between">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="payment-method"
            checked={selectedPaymentMethod === "Bizum"}
            onChange={() => handlePaymentMethodChange("Bizum")}
            className="w-4 h-4"
            aria-label="Bizum"
          />
          <span className="text-sm">Bizum</span>
        </div>
        <span className="text-xs text-gray-500">Importe mínimo 10€</span>
      </div>

      <div className="flex items-center w-full mt-4 border rounded-lg bg-white px-4 py-3 justify-between">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="payment-method"
            checked={selectedPaymentMethod === "Transferencia"}
            onChange={() => handlePaymentMethodChange("Transferencia")}
            className="w-4 h-4"
            aria-label="Transferencia"
          />
          <span className="text-sm">Transferencia</span>
        </div>
        <span className="text-xs text-gray-500">No instantáneo</span>
      </div>

      <section className="flex flex-col items-center justify-center space-y-4 py-8 lg:flex-row lg:justify-between lg:space-y-0">
        <div className="flex items-center">
          <img src="/assets/security.svg" className="w-6 h-6" alt="Seguridad" />
          <p className="text-xs font-medium leading-5 pl-3 text-center lg:text-left">
            Todos los pagos en Dev Talenty son 100% seguros. Web certificada por
            Confianza Online.
          </p>
        </div>
        <button
          disabled={isRechargeDisabled}
          onClick={handleRecharge}
          className={`w-full lg:w-auto rounded px-8 py-3 font-semibold text-neutral-900 ${
            isRechargeDisabled
              ? "bg-sky-200 text-neutral-400 cursor-not-allowed"
              : "bg-sky-500 text-white"
          }`}
        >
          Recargar Cuenta
        </button>
      </section>
    </div>
  );
}

interface CreditManagerProps {
  className?: string;
  onRechargeSuccess?: () => void;
}
