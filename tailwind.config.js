/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                main: '#241a37',
                "dark-purple": '#171021',
                yellow: '#fa9e15',
                gold: '#FFD4B0',
                black: '#000',
                bronze: '#cd7f32',
            },
        },
    },
    plugins: [],
}
