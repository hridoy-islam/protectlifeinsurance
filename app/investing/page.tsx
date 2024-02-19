"use client";
import BreadCumb from "@/components/BreadCumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceTypes from "@/components/ServiceTypes";

const category = [
  {
    title: "Health & Dental insurance",
    icon: "material-symbols-light:health-and-safety-outline",
  },
  {
    title: "Critical illness insurance",
    icon: "solar:heart-pulse-broken",
  },
  {
    title: "Life insurance",
    icon: "icon-park-outline:people-safe",
  },
  {
    title: "Disability insurance",
    icon: "fa6-solid:user-injured",
  },
  {
    title: "Creditor insurance",
    icon: "pepicons-pencil:dollar-circle",
  },
  {
    title: "Workplace benefits",
    icon: "material-symbols-light:health-and-safety-outline",
  },
];

export default function page() {
  return (
    <div>
      <BreadCumb
        title="Investing & Saving"
        description="Seize the moments that make life worth it. Insurance protection can help give you the confidence to embrace every opportunity to live each day to the fullest."
      />

      <ServiceTypes data={category} />
    </div>
  );
}
