"use client"

import { useMemo, useState } from "react"

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

  const [search, setSearch] =
    useState("")

  const [filter, setFilter] =
    useState("all")

  // FILTERED LEADS
  const filteredLeads = useMemo(() => {

    return leads.filter((lead) => {

      const matchesSearch =

        lead.phone
          ?.toLowerCase()
          .includes(search.toLowerCase())

        ||

        lead.message
          ?.toLowerCase()
          .includes(search.toLowerCase())

      const matchesFilter =

        filter === "all"

        ||

        lead.intent === filter

      return (
        matchesSearch &&
        matchesFilter
      )
    })

  }, [leads, search, filter])

  return (

    <div>

      {/* SEARCH + FILTER */}
      <div
        className="
          flex
          flex-col
          md:flex-row
          gap-4
          mb-6
        "
      >

        <input

          placeholder="Search leads..."

          value={search}

          onChange={(e) =>
            setSearch(e.target.value)
          }

          className="
            flex-1
            border
            rounded-xl
            px-4
            py-3
            bg-white
          "
        />

        <select

          value={filter}

          onChange={(e) =>
            setFilter(e.target.value)
          }

          className="
            border
            rounded-xl
            px-4
            py-3
            bg-white
          "
        >

          <option value="all">
            All
          </option>

          <option value="pricing_inquiry">
            Pricing
          </option>

          <option value="service_inquiry">
            Services
          </option>

          <option value="consultation_request">
            Consultation
          </option>

          <option value="support_request">
            Support
          </option>

        </select>

      </div>

      {/* LEADS */}
      <div className="space-y-4">

        {filteredLeads.map((lead) => (

          <div

            key={lead.id}

            className="
              bg-white
              rounded-2xl
              p-5
              shadow-sm
              border
            "
          >

            <div
              className="
                flex
                justify-between
                items-start
                mb-3
              "
            >

              <div>

                <div className="font-semibold">
                  {lead.phone}
                </div>

                <div
                  className="
                    text-sm
                    text-gray-500
                  "
                >
                  {lead.intent}
                </div>

              </div>

              <div
                className="
                  text-xs
                  text-gray-400
                "
              >
                {new Date(
                  lead.created_at
                ).toLocaleString()}
              </div>

            </div>

            <div className="text-gray-700">

              {lead.message}

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}