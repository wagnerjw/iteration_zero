import Hero from '@/components/prebuilt/hero';
import Dotbackground from '@/components/ui/dotbackground';

export default async function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Hero />
      <Dotbackground />
    </main>
  );
}
