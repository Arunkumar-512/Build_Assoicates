import Link from "next/link";

import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Activity,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen bg-[#FDFBF9]">
      
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 z-40 hidden h-full w-72 border-r border-[#181411]/10 bg-white lg:block">
        <div className="flex h-full flex-col">

          {/* LOGO */}
          <div className="border-b border-[#181411]/10 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#181411]">
                <LayoutDashboard className="h-6 w-6 text-white" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#1D1916]">
                  Build Associates
                </p>

                <p className="text-xs text-[#8A786B]">
                  Admin Dashboard
                </p>
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="flex-1 space-y-2 p-4">

            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#1D1916] hover:bg-[#181411]/5"
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>

            <Link
              href="/admin/leads"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#1D1916] hover:bg-[#181411]/5"
            >
              <Users className="h-5 w-5" />
              Leads
            </Link>

            <Link
              href="/admin/chats"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#1D1916] hover:bg-[#181411]/5"
            >
              <MessageSquare className="h-5 w-5" />
              Chats
            </Link>
          </nav>

          {/* FOOTER */}
          <div className="border-t border-[#181411]/10 p-6">
            <div className="flex items-center gap-3 rounded-xl bg-[#FCFAF8] p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#181411]">
                <Activity className="h-5 w-5 text-white" />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#1D1916]">
                  Admin Panel
                </p>

                <p className="text-xs text-[#8A786B]">
                  Live System
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* PAGE CONTENT */}
      <main className="flex-1 lg:ml-72">
        {children}
      </main>
    </div>
  );
}