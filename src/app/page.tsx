import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Cases } from '@/sections/Cases';
import { Contacts } from '@/sections/Contacts';

export default function Home() {
  return (
    <div style={{ padding: '16px' }}>
      <Hero />
      <Services />
      <Cases />
      <Contacts />
    </div>
  );
}
