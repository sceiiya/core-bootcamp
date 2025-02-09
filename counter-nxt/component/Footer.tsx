
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy;{` 2025 | CORE </> Connect Bootcamp by Sceiiya `}</p>
        <Link href="https://github.com/sceiiya" className="mt-2 text-sm">Github</Link>
      </div>
    </footer>
  );
}
