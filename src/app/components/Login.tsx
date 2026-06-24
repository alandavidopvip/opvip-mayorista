"use client";

import { useState } from "react";

interface LoginProps {
  onSuccess: () => void;
}

export default function Login({ onSuccess }: LoginProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === "opvipmayorista") {
      setError("");
      onSuccess();
    } else {
      setError("Contraseña incorrecta");
    }
  };

  return (
    <div className="w-full max-w-md bg-zinc-800 rounded-2xl p-8 shadow-2xl">
      <div className="flex justify-center mb-6">
        <img
          src="/logo-opvip.jpg"
          alt="OP VIP Mayorista"
          className="w-64"
        />
      </div>

      <h2 className="text-white text-xl font-semibold text-center mb-6">
        Ingresá la contraseña
      </h2>

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:border-orange-500"
      />

      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">
          {error}
        </p>
      )}

      <button
        onClick={handleLogin}
        className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
      >
        Entrar
      </button>
    </div>
  );
}
