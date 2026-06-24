interface Product {
  sku: string;
  titulo: string;
  imagen: string;
  precioUnidad: string;
  precioBulto: string;
}

export default function ProductCard({
  sku,
  titulo,
  imagen,
  precioUnidad,
  precioBulto,
}: Product) {
  const whatsappUrl = `https://wa.me/5491137007862?text=${encodeURIComponent(
    `Hola.\n\nVi este producto en el catálogo OP VIP Mayorista.\n\nSKU: ${sku}\nProducto: ${titulo}\n\n¿Tenés disponibilidad?`
  )}`;

  return (
    <div className="bg-zinc-800 rounded-xl p-4">
      <img
        src={imagen}
        alt={titulo}
        className="w-full aspect-square object-cover rounded-lg mb-3"
      />

      <h2 className="font-semibold text-white">{titulo}</h2>

      <p className="text-zinc-400 text-sm mt-1">
        SKU: {sku}
      </p>

      <p className="mt-3 text-white">
        Unidad: {precioUnidad}
      </p>

      <p className="text-white">
        Bulto: {precioBulto}
      </p>

      <a
        href={whatsappUrl}
        target="_blank"
        className="block text-center w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
      >
        Consultar
      </a>
    </div>
  );
}
