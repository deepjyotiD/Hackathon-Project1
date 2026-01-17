"use client";

import { useState } from "react";
import { Upload, MapPin, Loader2 } from "lucide-react";

export default function NewReportPage() {
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Mock submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // TODO: Upload to storage
        // TODO: Call Inngest
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Report submitted! AI is processing it.");
        }, 2000);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Submit a New Report</h1>

            <form onSubmit={handleSubmit} className="space-y-8 bg-slate-800/50 p-8 rounded-2xl border border-slate-700">

                {/* Image Upload */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Evidence Image</label>
                    <div className="border-2 border-dashed border-slate-600 rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer bg-slate-900/50">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                            className="hidden"
                            id="image-upload"
                        />
                        <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center gap-4">
                            <div className="p-4 bg-slate-800 rounded-full">
                                <Upload className="w-8 h-8 text-primary" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-lg font-medium text-white">
                                    {file ? file.name : "Click to upload or drag and drop"}
                                </p>
                                <p className="text-slate-400 text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Location Input (Placeholder for Mapbox) */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Location</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Enter location or use map..."
                            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                            type="button"
                            className="px-4 py-3 bg-slate-700 rounded-lg text-white hover:bg-slate-600 transition-colors"
                            title="Get current location"
                        >
                            <MapPin className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="h-64 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-center text-slate-500">
                        Map Integration (Requires Mapbox Token)
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting || !file}
                    className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        "Submit Report"
                    )}
                </button>
            </form>
        </div>
    );
}
