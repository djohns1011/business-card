import React from "react";
import { Button } from "./Button";

export default function MainContent() {
    return (
        <div className="main-section">
            <h1>Michael Scott</h1>
            <h4>Regional Manager</h4>
            <Button />
            <div className="content-section">
                <h5>About</h5>
                <p>Michael Gary Scott is a fictional character and the protagonist of the NBC sitcom The Office, portrayed by Steve Carell. Michael serves as the regional manager of the Scranton, Pennsylvania branch of paper company, Dunder Mifflin Inc</p>
                <h5>Interest</h5>
                <p>Michael Scott enjoys improvised comedy, the internet, and screenwriting in his spare time. His screenplay “Threat Level Midnight” was submitted to several prestigious film festivals.</p>
            </div>
        </div>
    )
}