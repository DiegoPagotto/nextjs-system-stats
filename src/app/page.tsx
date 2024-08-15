import Image from "next/image";
import SystemInfoCard from "./components/SystemInfoCard/system-info-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-950">
      <SystemInfoCard />
    </main>
  );
}
