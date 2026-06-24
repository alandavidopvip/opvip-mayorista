"use client";

import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import ProductCard from "./ProductCard";

interface Product {
  sku: string;
  titulo: string;
  imagen: string;
  precioUnidad: string;
  precioBulto: string;
  destacado: string;
  visible: string;
}

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/1pYlsiJs485QrIO5OZXzohwSekI3LUredIM9MfpNWjp4/export?format=csv&sheet=Catalogo%20Base";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(CSV_URL)
      .then((res) => res.text())
      .then((csv) => {
        Papa.parse(csv, {
          header: true,
          complete: (results) => {
            const items = results.data as any[];

            const parsed: Product[] = items.map((item) => ({
              sku: item["SKU"] || "",
              titulo: item["TITULO"] || "",
              imagen: item["imagen2"] || "",
              precioUnidad: item["PRECIO X UNIDAD"] || "",
              precioBulto: item["PRECIO X BULTO"] || "",
              destacado: item["DESTACADO"] || "",
              visible: item["VISIBLE"] || "",
            }));

            setProducts(parsed);
          },
        });
      });
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (p) =>
          p.visible?.toUpperCase() === "SI" &&
          (p.sku.toLowerCase().includes(search.toLowerCase()) ||
            p.titulo.toLowerCase().includes(search.toLowerCase()))
      )
      .sort((a, b) => {
        if (a.destacado === "SI" && b.destacado !== "SI") return -1;
        if (a.destacado !== "SI" && b.destacado === "SI") return 1;
        return 0;
      });
  }, [products, search]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Catálogo OP VIP
        </h1>

        <input
          type="text"
          placeholder="Buscar por SKU o nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.sku}
              sku={product.sku}
              titulo={product.titulo}
              imagen={product.imagen}
              precioUnidad={product.precioUnidad}
              precioBulto={product.precioBulto}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
