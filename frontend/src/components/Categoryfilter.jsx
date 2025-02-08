
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                >
                    {selectedCategory}
                    <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-full mt-2 w-56 rounded-md shadow-lg bg-white z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <button
                            onClick={() => {
                                onCategoryChange("All")
                                setIsOpen(false)
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    onCategoryChange(category)
                                    setIsOpen(false)
                                }}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}