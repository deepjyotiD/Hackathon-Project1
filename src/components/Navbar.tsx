import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export async function Navbar() {
    const { userId } = await auth();

    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-blue-200/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href={userId ? "/dashboard" : "/"} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <ShieldAlert className="w-8 h-8 text-primary" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-cyan-500">
                            ReportFlow
                        </span>
                    </Link>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {userId ? (
                                <UserButton
                                    afterSignOutUrl="/"
                                    appearance={{
                                        elements: {
                                            avatarBox: "w-10 h-10",
                                        },
                                    }}
                                />
                            ) : (
                                <Link
                                    href="/sign-in"
                                    className="px-4 py-2 rounded-md bg-primary hover:bg-red-600 text-white font-medium transition-colors"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
