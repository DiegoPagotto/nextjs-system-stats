'use client';

import { Toaster } from 'react-hot-toast';
import SystemInfoCard from './components/SystemInfoCard/system-info-card';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-slate-950">
            <SystemInfoCard />

            <Toaster />
        </main>
    );
}
