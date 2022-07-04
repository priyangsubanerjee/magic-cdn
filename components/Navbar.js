import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="flex items-center px-8 py-2 border-b">
      <img src="/logo.png" className="h-10" alt="" />
      <div className="ml-2">
        <h1 className="font-bold">Pitara CDN</h1>
        <p className="text-xs text-gray-500">REST based file hosting.</p>
      </div>
      <div className="ml-auto flex items-center">
        <ul className="flex items-center text-gray-500 text-xs">
          <li className="mr-6">About</li>
          <li className="mr-6">Documentation</li>
          <li className="mr-6">Pricing</li>
        </ul>
        <Link href={"/Login"}>
          <button className="text-xs bg-black text-white py-2 px-3 rounded">
            Login →
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
