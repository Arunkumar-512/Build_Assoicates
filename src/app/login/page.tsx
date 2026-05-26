"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  ArrowRight,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Building2,
  Sparkles,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Check for saved email
  useEffect(() => {
    const savedEmail = localStorage.getItem("adminEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
        return;
      }

      // Save email if remember me is checked
      if (rememberMe) {
        localStorage.setItem("adminEmail", email);
      } else {
        localStorage.removeItem("adminEmail");
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError("An unexpected error occurred");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[20%] -top-[20%] h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-[20%] -right-[10%] h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-tl from-slate-400/10 to-amber-400/10 blur-3xl delay-1000" />
        <div className="absolute left-[30%] top-[40%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-amber-300/5 to-transparent blur-3xl" />
        
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(197, 139, 99, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(197, 139, 99, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px'
          }}
        />
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(253,251,249,0.9)_100%)]" />
      </div>

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="relative hidden overflow-hidden lg:block">
          <div className="absolute inset-0">
            <Image
              src="/images/28.png"
              alt="Build Associates"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1D1916]/95 via-[#2C241E]/80 to-[#181411]/70" />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-between p-12 xl:p-16">
            <div className="group">
              <div className="flex items-center gap-4">
                <div className="relative">
                  {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#C4845C] to-[#E89B6E] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" /> */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[##181411] to-[#181411] shadow-xl">
                    <Building2 className="h-8 w-8 text-[white]" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-black tracking-tight text-white">
                    ASSOCIATES
                  </h1>
                  <p className="text-sm uppercase tracking-[0.25em] text-amber-200/80">
                    Premium Architecture
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white/90">Secure Admin Portal</span>
              </div>
              
              <h2 className="text-6xl font-black leading-[1.1] tracking-tight text-white">
                Manage Premium
                <span className="block bg-gradient-to-r from-[#C4845C]/60 to-white bg-clip-text text-transparent">
                  Leads & Projects
                </span>
              </h2>

              <p className="text-lg leading-relaxed text-white/80">
                Access your dashboard securely to monitor leads, consultations, 
                customer interactions, and project inquiries in one unified workspace.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-5">
              {[
                {
                  title: "Enterprise Security",
                  desc: "256-bit encrypted",
                  icon: ShieldCheck,
                },
                {
                  title: "Real-time Sync",
                  desc: "Live lead updates",
                  icon: Sparkles,
                },
                {
                  title: "AI Analytics",
                  desc: "Smart insights",
                  icon: ArrowRight,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group/card relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:bg-white/10"
                  >
                    <Icon className="mb-3 h-5 w-5 text-[#C4845C]" />
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center px-6 py-14 sm:px-10 lg:px-14">
          <div className="w-full max-w-xl">
            <div className="mb-10 flex items-center justify-center gap-4 lg:hidden">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C4845C] to-[#E89B6E] shadow-lg">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tight text-[#1D1916]">
                  BUILD ASSOCIATES
                </h1>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8A786B]">
                  Admin Portal
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#E8DED2] bg-white/80 shadow-2xl backdrop-blur-xl">
              <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-to-br from-[#C4845C]/10 to-[#E89B6E]/10 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-tr from-[#C4845C]/5 to-transparent blur-3xl" />

              <div className="relative p-8 sm:p-10 lg:p-12">
                <div className="mb-8 text-center lg:text-left">
                  <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#181411]/10 to-[#181411]/10 p-4 lg:inline-flex">
                    <ShieldCheck className="h-6 w-6 text-[#181411]" />
                  </div>
                  
                  <h2 className="text-3xl font-bold tracking-tight text-[#1D1916] lg:text-4xl">
                    Welcome back
                  </h2>
                  <p className="mt-2 text-[#8A786B]">
                    Sign in to access your dashboard
                  </p>
                </div>

                {error && (
                  <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#1D1916]">
                      Email Address
                    </label>
                    <div className="group relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <Mail className="h-5 w-5 text-[#8A786B] transition-colors group-focus-within:text-[#C4845C]" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 w-full rounded-xl border border-[#E8DED2] bg-[#FCFAF8] pl-11 pr-4 text-[#1D1916] outline-none transition-all duration-200 placeholder:text-[#9B8B80] focus:border-[#C4845C] focus:bg-white focus:ring-2 focus:ring-[#C4845C]/20"
                        placeholder="admin@buildassociates.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#1D1916]">
                      Password
                    </label>
                    <div className="group relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <LockKeyhole className="h-5 w-5 text-[#8A786B] transition-colors group-focus-within:text-[#C4845C]" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 w-full rounded-xl border border-[#E8DED2] bg-[#FCFAF8] pl-11 pr-11 text-[#1D1916] outline-none transition-all duration-200 placeholder:text-[#9B8B80] focus:border-[#C4845C] focus:bg-white focus:ring-2 focus:ring-[#C4845C]/20"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 hover:bg-gray-100"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-[#8A786B]" />
                        ) : (
                          <Eye className="h-5 w-5 text-[#8A786B]" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 rounded border-[#E8DED2] text-[#C4845C] focus:ring-[#C4845C]"
                      />
                      <span className="text-sm text-[#8A786B]">Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="text-sm text-[#181411] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#181411] to-[#181411] px-6 py-3 text-white shadow-lg transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" /> */}
                    
                    <span className="relative flex items-center justify-center gap-2 font-semibold">
                      {loading ? (
                        <>
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Authenticating...
                        </>
                      ) : (
                        <>
                          Access Dashboard
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </button>
                </form>

                <div className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-[#E8DED2] bg-[#FCFAF8] px-4 py-3">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span className="text-xs text-[#8A786B]">
                    Secure authentication powered by Supabase
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}