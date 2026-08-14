import what_we_do from "../assets/what_we_do.jpg";

export default function WhatWeDo({ backgroundImage = what_we_do }) {
  return (
    <section
      id="services"
      className="
        w-full
        bg-[#F8FAFC]

        px-5
        py-10

        sm:px-6
        sm:py-12

        md:px-8
        md:py-14

        lg:px-10
        lg:py-16

        xl:py-[34px]
      "
    >
      {/* =========================================================
          CONTENT CONTAINER
      ========================================================= */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1215px]
          text-center
        "
      >
        {/* =======================================================
            HEADING
        ======================================================= */}
        <h2
          className="
            m-0
            text-[28px]
            font-bold
            leading-[1.15]
            tracking-[-0.5px]
            text-[#192A3D]

            sm:text-[30px]
            md:text-[31px]
            lg:text-[32px]
          "
        >
          What we do
        </h2>

        {/* =======================================================
            DESCRIPTION
        ======================================================= */}
        <p
          className="
            mx-auto
            mt-4
            max-w-[1100px]
            text-[13px]
            font-normal
            leading-[1.6]
            text-[#304D6B]

            sm:text-[13.5px]
            md:text-[14px]
            lg:text-[14px]
          "
        >
          Everything we do to offer you a better service experience. We cover
          almost everything, that you may need from an expert in this field.
        </p>

        {/* =======================================================
            IMAGE
        ======================================================= */}
        <img
          src={what_we_do}
          alt="What we do"
          loading="lazy"
          className="
            mx-auto
            mt-8
            block
            h-auto
            w-[80%]

            sm:mt-9
            sm:w-[78%]

            md:mt-10
            md:w-[76%]

            lg:w-[75%]

            xl:mt-[31px]
          "
        />
      </div>
    </section>
  );
}
