export default function ComponentsDesktopProductTabsItem({
  name = "Euromillones",
  value = "17.000.000",
  currency = "€",
}: ComponentsDesktopProductTabsItemProps) {
  return (
    <section className={`w-full px-4 pb-1.5 pt-2`}>
      <div className="flex items-center justify-center">
        <img src="/assets/ProductIcon.svg" className="h-8 w-8 flex-shrink-0" />
      </div>
      <article className="font-montserrat text-center text-xs tracking-[0px]">
        <h3 className="font-medium leading-[18px] text-black">{name}</h3>
        <div className="flex h-[19px] flex-shrink-0 flex-col items-center justify-center self-stretch">
          <div className="mb-[-2.05px] text-center font-semibold capitalize leading-[21px] text-black">
            {value} {currency}
          </div>
        </div>
      </article>
    </section>
  );
}

interface ComponentsDesktopProductTabsItemProps {
  name: string;
  value: string;
  currency: string;
}
