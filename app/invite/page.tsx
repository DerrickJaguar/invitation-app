"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";


export default function InvitationPage() {
    const params = useSearchParams();
    const name = params.get('name');

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-100">
            <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-md w-full">
                {name ? (
                    <h1 className="text-2xl font-bold">
                        🎉 Hello {decodeURIComponent(name)}, you are invited to our event!
                    </h1>
                ) : (

                    <h1 className="text-1xl">🎉 You’re invited to our event!</h1>
                )}

                <p className="mt-4 text-gray-600">
                    We are excited to have you join us. 
                </p>


                

            </div>

            <footer className="mt-8 text-sm text-gray-50">
                Built By{""}
                <Link 
                href="https://github.com/DerrickJaguar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline">
                    Derrick Ngabirano
                </Link>
            </footer>

        </div>
    );

}
