import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// ============================================================
// IMPORT YOUR IMAGES HERE
// ============================================================

import imgi_2 from "../assets/imgi_2.jpg";
import imgi_3 from "../assets/imgi_3.jpg";
import imgi_4 from "../assets/imgi_4.jpg";
import imgi_5 from "../assets/imgi_5.jpg";
import imgi_6 from "../assets/imgi_6.jpg";
import imgi_7 from "../assets/imgi_7.jpg";
import imgi_8 from "../assets/imgi_8.jpg";

// ============================================================
// GALLERY DATA
// ============================================================
//
// To add another image:
// 1. Put the image inside src/assets/
// 2. Import it above
// 3. Add one object here
//
// Example:
//
// import anotherImage from "../assets/another_image.jpg";
//
// {
//   title: "Another Service",
//   image: anotherImage,
// }
//
// ============================================================

const galleryItems = [
  {
    title: "All Types Of Roof shed",
    image: imgi_2,
  },

  {
    title: "UPVC, Aluminium Door And Window",
    image: imgi_3,
  },

  {
    title: "Gypsum and Armstrong False Ceiling work",
    image: imgi_4,
  },

  {
    title: "Toughened Glass Fixing",
    image: imgi_5,
  },

  {
    title: "Complete warehouse",
    image: imgi_6,
  },

  {
    title: "Heavy Steel Structures",
    image: imgi_7,
  },

  {
    title: "Erection & Tin Sheeting",
    image: imgi_8,
  },
];

export default function Gallery() {
  // ==========================================================
  // MODAL STATE
  // ==========================================================

  const [selectedIndex, setSelectedIndex] = useState(null);

  // ==========================================================
  // OPEN MODAL
  // ==========================================================

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  // ==========================================================
  // CLOSE MODAL
  // ==========================================================

  const closeModal = () => {
    setSelectedIndex(null);
  };

  // ==========================================================
  // PREVIOUS IMAGE
  // ==========================================================

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0 ? galleryItems.length - 1 : current - 1;
    });
  };

  // ==========================================================
  // NEXT IMAGE
  // ==========================================================

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === galleryItems.length - 1 ? 0 : current + 1;
    });
  };

  // ==========================================================
  // KEYBOARD CONTROLS
  // ==========================================================

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyboard = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    // Prevent background scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyboard);

      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      {/* ======================================================
          GALLERY SECTION
      ====================================================== */}

      <section
        className="
          w-full
          bg-[#F8FAFC]

          px-4
          py-8

          sm:px-5
          sm:py-10

          md:px-6
          md:py-12

          lg:px-8
          lg:py-14
        "
      >
        {/* ====================================================
            GALLERY CONTAINER
        ==================================================== */}

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[650px]
            flex-col
            items-center
          "
        >
          {/* ==================================================
              GALLERY ITEMS
          ================================================== */}

          {galleryItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="
                flex
                w-full
                flex-col
                items-center

                mb-5

                sm:mb-6

                md:mb-7
              "
            >
              {/* ==============================================
                  TITLE
              ============================================== */}

              <h2
                className="
                  m-0
                  px-2
                  text-center

                  text-[22px]
                  font-bold
                  leading-[1.2]

                  text-[#192A3D]

                  sm:text-[24px]

                  md:text-[26px]

                  lg:text-[27px]
                "
              >
                {item.title}
              </h2>

              {/* ==============================================
                  IMAGE
              ============================================== */}

              <button
                type="button"
                onClick={() => openModal(index)}
                className="
                  group
                  mt-3
                  block
                  w-full
                  cursor-pointer
                  border-0
                  bg-transparent
                  p-0

                  focus:outline-none
                "
                aria-label={`Open ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="
                    mx-auto
                    block
                    h-auto
                    w-full

                    border
                    border-[#333333]

                    object-contain

                    shadow-[0_2px_7px_rgba(0,0,0,0.28)]

                    transition
                    duration-300

                    group-hover:shadow-[0_5px_15px_rgba(0,0,0,0.35)]
                    group-hover:brightness-[0.97]
                  "
                />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* ======================================================
          IMAGE MODAL
      ====================================================== */}

      {selectedIndex !== null && (
        <div
          className="
            fixed
            inset-0
            z-[9999]

            flex
            items-center
            justify-center

            bg-black/90

            px-3
            py-6

            sm:px-5
            sm:py-8
          "
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          onMouseDown={(event) => {
            // Close only when clicking the dark background
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          {/* ==================================================
              CLOSE BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={closeModal}
            aria-label="Close gallery"
            className="
              absolute
              right-4
              top-4
              z-20

              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-full

              border
              border-white/30

              bg-black/50

              text-white

              transition
              duration-200

              hover:bg-white
              hover:text-black

              sm:right-6
              sm:top-6
            "
          >
            <X size={25} strokeWidth={2} />
          </button>

          {/* ==================================================
              PREVIOUS BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous image"
            className="
              absolute
              left-2
              top-1/2
              z-20

              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center

              rounded-full

              border
              border-white/30

              bg-black/60

              text-white

              transition
              duration-200

              hover:bg-white
              hover:text-black

              sm:left-5
              sm:h-12
              sm:w-12
            "
          >
            <ChevronLeft size={28} />
          </button>

          {/* ==================================================
              NEXT BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={showNext}
            aria-label="Next image"
            className="
              absolute
              right-2
              top-1/2
              z-20

              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center

              rounded-full

              border
              border-white/30

              bg-black/60

              text-white

              transition
              duration-200

              hover:bg-white
              hover:text-black

              sm:right-5
              sm:h-12
              sm:w-12
            "
          >
            <ChevronRight size={28} />
          </button>

          {/* ==================================================
              MODAL CONTENT
          ================================================== */}

          <div
            className="
              flex
              max-h-full
              w-full
              max-w-[1200px]
              flex-col
              items-center
              justify-center

              overflow-hidden
            "
          >
            {/* ================================================
                MODAL IMAGE
            ================================================= */}

            <img
              src={galleryItems[selectedIndex].image}
              alt={galleryItems[selectedIndex].title}
              className="
                block

                max-h-[78vh]
                w-auto
                max-w-[calc(100vw-80px)]

                object-contain

                sm:max-w-[calc(100vw-120px)]

                md:max-h-[80vh]
              "
            />

            {/* ================================================
                MODAL TITLE
            ================================================= */}

            <div
              className="
                mt-4
                max-w-[90%]

                text-center

                text-[16px]
                font-semibold
                leading-[1.4]

                text-white

                sm:text-[18px]

                md:text-[20px]
              "
            >
              {galleryItems[selectedIndex].title}
            </div>

            {/* ================================================
                IMAGE COUNTER
            ================================================= */}

            <div
              className="
                mt-2
                text-center
                text-[13px]
                text-white/70
              "
            >
              {selectedIndex + 1} / {galleryItems.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
