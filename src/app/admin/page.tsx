import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import LogoutButton from "@/components/logout-button";

import AdminDashboard from "@/components/admin-dashboard";

import {
  Users,
  TrendingUp,
  Activity,
  Sparkles,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default async function AdminPage() {

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // =========================
  // FETCH LEADS
  // =========================

  const { data: leads } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  // =========================
  // STATS
  // =========================

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

  const serviceLeads =
    leads?.filter(
      (lead) =>
        lead.intent === "service_inquiry"
    ).length || 0;

  const supportLeads =
    leads?.filter(
      (lead) =>
        lead.intent === "support_request"
    ).length || 0;

  const todayLeads =
    leads?.filter((lead) => {

      const leadDate =
        new Date(
          lead.created_at
        ).toDateString();

      const today =
        new Date().toDateString();

      return leadDate === today;

    }).length || 0;

  const weekLeads =
    leads?.filter((lead) => {

      const leadDate =
        new Date(lead.created_at);

      const today = new Date();

      const weekAgo =
        new Date(
          today.setDate(
            today.getDate() - 7
          )
        );

      return leadDate >= weekAgo;

    }).length || 0;

  const conversionRate =
    totalLeads > 0
      ? Math.round(
          (consultationLeads /
            totalLeads) *
            100
        )
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFBF9] via-white to-[#F9F6F3]">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-[20%] -top-[20%] h-[600px] w-[600px] rounded-full bg-[#C4845C]/10 blur-3xl" />

        <div className="absolute -bottom-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[#8A786B]/10 blur-3xl" />

      </div>

      {/* PAGE */}
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">

        {/* HERO */}
        <div className="rounded-3xl bg-[#181411] p-8 text-white shadow-xl">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

            <div>

              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">

                <Sparkles className="h-4 w-4" />

                Welcome Back

              </div>

              <h1 className="text-3xl font-bold lg:text-4xl">
                {user.email?.split("@")[0]}
              </h1>

              <p className="mt-2 text-white/70">
                Monitor leads, chats, and customer activity.
              </p>

            </div>

            <div className="flex items-center gap-3">

              <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2">

                <Clock className="h-4 w-4" />

                <span className="text-sm">
                  Live Dashboard
                </span>

              </div>

              <LogoutButton variant="secondary" />

            </div>

          </div>
        </div>

        {/* STATS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Total Leads"
            value={totalLeads}
            icon={Users}
          />

          <StatCard
            title="Today's Leads"
            value={todayLeads}
            icon={Clock}
          />

          <StatCard
            title="Conversion Rate"
            value={`${conversionRate}%`}
            icon={TrendingUp}
          />

          <StatCard
            title="Weekly Leads"
            value={weekLeads}
            icon={Activity}
          />

        </div>

        {/* DISTRIBUTION */}
        <div className="rounded-3xl border border-[#181411]/10 bg-white p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <h3 className="text-lg font-bold text-[#1D1916]">
                Lead Distribution
              </h3>

              <p className="text-sm text-[#8A786B]">
                Intent-based breakdown
              </p>

            </div>

            <div className="flex items-center gap-2 rounded-xl bg-[#FCFAF8] px-3 py-2 text-sm">

              <CheckCircle2 className="h-4 w-4 text-emerald-500" />

              Updated Live

            </div>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <IntentCard
              label="Pricing"
              count={pricingLeads}
              total={totalLeads}
            />

            <IntentCard
              label="Services"
              count={serviceLeads}
              total={totalLeads}
            />

            <IntentCard
              label="Consultation"
              count={consultationLeads}
              total={totalLeads}
            />

            <IntentCard
              label="Support"
              count={supportLeads}
              total={totalLeads}
            />

          </div>
        </div>

        {/* DASHBOARD */}
        <AdminDashboard leads={leads || []} />

      </div>
    </div>
  );
}

// =========================
// STAT CARD
// =========================

function StatCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string | number;
  icon: any;
}) {

  return (
    <div className="rounded-2xl border border-[#181411]/10 bg-white p-6 shadow-sm">

      <div className="mb-4 flex items-center justify-between">

        <div className="rounded-xl bg-[#181411]/5 p-3">

          <Icon className="h-5 w-5 text-[#C4845C]" />

        </div>

      </div>

      <h3 className="text-3xl font-bold text-[#1D1916]">
        {value}
      </h3>

      <p className="mt-2 text-sm text-[#8A786B]">
        {title}
      </p>

    </div>
  );
}

// =========================
// INTENT CARD
// =========================

function IntentCard({
  label,
  count,
  total,
}: {
  label: string;
  count: number;
  total: number;
}) {

  const percentage =
    total > 0
      ? Math.round(
          (count / total) * 100
        )
      : 0;

  return (
    <div className="rounded-2xl border border-[#181411]/10 bg-[#FCFAF8] p-5">

      <div className="mb-3 flex items-center justify-between">

        <p className="text-sm font-semibold text-[#1D1916]">
          {label}
        </p>

        <p className="text-lg font-bold text-[#C4845C]">
          {count}
        </p>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-gray-200">

        <div
          className="h-full rounded-full bg-[#C4845C]"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="mt-2 text-xs text-[#8A786B]">
        {percentage}% of total leads
      </p>

    </div>
  );
}