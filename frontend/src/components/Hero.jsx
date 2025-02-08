import React from "react"
import { Search } from "lucide-react"

export default function Hero() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px:8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">Discover Amazing Events</h1>
                    <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl">
                        Find and attend events that match your interests
                    </p>
                    <div className="mt-10 max-w-xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search events..."
                                className="w-full py-3 px-4 pl-10 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}