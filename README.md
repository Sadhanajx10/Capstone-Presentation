# Capstone Presentation Deck

A modern, interactive React presentation deck built for the Aeropay DevOps Knowledge Hub capstone project. Features smooth animations, live demos, and comprehensive speaker notes.

##  Features

### Core Presentation Features
- **Animated Splash Screen** - Company logo with smooth transitions
- **Framer Motion Animations** - Smooth slide transitions and micro-interactions
- **Keyboard Navigation** - Full keyboard support for accessibility
- **Progress Bar** - Visual progress indicator
- **Timer** - Elapsed time tracking with warnings
- **Speaker Notes** - Expandable notes panel with timer
- **Table of Contents** - Quick navigation to any slide

### Content Features
- **MDX Support** - Write slides in Markdown with React components
- **Code Syntax Highlighting** - Prism.js integration with copy functionality
- **Architecture Diagrams** - Mermaid.js integration for system diagrams
- **Live Demo Integration** - Embed live sites with offline fallback
- **Comparison Charts** - Before/after visualizations
- **Responsive Design** - Works on all screen sizes

### Technical Features
- **PWA Support** - Offline functionality and app-like experience
- **Performance Optimized** - Code splitting and lazy loading
- **Accessibility** - ARIA labels, keyboard navigation, screen reader support
- **Static Export** - Export to static HTML for offline use
- **Auto-advance** - Optional automatic slide progression

## 🛠 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **MDX** - Markdown with JSX support
- **Mermaid.js** - Diagram generation
- **Prism.js** - Code syntax highlighting
- **PWA Plugin** - Progressive Web App features

##  Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd capstone-presentation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

##  Usage

### Navigation Controls

#### Keyboard Shortcuts
- `←` or `→` - Navigate slides
- `Space` - Next slide
- `G` - Open table of contents
- `?` - Show help modal
- `S` - Toggle speaker notes
- `Home` - First slide
- `End` - Last slide
- `Escape` - Close modals
- `0-9` - Jump to slide number

#### Mouse Controls
- Click left side - Previous slide
- Click right side - Next slide
- Scroll - Navigate slides

### Speaker Notes

Press `S` to open speaker notes panel. Features:
- Current slide information
- Elapsed time tracking
- Auto-minimize functionality
- Fullscreen mode
- Timer with progress indicator

### Live Demo

The presentation includes a live demo slide that:
- Embeds your documentation site in an iframe
- Provides offline fallback content
- Shows connection status
- Includes retry functionality

##  Customization

### Adding New Slides

1. **Edit `src/data/slides.js`**
   ```javascript
   {
     id: 10,
     title: "New Slide",
     type: "content", // content, architecture, demo, comparison
     layout: "center", // center, left, right, split, full
     content: `
       # Your Markdown Content
       
       - Point 1
       - Point 2
     `,
     speakerNotes: `
       - Speaker note 1
       - Speaker note 2
     `
   }
   ```

2. **Slide Types**
   - `content` - Standard MDX content
   - `architecture` - Mermaid.js diagram
   - `demo` - Live iframe demo
   - `comparison` - Before/after comparison

### Styling

- **Colors**: Edit `tailwind.config.js` for theme colors
- **Animations**: Modify `src/index.css` for custom animations
- **Components**: Customize individual components in `src/components/`

### Content

- **Slides**: Edit `src/data/slides.js`
- **Speaker Notes**: Add notes to each slide object
- **Architecture Diagrams**: Update Mermaid syntax in slides
- **Live Demo URL**: Change the demo URL in slide data

##  Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Static Export
```bash
npm run export
```
This creates a static export in the `./export/` directory that can be served from any web server.

### PWA Features

The presentation includes PWA features:
- Offline support
- App-like installation
- Service worker caching
- Manifest file for mobile devices

##  Performance

### Optimizations
- Code splitting for vendor libraries
- Lazy loading of heavy components
- Optimized images and assets
- Efficient animations with Framer Motion
- Minimal bundle size

### Browser Support
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

##  Configuration

### Vite Configuration
Edit `vite.config.js` for:
- Build optimizations
- PWA settings
- MDX configuration
- Development server settings

### Tailwind Configuration
Edit `tailwind.config.js` for:
- Custom colors
- Animation definitions
- Font families
- Responsive breakpoints

##  Mobile Support

The presentation is fully responsive and includes:
- Touch navigation
- Mobile-optimized layouts
- PWA installation prompts
- Responsive typography

##  Customization Examples

### Adding Custom Components
```javascript
// In src/components/Slide.jsx
const CustomComponent = (props) => (
  <motion.div className="custom-component">
    {/* Your custom content */}
  </motion.div>
)

// Add to components object
const components = {
  // ... existing components
  CustomComponent
}
```

### Custom Animations
```css
/* In src/index.css */
@keyframes customAnimation {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

.custom-animation {
  animation: customAnimation 0.5s ease-out;
}
```

##  Troubleshooting

### Common Issues

1. **MDX not rendering**
   - Ensure MDX plugin is configured in `vite.config.js`
   - Check that content is properly formatted

2. **Animations not working**
   - Verify Framer Motion is installed
   - Check for console errors

3. **Live demo not loading**
   - Check iframe sandbox permissions
   - Verify the demo URL is accessible
   - Check browser console for errors

4. **PWA not working**
   - Ensure HTTPS in production
   - Check service worker registration
   - Verify manifest file

### Debug Mode
Add `?debug=true` to the URL to enable debug logging.

##  License

This project is licensed under the MIT License.

##  Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

##  Support

For questions or issues:
- Check the troubleshooting section
- Review the code comments
- Open an issue on GitHub

---

**Built  for the Aeropay DevOps Knowledge Hub Capstone Project**
