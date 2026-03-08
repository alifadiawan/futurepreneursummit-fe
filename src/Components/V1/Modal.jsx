import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, message, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            setIsAnimating(false);
            setTimeout(() => setIsVisible(false), 200);
        }
    }, [isOpen]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center p-4 z-50 transition-all duration-200 ${isAnimating ? 'bg-black/60' : 'bg-black/60'
                }`}
            onClick={onClose}
        >
            <div
                className={`bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-200 ${isAnimating
                    ? 'scale-100 opacity-100 translate-y-0'
                    : 'scale-95 opacity-0 translate-y-4'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >

                {/* Content */}
                <div className="p-6">
                    {message && (
                        <p className={`text-gray-600 text-2xl font-bold text-center leading-relaxed mb-4 transition-all duration-500 delay-100 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                            {message}
                        </p>
                    )}
                    <div className={`transition-all duration-500 delay-200 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                        {children}
                    </div>
                </div>

                {/* Footer */}
                <div className={`flex justify-center gap-3 p-6 pt-0 transition-all duration-500 delay-300 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-200 font-medium hover:scale-105 hover:shadow-lg"
                    >
                        Okay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal