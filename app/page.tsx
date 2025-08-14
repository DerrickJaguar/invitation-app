"use client";

import { useState, useEffect } from "react";

export default function CreateInvitation() {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [origin, setOrigin] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Only access browser-specific window after mount
  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const generateLink = () => {
    if (!name.trim() || !origin) return;

    setLink(`${origin}/invite?name=${encodeURIComponent(name.trim())}`);
    setCopied(false);
  };

  // Prevent hydration mismatch by waiting for origin
  if (!origin) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">Invitation Link Generation</h1>

      <input
        type="text"
        placeholder="Enter guest name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-lg px-4 py-2 mb-4 w-full max-w-md"
      />

      <button
        onClick={generateLink}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
      >
        Generate Link
      </button>

      {link && (
        <div className="mt-6 p-4 bg-white border rounded-lg shadow-md max-w-md break-words flex flex-col items-center">
          <p className="text-sm mb-2">Copy and send this link:</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mb-2"
          >
            {link}
          </a>
          <button
            onClick={async () => {
              await navigator.clipboard.writeText(link);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      )}

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
