import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { FaFire } from "react-icons/fa"; // Using a fire icon for MatchSpark

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={twMerge(
        "fixed left-0 top-0 z-[100] flex w-screen items-center justify-between px-6 font-[500] duration-100 ease-in lg:px-24",
        isScrolled ? "h-16 bg-white/80 shadow-md backdrop-blur-md" : "h-20 bg-white"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <FaFire className="h-8 w-8 text-pink-600" />
        <NavLink
          to="/"
          className="cursor-pointer text-2xl font-bold tracking-wide text-pink-600"
        >
          Dinter
        </NavLink>
      </div>
      <nav className="flex gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            twMerge("text-lg font-medium hover:text-pink-500", isActive ? "text-pink-600" : "text-gray-600")
          }
        >
          Discover
        </NavLink>
        <NavLink
          to="/map"
          className={({ isActive }) =>
            twMerge("text-lg font-medium hover:text-pink-500", isActive ? "text-pink-600" : "text-gray-600")
          }
        >
          Date Spots
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;