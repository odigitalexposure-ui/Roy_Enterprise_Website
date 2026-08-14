import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "HOME",
      href: "#home",
    },
    {
      label: "SERVICES",
      href: "#services",
    },
    {
      label: "ABOUT",
      href: "#about",
    },
    // {
    //   label: "WHATWEDO",
    //   href: "#services",
    // },
    {
      label: "GALLERY",
      href: "#gallery",
    },
    {
      label: "CONTACT",
      href: "#contact",
    },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white">
      {/* =========================================================
          DESKTOP / TABLET NAVBAR
      ========================================================= */}
      <nav
        className="
          relative
          mx-auto
          flex
          min-h-[100px]
          w-full
          items-center
          justify-between
          bg-white

          px-6
          sm:px-8
          md:min-h-[110px]
          md:px-10
          lg:min-h-[120px]
          lg:px-12
          xl:min-h-[130px]
          xl:px-[4.7%]
        "
      >
        {/* =======================================================
            LOGO
        ======================================================= */}
        <a
          href="#home"
          onClick={handleMenuClick}
          className="
            shrink-0
            text-[30px]
            font-bold
            leading-none
            tracking-[-1px]
            text-[#FF0000]
            no-underline
            transition-opacity
            duration-200
            hover:opacity-80

            sm:text-[32px]
            md:text-[34px]
            lg:text-[36px]
            xl:text-[38px]
          "
        >
          Roy Enterprise
        </a>

        {/* =======================================================
            DESKTOP MENU
            Visible from lg and above
        ======================================================= */}
        <div
          className="
            hidden
            items-center
            lg:flex
            lg:gap-8
            xl:gap-9
            2xl:gap-10
          "
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                whitespace-nowrap
                text-[15px]
                font-bold
                leading-none
                tracking-[0px]
                text-[#FF0000]
                no-underline
                transition-opacity
                duration-200
                hover:opacity-70

                xl:text-[17px]
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* =======================================================
            MOBILE / TABLET MENU BUTTON
            Visible below lg
        ======================================================= */}
        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-md
            border-0
            bg-transparent
            p-0
            text-[#FF0000]
            outline-none
            transition-opacity
            duration-200
            hover:opacity-70
            focus:outline-none
            lg:hidden
          "
        >
          {isMenuOpen ? (
            <X size={30} strokeWidth={2.5} />
          ) : (
            <Menu size={30} strokeWidth={2.5} />
          )}
        </button>
      </nav>

      {/* =========================================================
          MOBILE / TABLET DROPDOWN MENU
      ========================================================= */}
      <div
        className={`
          overflow-hidden
          bg-white
          transition-all
          duration-300
          ease-in-out
          lg:hidden

          ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            border-t
            border-[#f2f2f2]
            px-6
            py-3

            sm:px-8
            md:px-10
          "
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleMenuClick}
              className="
                block
                border-b
                border-[#f2f2f2]
                py-4
                text-[15px]
                font-bold
                text-[#FF0000]
                no-underline
                transition-opacity
                duration-200
                hover:opacity-70
                last:border-b-0

                sm:text-[16px]
              "
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
