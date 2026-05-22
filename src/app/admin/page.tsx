import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/logout-button";
import AdminDashboard from "@/components/admin-dashboard";

import {
  LayoutDashboard,
  Users,
  BadgeDollarSign,
  CalendarCheck2,
  TrendingUp,
  Activity,
  Sparkles,
  ArrowUpRight,
  Phone,
  MessageSquare,
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

  const { data: leads } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  const totalLeads = leads?.length || 0;
  
  const pricingLeads = leads?.filter(
    (lead) => lead.intent === "pricing_inquiry"
  ).length || 0;

  const consultationLeads = leads?.filter(
    (lead) => lead.intent === "consultation_request"
  ).length || 0;

  const serviceLeads = leads?.filter(
    (lead) => lead.intent === "service_inquiry"
  ).length || 0;

  const supportLeads = leads?.filter(
    (lead) => lead.intent === "support_request"
  ).length || 0;

  const todayLeads = leads?.filter((lead) => {
    const leadDate = new Date(lead.created_at).toDateString();
    const today = new Date().toDateString();
    return leadDate === today;
  }).length || 0;

  const weekLeads = leads?.filter((lead) => {
    const leadDate = new Date(lead.created_at);
    const today = new Date();
    const weekAgo = new Date(today.setDate(today.getDate() - 7));
    return leadDate >= weekAgo;
  }).length || 0;

  const conversionRate = totalLeads > 0 
    ? Math.round((consultationLeads / totalLeads) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFBF9] via-white to-[#F9F6F3]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[20%] -top-[20%] h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-[#C4845C]/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-[20%] -right-[10%] h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-tl from-[#8A786B]/10 to-transparent blur-3xl delay-1000" />
        <div className="absolute left-[40%] top-[30%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-amber-500/5 to-transparent blur-3xl" />
        
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
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(253,251,249,0.8)_100%)]" />
      </div>

      
      <div className="relative flex min-h-screen">
        <aside className="fixed left-0 top-0 z-40 hidden h-full w-72 border-r border-[#181411]/45 bg-white/80 backdrop-blur-xl lg:block">
          <div className="flex h-full flex-col">
            
            <div className="border-b border-[#181411]/45 p-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C4845C] to-[#E89B6E] blur-lg opacity-50" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#181411] to-[#181411] shadow-lg">
                    <LayoutDashboard className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1D1916]">Build Associates</p>
                  <p className="text-xs text-[#8A786B]">Premium Dashboard</p>
                </div>
              </div>
            </div>

            <nav className="flex-1 space-y-1 p-4">
              <div className="mb-4 px-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8A786B]">Main Menu</p>
              </div>
              {[
                { icon: LayoutDashboard, label: "Dashboard", active: true, color: "#181411" },
                { icon: Users, label: "All Leads", active: false, color: "#181411" },
                { icon: BadgeDollarSign, label: "Pricing", active: false, color: "#181411" },
                { icon: CalendarCheck2, label: "Consultations", active: false, color: "#181411" },
                { icon: MessageSquare, label: "Messages", active: false, color: "#181411" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
                      item.active
                        ? "bg-gradient-to-r from-[#181411]/10 to-[#181411]/10 text-[#181411]"
                        : "text-[#5A4E45] hover:bg-[#181411]/5 hover:text-[#181411]"
                    }`}
                  >
                    <Icon className="h-5 w-5" style={{ color: item.active ? item.color : undefined }} />
                    {item.label}
                    {item.active && (
                      <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#181411]" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="border-t border-[#181411]/45 p-6">
              <div className="flex items-center gap-3 rounded-xl bg-[#FCFAF8] p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#181411] to-[#181411]">
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#1D1916]">
                    {user.email?.split('@')[0]}
                  </p>
                  <p className="text-xs text-[#8A786B]">Admin Access</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 lg:ml-72">
          <header className="sticky top-0 z-30 border-b border-[#181411]/45 bg-white/70 backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#C4845C] to-[#E89B6E] shadow-lg">
                  <LayoutDashboard className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1D1916]">Build Associates</p>
                  <p className="text-xs text-[#8A786B]">Dashboard</p>
                </div>
              </div>
              <LogoutButton />
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#181411] via-[#181411] to-[#181411] p-8 text-white shadow-xl">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                    <Sparkles className="h-4 w-4" />
                    Welcome Back
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                    {user.email?.split('@')[0]}
                  </h1>
                  <p className="mt-2 text-white/80">
                    Here's what's happening with your leads today
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 backdrop-blur-sm">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Real-time updates</span>
                  </div>
                  <LogoutButton variant="secondary" />
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Total Leads"
                value={totalLeads}
                change="+12%"
                icon={Users}
                gradient="from-blue-500 to-cyan-500"
              />
              <StatCard
                title="Today's Leads"
                value={todayLeads}
                change="+3"
                icon={Clock}
                gradient="from-emerald-500 to-teal-500"
              />
              <StatCard
                title="Conversion Rate"
                value={`${conversionRate}%`}
                change="+8%"
                icon={TrendingUp}
                gradient="from-purple-500 to-pink-500"
              />
              <StatCard
                title="Active Leads"
                value={weekLeads}
                change="+5"
                icon={Activity}
                gradient="from-orange-500 to-red-500"
              />
            </div>

            <div className="rounded-3xl border border-[#181411]/45 bg-white/80 p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#1D1916]">Lead Distribution</h3>
                  <p className="text-sm text-[#8A786B]">Breakdown by intent type</p>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-[#FCFAF8] px-3 py-1.5 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Updated just now</span>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <IntentCard
                  label="Pricing Inquiry"
                  count={pricingLeads}
                  total={totalLeads}
                  color="amber"
                />
                <IntentCard
                  label="Service Inquiry"
                  count={serviceLeads}
                  total={totalLeads}
                  color="blue"
                />
                <IntentCard
                  label="Consultation"
                  count={consultationLeads}
                  total={totalLeads}
                  color="emerald"
                />
                <IntentCard
                  label="Support"
                  count={supportLeads}
                  total={totalLeads}
                  color="purple"
                />
              </div>
            </div>

            <div>
              <AdminDashboard leads={leads || []} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


function StatCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  gradient 
}: { 
  title: string
  value: string | number
  change: string
  icon: any
  gradient: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#181411]/45 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
      <div className="relative">
        <div className="mb-3 flex items-center justify-between">
          <div className={`rounded-xl bg-gradient-to-br ${gradient}/10 p-2.5`}>
            <Icon className="h-5 w-5 text-[#C4845C]" />
          </div>
          <span className="text-xs font-medium text-emerald-600">↑ {change}</span>
        </div>
        <p className="text-3xl font-bold text-[#1D1916]">{value}</p>
        <p className="mt-1 text-sm text-[#8A786B]">{title}</p>
      </div>
    </div>
  );
}


function IntentCard({ 
  label, 
  count, 
  total, 
  color 
}: { 
  label: string
  count: number
  total: number
  color: string
}) {
  const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
  
  const colorClasses = {
    amber: "from-amber-500 to-orange-500",
    blue: "from-blue-500 to-cyan-500",
    emerald: "from-emerald-500 to-teal-500",
    purple: "from-purple-500 to-pink-500",
  };
  
  const lightColors = {
    amber: "bg-amber-50 text-amber-700",
    blue: "bg-blue-50 text-blue-700",
    emerald: "bg-emerald-50 text-emerald-700",
    purple: "bg-purple-50 text-purple-700",
  };

  return (
    <div className="rounded-xl border border-[#181411]/45 bg-[#FCFAF8] p-4 transition-all hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <span className={`rounded-lg ${lightColors[color as keyof typeof lightColors]} px-2.5 py-1 text-xs font-semibold`}>
          {label}
        </span>
        <span className="text-sm font-bold text-[#1D1916]">{count}</span>
      </div>
      <div className="relative h-1.5 overflow-hidden rounded-full bg-gray-100">
        <div 
          className={`h-full rounded-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-[#8A786B]">{percentage}% of total</p>
    </div>
  );
}