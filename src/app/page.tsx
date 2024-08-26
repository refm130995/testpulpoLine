"use client";
import { useState } from "react";
import AccountSection from "../components/AccountSection";
import Footer from "../components/Footer";
import LotteryInfoCard from "../components/LotteryInfoCard";
import NavigationBar from "../components/NavigationBar";
import CreditManager from "../components/CreditManager";
import BottomNav from "../components/BottomNav";

export default function Home() {
  const [nextPage, setNextPage] = useState<boolean>(false);
  const handleRechargeSuccess = () => {
    setNextPage(true);
  };
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col lg:flex-row justify-center lg:px-[98px] py-8 items-center">
        <div className="w-full lg:w-2/4 px-4">
          {nextPage ? (
            <LotteryInfoCard />
          ) : (
            <CreditManager onRechargeSuccess={handleRechargeSuccess} />
          )}
        </div>
        <div className="hidden lg:block w-full lg:w-1/4 pl-0 lg:pl-20 mt-8 lg:mt-0">
          <AccountSection />
        </div>
      </div>
      <Footer />
      <BottomNav />
    </>
  );
}
