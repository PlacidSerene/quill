import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { SignInButton, SignUpButton, auth } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import UserProfileButton from "./UserProfileButton";
import MobileNav from "./MobileNav";

const Navbar = async () => {
  // const { isSignedIn } = useUser();
  const { userId } = auth();
  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="z-40 flex font-semibold">
            <span>quill.</span>
          </Link>
          <MobileNav isAuth={!!userId} />
          <div className="hidden items-center space-x-4 font-semibold sm:flex">
            <>
              {!userId ? (
                <>
                  <Link
                    href="/pricing"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    Pricing
                  </Link>
                  <SignInButton>
                    <div
                      className={buttonVariants({
                        variant: "ghost",
                        size: "default",
                      })}
                    >
                      Sign In
                    </div>
                  </SignInButton>
                  <SignUpButton>
                    <div
                      className={buttonVariants({
                        size: "sm",
                      })}
                    >
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </SignUpButton>
                </>
              ) : (
                <>
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    Dashboard
                  </Link>
                  <UserProfileButton />
                </>
              )}
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
