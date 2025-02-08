import React, { useState } from "react";
import EventCard from "./Eventcard";
import Hero from "./Hero";
import CategoryFilter from "./Categoryfilter";
import { Footer } from "./Footer";


const events = [
    {
        id: 1,
        title: "Summer Music Festival",
        description: "Hello I am yaseen",
        date: "2023-07-15",
        time: "14:00 - 22:00",
        location: "Central Park",
        capacity: 50 / 100,
        category: "Music",
        image: "/placeholder.svg?height=300&width=400",
    },
    {
        id: 2,
        title: "Tech Conference 2023",
        description: "Hello I am yaseen",
        date: "2023-08-10",
        time: "09:00 - 18:00",
        location: "Convention Center",
        capacity: 50 / 100,
        category: "Technology",
        image: "/placeholder.svg?height=300&width=400",
    },
    {
        id: 3,
        title: "Food & Wine Expo",
        description: "Hello I am yaseen",
        date: "2023-09-05",
        time: "11:00 - 20:00",
        location: "City Hall",
        capacity: 50 / 100,
        category: "Food",
        image: "/placeholder.svg?height=300&width=400",
    },
    {
        id: 4,
        title: "Art Gallery Opening",
        description: "Hello I am yaseen",
        date: "2023-07-22",
        time: "19:00 - 22:00",
        location: "Downtown Art Museum",
        capacity: 50 / 100,
        category: "Art",
        image: "/placeholder.svg?height=300&width=400",
    },
    {
        id: 5,
        title: "Startup Pitch Night",
        description: "Hello I am yaseen",
        date: "2023-08-18",
        time: "18:00 - 21:00",
        location: "Innovation Hub",
        capacity: 50 / 100,
        category: "Business",
        image: "/placeholder.svg?height=300&width=400",
    },
    {
        id: 6,
        title: "Charity Run",
        description: "Hello I am yaseen",
        date: "2023-09-10",
        time: "08:00 - 12:00",
        location: "Riverside Park",
        capacity: 50 / 100,
        category: "Sports",
        image: "/placeholder.svg?height=300&width=400",
    },
]

const categories = ["Music", "Technology", "Food", "Art", "Business", "Sports"]


const Dashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredEvents = selectedCategory === "All" ? events : events.filter((event) => event.category === selectedCategory)
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Upcoming Events</h2>
                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {filteredEvents.map((event) => (
                        <EventCard key={event.id} {...event} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;