import { Link } from "react-router";

export function Home() {
  return (
    <div className="bg-zinc-900 h-screen w-screen flex items-center justify-center text-white">
      <div className="max-w-7xl">
        <h1 className="text-4xl font-bold">Bem vindo, Hello World</h1>
        <p className="text-center text-2xl mb-6">Gerenciamento de estoque</p>

        <div className="text-center">
          <Link
            to="/login"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Fazer Login
          </Link>
        </div>
      </div>
    </div>
  );
}
