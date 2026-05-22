import { supabase } from "@/lib/supabase"

export default async function ChatsPage() {

  const { data } = await supabase

    .from("chat_history")

    .select("*")

    .order("created_at", {
      ascending: false
    })

    .limit(100)

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Chat History
      </h1>

      <div className="space-y-4">

        {data?.map((chat) => (

          <div
            key={chat.id}
            className="
              border
              rounded-xl
              p-4
            "
          >

            <div>
              <strong>Role:</strong>
              {" "}
              {chat.role}
            </div>

            <div>
              <strong>Message:</strong>
              {" "}
              {chat.message}
            </div>

            <div className="text-sm text-gray-500">
              Session:
              {" "}
              {chat.session_id}
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}