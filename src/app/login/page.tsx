"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] =
    useState(false)

  async function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault()

    try {

      setLoading(true)

      const supabase =
        await createClient()

      const { error } =
        await supabase.auth.signInWithPassword({

          email,
          password
        })

      if (error) {

        alert(error.message)

        return
      }

      router.push("/admin")

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)
    }
  }

  return (

    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-100
      "
    >

      <form
        onSubmit={handleLogin}
        className="
          bg-white
          p-8
          rounded-2xl
          shadow-md
          w-full
          max-w-md
          space-y-4
        "
      >

        <h1 className="text-3xl font-bold">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="
            w-full
            border
            p-3
            rounded-xl
          "
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="
            w-full
            border
            p-3
            rounded-xl
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            bg-black
            text-white
            py-3
            rounded-xl
          "
        >

          {loading
            ? "Loading..."
            : "Login"}

        </button>

      </form>

    </div>
  )
}