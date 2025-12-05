import Link from 'next/link';

export default function Navigation() {
  return (
    <nav
      className="bg-blue-600 text-white p-4"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex gap-6">
        <Link href="/" className="hover:text-blue-200 focus:underline">
          Inicio
        </Link>
        <Link href="/about" className="hover:text-blue-200 focus:underline">
          Acerca de
        </Link>
        <Link href="/products" className="hover:text-blue-200 focus:underline">
          Productos
        </Link>
        <Link href="/contact" className="hover:text-blue-200 focus:underline">
          Contacto
        </Link>
      </div>
    </nav>
  );
}
