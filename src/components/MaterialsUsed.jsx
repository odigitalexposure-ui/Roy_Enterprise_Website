import material1 from "../assets/material1.webp";
import material2 from "../assets/material2.jpg";
import material3 from "../assets/material3.jpg";
import material4 from "../assets/material4.webp";
import material5 from "../assets/material5.jpg";

// ============================================================
// MATERIAL DATA
// ============================================================

const materials = [
  {
    title: "Tata 0.47mm Galvaume Sheets",
    description:
      "Premium steel roofing sheets coated with aluminum (55%), zinc (43.5%) and silicon (1.5%) alloy for superior corrosion resistance and heat reflectivity. Ideal for industrial, commercial and residential roofing with excellent durability.",
    image: material1,
  },

  {
    title: "Tata GI Hollow Square/Rectangular Tubes",
    description:
      "High-strength precision-engineered steel sections with uniform thickness and corrosion resistance. Perfect for structural frameworks, gates, and industrial construction projects requiring durability.",
    image: material2,
  },

  {
    title: "Jindal/Bhushan 0.45mm Galvaume Sheets",
    description:
      "Premium aluminum-zinc alloy coated steel sheets offering superior thermal protection and weather resistance. Lightweight yet strong solution for all roofing needs across sectors.",
    image: material3,
  },

  {
    title: "Nizon GI Hollow Square Tubes",
    description:
      "Galvanized iron structural tubes with excellent welding properties and weather resistance. Ideal for industrial frameworks, roofing structures and fabrication works requiring reliable durability.",
    image: material4,
  },

  {
    title: "Transparent Polycarbonate Sheets",
    description:
      "High-impact resistant panels offering 90% light transmission with UV protection. Perfect for skylights, greenhouses and canopies where natural light is desired without compromising safety.",
    image: material5,
  },
];

// ============================================================
// COMPONENT
// ============================================================

export default function MaterialsUsed({
  backgroundImage = null,

  title = "Materials Used",

  description = "For 25 years, we have been providing our customers with trusted materials.",
}) {
  return (
    <section
      id="materials"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F8FAFC]

        px-4
        py-10

        sm:px-6
        sm:py-12

        md:px-8
        md:py-14

        lg:px-10
        lg:py-16

        xl:py-20

        2xl:py-24
      "
      style={
        backgroundImage
          ? {
              backgroundImage: `url("${backgroundImage}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      {/* ======================================================
          OPTIONAL BACKGROUND OVERLAY
      ====================================================== */}

      {backgroundImage && (
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[#F8FAFC]/90
          "
        />
      )}

      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full

          max-w-[1180px]

          xl:max-w-[1260px]

          2xl:max-w-[1320px]
        "
      >
        {/* ====================================================
            SECTION HEADER
        ==================================================== */}

        <header
          className="
            w-full

            text-center

            lg:text-left
          "
        >
          <h2
            className="
              m-0

              text-[28px]
              font-bold
              leading-[1.15]
              tracking-[-0.5px]

              text-[#192A3D]

              sm:text-[30px]

              md:text-[32px]

              lg:text-[34px]

              xl:text-[36px]

              2xl:text-[38px]
            "
          >
            {title}
          </h2>

          <p
            className="
              m-0
              mt-2

              max-w-[800px]

              text-[13px]
              font-normal
              leading-[1.6]

              text-[#304D6B]

              sm:text-[14px]

              md:text-[15px]

              lg:text-[15px]

              xl:text-[16px]
            "
          >
            {description}
          </p>
        </header>

        {/* ====================================================
            MATERIAL LIST
        ==================================================== */}

        <div
          className="
            mt-8
            w-full

            sm:mt-10

            md:mt-12

            lg:mt-14

            xl:mt-16

            2xl:mt-18
          "
        >
          {materials.map((material, index) => {
            const imageOnLeft = index % 2 === 0;

            return (
              <article
                key={`${material.title}-${index}`}
                className="
                  group
                  w-full

                  border-b
                  border-[#192A3D]/10

                  py-8

                  first:pt-0
                  last:border-b-0

                  sm:py-9

                  md:py-10

                  lg:py-11

                  xl:py-12
                "
              >
                {/* ==================================================
                    MOBILE / TABLET
                ================================================== */}

                <div
                  className="
                    flex
                    w-full
                    flex-col
                    items-center
                    gap-5

                    lg:hidden
                  "
                >
                  {/* IMAGE */}

                  <div
                    className="
                      h-[120px]
                      w-[120px]
                      shrink-0
                      overflow-hidden

                      border
                      border-[#222]
                      bg-white

                      shadow-[0_3px_8px_rgba(0,0,0,0.22)]

                      sm:h-[130px]
                      sm:w-[130px]

                      md:h-[140px]
                      md:w-[140px]
                    "
                  >
                    <img
                      src={material.image}
                      alt={material.title}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="
                        block
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  </div>

                  {/* TEXT */}

                  <div
                    className="
                      min-w-0
                      w-full
                      text-center
                    "
                  >
                    <h3
                      className="
                        m-0
                        break-words
                        text-[20px]
                        font-bold
                        leading-[1.25]
                        text-[#192A3D]

                        sm:text-[22px]

                        md:text-[24px]
                      "
                    >
                      {material.title}
                    </h3>

                    <p
                      className="
                        mx-auto
                        mt-3
                        max-w-[850px]
                        break-words

                        text-[13px]
                        leading-[1.65]
                        text-[#304D6B]

                        sm:text-[14px]

                        md:text-[15px]
                      "
                    >
                      {material.description}
                    </p>
                  </div>
                </div>

                {/* ==================================================
                    DESKTOP / LARGE / EXTRA LARGE
                ================================================== */}

                <div
                  className={`
                    hidden

                    lg:grid

                    w-full
                    items-center

                    ${
                      imageOnLeft
                        ? `
                          lg:grid-cols-[170px_minmax(0,1fr)]
                          lg:gap-x-10

                          xl:grid-cols-[185px_minmax(0,1fr)]
                          xl:gap-x-12

                          2xl:grid-cols-[200px_minmax(0,1fr)]
                          2xl:gap-x-14
                        `
                        : `
                          lg:grid-cols-[minmax(0,1fr)_170px]
                          lg:gap-x-10

                          xl:grid-cols-[minmax(0,1fr)_185px]
                          xl:gap-x-12

                          2xl:grid-cols-[minmax(0,1fr)_200px]
                          2xl:gap-x-14
                        `
                    }
                  `}
                >
                  {/* ==================================================
                      IMAGE ON LEFT
                  ================================================== */}

                  {imageOnLeft && (
                    <>
                      {/* IMAGE */}

                      <div className="flex w-full justify-center">
                        <div
                          className="
                            h-[135px]
                            w-[135px]
                            overflow-hidden

                            border
                            border-[#222]

                            bg-white

                            shadow-[0_3px_8px_rgba(0,0,0,0.22)]

                            transition
                            duration-300

                            group-hover:shadow-[0_5px_14px_rgba(0,0,0,0.30)]

                            xl:h-[145px]
                            xl:w-[145px]

                            2xl:h-[155px]
                            2xl:w-[155px]
                          "
                        >
                          <img
                            src={material.image}
                            alt={material.title}
                            loading={index === 0 ? "eager" : "lazy"}
                            className="
                              block
                              h-full
                              w-full
                              object-cover
                            "
                          />
                        </div>
                      </div>

                      {/* TEXT */}

                      <div
                        className="
                          min-w-0
                          w-full

                          text-left
                        "
                      >
                        <h3
                          className="
                            m-0
                            max-w-[850px]

                            break-words
                            whitespace-normal

                            text-[24px]
                            font-bold
                            leading-[1.2]

                            text-[#192A3D]

                            xl:max-w-[920px]
                            xl:text-[27px]

                            2xl:max-w-[980px]
                            2xl:text-[29px]
                          "
                        >
                          {material.title}
                        </h3>

                        <p
                          className="
                            m-0
                            mt-4

                            max-w-[850px]

                            break-words
                            whitespace-normal

                            text-[13px]
                            leading-[1.65]

                            text-[#304D6B]

                            xl:max-w-[940px]
                            xl:text-[14px]

                            2xl:max-w-[1000px]
                            2xl:text-[15px]
                          "
                        >
                          {material.description}
                        </p>
                      </div>
                    </>
                  )}

                  {/* ==================================================
                      IMAGE ON RIGHT
                  ================================================== */}

                  {!imageOnLeft && (
                    <>
                      {/* TEXT */}

                      <div
                        className="
                          min-w-0
                          w-full

                          text-right
                        "
                      >
                        <h3
                          className="
                            m-0
                            ml-auto

                            max-w-[850px]

                            break-words
                            whitespace-normal

                            text-[24px]
                            font-bold
                            leading-[1.2]

                            text-[#192A3D]

                            xl:max-w-[920px]
                            xl:text-[27px]

                            2xl:max-w-[980px]
                            2xl:text-[29px]
                          "
                        >
                          {material.title}
                        </h3>

                        <p
                          className="
                            m-0
                            mt-4
                            ml-auto

                            max-w-[850px]

                            break-words
                            whitespace-normal

                            text-[13px]
                            leading-[1.65]

                            text-[#304D6B]

                            xl:max-w-[940px]
                            xl:text-[14px]

                            2xl:max-w-[1000px]
                            2xl:text-[15px]
                          "
                        >
                          {material.description}
                        </p>
                      </div>

                      {/* IMAGE */}

                      <div className="flex w-full justify-center">
                        <div
                          className="
                            h-[135px]
                            w-[135px]
                            overflow-hidden

                            border
                            border-[#222]

                            bg-white

                            shadow-[0_3px_8px_rgba(0,0,0,0.22)]

                            transition
                            duration-300

                            group-hover:shadow-[0_5px_14px_rgba(0,0,0,0.30)]

                            xl:h-[145px]
                            xl:w-[145px]

                            2xl:h-[155px]
                            2xl:w-[155px]
                          "
                        >
                          <img
                            src={material.image}
                            alt={material.title}
                            loading="lazy"
                            className="
                              block
                              h-full
                              w-full
                              object-cover
                            "
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
