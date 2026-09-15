import { Link } from "react-router-dom";
import LogoImage from '../../assets/logo.png';

export function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-950">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-bold text-gray-200">
            <img
                src={LogoImage}
                alt="Logo-garde"
                width={400}
                height={400}
            />
        </Link>

        <nav className="flex gap-4">
          <Link
            to="/"
            className="text-sm font-medium text-gray-400 transition hover:text-gray-200"
          >
            Agendar
          </Link>

          <Link
            to="/appointments"
            className="text-sm font-medium text-gray-400 transition hover:text-gray-200"
          >
            Agendamentos
          </Link>
        </nav>
      </div>
    </header>
  );
}
