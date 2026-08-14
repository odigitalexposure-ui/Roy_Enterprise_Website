import React from "react";
import { MapPin, Phone, Mail, ExternalLink, ArrowRight } from "lucide-react";

/* =========================================================
   CONTACT DATA
========================================================= */

const contactDetails = [
  {
    type: "address",
    icon: MapPin,
    label: "Address:",
    content: (
      <>
        127, Rabindranath Tagore Rd, Purbachal,
        <br className="hidden sm:block" />
        Nabapally, Kolkata, West Bengal 700063
      </>
    ),
  },
  {
    type: "phone",
    icon: Phone,
    label: "Phone:",
    content: "+91 72780 77092",
    href: "tel:+917278077092",
  },
  {
    type: "phone",
    icon: Phone,
    label: "Phone:",
    content: "+91 90384 44874",
    href: "tel:+919038444874",
  },
  {
    type: "email",
    icon: Mail,
    label: "Email:",
    content: "sovonroy90@gmail.com",
    href: "mailto:sovonroy90@gmail.com",
  },
];

/* =========================================================
   QUICK LINKS
========================================================= */

const quickLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Service",
    href: "#services",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
];

/* =========================================================
   MAP
========================================================= */

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=127%20Rabindranath%20Tagore%20Road%2C%20Purbachal%2C%20Nabapally%2C%20Kolkata%2C%20West%20Bengal%20700063&output=embed";

const MAP_OPEN_URL =
  "https://www.google.com/maps/search/?api=1&query=127+Rabindranath+Tagore+Road,+Purbachal,+Nabapally,+Kolkata,+West+Bengal+700063";

/* =========================================================
   CONTACT COMPONENT
========================================================= */

const Contact = () => {
  return (
    <footer
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#fffdfc]
        text-[#173a60]
      "
    >
      {/* =====================================================
          MAIN CONTACT AREA
      ===================================================== */}

      <div
        className="
          relative
          border-t
          border-[#f0dddd]
          bg-[#fffdfc]
        "
      >
        {/* Subtle reference-style pattern */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-50
            [background-image:repeating-linear-gradient(45deg,rgba(226,175,175,0.14)_0px,rgba(226,175,175,0.14)_1px,transparent_1px,transparent_5px),repeating-linear-gradient(-45deg,rgba(226,175,175,0.10)_0px,rgba(226,175,175,0.10)_1px,transparent_1px,transparent_5px)]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1320px]
            px-5
            py-12
            sm:px-7
            sm:py-14
            md:px-10
            lg:px-12
            lg:py-16
            xl:px-0
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-12
              md:grid-cols-2
              lg:grid-cols-[1.65fr_0.85fr_1.25fr]
              lg:items-start
              lg:gap-14
            "
          >
            {/* =================================================
                CONTACT INFO
            ================================================= */}

            <div>
              <h2
                className="
                  text-[20px]
                  font-bold
                  leading-tight
                  tracking-[-0.2px]
                  text-[#092d52]
                  sm:text-[21px]
                "
              >
                Contact Info
              </h2>

              <div
                className="
                  mt-7
                  space-y-5
                  sm:mt-8
                  sm:space-y-6
                "
              >
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  const content = (
                    <>
                      <div
                        className="
                          flex
                          h-[42px]
                          w-[42px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#eedede]
                          bg-white/80
                          text-[#31597b]
                        "
                      >
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <div className="min-w-0 pt-[1px]">
                        <p
                          className="
                            text-[15px]
                            font-medium
                            leading-6
                            text-[#183e64]
                          "
                        >
                          {item.label}
                        </p>

                        <p
                          className="
                            mt-[1px]
                            text-[15px]
                            leading-7
                            text-[#31597b]
                          "
                        >
                          {item.content}
                        </p>
                      </div>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={`${item.type}-${index}`}
                      href={item.href}
                      className="
                        group
                        flex
                        items-start
                        gap-4
                        rounded-xl
                        transition-all
                        duration-300
                        hover:-translate-y-[1px]
                      "
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={`${item.type}-${index}`}
                      className="flex items-start gap-4"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                QUICK LINKS
            ================================================= */}

            <div>
              <h2
                className="
                  text-[20px]
                  font-bold
                  leading-tight
                  text-[#092d52]
                "
              >
                Quick Links
              </h2>

              <nav aria-label="Footer navigation" className="mt-6">
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="
                          group
                          inline-flex
                          items-center
                          gap-1.5
                          text-[15px]
                          leading-6
                          text-[#31597b]
                          transition-colors
                          duration-300
                          hover:text-[#0b3157]
                        "
                      >
                        <span>{link.label}</span>

                        <ArrowRight
                          size={13}
                          className="
                            -translate-x-1
                            opacity-0
                            transition-all
                            duration-300
                            group-hover:translate-x-0
                            group-hover:opacity-100
                          "
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* =================================================
                GOOGLE MAP
            ================================================= */}

            <div>
              <div
                className="
                  overflow-hidden
                  rounded-[2px]
                  border
                  border-[#e7e2e2]
                  bg-white
                  shadow-[0_4px_18px_rgba(20,40,60,0.06)]
                "
              >
                <div
                  className="
                    relative
                    h-[250px]
                    w-full
                    sm:h-[280px]
                    lg:h-[350px]
                  "
                >
                  <iframe
                    title="Roy Enterprise Location"
                    src={MAP_EMBED_URL}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      border-0
                    "
                  />

                  {/* Open in Google Maps */}

                  <a
                    href={MAP_OPEN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      absolute
                      left-3
                      top-3
                      z-20
                      inline-flex
                      items-center
                      gap-1
                      rounded-sm
                      bg-white
                      px-3
                      py-2
                      text-[12px]
                      font-medium
                      text-[#1a73e8]
                      shadow-[0_1px_5px_rgba(0,0,0,0.18)]
                      transition-all
                      duration-300
                      hover:bg-[#f7faff]
                    "
                  >
                    Open in Maps
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          DIGITAL EXPOSURE BANNER
      ===================================================== */}

      <div
        className="
          border-t
          border-[#eee5e5]
          bg-[#fff8f8]
        "
      >
        <div
          className="
            mx-auto
            flex
            min-h-[70px]
            w-full
            max-w-[1320px]
            flex-col
            items-center
            justify-center
            gap-1
            px-5
            py-4
            text-center
            sm:min-h-[64px]
            sm:flex-row
            sm:gap-2
            sm:px-7
            md:px-10
            lg:px-12
            xl:px-0
          "
        >
          <span
            className="
              text-[12px]
              leading-5
              text-[#31597b]
              sm:text-[13px]
            "
          >
            Website designed & developed by
          </span>

          <a
            href="https://www.teamdeoskolkata.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-1
              text-[12px]
              font-bold
              text-[#173a60]
              transition-colors
              duration-300
              hover:text-red-700
              sm:text-[13px]
            "
          >
            Digital Exposure Online Service
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
