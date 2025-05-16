/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#4DA1A9",
                secondary: "#7ED957",
                tertiary: "#F2F7F8",
                neutral: "#E5E9F0",
            },
            fontFamily: {
                sans: ["Satoshi", "ui-sans-serif", "system-ui"],
                display: ["Clash Display", "ui-sans-serif", "system-ui"],
            },
        },
    },
    plugins: [],
};
