// src/app/page.tsx
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClassRegister from '@/components/ClassRegister';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container my-6">
        <ClassRegister />
      </main>
      <Footer />
    </div>
  );
}