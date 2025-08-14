"use client"; // ← Must be the very first line

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function InvitePage() {
  const params = useSearchParams();
  const name = params.get("name");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-4">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        {name ? (
          <h1 className="text-2xl font-bold">
            🎉 Hello {decodeURIComponent(name)}, you&apos;re invited to our event!
          </h1>
        ) : (
          <h1 className="text-xl">🎉 You&apos;re invited to our event!</h1>
        )}
        <p className="mt-4 text-gray-600">We can&apos;t wait to see you there.</p>
      </div>

      <footer className="mt-8 text-sm text-gray-500">
        Built by{" "}
        <Link
          href="https://github.com/DerrickJaguar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Derrick Ngabirano
        </Link>
      </footer>
    </div>
  );
}
