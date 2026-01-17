import Link from "next/link";
import { Plus } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="space-y-8">
            <header className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <Link
                    href="/dashboard/report"
                    className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors font-medium"
                >
                    <Plus className="w-4 h-4" />
                    New Report
                </Link>
            </header>

            {/* Stats/Overview (Placeholder) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                    <h3 className="text-sm font-medium text-slate-400">Total Reports</h3>
                    <p className="text-3xl font-bold text-white mt-2">0</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                    <h3 className="text-sm font-medium text-slate-400">In Progress</h3>
                    <p className="text-3xl font-bold text-yellow-400 mt-2">0</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                    <h3 className="text-sm font-medium text-slate-400">Resolved</h3>
                    <p className="text-3xl font-bold text-green-400 mt-2">0</p>
                </div>
            </div>

            {/* Reports List */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Recent Reports</h2>
                <div className="text-center py-12 bg-slate-800/30 rounded-xl border border-dashed border-slate-700">
                    <p className="text-slate-400">No reports yet. Start by creating one!</p>
                </div>
            </div>
        </div>
    );
}
