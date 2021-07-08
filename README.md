# Initial setup with react, tailwind and daisy

```
npx create-react-app react-lectures
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npm install @craco/craco
```

## In craco.config.js

```
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

## In package.json

```
"scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
```

## Adding tailwind css to react

```
 npx tailwindcss-cli@latest init
```

## In tailwind.config.js

```
module.exports = {
 purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
 darkMode: false, // or 'media' or 'class'
 theme: {
   extend: {},
 },
 variants: {
   extend: {},
 },
 plugins: [],
};
```

## in src/index.css

```

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Adding daisy ui

`npm i daisyui --save`

## And in tailwind.config.js

`plugins: [require('daisyui')]`

## In app.js

`<button className="btn btn-primary">DaisyUI Button</button>`
