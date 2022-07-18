# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
This is a project that makes a call from the advice api and displays an advice when a button is clicked.

### Screenshot

![](./screenshot/mobile_view_of_get_advice_app.png)
![](./screenshot/advice_app_desktop.png)



### Links

- Solution URL: [My solution](https://your-solution-url.com)
- Live Site URL: [View live site](https://matehc.github.io/advice-generator_frontend_mentor/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
I lerned how to use the picture element to offer alternative versions of an image for different display.

```html
      <picture class="divider" >
        <source
          media="(min-width: 700px)"
          srcset="./images/pattern-divider-desktop.svg"
        />
        <img src="./images/pattern-divider-mobile.svg" alt="divider" />
      </picture>
```
### Useful resources

- [MDN resource on <picture> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) - This helped me understand the use of <picture> element.

## Author

- Frontend Mentor - [@matehc](https://www.frontendmentor.io/profile/matehc)
- Twitter - [@OkaforLucas](https://twitter.com/OkaforLucas)


