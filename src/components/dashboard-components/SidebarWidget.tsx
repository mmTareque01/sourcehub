import Button from "../Button";
import { supabase } from "@/backend/connection";

export default function SidebarWidget() {
    return (
      <div
        className={`
          mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]`}
      >

            <Button
              // href={'/'}
              onClick={async () => {
                console.log('cliekded')
                await supabase.auth.signOut();
                // router.push('/login')
                // router.refresh();
              }}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#6b78f0]  text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Log out</span>
            </Button>
      </div>
    );
  }
  