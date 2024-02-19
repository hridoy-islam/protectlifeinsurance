"use client";
import BreadCumb from "@/components/BreadCumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceTypes from "@/components/ServiceTypes";
import Cta from "@/components/Cta";
import Image from "next/image";

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
        title="Creditor insurance"
        description="Creditor insurance is a safety net for you and your family. It can help you pay your debt or keep up with payments if you are diagnosed with a critical illness, become disabled or pass away. "
      />
      <div className="container mx-auto my-6 py-8 space-y-2">
        <h2>What is creditor insurance?</h2>
        <p>
          When you take out a mortgage, personal loan, line of credit, or credit
          card, you want to know you and your family will be protected if
          something should happen to you, and that your loved ones won’t be
          stuck with a debt they can’t handle. This is where creditor insurance
          comes in. Sometimes known as credit protection, it can help pay off or
          pay down your mortgage or loan, or make your payments if the
          unexpected should happen. This can include coverage if you die.
        </p>
      </div>
      <Cta />

      <div className="container mx-auto flex my-10 py-6">
        <div>
          <h2>How does it work?</h2>
          <p>
            Creditor insurance with Canada Life can make a lump-sum payment
            towards your loan or make regular payments directly to your lender.
            The maximum amount and number of payments, and other terms of
            coverage, may differ depending on the lender and loan product. They
            will be specified in your certificate of insurance provided on
            enrollment.{" "}
          </p>
        </div>
        <div>
          {/* <Image
            width={400}
            height={400}
            src="https://www.canadalife.com/content/dam/canadalife/canada-life_site-specific/0-0-homepage1/charmer-basic/_/w/414-414/jpg/creditor-insurance-woman-on-mobile-1024x1024.jpeg"
            alt="protectlife"
          /> */}
          image
        </div>
      </div>
    </div>
  );
}
