import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <ShieldAlert className="w-8 h-8 text-primary" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                            ReportFlow
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                href="/sign-in"
                                className="px-4 py-2 rounded-md bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
