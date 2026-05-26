import { supabase } from "@/lib/supabase";

import {
  Phone,
  MessageSquareText,
  CalendarDays,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default async function LeadsPage() {
  const {
  data: leads,
  error,
} = await supabase

  .from("leads")

  .select("*")

  .order("created_at", {
    ascending: false,
  });

console.log("LEADS DATA:", leads);

console.log("LEADS ERROR:", error);

  const totalLeads = leads?.length || 0;

  const pricingLeads =
    leads?.filter(
      (lead) => lead.intent === "pricing_inquiry"
    ).length || 0;

  const consultationLeads =
    leads?.filter(
      (lead) =>
        lead.intent === "consultation_request"
    ).length || 0;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F8F5F1]">
      {/* =========================================
          PREMIUM BACKGROUND
      ========================================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[340px] w-[340px] rounded-full bg-[#C4845C]/10 blur-3xl" />

        <div className="absolute right-[-100px] top-[10%] h-[320px] w-[320px] rounded-full bg-[#1F1B18]/5 blur-3xl" />

        <div className="absolute bottom-[-120px] left-[10%] h-[360px] w-[360px] rounded-full bg-[#C4845C]/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(31,27,24,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,27,24,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* =========================================
          PAGE WRAPPER
      ========================================= */}
      <div className="px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        {/* =========================================
            HEADER
        ========================================= */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EADFD3] bg-white/70 px-4 py-2 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-[#C4845C]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C4845C]">
                Premium CRM
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-[-0.05em] text-[#1F1B18] sm:text-5xl">
              Leads Management
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-[#6F6258]">
              View and manage all customer inquiries,
              consultations, and pricing requests from
              your website.
            </p>
          </div>

          {/* LIVE STATUS */}
          <div className="flex items-center gap-3 rounded-2xl border border-[#E9DFD3] bg-white/70 px-5 py-4 backdrop-blur-xl">
            <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-500" />

            <p className="text-sm font-semibold text-[#1F1B18]">
              Live Leads Feed
            </p>
          </div>
        </div>

        {/* =========================================
            STATS
        ========================================= */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* TOTAL */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-[#E9DFD3]
              bg-white/80
              p-7
              shadow-[0_10px_40px_rgba(31,27,24,0.06)]
              backdrop-blur-xl
            "
          >
            <div className="absolute right-[-20px] top-[-20px] h-28 w-28 rounded-full bg-[#C4845C]/10 blur-2xl" />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-[#7B6E63]">
                  Total Leads
                </p>

                <h2 className="mt-5 text-5xl font-black tracking-[-0.05em] text-[#1F1B18]">
                  {totalLeads}
                </h2>

                <p className="mt-3 text-sm text-[#8A7B70]">
                  All incoming inquiries
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#C4845C]/10">
                <Phone className="h-7 w-7 text-[#C4845C]" />
              </div>
            </div>
          </div>

          {/* PRICING */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-[#E9DFD3]
              bg-white/80
              p-7
              shadow-[0_10px_40px_rgba(31,27,24,0.06)]
              backdrop-blur-xl
            "
          >
            <div className="absolute right-[-20px] top-[-20px] h-28 w-28 rounded-full bg-[#1F1B18]/5 blur-2xl" />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-[#7B6E63]">
                  Pricing Inquiries
                </p>

                <h2 className="mt-5 text-5xl font-black tracking-[-0.05em] text-[#1F1B18]">
                  {pricingLeads}
                </h2>

                <p className="mt-3 text-sm text-[#8A7B70]">
                  Cost estimation requests
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#1F1B18]/5">
                <ArrowUpRight className="h-7 w-7 text-[#1F1B18]" />
              </div>
            </div>
          </div>

          {/* CONSULTATIONS */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-[#E9DFD3]
              bg-white/80
              p-7
              shadow-[0_10px_40px_rgba(31,27,24,0.06)]
              backdrop-blur-xl
            "
          >
            <div className="absolute right-[-20px] top-[-20px] h-28 w-28 rounded-full bg-[#C4845C]/10 blur-2xl" />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-[#7B6E63]">
                  Consultations
                </p>

                <h2 className="mt-5 text-5xl font-black tracking-[-0.05em] text-[#1F1B18]">
                  {consultationLeads}
                </h2>

                <p className="mt-3 text-sm text-[#8A7B70]">
                  Expert consultation requests
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#C4845C]/10">
                <CalendarDays className="h-7 w-7 text-[#C4845C]" />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            LEADS LIST
        ========================================= */}
        <div className="mt-10 rounded-[36px] border border-[#E9DFD3] bg-white/80 p-4 shadow-[0_10px_50px_rgba(31,27,24,0.06)] backdrop-blur-xl sm:p-6 lg:p-8">
          {/* TOP */}
          <div className="mb-8 flex flex-col gap-4 border-b border-[#EFE5DA] pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-[#1F1B18]">
                Recent Leads
              </h2>

              <p className="mt-2 text-sm text-[#7B6E63]">
                All latest customer inquiries from your
                website.
              </p>
            </div>

            <div className="rounded-2xl border border-[#EADFD3] bg-[#F8F5F1] px-4 py-3 text-sm font-medium text-[#6F6258]">
              {totalLeads} Total Records
            </div>
          </div>

          {/* LEADS */}
          <div className="space-y-5">
            {leads?.map((lead) => (
              <div
                key={lead.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-[#ECE2D7]
                  bg-[#FFFCF9]/90
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D9C6B6]
                  hover:shadow-[0_16px_40px_rgba(31,27,24,0.08)]
                "
              >
                {/* GLOW */}
                <div className="absolute right-[-30px] top-[-30px] h-28 w-28 rounded-full bg-[#C4845C]/5 blur-2xl transition-all duration-300 group-hover:bg-[#C4845C]/10" />

                <div className="relative">
                  {/* TOP */}
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-4">
                      {/* PHONE */}
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C4845C]/10">
                          <Phone className="h-5 w-5 text-[#C4845C]" />
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A28D7D]">
                            Phone Number
                          </p>

                          <h3 className="mt-1 text-lg font-bold text-[#1F1B18]">
                            {lead.phone}
                          </h3>
                        </div>
                      </div>

                      {/* INTENT */}
                      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#EADFD3] bg-[#F8F5F1] px-4 py-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#C4845C]" />

                        <span className="text-sm font-semibold capitalize text-[#5E5147]">
                          {lead.intent?.replaceAll(
                            "_",
                            " "
                          )}
                        </span>
                      </div>
                    </div>

                    {/* DATE */}
                    <div className="rounded-2xl border border-[#EADFD3] bg-white/70 px-4 py-3 text-sm text-[#6F6258] backdrop-blur-xl">
                      {new Date(
                        lead.created_at
                      ).toLocaleString()}
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="mt-6 rounded-[24px] border border-[#EFE5DA] bg-white/70 p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <MessageSquareText className="h-4 w-4 text-[#C4845C]" />

                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8C7767]">
                        Customer Message
                      </p>
                    </div>

                    <p className="text-[15px] leading-8 text-[#4F453E]">
                      {lead.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* EMPTY */}
            {!leads?.length && (
              <div className="flex flex-col items-center justify-center rounded-[32px] border border-dashed border-[#D9CDBF] bg-white/60 px-6 py-20 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C4845C]/10">
                  <Phone className="h-9 w-9 text-[#C4845C]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#1F1B18]">
                  No Leads Yet
                </h3>

                <p className="mt-3 max-w-md text-[#74685E]">
                  Incoming customer inquiries will appear
                  here once users start contacting your
                  business.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}