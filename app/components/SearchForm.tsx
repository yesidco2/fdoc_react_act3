'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    const searchParams = new URLSearchParams();
    searchParams.set('q', searchTerm);

    if (category) searchParams.set('category', category);

    router.push(`/search?${searchParams.toString()}`);
  };

  const handleQuickSearch = (term: string) => {
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4">Búsqueda de Productos</h3>

      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar productos..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Todas las categorías</option>
          <option value="electronics">Electrónicos</option>
          <option value="accessories">Accesorios</option>
          <option value="clothing">Ropa</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:ring"
        >
          Buscar
        </button>
      </form>

      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-2">Búsquedas rápidas:</p>

        <div className="flex flex-wrap gap-2">
          {['laptop', 'mouse', 'teclado'].map((term) => (
            <button
              key={term}
              onClick={() => handleQuickSearch(term)}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300"
            >
              {term.charAt(0).toUpperCase() + term.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
