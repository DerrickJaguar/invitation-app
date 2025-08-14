"use client";
import { useState } from 'react';

export default function CreateInvitation(){
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const generateLink = () => {
        if(!name.trim()) return alert('Please enter a name');

        const encodedName = encodeURIComponent(name.trim());
        const url = '${window.location.origin}/invite?name=${encodedName}';
        setLink(url);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Generate Invitation</h1>

            <input
            type="text"
            placeholder="Enter guest name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg px-4 py-2 mb-4 w-full max-w-md"
            />

            <button onClick={generateLink}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
                Generate URL

            </button>

            {link &&(
                <div>
                    <p className="text-sm mb-2">Copy link</p>
                    <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline break break-words">
                        {link}

                    </a>
                </div>
            )}

        </div>
    );
    

}
