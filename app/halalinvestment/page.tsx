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
        title="Halal Investment"
        description="Creditor insurance is a safety net for you and your family. It can help you pay your debt or keep up with payments if you are diagnosed with a critical illness, become disabled or pass away. "
      />
    </div>
  );
}
