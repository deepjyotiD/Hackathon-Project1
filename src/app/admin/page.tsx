import Link from "next/link";
import { CheckCircle, XCircle, Clock, Search } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-background">
            <nav className="fixed top-0 w-full z-50 bg-slate-900 border-b border-white/10 px-8 h-16 flex items-center justify-between">
                <span className="text-xl font-bold text-white">ReportFlow Admin</span>
                <Link href="/dashboard" className="text-sm text-slate-400 hover:text-white">Exit to User Dashboard</Link>
            </nav>

            <div className="pt-24 px-8 max-w-7xl mx-auto">
                <header className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-white">Report Management</h1>
                </header>

                {/* Filters */}
                <div className="flex gap-4 mb-8">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 hover:border-primary">
                        <Clock className="w-4 h-4 text-yellow-400" /> Pending
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 hover:border-primary">
                        <CheckCircle className="w-4 h-4 text-green-400" /> Resolved
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 hover:border-primary">
                        <XCircle className="w-4 h-4 text-red-400" /> Unresolved
                    </button>
                </div>

                {/* Search */}
                <div className="relative mb-8">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search reports..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Reports Table / Grid */}
                <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
                    <div className="p-8 text-center text-slate-400">
                        No reports found matching your criteria.
                    </div>
                </div>
            </div>
        </div>
    );
}
