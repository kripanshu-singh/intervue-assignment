# Intervue.io Technical Interview Resources – Assignment Documentation

### Submitted by: **Kripanshu Singh**

[Portfolio](https://kripanshu-singh.github.io/me/) • [Email Me](mailto:kripanshu.design@gmail.com) • Frontend Developer

---

### Tech Stack & Deployment

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-24292e?style=flat&logo=github&logoColor=white)

---

## Live Demo

**[View Deployed Page](https://kripanshu-singh.github.io/intervue-assignment/)**

---

## Summary

This project is a submission for the **HTML/CSS Internship at Intervue.io**, where I was tasked with building a fully responsive landing page showcasing technical interview resources.

The page is built with:

- **HTML5**
- **Tailwind CSS (via CDN)**
- **Vanilla JavaScript**
- **No frameworks or libraries used**

---

## Additional Features I Implemented

1. **"Featured on Shark Tank" banner** with animated shark background using a transparent GIF.
2. **Working search functionality** to dynamically filter resource cards.
3. **Fully functional social links in the Testimonial section (Yubi)**
4. **Working footer links** to Intervue’s social media platforms.

---

## Project Structure

```bash
📦 intervue-assignment/
├── index.html         # Core HTML structure
├── style.css          # Custom styles and animations
├── script.js          # Interactive functionality
└── assets/            # Logos, icons, and GIFs
```

Each file has been manually optimized to ensure clarity, maintainability, and performance.

---

## Responsive Design

Using **Tailwind CSS utility classes**, the design adapts across all breakpoints:

- 📱 **Mobile**: Full stacking layout with collapsible menu
- 💻 **Tablet (≥640px)**: Grid views and adaptive typography
- 🖥️ **Desktop (≥768px)**: Horizontal nav, 3-column resource grid
- 🖥️ **Large Desktop (≥1024px)**: Enhanced spacing and content width

Responsive behaviors include:

- Hamburger menu toggle
- Dynamic resource grid
- Fluid typography and spacing
- Auto-scaling media and cards

---

## Key Features

1. **Sticky Navigation Bar**
2. **Mobile Slide-in Menu**
3. **Live Search for Resources**
4. **Accordion FAQ with Animation**
5. **Video Testimonial Modal**
6. **Hover-Enhanced Resource Cards**
7. **Gradient Hero and CTA Sections**

All of this was coded from scratch without any UI libraries or frameworks.

---

## Component Breakdown

### Navigation

- Responsive navigation with sticky positioning
- Desktop nav with smooth transitions
- Mobile nav created dynamically via JS

### Hero Section

- Centralized title, tagline, and search input
- Fluid gradients and rounded input field
- Interactive category chips

### Resources Grid

- 9 categorized cards with difficulty tags
- Fully responsive using Tailwind grids
- Interactive hover and search filtering

### Security & Product Sections

- Icon-supported feature cards
- Balanced spacing, contrast, and layout
- Visual hierarchy through consistent design tokens

### Testimonial Section

- Split layout (image & text)
- Playable video modal with overlay
- Social and branding integrations

### FAQ Accordion

- Only one open section at a time
- Smooth expand/collapse with icon toggling
- Enhanced for accessibility and mobile use

### Footer

- Multi-column layout
- Social links with hover transitions
- Clean closing credits with my personal credit badge

---

## JavaScript Functionality

The **Vanilla JS** used in `script.js` ensures modularity and performance:

### Accordion

```js
class Accordion {
  openAccordion() {
    /* Expands selected item */
  }
  closeAccordion() {
    /* Collapses current item */
  }
  closeAll() {
    /* Ensures only one open */
  }
}
```

### Mobile Menu

```js
class MobileMenu {
  createMobileMenu() { /* Builds menu on load */ }
  open(), close(), toggle() { /* Controls visibility */ }
}
```

### Video Modal

```js
const videoModal = {
  init() {
    /* Play/pause video and toggle modal */
  },
};
```

### Smooth Scrolling

```js
const smoothScroll = {
  init() {
    /* Scrolls to sections with offset */
  },
};
```

### Resource Search

```js
const searchFunctionality = {
  performSearch(query) {
    // Filters resource cards and highlights match
  },
};
```

All components are initialized together using safe `DOMContentLoaded` logic.

---

## CSS Implementation

Tailwind CSS forms the core, extended with **custom CSS** in `style.css`.

```css
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.gradient-text {
  background: linear-gradient(90deg, #3b82f6, #10b981);
  -webkit-background-clip: text;
  color: transparent;
}

html {
  scroll-behavior: smooth;
}
```

---

## Performance Considerations

- **CDN imports** for Tailwind, Google Fonts, and Font Awesome
- **Lazy-loaded modals** and event listeners
- **Minimal render-blocking resources**
- **Scoped and minimal custom CSS**

---

## Accessibility

Designed with **a11y best practices**:

- Semantic HTML5 tags
- Alt text for images
- Keyboard navigable (Escape closes modals)
- Color contrast compliant
- Aria-labels and clear focus states

## Conclusion

This submission reflects my focus on:

- **Clean & modern UI**
- **Efficient, scalable codebase**
- **Responsive, mobile-first design**
- **Interactive experience using Vanilla JS**

---

Thank you for this opportunity. I enjoyed crafting this experience and look forward to contributing to **Intervue.io** with creativity and precision.

Sincerely,
**Kripanshu Singh**
