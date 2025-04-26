"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";

const ShareTestimony = () => {
    const [showOptions, setShowOptions] = useState(false);
    const dropdownRef = useRef();

    const toggleOptions = () => setShowOptions((prev) => !prev);

    // Close dropdown if click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowOptions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Main Button */}
            <Button
                onClick={toggleOptions}
                className="text-xs bg-[#38110c] px-5 py-2 cursor-pointer hover:bg-[#4a1a13] transition rounded-sm uppercase"
            >
                Share Your Testimony
            </Button>

            {/* Dropdown */}
            {showOptions && (
                <div className="absolute mt-2 bg-white border rounded shadow-lg w-44 right-0 z-50">
                    <a
                        href="https://wa.me/2349078896742?text=I%20want%20to%20share%20my%20testimony!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-[#38110c]/70 hover:bg-gray-100"
                    >
                        Share via WhatsApp
                    </a>
                    <a
                        href="mailto:chikadaniel45@gmail.com?subject=My%20Testimony&body=I%20want%20to%20share%20my%20testimony."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-[#38110c]/70 hover:bg-gray-100"
                    >
                        Share via Email
                    </a>
                </div>
            )}
        </div>
    );
};

export default ShareTestimony;
