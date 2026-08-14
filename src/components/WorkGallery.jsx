import { useEffect, useState } from "react";

// ============================================================
// IMAGE IMPORTS
// ============================================================
// Put your images inside:
// src/assets/
//
// Example:
// import work1 from "../assets/work1.jpg";
// import work2 from "../assets/work2.jpg";
// ============================================================

import work1 from "../assets/imgi_59_WhatsApp-Image-2024-01-19-at-10.45.04-AM.jpg";
import work2 from "../assets/imgi_63_WhatsApp-Image-2024-01-19-at-10.45.03-AM.jpg";
import work3 from "../assets/imgi_64_WhatsApp-Image-2024-01-19-at-10.45.03-AM-225x300.jpg";
import work4 from "../assets/imgi_66_WhatsApp-Image-2024-01-19-at-10.45.03-AM-1.jpg";
import work5 from "../assets/imgi_70_WhatsApp-Image-2024-01-19-at-10.45.01-AM.jpg";
import work6 from "../assets/imgi_78_WhatsApp-Image-2024-01-19-at-10.44.58-AM.jpg";
import work7 from "../assets/imgi_81_WhatsApp-Image-2024-01-19-at-10.44.58-AM-1.jpg";
import work8 from "../assets/imgi_98_WhatsApp-Image-2024-01-19-at-10.44.40-AM.jpg";
import work9 from "../assets/imgi_102_WhatsApp-Image-2024-01-19-at-10.44.40-AM-1.jpg";
import work10 from "../assets/imgi_105_WhatsApp-Image-2024-01-19-at-10.44.32-AM.jpg";
import work11 from "../assets/imgi_108_WhatsApp-Image-2024-01-19-at-10.44.30-AM.jpg";
import work12 from "../assets/imgi_112_WhatsApp-Image-2024-01-19-at-10.44.29-AM.jpg";
import work13 from "../assets/imgi_115_WhatsApp-Image-2024-01-19-at-10.44.25-AM.jpg";
import work14 from "../assets/imgi_118_WhatsApp-Image-2024-01-19-at-10.44.24-AM.jpg";

// ============================================================
// GALLERY DATA
// ============================================================
// Add/remove images here.
//
// {
//   image: yourImage,
//   alt: "Description",
// }
//
// ============================================================

const galleryItems = [
  {
    image: work1,
    // alt: "Roof shed work",
  },
  {
    image: work2,
    // alt: "Roof installation work",
  },
  {
    image: work3,
    // alt: "Roofing structure",
  },
  {
    image: work4,
    // alt: "Staircase installation",
  },
  {
    image: work5,
    // alt: "Roof structure work",
  },
  {
    image: work6,
    alt: "Blue roof shed",
  },
  {
    image: work7,
    alt: "Terrace roofing work",
  },
  {
    image: work8,
    alt: "Building roofing work",
  },
  {
    image: work9,
    // alt: "Residential roofing",
  },
  {
    image: work10,
    // alt: "Steel staircase work",
  },
  {
    image: work11,
    // alt: "Roofing material work",
  },
  {
    image: work12,
    // alt: "Industrial work",
  },
];

// ============================================================
// COMPONENT
// ============================================================

export default function WorkGallery({
  backgroundImage = null,

  title = "Some Insights",

  description = "Let’s see what we do and how we are doing that. There are some little glimpses of our everyday life...",
}) {
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
  // PREVIOUS
  // ==========================================================

  const previousImage = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0 ? galleryItems.length - 1 : current - 1;
    });
  };

  // ==========================================================
  // NEXT
  // ==========================================================

  const nextImage = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === galleryItems.length - 1 ? 0 : current + 1;
    });
  };

  // ==========================================================
  // KEYBOARD CONTROLS
  // ==========================================================

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const handleKeyboard = (event) => {
      switch (event.key) {
        case "Escape":
          closeModal();
          break;

        case "ArrowLeft":
          previousImage();
          break;

        case "ArrowRight":
          nextImage();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    // Prevent page scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <section
      id="gallery"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F8FAFC]
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
          HEADER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[900px]

          px-5
          pb-7
          pt-8

          sm:px-6
          sm:pb-8
          sm:pt-9

          md:pb-9
          md:pt-10

          lg:pb-10
          lg:pt-11
        "
      >
        <h2
          className="
            m-0
            text-center

            text-[24px]
            font-bold
            leading-[1.2]

            tracking-[-0.4px]

            text-[#192A3D]

            sm:text-[26px]

            md:text-[28px]

            lg:text-[30px]
          "
        >
          {title}
        </h2>

        <p
          className="
            mx-auto
            mt-3
            max-w-[650px]

            text-center

            text-[10px]
            leading-[1.55]

            text-[#304D6B]

            sm:text-[11px]

            md:text-[12px]
          "
        >
          {description}
        </p>
      </div>

      {/* ======================================================
          MASONRY GALLERY
      ====================================================== */}

      <div
        className="
          relative
          z-10

          w-full

          columns-2
          gap-[4px]

          sm:columns-2
          sm:gap-[5px]

          md:columns-3
          md:gap-[5px]

          lg:columns-4
          lg:gap-[5px]

          xl:columns-5
          xl:gap-[5px]
        "
      >
        {galleryItems.map((item, index) => (
          <button
            key={`${item.alt}-${index}`}
            type="button"
            onClick={() => openModal(index)}
            aria-label={`Open image: ${item.alt}`}
            className="
              group
              mb-[4px]
              block
              w-full
              break-inside-avoid
              cursor-pointer

              border-0
              bg-transparent
              p-0

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#192A3D]
              focus-visible:ring-inset

              sm:mb-[5px]

              md:mb-[5px]
            "
          >
            <img
              src={item.image}
              alt={item.alt}
              loading={index < 5 ? "eager" : "lazy"}
              className="
                block
                h-auto
                w-full

                object-cover

                transition
                duration-300
                ease-out

                group-hover:brightness-[0.92]
                group-hover:saturate-[1.05]

                group-hover:scale-[1.01]
              "
            />
          </button>
        ))}
      </div>

      {/* ======================================================
          MODAL
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
            py-5

            sm:px-5
            sm:py-7
          "
          role="dialog"
          aria-modal="true"
          aria-label="Work gallery preview"
          onMouseDown={(event) => {
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
            aria-label="Close image"
            className="
              absolute
              right-3
              top-3
              z-30

              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              border
              border-white/30

              bg-black/60

              text-[27px]
              leading-none
              text-white

              transition
              duration-200

              hover:bg-white
              hover:text-black

              sm:right-5
              sm:top-5
              sm:h-11
              sm:w-11
            "
          >
            ×
          </button>

          {/* ==================================================
              PREVIOUS BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
            className="
              absolute
              left-2
              top-1/2
              z-30

              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center

              rounded-full

              border
              border-white/30

              bg-black/65

              text-[34px]
              font-light
              leading-none
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
            ‹
          </button>

          {/* ==================================================
              NEXT BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="
              absolute
              right-2
              top-1/2
              z-30

              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center

              rounded-full

              border
              border-white/30

              bg-black/65

              text-[34px]
              font-light
              leading-none
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
            ›
          </button>

          {/* ==================================================
              MODAL IMAGE
          ================================================== */}

          <div
            className="
              flex
              max-h-full
              w-full
              items-center
              justify-center
            "
          >
            <img
              src={galleryItems[selectedIndex].image}
              alt={galleryItems[selectedIndex].alt}
              className="
                block

                max-h-[90vh]
                max-w-[calc(100vw-90px)]

                object-contain

                select-none

                sm:max-w-[calc(100vw-130px)]
              "
              draggable="false"
            />
          </div>

          {/* ==================================================
              COUNTER
          ================================================== */}

          <div
            className="
              absolute
              bottom-4
              left-1/2
              -translate-x-1/2

              rounded-full

              bg-black/50

              px-3
              py-1

              text-[11px]
              text-white/80
            "
          >
            {selectedIndex + 1} / {galleryItems.length}
          </div>
        </div>
      )}
    </section>
  );
}
