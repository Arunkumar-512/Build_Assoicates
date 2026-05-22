"use client"

import { useMemo, useState } from "react"

import {
  Search,
  Filter,
  Phone,
  CalendarDays,
  MessageSquareText,
  BadgeDollarSign,
  BriefcaseBusiness,
  Headset,
  ClipboardCheck,
  TrendingUp,
  Users,
  Clock,
  ArrowUpRight,
  X,
  ChevronDown,
} from "lucide-react"

type Lead = {
  id: string
  phone: string
  intent: string
  message: string
  created_at: string
}

export default function AdminDashboard({
  leads
}: {
  leads: Lead[]
}) {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)

  // Statistics
  const statistics = useMemo(() => {
    const total = leads.length
    const intents = {
      pricing_inquiry: leads.filter(l => l.intent === "pricing_inquiry").length,
      service_inquiry: leads.filter(l => l.intent === "service_inquiry").length,
      consultation_request: leads.filter(l => l.intent === "consultation_request").length,
      support_request: leads.filter(l => l.intent === "support_request").length,
    }
    const today = new Date().toDateString()
    const todayLeads = leads.filter(l => new Date(l.created_at).toDateString() === today).length
    
    return { total, intents, todayLeads }
  }, [leads])

  // Filtered leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.phone?.toLowerCase().includes(search.toLowerCase()) ||
        lead.message?.toLowerCase().includes(search.toLowerCase())
      const matchesFilter = filter === "all" || lead.intent === filter
      return matchesSearch && matchesFilter
    })
  }, [leads, search, filter])

  function getIntentConfig(intent: string) {
    switch (intent) {
      case "pricing_inquiry":
        return {
          label: "Pricing Inquiry",
          icon: BadgeDollarSign,
          gradient: "from-amber-500 to-orange-500",
          bgLight: "bg-amber-50",
          textLight: "text-amber-700",
          borderLight: "border-amber-200"
        }
      case "service_inquiry":
        return {
          label: "Service Inquiry",
          icon: BriefcaseBusiness,
          gradient: "from-blue-500 to-cyan-500",
          bgLight: "bg-blue-50",
          textLight: "text-blue-700",
          borderLight: "border-blue-200"
        }
      case "consultation_request":
        return {
          label: "Consultation Request",
          icon: ClipboardCheck,
          gradient: "from-emerald-500 to-teal-500",
          bgLight: "bg-emerald-50",
          textLight: "text-emerald-700",
          borderLight: "border-emerald-200"
        }
      case "support_request":
        return {
          label: "Support Request",
          icon: Headset,
          gradient: "from-purple-500 to-pink-500",
          bgLight: "bg-purple-50",
          textLight: "text-purple-700",
          borderLight: "border-purple-200"
        }
      default:
        return {
          label: intent,
          icon: MessageSquareText,
          gradient: "from-gray-500 to-slate-500",
          bgLight: "bg-gray-50",
          textLight: "text-gray-700",
          borderLight: "border-gray-200"
        }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFBF9] via-white to-[#F9F6F3]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="bg-gradient-to-r from-[#1D1916] to-[#4A3B32] bg-clip-text text-4xl font-bold tracking-tight text-transparent">
                Lead Management
              </h1>
              <p className="mt-2 text-sm text-[#8A786B]">
                Monitor and manage all incoming client inquiries
              </p>
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#181411] to-[#181411] shadow-lg" />
              <div>
                <p className="text-xs font-medium text-[#8A786B]">Admin Access</p>
                <p className="text-sm font-semibold text-[#1D1916]">Dashboard</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-2xl border border-[#E8DED2] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-[#C4845C]/10 to-transparent blur-2xl" />
            <div className="relative">
              <div className="mb-3 flex items-center justify-between">
                <div className="rounded-xl bg-gradient-to-br from-[#C4845C]/10 to-[#E89B6E]/10 p-2">
                  <Users className="h-5 w-5 text-[#C4845C]" />
                </div>
                <TrendingUp className="h-4 w-4 text-emerald-500" />
              </div>
              <p className="text-3xl font-bold text-[#1D1916]">{statistics.total}</p>
              <p className="mt-1 text-sm text-[#8A786B]">Total Leads</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-[#E8DED2] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
            <div className="relative">
              <div className="mb-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-2">
                <BriefcaseBusiness className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-[#1D1916]">{statistics.intents.service_inquiry}</p>
              <p className="mt-1 text-sm text-[#8A786B]">Service Inquiries</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-[#E8DED2] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
            <div className="relative">
              <div className="mb-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-2">
                <ClipboardCheck className="h-5 w-5 text-emerald-600" />
              </div>
              <p className="text-3xl font-bold text-[#1D1916]">{statistics.intents.consultation_request}</p>
              <p className="mt-1 text-sm text-[#8A786B]">Consultations</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-[#E8DED2] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
            <div className="relative">
              <div className="mb-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-2">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-[#1D1916]">{statistics.todayLeads}</p>
              <p className="mt-1 text-sm text-[#8A786B]">Today's Leads</p>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 rounded-2xl border border-[#E8DED2] bg-white/80 p-4 shadow-sm backdrop-blur-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8A786B]" />
              <input
                placeholder="Search by phone number or message..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-12 w-full rounded-xl border border-[#E8DED2] bg-[#FCFAF8] pl-11 pr-4 text-sm text-[#1D1916] outline-none transition-all duration-300 placeholder:text-[#9B8B80] focus:border-[#C4845C] focus:bg-white focus:ring-2 focus:ring-[#C4845C]/20"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-gray-100"
                >
                  <X className="h-4 w-4 text-[#8A786B]" />
                </button>
              )}
            </div>

            {/* Filter */}
            <div className="relative w-full lg:w-64">
              <Filter className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8A786B]" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="h-12 w-full appearance-none rounded-xl border border-[#E8DED2] bg-[#FCFAF8] pl-11 pr-10 text-sm font-medium text-[#1D1916] outline-none transition-all duration-300 focus:border-[#C4845C] focus:bg-white focus:ring-2 focus:ring-[#C4845C]/20"
              >
                <option value="all">All Leads</option>
                <option value="pricing_inquiry">Pricing Inquiry</option>
                <option value="service_inquiry">Service Inquiry</option>
                <option value="consultation_request">Consultation Request</option>
                <option value="support_request">Support Request</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A786B]" />
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-[#8A786B]">
            Showing <span className="font-semibold text-[#1D1916]">{filteredLeads.length}</span> of{" "}
            <span className="font-semibold text-[#1D1916]">{leads.length}</span> leads
          </p>
        </div>

        {/* Leads Grid */}
        {filteredLeads.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#E8DED2] bg-white/50 px-4 py-20 text-center backdrop-blur-sm">
            <div className="mb-4 rounded-full bg-gradient-to-br from-[#C4845C]/10 to-[#E89B6E]/10 p-4">
              <MessageSquareText className="h-8 w-8 text-[#C4845C]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1D1916]">No leads found</h3>
            <p className="mt-2 text-sm text-[#8A786B]">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredLeads.map((lead) => {
              const intent = getIntentConfig(lead.intent)
              const IntentIcon = intent.icon
              const date = new Date(lead.created_at)
              const isToday = date.toDateString() === new Date().toDateString()

              return (
                <div
                  key={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#E8DED2] bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${intent.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                  
                  <div className="relative p-5">
                    {/* Header */}
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`rounded-xl ${intent.bgLight} p-2.5`}>
                          <IntentIcon className={`h-5 w-5 ${intent.textLight}`} />
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-[#8A786B]">
                            Client
                          </p>
                          <p className="mt-0.5 font-semibold text-[#1D1916]">{lead.phone}</p>
                        </div>
                      </div>
                      <div className={`rounded-full ${intent.bgLight} px-3 py-1 text-xs font-medium ${intent.textLight}`}>
                        {intent.label}
                      </div>
                    </div>

                    {/* Message Preview */}
                    <div className="mb-4">
                      <p className="line-clamp-3 text-sm leading-relaxed text-[#4F453F]">
                        {lead.message}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-[#F0EAE5] pt-4">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-[#8A786B]" />
                        <span className="text-xs text-[#8A786B]">
                          {date.toLocaleDateString()}
                          {isToday && (
                            <span className="ml-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          )}
                        </span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-[#C4845C] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Modal for detailed view */}
        {selectedLead && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedLead(null)}
          >
            <div
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const intent = getIntentConfig(selectedLead.intent)
                const IntentIcon = intent.icon
                return (
                  <>
                    <div className={`bg-gradient-to-r ${intent.gradient} p-6 text-white`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl bg-white/20 p-2.5">
                            <IntentIcon className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-sm font-medium opacity-90">Lead Details</p>
                            <p className="text-2xl font-bold">{selectedLead.phone}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedLead(null)}
                          className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-6">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#8A786B]">
                          Intent
                        </p>
                        <div className={`inline-flex items-center gap-2 rounded-full ${intent.bgLight} px-4 py-2 ${intent.textLight}`}>
                          <IntentIcon className="h-4 w-4" />
                          <span className="text-sm font-medium">{intent.label}</span>
                        </div>
                      </div>

                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#8A786B]">
                          Message
                        </p>
                        <div className="rounded-2xl bg-[#FCFAF8] p-5 border border-[#E8DED2]">
                          <p className="leading-relaxed text-[#4F453F]">{selectedLead.message}</p>
                        </div>
                      </div>

                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#8A786B]">
                          Received
                        </p>
                        <div className="flex items-center gap-2 text-sm text-[#4F453F]">
                          <CalendarDays className="h-4 w-4 text-[#8A786B]" />
                          {new Date(selectedLead.created_at).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}