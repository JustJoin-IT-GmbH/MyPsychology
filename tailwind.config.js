/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-banner":
          "linear-gradient(to right, #E2E2E2 18%, rgba(252, 252, 252, 0) 100%), url('https://www.evimdekipsikolog.com/content/home-header.png')",
      }),
      backgroundPosition: {
        "100-percent": "100%", // corresponds to background-position: 100%;
      },
      backgroundSize: {
        cover: "calc(px + 100%)",
      },
      backgroundRepeat: {
        "no-repeat": "no-repeat",
      },
      backgroundOrigin: {
        "border-box": "border-box",
      },
    },
    plugins: [],
  },
};
