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

## Card component html

```
    <div className="h-screen p-6 bg-gray-200">
      <div className="card bordered">
        <figure>
          <img alt="profile" src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div className="card-body bg-white">
          <h2 className="card-title">
            Top image
            <div className="badge mx-2 badge-secondary">NEW</div>
          </h2>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus veritatis sed molestiae voluptates incidunt iure
            sapiente.
          </p>
          <div className="justify-end card-actions">
            <button className="btn btn-secondary">More info</button>
          </div>
        </div>
      </div>
    </div>
```

## Navbar component

```
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">Logo</span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch flex">
          <a href="#/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </a>
          <a href="#/" className="btn btn-ghost btn-sm rounded-btn">
            About
          </a>
        </div>
      </div>
    </div>
```

## Add craco alias

`npm i -D craco-alias`
