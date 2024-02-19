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
        title="Planning for retirement"
        description="Retirement is a whole new stage in your life, and it should be on your terms. We can help you prepare and plan out every part."
      />

      <ServiceTypes data={category} />
    </div>
  );
}
