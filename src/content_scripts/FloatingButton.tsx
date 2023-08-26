import React, { useState, useEffect } from 'react';
import { Language } from './language';
import './style.css';
import translateBody from './translateBody';
import { languageDetector } from './languageDetector';

function FloatingButton({ language }: { language: Language }) {
    const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const savedPosition = localStorage.getItem('floatingButtonPosition');
        if (savedPosition) {
            const { x, y } = JSON.parse(savedPosition);
            setPosition({ x, y });
        }
    }, []);

    const handleButtonClick = () => {
        // translateBody(language)
        console.log("PRINT LOG")
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const handleMouseMove = (moveEvent: MouseEvent) => {
            const x = moveEvent.clientX - offsetX;
            const y = moveEvent.clientY - offsetY;

            setPosition({ x, y });
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);

            if (position) {
                localStorage.setItem('floatingButtonPosition', JSON.stringify(position));
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <button
            className="floating-button"
            style={position ? { left: `${position.x}px`, top: `${position.y}px` } : {}}
            onClick={handleButtonClick}
            onMouseDown={handleMouseDown}
        >
            翻訳
        </button>
    );
}

export default FloatingButton;