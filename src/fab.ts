import './style.css';

// Create the floating button element

const floatingButton = document.createElement('button');
floatingButton.innerText = '🇬🇧';
floatingButton.classList.add('floating-button'); // Apply your own CSS styles

// Set the click event for the button
floatingButton.addEventListener('click', () => {
    // Handle the button click action here
    console.log('Floating button clicked');
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
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

// Append the button to the document body
document.body.appendChild(floatingButton);
