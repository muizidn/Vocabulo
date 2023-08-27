export default function createDraggableContainer(id: string, container: HTMLElement): HTMLDivElement {
    const me = document.createElement("div");
    me.id = id;
    me.classList.add('root-component-honyaku-draggable')
    container.appendChild(me);

    // Load initial position from localStorage
    const savedPositionJSON = localStorage.getItem("draggableElementPosition");
    const savedPosition = savedPositionJSON ? JSON.parse(savedPositionJSON) : null;
    if (savedPosition) {
        me.style.left = savedPosition.x;
        me.style.top = savedPosition.y;
    }

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    me.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - me.getBoundingClientRect().left;
        offsetY = e.clientY - me.getBoundingClientRect().top;
        console.log("dragging", offsetX,offsetY);
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            me.style.left = `${x}px`;
            me.style.top = `${y}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;

        // Save the current position in localStorage
        const currentPosition = {
            x: me.style.left,
            y: me.style.top,
        };
        localStorage.setItem("draggableElementPosition", JSON.stringify(currentPosition));
    });
    return me;
}