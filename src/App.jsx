import React, { useEffect } from 'react';
import Sidebar from "./components/Sidebar";
import Main from './components/Main';
import Layout from './components/Layout';

export default function App() {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css';
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <>
        <Layout/>
        </>
    );
}
