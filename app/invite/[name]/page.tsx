"use client"; // if you use any client logic like window

import { useEffect, useState } from "react";

interface InvitePageProps {
  params: {
    name: string;
  };
}

export default function InvitePage({ params }: InvitePageProps) {
  const [origin, setOrigin] = useState<string | null>(null);

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  if (!origin) return null;

  const guestName = decodeURIComponent(params.name);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-4">You are Invited, {guestName}!</h1>
      <p className="mb-4">We are excited to have you join us.</p>

      <footer className="mt-8 text-sm text-gray-500">
        Built by{" "}
        <a
          href="https://github.com/DerrickJaguar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Derrick Ngabirano
        </a>
      </footer>
    </div>
  );
}
