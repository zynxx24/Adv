import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-red-600 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Proposal P5: Kearifan Lokal</h1>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Beranda</Link></li>
            <li><Link href="/pendahuluan" className="hover:underline">Pendahuluan</Link></li>
            <li><Link href="/pembahasan" className="hover:underline">Pembahasan</Link></li>
            <li><Link href="/penutup" className="hover:underline">Penutup</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-6 flex-grow">{children}</main>
      <footer className="bg-yellow-600 text-center text-white py-4">
        © 2024 SMKN 2 Kuta Selatan - Tema Kearifan Lokal
      </footer>
    </div>
  );
}
