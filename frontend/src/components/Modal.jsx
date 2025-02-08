import { X } from "lucide-react";

const Modal = ({ children, name, isOpen, onClose, width = "max-w-2xl", height = "h-[85vh]", className = "p-4" }) => {
    if (!isOpen) return null;
    return (
        <div className={`fixed ${className} inset-0 z-50 flex justify-center items-center overflow-hidden bg-opacity-50 p-4`}>
            <div className={`w-full ${width} ${height} rounded-lg bg-white shadow-lg dark:bg-dark-secondary flex flex-col`}>
                <div className='flex items-center justify-between border-b p-4'>
                    {name && <h2 className='text-black dark:text-white font-medium text-xl'>{name}</h2>}
                    <button onClick={onClose} className='h-8 w-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-colors duration-200 flex items-center justify-center'>
                        <X size={18} />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}