import { Suspense } from "react";
import HomePage from "@/pages/HomePage";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen">
        <HomePage />
      </main>
    </Suspense>
  );
}
