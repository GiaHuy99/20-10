import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { TransitionProvider } from './context/TransitionProvider';
import {AudioProvider} from "./context/AudioProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AudioProvider>
            <TransitionProvider>

                <App />

            </TransitionProvider>
            </AudioProvider>
        </BrowserRouter>
    </React.StrictMode>,
)