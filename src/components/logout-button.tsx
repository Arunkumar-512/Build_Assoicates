"use client";

import { LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LogoutButtonProps {
  variant?: "primary" | "secondary" | "minimal";
  className?: string;
}

export default function LogoutButton({ 
  variant = "primary", 
  className = "" 
}: LogoutButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogout() {
    if (isLoading) return;
    
    setIsLoading(true);
    const supabase = createClient();

    try {
      await supabase.auth.signOut();
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  if (variant === "primary") {
    return (
      <button
        onClick={handleLogout}
        disabled={isLoading}
        className={`
          group
          relative
          inline-flex
          items-center
          justify-center
          gap-2.5
          overflow-hidden
          rounded-2xl
          border
          border-[#E8DCCF]
          bg-white/80
          px-5
          py-3
          text-sm
          font-semibold
          text-[#1F1B18]
          shadow-[0_10px_30px_rgba(31,27,24,0.06)]
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-[#C4845C]/30
          hover:bg-[#FFFDFB]
          hover:shadow-[0_18px_40px_rgba(31,27,24,0.12)]
          active:scale-[0.98]
          disabled:cursor-not-allowed
          disabled:opacity-60
          disabled:hover:translate-y-0
          ${className}
        `}
      >
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#C4845C]/0
            via-[#C4845C]/8
            to-[#C4845C]/0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />
        
        <div
          className="
            absolute
            inset-0
            rounded-2xl
            bg-gradient-to-r
            from-[#C4845C]/0
            via-[#C4845C]/20
            to-[#C4845C]/0
            opacity-0
            blur-md
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        <div
          className="
            relative
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            bg-[#C4845C]/10
            transition-all
            duration-300
            group-hover:bg-[#C4845C]/15
            group-hover:scale-110
            group-active:scale-95
          "
        >
          {isLoading ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#C4845C] border-t-transparent" />
          ) : (
            <LogOut
              size={16}
              className="
                text-[#C4845C]
                transition-transform
                duration-300
                group-hover:-translate-x-0.5
                group-hover:translate-y-0.5
              "
            />
          )}
        </div>

        <span className="relative">
          {isLoading ? "Logging out..." : "Logout"}
        </span>
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        onClick={handleLogout}
        disabled={isLoading}
        className={`
          group
          relative
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/20
          bg-white/10
          px-4
          py-2
          text-sm
          font-medium
          text-white
          backdrop-blur-sm
          transition-all
          duration-300
          hover:bg-white/20
          hover:scale-105
          active:scale-95
          disabled:cursor-not-allowed
          disabled:opacity-60
          ${className}
        `}
      >
        {isLoading ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          <>
            <LogOut size={16} className="transition-transform group-hover:rotate-12" />
            <span>Sign Out</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className={`
        group
        inline-flex
        items-center
        gap-2
        rounded-lg
        border
        border-[#E8DCCF]
        bg-transparent
        px-3
        py-1.5
        text-xs
        font-medium
        text-[#8A786B]
        transition-all
        duration-300
        hover:border-[#C4845C]/30
        hover:bg-[#C4845C]/5
        hover:text-[#C4845C]
        active:scale-95
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
    >
      {isLoading ? (
        <div className="h-3 w-3 animate-spin rounded-full border-2 border-[#C4845C] border-t-transparent" />
      ) : (
        <>
          <LogOut size={14} className="transition-transform group-hover:-translate-x-0.5" />
          <span>Exit</span>
        </>
      )}
    </button>
  );
}