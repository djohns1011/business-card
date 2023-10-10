import React from "react";

function clickEmail(){
    alert('No Email yet :)');
}

function clickLinkedIn(){
    alert('No LinkedIn yet :)');
}

export function Button() {
    return (
        <div className="button">
            <button className="email-button" onClick={clickEmail}><i class="fa-solid fa-envelope"></i> Email
            </button>
            <button className="linkedin-button" onClick={clickLinkedIn}><i class="fa-brands fa-linkedin"></i> LinkedIn
            </button>
        </div>
    )
}