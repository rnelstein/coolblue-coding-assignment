# Frontend assignment exercise

## Assignment

### Goal

The goal of this assignment is to convert the provided designs below to a working frontend using HTML, CSS and JS. 

- [Homepage - Desktop](designs/Red%20Alert%20-%20Homepage%20-%20Desktop.png)
- [Homepage - Mobile](designs/Red%20Alert%20-%20Homepage%20-%20Mobile.png)
- [More Information Popup - Desktop](designs/Red%20Alert%20-%20More%20Information%20Popup%20-%20Desktop.png)
- [Q&A Expanded - Mobile](designs/Red%20Alert%20-%20Q&A%20Expanded%20-%20Mobile.png)

### Scope

- [ ] Responsive design
- [ ] Accessible
- [ ] Being able to open and close the FAQ items
- [ ] Only one FAQ item is allowed to be open
- [ ] Being able to open and close the modal box
- [ ] Compatible with latest Chrome and Firefox versions 

## Design specifics

- Colors used:
    - Dark grey: `#2B2D42`
    - Grey: `#8D99AE`
    - Light grey: `#EDF2F4`
    - Dark red: `#7F1028`
    - Light red: `#AD646D`
    - White: `#FFFFFF` 
- Font used is `Helvetica`
- Static assets
    - [Product image 1 png](./public/assets/images/product-1-transparent.png)
    - [Product image 1 webp](./public/assets/images/product-1-transparent.webp)
    - [Product image 2 png](./public/assets/images/product-2-transparent.png)
    - [Product image 2 webp](./public/assets/images/product-2-transparent.webp)

## Usage

### Global dependencies

you need to have a recent node.js installation and yarn:
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Install dependencies

```
yarn install
```

### Run development server

```
yarn dev
```

Will open your default browser to http://localhost:8080/public

Webpack will watch for changes in the `./src` directory and output the bundled assets to `./public/assets`. In parellel, the development server will watch for changes in the `./public` directory and live reload the browser.

### Build production bundles

```
yarn build
```

Will compile, minify and autoprefix Sass to CSS. Will Minify and uglify JavaScript and output the bundled assets to `./public/assets`.

### Assets

All the `designs, icons and images` needed to implement the designs are added to the `./public/assets/images` directory.

## Stack

The boilerplate consists of following tech stack and should run out of the box with a basic setup - 

- Webpack
- Sass compilation (and minification/autoprefixing in production)
- ES6+ transpilation (and minification/uglyfication in production)
- ES Modules

## Questions

If you have any questions while working on the exercise feel free to reach out. We will be happy to help.

Happy coding!
