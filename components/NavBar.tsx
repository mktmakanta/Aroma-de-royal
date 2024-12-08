"use client";
import { useState } from "react";
import Link from "next/link";
import { Gem, Menu, ShoppingCart, User, X } from "lucide-react";
// import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  // const { data: session } = useSession();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-5 lg:px-8 ">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-black text-lg font-medium font-serif lg:text-2xl flex gap-3 items-center"
            >
              <Gem className="size-8" />
              <span> Aroma De Royal</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="text-black hover:text-red-600 transition-all duration-100 flex gap-2"
            >
              <ShoppingCart /> Cart
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-red-600 transition-all duration-100 flex gap-2"
            >
              <User />
              {/* {session ? (
                <>
                  Logout {session.user?.name} <br />
                  <button onClick={() => signOut()}>Sign out</button>
                </>
              ) : (
                <>
                  Login <br />
                  <button onClick={() => signIn()}>Sign in</button>
                </>
              )} */}
              signin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu collapsed*/}
      {isMenuOpen && (
        <div className="md:hidden bg-orange-100 ring-1 ring-orange-200 space-y-4 px-4 py-3">
          <Link href="/" className=" text-black hover:text-red-600 flex gap-2">
            <ShoppingCart /> Cart
          </Link>
          <Link
            href="/about"
            className=" text-black hover:text-red-600 flex gap-2"
          >
            <User />
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
