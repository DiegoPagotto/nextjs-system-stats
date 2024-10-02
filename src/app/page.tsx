'use client';

import { Toaster } from 'react-hot-toast';
import SystemInfoCard from './components/SystemInfoCard/system-info-card';
import Footer from './components/Footer/footer';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-slate-950">
            <SystemInfoCard />
            <Footer />
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 2000,
                    style: {
                        background: '#0f172a',
                        color: '#fff',
                        padding: '16px 24px',
                    },
                }}
            />
        </main>
    );
}
