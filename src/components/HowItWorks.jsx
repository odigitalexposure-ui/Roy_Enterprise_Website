import {
  UserRound,
  Paintbrush,
  Banknote,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";

// import whyRoyImage from "../assets/why_roy.jpg";
import how_it_works from "../assets/how_it_works.jpg";

// ============================================================
// PROCESS DATA
// ============================================================

const processSteps = [
  {
    title: "Consultancy",
    description:
      "First of all we try to understand your need and vision about the project we are going to take.",
    icon: UserRound,
  },
  {
    title: "Design",
    description:
      "Then we offer a concept design to match your vision that embodies both aesthetic and user experience.",
    icon: Paintbrush,
  },
  {
    title: "Budgeting",
    description:
      "This process walks besides the designing process - smart budgeting is very important part.",
    icon: Banknote,
  },
  {
    title: "Execution",
    description:
      "And here comes the execution part where we execute the plan - as per the planing.",
    icon: BriefcaseBusiness,
  },
];

// ============================================================
// WHY ROY ENTERPRISE FEATURES
// ============================================================

const leftFeatures = [
  "Budget-friendly solutions",
  "Long-lasting durability",
  "Versatile designs",
  "Warranty-backed services",
  "Trusted expertise",
];

const rightFeatures = [
  "Roof Shed",
  "Aluminium/ Upvc Door & Window.",
  "Structure, Fabrication",
  "False ceiling",
];

// ============================================================
// COMPONENT
// ============================================================

export default function HowItWorks({
  backgroundImage = null,

  // Easy way to replace the main lower image
  image = how_it_works,

  title = "How It Works",

  description = `Our strength lies in our passion for creativity, bringing unique
  elements to both modern and traditional designs. We take pride in designing
  and planning of space that combine the ergonomic, functional, and aesthetic
  components that contribute to a right environment.`,

  questionTitle = (
    <>
      Do you have any question?
      <br />
      Feel free to contact us anytime.
    </>
  ),

  whyTitle = "Why Roy Enterprise?",

  whyDescription = `Roy Enterprise is a farm full of a professional and passionate
  team with the needed expertise in the craft. Roy Enterprise offers a fine
  balance between quality and affordability. You should embrace and keep it
  organized where you spend valuable time – partner with us and fall in love
  with your place. Let’s 'UNLOCK THE JOY OF LIVING!'`,

  contactText = "Contact us now",
}) {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#F8FAFC]"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      {/* ========================================================
          OPTIONAL BACKGROUND OVERLAY
      ======================================================== */}

      {backgroundImage && <div className="absolute inset-0 bg-[#F8FAFC]/90" />}

      {/* ========================================================
          MAIN CONTAINER
      ======================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[920px]

          px-5
          py-10

          sm:px-6
          sm:py-12

          md:px-8
          md:py-14

          lg:px-0
          lg:py-5
        "
      >
        {/* ======================================================
            TOP SECTION
            LEFT EMPTY/VISUAL AREA
            RIGHT HOW IT WORKS
        ====================================================== */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-10

            lg:grid-cols-[1fr_400px]
            lg:gap-[55px]
          "
        >
          {/* ====================================================
              LEFT VISUAL AREA

              Add an image here if you want one.

              Example:
              leftImage="/src/assets/work.jpg"
          ==================================================== */}

          <div
            className="
              hidden
              min-h-[400px]

              lg:block
            "
          >
            {/* 
              Intentionally empty.

              The supplied screenshot has a large blank/visual
              area on the left side of the "How It Works" section.

              You can add an image/background here later.
            */}
          </div>

          {/* ====================================================
              HOW IT WORKS
          ==================================================== */}

          <div className="w-full">
            <h2
              className="
                m-0
                text-[24px]
                font-bold
                leading-[1.2]
                tracking-[-0.3px]
                text-[#192A3D]

                sm:text-[25px]

                md:text-[26px]
              "
            >
              {title}
            </h2>

            <p
              className="
                mt-3
                max-w-[400px]
                text-[11px]
                font-normal
                leading-[1.55]
                text-[#304D6B]

                sm:text-[12px]

                md:text-[12px]
              "
            >
              {description}
            </p>

            {/* PROCESS ITEMS */}

            <div className="mt-4 flex flex-col gap-4">
              {processSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="
                      flex
                      w-full
                      items-start
                      gap-3
                    "
                  >
                    {/* CIRCLE ICON */}

                    <div
                      className="
                        flex
                        h-[60px]
                        w-[60px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#6C7784]
                        text-white

                        sm:h-[62px]
                        sm:w-[62px]
                      "
                    >
                      <Icon size={29} strokeWidth={2} />
                    </div>

                    {/* TEXT */}

                    <div className="min-w-0 flex-1 pt-1">
                      <h3
                        className="
                          m-0
                          text-[18px]
                          font-bold
                          leading-[1.2]
                          text-[#192A3D]

                          sm:text-[19px]

                          md:text-[20px]
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-[330px]
                          text-[10px]
                          font-normal
                          leading-[1.5]
                          text-[#304D6B]

                          sm:text-[11px]
                        "
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CONTACT BUTTON */}

            <div className="mt-4 flex justify-start">
              <a
                href="#contact"
                className="
                  inline-flex
                  min-h-[36px]
                  items-center
                  justify-center
                  rounded-[3px]
                  bg-[#6C7784]
                  px-6
                  text-[11px]
                  font-medium
                  text-white
                  transition-all
                  duration-200

                  hover:bg-[#192A3D]
                "
              >
                {contactText}
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================
            LOWER SECTION
        ====================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-8

            sm:mt-12

            md:gap-10

            lg:mt-[-5px]
            lg:grid-cols-[380px_1fr]
            lg:gap-[36px]
          "
        >
          {/* ====================================================
              LEFT SIDE
          ==================================================== */}

          <div className="w-full">
            {/* QUESTION */}

            <h2
              className="
                m-0
                text-[21px]
                font-bold
                leading-[1.15]
                text-[#192A3D]

                sm:text-[22px]

                md:text-[23px]
              "
            >
              {questionTitle}
            </h2>

            {/* IMAGE */}

            <div
              className="
                mt-5
                w-full
                overflow-hidden
                border
                border-[#222]
                bg-white
                shadow-[0_2px_7px_rgba(0,0,0,0.25)]
              "
            >
              <img
                src={image}
                alt="Roy Enterprise"
                className="
                  block
                  aspect-[1.48/1]
                  h-auto
                  w-full
                  object-cover
                "
                loading="lazy"
              />
            </div>
          </div>

          {/* ====================================================
              RIGHT SIDE
          ==================================================== */}

          <div className="w-full pt-0 lg:pt-[68px]">
            <h2
              className="
                m-0
                text-[21px]
                font-bold
                leading-[1.2]
                text-[#192A3D]

                sm:text-[22px]

                md:text-[23px]
              "
            >
              {whyTitle}
            </h2>

            <p
              className="
                mt-3
                max-w-[390px]
                text-[10px]
                leading-[1.55]
                text-[#304D6B]

                sm:text-[11px]
              "
            >
              {whyDescription}
            </p>

            {/* ==================================================
                FEATURES
            ================================================== */}

            <div
              className="
                mt-5
                grid
                grid-cols-1
                gap-1

                sm:grid-cols-2
                sm:gap-x-5
              "
            >
              {/* LEFT FEATURES */}

              <div className="flex flex-col gap-1">
                {leftFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-[10px]
                      leading-[1.4]
                      text-[#1769FF]

                      sm:text-[11px]
                    "
                  >
                    <CheckCircle2
                      size={11}
                      strokeWidth={3}
                      className="shrink-0"
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* RIGHT FEATURES */}

              <div className="flex flex-col gap-1">
                {rightFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-[10px]
                      leading-[1.4]
                      text-[#1769FF]

                      sm:text-[11px]
                    "
                  >
                    <CheckCircle2
                      size={11}
                      strokeWidth={3}
                      className="shrink-0"
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================
            SOME INSIGHTS
        ====================================================== */}

        <div
          className="
            mt-12
            border-t
            border-transparent
            pt-0

            sm:mt-14

            lg:mt-14
          "
        >
          <h2
            className="
              m-0
              text-[21px]
              font-bold
              leading-[1.2]
              text-[#192A3D]

              sm:text-[22px]

              md:text-[23px]
            "
          >
            Some Insights
          </h2>
        </div>
      </div>
    </section>
  );
}
