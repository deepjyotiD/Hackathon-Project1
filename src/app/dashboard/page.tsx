import Link from "next/link";
import { Plus } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="space-y-8">
            <header className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
                <Link
                    href="/dashboard/report"
                    className="btn-icon"
                >
                    <Plus className="w-4 h-4" />
                    New Report
                </Link>
            </header>

            {/* Stats/Overview (Placeholder) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
                    <h3 className="text-sm font-semibold text-gray-700">Total Reports</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">0</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200">
                    <h3 className="text-sm font-semibold text-gray-700">In Progress</h3>
                    <p className="text-3xl font-bold text-amber-600 mt-2">0</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200">
                    <h3 className="text-sm font-semibold text-gray-700">Resolved</h3>
                    <p className="text-3xl font-bold text-emerald-600 mt-2">0</p>
                </div>
            </div>

            {/* Reports List */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Recent Reports</h2>
                <div className="text-center py-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-dashed border-purple-200">
                    <p className="text-gray-600">No reports yet. Start by creating one!</p>
                </div>
            </div>
        </div>
    );
}
