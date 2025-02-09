import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 py-2 text-black  sticky w-full top-0 left-0 z-50 shadow-md">
      <div className="w-full flex justify-between mx-auto px-4 py-4">
        <div className="flex  w-full justify-between items-center">
          <div className="text-xl font-bold">{"CORE </> Connect BootCamp"}</div>
          <div className="space-x-6">
            <Link href="https://yesimscheidj.rocks" className="font-bold hover:text-gray-300">Portfolio</Link>
            <Link href="https://github.com/CoreConnectBootcampPH/core-bootcamp" className="font-bold hover:text-gray-300">Github</Link>
            <Link href="https://github.com/sceiiya" className="font-bold hover:text-gray-300">Developer Github</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
