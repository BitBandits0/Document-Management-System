import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center px-4 max-w-screen-lg mx-auto">
        <Link to="/">
          <img src="/logo.png" className="h-20" alt="Logo" />
        </Link>

        <div className="flex gap-8 items-center">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </>
  );
};

export default Header;
