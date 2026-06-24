"use client";

export default function Catalog() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Catálogo OP VIP
        </h1>

        <input
          type="text"
          placeholder="Buscar por SKU o nombre..."
          className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

          <div className="bg-zinc-800 rounded-xl p-4">
            <div className="aspect-square bg-zinc-700 rounded-lg mb-3"></div>

            <h2 className="font-semibold">
              Producto de prueba
            </h2>

            <p className="text-zinc-400">
              SKU: TEST001
            </p>

            <p className="mt-3">
              Unidad: $10.000
            </p>

            <p>
              Bulto: $9.500
            </p>

            <button className="w-full mt-4 bg-orange-500 py-2 rounded-lg">
              Consultar
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}