import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  category: string;
  price: number;
  name: string;
  quantity: number;
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    category: "Zero açúcar",
    price: 12.5,
    name: "Redbull Limão",
    quantity: 10000,
  },
  {
    id: 2,
    category: "Refrigerante",
    price: 5.99,
    name: "Coca-Cola 350ml",
    quantity: 5500,
  },
  {
    id: 3,
    category: "Refrigerante",
    price: 4.5,
    name: "Pepsi 350ml",
    quantity: 4200,
  },
  {
    id: 4,
    category: "Zero açúcar",
    price: 13.0,
    name: "Monster Energy Zero",
    quantity: 8900,
  },
  {
    id: 5,
    category: "Água",
    price: 2.5,
    name: "Água Crystal 500ml",
    quantity: 15000,
  },
  {
    id: 6,
    category: "Suco",
    price: 8.9,
    name: "Suco Del Valle Uva",
    quantity: 3200,
  },
  {
    id: 7,
    category: "Energy Drink",
    price: 14.99,
    name: "Redbull Original",
    quantity: 7800,
  },
  {
    id: 8,
    category: "Refrigerante",
    price: 6.5,
    name: "Guaraná Antarctica",
    quantity: 6100,
  },
  {
    id: 9,
    category: "Água",
    price: 3.2,
    name: "Água Bonafont 500ml",
    quantity: 12000,
  },
  {
    id: 10,
    category: "Suco",
    price: 9.5,
    name: "Suco Tang Laranja",
    quantity: 2800,
  },
  {
    id: 11,
    category: "Energy Drink",
    price: 16.9,
    name: "Monster Energy Original",
    quantity: 5400,
  },
  {
    id: 12,
    category: "Refrigerante",
    price: 5.2,
    name: "Fanta Laranja 350ml",
    quantity: 4900,
  },
  {
    id: 13,
    category: "Zero açúcar",
    price: 6.8,
    name: "Coca-Cola Zero 350ml",
    quantity: 7200,
  },
  {
    id: 14,
    category: "Água",
    price: 4.9,
    name: "Água Perrier 330ml",
    quantity: 1800,
  },
  {
    id: 15,
    category: "Suco",
    price: 7.3,
    name: "Suco Maguary Manga",
    quantity: 3600,
  },
  {
    id: 16,
    category: "Energy Drink",
    price: 15.5,
    name: "TNT Energy Drink",
    quantity: 4500,
  },
  {
    id: 17,
    category: "Refrigerante",
    price: 5.8,
    name: "Sprite 350ml",
    quantity: 5800,
  },
  {
    id: 18,
    category: "Zero açúcar",
    price: 7.1,
    name: "Pepsi Zero 350ml",
    quantity: 3900,
  },
  {
    id: 19,
    category: "Água",
    price: 5.6,
    name: "Água São Lourenço 510ml",
    quantity: 8900,
  },
  {
    id: 20,
    category: "Suco",
    price: 10.2,
    name: "Suco Natural One Açaí",
    quantity: 2100,
  },
  {
    id: 21,
    category: "Energy Drink",
    price: 18.9,
    name: "Redbull Tropical",
    quantity: 3300,
  },
  {
    id: 22,
    category: "Refrigerante",
    price: 4.7,
    name: "Tubaína 350ml",
    quantity: 2700,
  },
  {
    id: 23,
    category: "Zero açúcar",
    price: 8.4,
    name: "Guaraná Zero 350ml",
    quantity: 4800,
  },
  {
    id: 24,
    category: "Água",
    price: 6.8,
    name: "Água Evian 500ml",
    quantity: 1200,
  },
  {
    id: 25,
    category: "Suco",
    price: 9.9,
    name: "Suco Mais Maracujá",
    quantity: 2900,
  },
  {
    id: 26,
    category: "Energy Drink",
    price: 17.5,
    name: "Monster Ultra Zero",
    quantity: 4100,
  },
  {
    id: 27,
    category: "Refrigerante",
    price: 6.2,
    name: "Schweppes Citrus",
    quantity: 3500,
  },
  {
    id: 28,
    category: "Zero açúcar",
    price: 9.3,
    name: "Fanta Zero Laranja",
    quantity: 3800,
  },
  {
    id: 29,
    category: "Água",
    price: 3.8,
    name: "Água Schin 500ml",
    quantity: 11000,
  },
  {
    id: 30,
    category: "Suco",
    price: 8.6,
    name: "Suco Sufresh Limão",
    quantity: 2600,
  },
];

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(MOCK_PRODUCTS);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <div className="bg-zinc-900 min-h-screen text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Produtos</h1>
          <Link
            to="/"
            className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded transition duration-300"
          >
            Voltar ao Início
          </Link>
        </div>

        <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-zinc-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Categoria
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Preço
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Quantidade
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-700">
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-zinc-700 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {product.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">
                        {product.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 font-semibold">
                      {formatPrice(product.price)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {product.quantity.toLocaleString("pt-BR")} unidades
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>Total de produtos: {products.length}</p>
        </div>
      </div>
    </div>
  );
}
