import { createClient } from '@/lib/supabase/server'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Hero from "@/components/prebuilt/hero";

export default async function Home() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    console.log(error)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        {data?.user ? (
                  <div className="flex gap-2">
                  <Button asChild size="sm" variant={'default'}>
                    <Link href="/account">Go To Account</Link>
                  </Button>
                </div>
        ) : (
        <div className="flex gap-2">
          <Button asChild size="sm" variant={'default'}>
            <Link href="/login">Go To Account</Link>
          </Button>
        </div> )}
      </main>  
    </div>
  );
}

