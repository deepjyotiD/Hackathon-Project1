"use client";

import { SignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function SignInPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-300/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-300/15 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-yellow-300/10 rounded-full blur-[100px] -z-10" />

      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-cyan-500 mb-2">
            ReportFlow
          </h1>
          <p className="text-gray-600 text-lg">
            Report civic issues with AI precision
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-center">
              <SignIn
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none border-0",
                    headerTitle: "text-2xl font-bold text-foreground",
                    headerSubtitle: "text-gray-600",
                    socialButtonsBlockButton: "border-2 border-gray-300 hover:bg-gray-50 text-foreground font-medium h-10",
                    formFieldInput: "border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg h-10 text-foreground",
                    formFieldLabel: "text-gray-700 font-medium",
                    footerActionLink: "text-primary hover:text-red-600",
                    dividerLine: "bg-gray-300",
                    dividerText: "text-gray-600",
                    buttonPrimary: "bg-primary hover:bg-red-600 text-white rounded-lg h-10 font-semibold",
                  },
                  variables: {
                    colorPrimary: "#ff6b6b",
                    colorText: "#0d0d0d",
                    colorTextSecondary: "#666666",
                  },
                }}
              />
            </div>
          </div>

          {/* Alternative text */}
          <div className="mt-8 pt-6 border-t-2 border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="/sign-up"
                className="text-primary font-semibold hover:text-red-600 transition-colors"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Features text */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">📸</div>
            <p className="text-xs text-gray-600 mt-1">Upload Photo</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-600">🤖</div>
            <p className="text-xs text-gray-600 mt-1">AI Analysis</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-600">✓</div>
            <p className="text-xs text-gray-600 mt-1">Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
}
