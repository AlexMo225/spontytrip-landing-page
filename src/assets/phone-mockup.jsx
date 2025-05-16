import React from "react";

const PhoneMockup = () => (
    <svg
        width="300"
        height="600"
        viewBox="0 0 300 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Phone frame */}
        <rect
            x="10"
            y="10"
            width="280"
            height="580"
            rx="30"
            fill="#f8fafc"
            stroke="#334155"
            strokeWidth="5"
        />

        {/* Screen */}
        <rect x="25" y="25" width="250" height="550" rx="20" fill="#fff" />

        {/* App header */}
        <rect x="25" y="25" width="250" height="60" rx="20" fill="#4DA1A9" />
        <circle cx="50" cy="55" r="15" fill="white" fillOpacity="0.3" />
        <rect
            x="80"
            y="45"
            width="120"
            height="20"
            rx="10"
            fill="white"
            fillOpacity="0.3"
        />

        {/* Navigation tabs */}
        <rect x="35" y="95" width="230" height="40" rx="20" fill="#f1f5f9" />
        <circle cx="55" cy="115" r="10" fill="#4DA1A9" />
        <circle cx="95" cy="115" r="10" fill="#7ED957" />
        <circle cx="135" cy="115" r="10" fill="#e2e8f0" />
        <circle cx="175" cy="115" r="10" fill="#e2e8f0" />
        <circle cx="215" cy="115" r="10" fill="#e2e8f0" />

        {/* Content area */}
        <rect x="35" y="145" width="230" height="100" rx="10" fill="#f1f5f9" />
        <rect x="50" y="160" width="200" height="15" rx="7.5" fill="#cbd5e1" />
        <rect x="50" y="185" width="150" height="15" rx="7.5" fill="#cbd5e1" />
        <rect x="50" y="210" width="180" height="15" rx="7.5" fill="#cbd5e1" />

        {/* Calendar area */}
        <rect x="35" y="255" width="230" height="150" rx="10" fill="#f1f5f9" />
        <rect x="45" y="270" width="30" height="30" rx="5" fill="#4DA1A9" />
        <rect x="85" y="270" width="30" height="30" rx="5" fill="#e2e8f0" />
        <rect x="125" y="270" width="30" height="30" rx="5" fill="#e2e8f0" />
        <rect x="165" y="270" width="30" height="30" rx="5" fill="#7ED957" />
        <rect x="205" y="270" width="30" height="30" rx="5" fill="#e2e8f0" />

        <rect x="45" y="310" width="30" height="30" rx="5" fill="#e2e8f0" />
        <rect x="85" y="310" width="30" height="30" rx="5" fill="#e2e8f0" />
        <rect x="125" y="310" width="30" height="30" rx="5" fill="#e2e8f0" />
        <rect x="165" y="310" width="30" height="30" rx="5" fill="#e2e8f0" />
        <rect x="205" y="310" width="30" height="30" rx="5" fill="#4DA1A9" />

        <rect x="45" y="350" width="30" height="30" rx="5" fill="#e2e8f0" />
        <rect x="85" y="350" width="30" height="30" rx="5" fill="#7ED957" />
        <rect x="125" y="350" width="30" height="30" rx="5" fill="#e2e8f0" />
        <rect x="165" y="350" width="30" height="30" rx="5" fill="#e2e8f0" />
        <rect x="205" y="350" width="30" height="30" rx="5" fill="#e2e8f0" />

        {/* Checklist area */}
        <rect x="35" y="415" width="230" height="140" rx="10" fill="#f1f5f9" />
        <rect x="50" y="430" width="15" height="15" rx="3" fill="#7ED957" />
        <rect x="75" y="430" width="170" height="15" rx="7.5" fill="#cbd5e1" />

        <rect x="50" y="455" width="15" height="15" rx="3" fill="#7ED957" />
        <rect x="75" y="455" width="150" height="15" rx="7.5" fill="#cbd5e1" />

        <rect
            x="50"
            y="480"
            width="15"
            height="15"
            rx="3"
            stroke="#cbd5e1"
            strokeWidth="2"
            fill="none"
        />
        <rect x="75" y="480" width="180" height="15" rx="7.5" fill="#cbd5e1" />

        <rect
            x="50"
            y="505"
            width="15"
            height="15"
            rx="3"
            stroke="#cbd5e1"
            strokeWidth="2"
            fill="none"
        />
        <rect x="75" y="505" width="130" height="15" rx="7.5" fill="#cbd5e1" />

        <rect
            x="50"
            y="530"
            width="15"
            height="15"
            rx="3"
            stroke="#cbd5e1"
            strokeWidth="2"
            fill="none"
        />
        <rect x="75" y="530" width="160" height="15" rx="7.5" fill="#cbd5e1" />

        {/* Home button / notch */}
        <rect x="115" y="570" width="70" height="5" rx="2.5" fill="#cbd5e1" />
    </svg>
);

export default PhoneMockup;
