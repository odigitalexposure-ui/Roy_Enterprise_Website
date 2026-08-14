import React from "react";

import testi1 from "../assets/testi1.png";
import testi2 from "../assets/testi2.png";
import testi3 from "../assets/testi3.png";

/* =========================================================
   STATISTICS
========================================================= */

const stats = [
  {
    value: "1,000+",
    label: "Customers",
  },
  {
    value: "50+",
    label: "People",
  },
  {
    value: "5+",
    label: "Years of experience",
  },
];

/* =========================================================
   TESTIMONIAL DATA
========================================================= */

const testimonials = [
  {
    quote:
      "The entire interior design team was truly amazing to work with. They fully captured our vision and need for functionality and gave us our dream home! They also made the process fun and exciting along the way and we trusted them completely.",
    name: "Sonela",
    role: "Sports Person",
    image: testi1,
  },

  {
    quote:
      "Roy Enterprise has a great team, friendly relation, they designed the ideal house for my needs. It is a fantastic project, we are very happy! They were originally recommended to us by a friend and now we recommend them.",
    name: "Sujit Purkait",
    role: "Engineer",
    image: testi2,
  },

  {
    quote:
      "Roy Enterprise is working with glamour, responsibility, and commitment. They will work with your needs and help you going through the transition of renovating your home. Great company to work with, dedicated and professional team.",
    name: "Anindita",
    role: "Graphic Designer",
    image: testi3,
  },
];

/* =========================================================
   TESTIMONIALS COMPONENT
========================================================= */

const Testimonials = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#fafbfc]
        text-[#172b4d]
      "
    >
      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]

          px-5
          py-12

          sm:px-6
          sm:py-14

          md:px-8
          md:py-16

          lg:px-10
          lg:py-[42px]
        "
      >
        {/* ===================================================
            STATISTICS
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            text-center

            sm:grid-cols-3
            sm:gap-6

            md:gap-10
          "
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                flex
                flex-col
                items-center
                justify-center
              "
            >
              <span
                className="
                  text-[40px]
                  font-medium
                  leading-none
                  tracking-[-1.5px]
                  text-[#29476b]

                  sm:text-[42px]

                  md:text-[44px]
                "
              >
                {stat.value}
              </span>

              <span
                className="
                  mt-2
                  text-[11px]
                  font-normal
                  leading-4
                  text-[#29476b]

                  sm:text-[12px]
                "
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ===================================================
            HEADING
        =================================================== */}

        <div
          className="
            mt-7
            text-left

            sm:mt-8

            md:mt-6
          "
        >
          <h2
            className="
              text-[24px]
              font-bold
              leading-[1.2]
              tracking-[-0.5px]
              text-[#071d3a]

              sm:text-[26px]

              md:text-[27px]
            "
          >
            What peoples say
          </h2>

          <p
            className="
              mt-3
              max-w-[1050px]
              text-[11px]
              font-normal
              leading-[1.7]
              text-[#29476b]

              sm:text-[12px]

              md:text-[12px]
            "
          >
            We do everything to satisfy them, and when their beautiful words of
            appreciations touches us – we find more courage to improve and to
            keep what we have.
          </p>
        </div>

        {/* ===================================================
            TESTIMONIAL GRID
        =================================================== */}

        <div
          className="
            mt-7
            grid
            grid-cols-1
            gap-10

            sm:mt-8
            sm:grid-cols-3
            sm:gap-6

            md:gap-10
          "
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="
                flex
                flex-col
                items-center
                text-center
              "
            >
              {/* =================================================
                  QUOTE
              ================================================= */}

              <p
                className="
                  max-w-[320px]
                  text-[12px]
                  font-normal
                  leading-[1.7]
                  text-[#29476b]

                  sm:text-[11px]

                  md:text-[12px]
                "
              >
                “{testimonial.quote}”
              </p>

              {/* =================================================
                  PERSON
              ================================================= */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-2.5
                "
              >
                {/* Avatar */}

                <div
                  className="
                    h-[43px]
                    w-[43px]
                    shrink-0
                    overflow-hidden
                    rounded-full
                    border
                    border-[#1b1b1b]
                    bg-[#e8e8e8]
                    shadow-[0_1px_5px_rgba(0,0,0,0.12)]
                  "
                >
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} profile`}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                    loading="lazy"
                  />
                </div>

                {/* Name + Role */}

                <div className="text-left">
                  <h3
                    className="
                      text-[10px]
                      font-medium
                      leading-[1.2]
                      text-[#29476b]
                    "
                  >
                    {testimonial.name}
                  </h3>

                  <p
                    className="
                      mt-[2px]
                      text-[9px]
                      font-normal
                      leading-[1.2]
                      text-[#29476b]
                    "
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* =====================================================
          SUBTLE BOTTOM TRANSITION
      ===================================================== */}

      <div
        className="
          h-[24px]
          w-full
          bg-[#fff8f8]
        "
      >
        <div
          className="
            h-full
            w-full
            opacity-40
            [background-image:radial-gradient(#e7caca_0.7px,transparent_0.7px)]
            [background-size:6px_6px]
          "
        />
      </div>
    </section>
  );
};

export default Testimonials;
