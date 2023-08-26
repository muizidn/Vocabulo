import React from 'react'
import ReactDOM from 'react-dom/client'
import FloatingButton from './FloatingButton'
import { languageDetector } from './languageDetector';

function Fab() {
    const language = languageDetector();

    return (
        <div>
            <FloatingButton language={language} />
        </div>
    );
}

const __ID = 'honyaku-app-fab'

const me = document.createElement('div');
me.id = __ID;
me.style.position = 'absolute';
me.style.zIndex = '10';
document.body.appendChild(me);

ReactDOM.createRoot(document.getElementById(__ID)!).render(
  <React.StrictMode>
    <Fab />
  </React.StrictMode>
)
