import { supabase } from "@/lib/supabase"

export default async function LeadsPage() {

  const { data: leads } = await supabase

    .from("leads")

    .select("*")

    .order("created_at", {
      ascending: false
    })

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Leads
      </h1>

      <div className="space-y-4">

        {leads?.map((lead) => (

          <div
            key={lead.id}
            className="
              border
              rounded-2xl
              p-5
              bg-white
              shadow-sm
            "
          >

            <div>
              <strong>Phone:</strong>
              {" "}
              {lead.phone}
            </div>

            <div>
              <strong>Intent:</strong>
              {" "}
              {lead.intent}
            </div>

            <div>
              <strong>Message:</strong>
              {" "}
              {lead.message}
            </div>

            <div className="text-sm text-gray-500 mt-2">
              {new Date(
                lead.created_at
              ).toLocaleString()}
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}