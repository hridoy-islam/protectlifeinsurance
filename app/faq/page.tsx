"use client";
import BreadCumb from "@/components/BreadCumb";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";

export default function page() {
  return (
    <div>
      <HeaderTop />
      <Header />
      <BreadCumb title="FAQ" />
      <Faq />
      <Footer />
    </div>
  );
}
