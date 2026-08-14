import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Hero() {
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#192A3D]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="home"
        className="
            mx-auto
            w-full
            max-w-[1900px]
            px-6
            pb-14
            pt-6
            sm:px-8
            sm:pb-16
            sm:pt-7
            md:px-10
            md:pb-20
            md:pt-8
            lg:px-[5.4%]
            lg:pb-24
            lg:pt-6
            xl:px-[5.4%]
          "
      >
        {/* PRESENTING */}
        <p
          className="
              mb-8
              text-[22px]
              font-bold
              leading-tight
              text-[#3A4F66]
              sm:mb-9
              sm:text-[23px]
              md:mb-10
              md:text-[24px]
            "
        >
          Presenting
        </p>

        {/* MAIN HEADING */}
        <h1
          className="
              m-0
              text-[42px]
              font-bold
              leading-[1.05]
              tracking-[-1.5px]
              text-[#192A3D]
              sm:text-[46px]
              md:text-[50px]
              lg:text-[52px]
              xl:text-[54px]
            "
        >
          Roy Enterprise
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
              mt-7
              max-w-[1700px]
              text-[18px]
              font-normal
              leading-[1.7]
              text-[#3A4F66]
              sm:mt-7
              sm:text-[19px]
              md:mt-8
              md:text-[21px]
              lg:text-[22px]
              xl:text-[23px]
            "
        >
          We are a reliable name in the roofing industry, as we aim to deliver
          the best of staying experience to our valued customers. This helped us
          in building loyal customer base over the period of time.
        </p>

        {/* CTA BUTTONS */}
        <div
          className="
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:mt-9
              sm:flex-row
              sm:gap-5
              md:mt-10
              lg:mt-11
            "
        >
          <a
            href="tel:+919830022224"
            className="
                flex
                h-[68px]
                w-full
                max-w-[230px]
                items-center
                justify-center
                rounded-[7px]
                bg-[#69727D]
                px-8
                text-[20px]
                font-normal
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#59616B]
                hover:shadow-lg
                sm:h-[76px]
                sm:w-[220px]
                sm:text-[21px]
                md:h-[80px]
                md:w-[227px]
                md:text-[22px]
                lg:h-[87px]
                lg:w-[227px]
              "
          >
            Call Now
          </a>

          <a
            href="#services"
            className="
                flex
                h-[68px]
                w-full
                max-w-[230px]
                items-center
                justify-center
                rounded-[7px]
                bg-[#69727D]
                px-8
                text-[20px]
                font-normal
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#59616B]
                hover:shadow-lg
                sm:h-[76px]
                sm:w-[220px]
                sm:text-[21px]
                md:h-[80px]
                md:w-[267px]
                md:text-[22px]
                lg:h-[87px]
                lg:w-[267px]
              "
          >
            Our Services
          </a>
        </div>
      </section>
    </div>
  );
}
