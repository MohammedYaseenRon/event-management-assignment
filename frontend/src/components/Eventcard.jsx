import React from "react"
import { CalendarDays, Clock, MapPin, User } from "lucide-react"


export default function EventCard({ title, description, date, time, location, category, image, capacity }) {
    return (
        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800 overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={image || "placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
                <p className="text-base font-medium text-gray-600 dark:text-white">{description}</p>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    <span>{date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <User className="w-4 h-4 mr-2" />
                    <span>{capacity}</span>
                </div>
                <div className="mt-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{category}</span>
                </div>
            </div>

        </div>
    )
}