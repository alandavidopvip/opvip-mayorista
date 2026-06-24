"use client";

import { useState } from "react";
import Login from "./components/Login";
import Catalog from "./components/Catalog";
export default function Home() {
  const [logged, setLogged] = useState(false);

  if (!logged) {
    return (
      <main className="min-h-screen bg-zinc-900 flex items-center justify-center p-6">
        <Login onSuccess={() => setLogged(true)} />
      </main>
    );
  }

return <Catalog />;
}
