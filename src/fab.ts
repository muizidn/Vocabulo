import { Language } from './language';
import './style.css';
import translateBody from './translateBody';

export function createFab(language: Language) {
    const floatingButton = document.createElement('button');
    floatingButton.innerText = '🇬🇧';
    floatingButton.classList.add('floating-button');

    // Load saved position from localStorage
    const savedPosition = localStorage.getItem('floatingButtonPosition');
    if (savedPosition) {
        const { x, y } = JSON.parse(savedPosition);
        floatingButton.style.left = `${x}px`;
        floatingButton.style.top = `${y}px`;
    }

    floatingButton.addEventListener('click', () => {
        translateBody(language)
    });

    let isDragging = false;
    let offsetX: number, offsetY: number;

    floatingButton.addEventListener("mousedown", (e: MouseEvent) => {
        isDragging = true;
        offsetX = e.clientX - floatingButton.getBoundingClientRect().left;
        offsetY = e.clientY - floatingButton.getBoundingClientRect().top;

        // Prevent default behavior to avoid selecting text or elements while dragging
        e.preventDefault();
    });

    document.addEventListener("mousemove", (e: MouseEvent) => {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;

            floatingButton.style.left = `${x}px`;
            floatingButton.style.top = `${y}px`;

            // Save current position to localStorage
            localStorage.setItem('floatingButtonPosition', JSON.stringify({ x, y }));
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    // Append the button to the document body
    document.body.appendChild(floatingButton);
}

createFab(Language.CHINESE);
