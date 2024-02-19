"use client";
import BreadCumb from "@/components/BreadCumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceTypes from "@/components/ServiceTypes";

const category = [
  {
    title: "Retirement income fund",
    icon: "material-symbols-light:health-and-safety-outline",
  },

  {
    title: "Income annuities",
    icon: "solar:heart-pulse-broken",
  },
  {
    title: "Pension plans",
    icon: "icon-park-outline:people-safe",
  },
];

export default function page() {
  return (
    <div>
      <BreadCumb
        title="Mutual funds"
        description="Mutual funds are a great option to help reduce your risk by spreading your money more widely than investing on your own."
      />
    </div>
  );
}
