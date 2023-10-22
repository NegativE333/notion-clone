"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    return (  
        <div className="max-w-3xl space-y-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                Your Ideas, Documents, & Plans. Unified. Welcome to  <span className="underline">
                    Noto
                </span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Noto is the connected workspace where <br/>
                better, faster work happens.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg"/>
                </div>    
            )}
            {isAuthenticated && !isLoading && (
                <Button>
                    <Link href="/documents">
                        Enter Noto
                    </Link>
                    <ArrowRight className="h-4 w-4 ml-2"/>
                </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton>
                    <Button>
                        Get Noto free
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
        </div>
    );
}
 