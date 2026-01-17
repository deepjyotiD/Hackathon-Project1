import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { ArrowRight, Upload, Sparkles, CheckCircle, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-300/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-cyan-300/15 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/3 left-0 w-[600px] h-[400px] bg-yellow-300/10 rounded-full blur-[100px] -z-10" />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6">
          Report Issues with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-cyan-500">
            AI-Powered Precision
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
          The smartest way to report civic issues. Upload a photo, and verify with
          Gemini AI instantly.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-red-600 transition-all shadow-lg shadow-primary/25 flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 rounded-full bg-white text-foreground font-bold text-lg hover:bg-gray-100 transition-all border-2 border-gray-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features / Steps */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">How ReportFlow Works</h2>
            <p className="mt-4 text-gray-600">From upload to resolution in 5 automated steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Upload className="w-8 h-8 text-blue-500" />}
              title="1. Upload & Locate"
              description="Snap a photo and let our auto-geolocation tag exactly where the issue is."
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8 text-purple-500" />}
              title="2. AI Analysis"
              description="Gemini AI analyzes the image to generate a title, description, and category automatically."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-8 h-8 text-green-500" />}
              title="3. Spam Detection"
              description="We automatically filter out spam reports to keep the system clean and efficient."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all">
      <div className="mb-4 bg-gradient-to-br from-blue-50 to-cyan-50 w-16 h-16 rounded-xl flex items-center justify-center border-2 border-blue-200">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
