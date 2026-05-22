import { redirect } from "next/navigation"

import { createClient }
from "@/lib/supabase/server"

import LogoutButton
from "@/components/logout-button"

import AdminDashboard
from "@/components/admin-dashboard"

export default async function AdminPage() {

  // =========================
  // AUTH
  // =========================

  const supabase =
    await createClient()

  const {
    data: { user }
  } = await supabase.auth.getUser()

  // PROTECT ROUTE
  if (!user) {

    redirect("/login")
  }

  // =========================
  // FETCH LEADS
  // =========================

  const { data: leads } = await supabase

    .from("leads")

    .select("*")

    .order("created_at", {
      ascending: false
    })

  // =========================
  // STATS
  // =========================

  const totalLeads =
    leads?.length || 0

  const pricingLeads =

    leads?.filter(

      lead =>
        lead.intent ===
        "pricing_inquiry"

    ).length || 0

  const consultationLeads =

    leads?.filter(

      lead =>
        lead.intent ===
        "consultation_request"

    ).length || 0

  // =========================
  // UI
  // =========================

  return (

    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div
        className="
          bg-white
          border-b
          px-8
          py-5
          flex
          justify-between
          items-center
        "
      >

        <div>

          <h1 className="text-3xl font-bold">
            Build Associates
          </h1>

          <p className="text-gray-500">
            AI Leads Dashboard
          </p>

        </div>

        <div className="flex items-center gap-4">

          <LogoutButton />

        </div>

      </div>

      {/* CONTENT */}
      <div className="p-8">

        {/* STATS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            mb-8
          "
        >

          {/* TOTAL LEADS */}
          <div
            className="
              bg-white
              rounded-2xl
              p-6
              shadow-sm
            "
          >

            <div className="text-gray-500">
              Total Leads
            </div>

            <div className="text-4xl font-bold mt-2">
              {totalLeads}
            </div>

          </div>

          {/* PRICING */}
          <div
            className="
              bg-white
              rounded-2xl
              p-6
              shadow-sm
            "
          >

            <div className="text-gray-500">
              Pricing Inquiries
            </div>

            <div className="text-4xl font-bold mt-2">
              {pricingLeads}
            </div>

          </div>

          {/* CONSULTATIONS */}
          <div
            className="
              bg-white
              rounded-2xl
              p-6
              shadow-sm
            "
          >

            <div className="text-gray-500">
              Consultations
            </div>

            <div className="text-4xl font-bold mt-2">
              {consultationLeads}
            </div>

          </div>

        </div>

        {/* DASHBOARD */}
        <AdminDashboard
          leads={leads || []}
        />

      </div>

    </div>
  )
}