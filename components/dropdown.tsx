import { useState, useEffect, useRef } from "react";

interface DropdownProps {
    options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    // Toggle dropdown visibility
    const toggleDropdown = () => setIsOpen((prev) => !prev);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                onMouseOver={toggleDropdown}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Toggle Dropdown
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg transition-opacity duration-300 ease-in-out opacity-100">
                    <ul>
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
