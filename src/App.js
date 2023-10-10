import React from "react";
import { Header } from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";

export function App() {
    return (
        <div className="card">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}