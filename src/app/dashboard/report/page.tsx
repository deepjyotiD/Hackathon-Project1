"use client";

import { useState } from "react";
import { Upload, MapPin, Loader2 } from "lucide-react";
import { LocationMap } from "@/components/LocationMap";

export default function NewReportPage() {
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [location, setLocation] = useState<{ lat: number; lng: number; address: string } | null>(null);
    const [showMap, setShowMap] = useState(false);

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

    const handleLocationSelect = (lat: number, lng: number, address: string) => {
        setLocation({ lat, lng, address });
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Submit a New Report</h1>

            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">

                {/* Image Upload */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Evidence Image</label>
                    <div className="border-2 border-dashed border-gray-400 rounded-xl p-8 text-center hover:border-primary hover:bg-red-50/30 transition-all cursor-pointer bg-gray-50">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                            className="hidden"
                            id="image-upload"
                        />
                        <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center gap-4">
                            <div className="p-4 bg-blue-100 rounded-full">
                                <Upload className="w-8 h-8 text-blue-600" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-lg font-medium text-foreground">
                                    {file ? file.name : "Click to upload or drag and drop"}
                                </p>
                                <p className="text-gray-600 text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Location Input */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Location</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder={location ? `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}` : "Enter location or click map..."}
                            readOnly
                            className="flex-1 bg-gray-100 border-2 border-gray-300 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                            type="button"
                            onClick={() => setShowMap(!showMap)}
                            className="px-4 py-3 bg-primary hover:bg-red-600 text-white rounded-lg transition-all font-medium flex items-center gap-2"
                            title="Open map"
                        >
                            <MapPin className="w-5 h-5" />
                            Map
                        </button>
                    </div>
                    {showMap && (
                        <div className="h-80 rounded-xl overflow-hidden border-2 border-gray-300 shadow-md">
                            <LocationMap onLocationSelect={handleLocationSelect} />
                        </div>
                    )}
                    {location && (
                        <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                            <p className="text-sm text-green-800 font-medium">
                                ✓ Location selected: {location.address}
                            </p>
                        </div>
                    )}
                </div>

                {/* Category */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Category</label>
                    <select className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Pothole</option>
                        <option>Broken Streetlight</option>
                        <option>Graffiti</option>
                        <option>Water Leak</option>
                        <option>Traffic Sign Damage</option>
                        <option>Other</option>
                    </select>
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Description (Optional)</label>
                    <textarea
                        placeholder="Describe the issue in detail..."
                        className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-24 resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting || !file}
                    className="w-full py-4 bg-primary hover:bg-red-600 disabled:bg-gray-400 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
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
