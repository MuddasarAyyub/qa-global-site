"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Bug, Lock, FileText, CheckCircle, Clock, LogOut } from "lucide-react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.error) {
      setError("Invalid email or password");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Bug className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Client Portal</h1>
          <p className="text-gray-400 mt-2">Sign in to view your test reports</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              placeholder="your@company.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-all disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
          <p className="text-xs text-gray-500 text-center mt-4">
            Contact us to get your portal credentials
          </p>
        </form>
      </div>
    </div>
  );
}

function Dashboard() {
  const sampleReports = [
    { id: 1, title: "Samsung Galaxy S25 - Functional Testing", status: "Completed", date: "2026-05-28", progress: 100 },
    { id: 2, title: "IoT Hub v3.2 - Network Testing", status: "In Progress", date: "2026-06-01", progress: 65 },
    { id: 3, title: "Smart Watch X1 - Battery Testing", status: "In Progress", date: "2026-06-03", progress: 40 },
    { id: 4, title: "5G Module - Compliance Certification", status: "Pending", date: "2026-06-05", progress: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Welcome back</h1>
            <p className="text-gray-400">Here are your active test reports</p>
          </div>
          <button
            onClick={() => signIn()}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Projects", value: "4", icon: FileText },
            { label: "Completed", value: "12", icon: CheckCircle },
            { label: "In Progress", value: "2", icon: Clock },
            { label: "Bugs Found", value: "0", icon: Bug },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
              <stat.icon className="w-5 h-5 text-primary-400 mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reports */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-800">
            <h2 className="text-lg font-semibold text-white">Test Reports</h2>
          </div>
          <div className="divide-y divide-gray-800">
            {sampleReports.map((report) => (
              <div key={report.id} className="px-6 py-4 hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-white">{report.title}</h3>
                  <span className={`text-xs px-2.5 py-1 rounded-full ${
                    report.status === "Completed" ? "bg-primary-500/10 text-primary-400" :
                    report.status === "In Progress" ? "bg-yellow-500/10 text-yellow-400" :
                    "bg-gray-700 text-gray-400"
                  }`}>
                    {report.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{report.date}</span>
                  <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-500 rounded-full"
                      style={{ width: `${report.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortalPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center pt-20">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  if (session) {
    return <Dashboard />;
  }

  return <LoginForm />;
}
