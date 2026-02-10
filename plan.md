# Plan: Dynamic SOW Flowchart Generator

## Project Overview

Interactive web application for generating and exporting product architecture flowcharts. Allows users to select products and instantly view/export Mermaid-rendered diagrams for client presentations.

**Status:** ✅ **v1.0 Complete** - NAO product fully implemented and working

**GitHub Repository:** https://github.com/timLP79/dynamic-sow
**GitHub Issues:** https://github.com/timLP79/dynamic-sow/issues
**GitHub Project Board:** https://github.com/timLP79/dynamic-sow/projects

---

## Current Tech Stack

| Component | Technology | Source |
|-----------|-----------|--------|
| Frontend Framework | Vanilla JavaScript (ES6 Modules) | Native |
| Layout | CSS Grid | Native CSS |
| Flowchart Engine | Mermaid.js v10 | CDN |
| SVG Export | Native XMLSerializer | Native |
| PNG Export | html2canvas 1.4.1 | CDN |
| Web Server (Dev) | Python `http.server` | Built-in |
| Deployment | GitHub Pages | Static hosting |

**Total Size:** ~15KB (excluding CDN libraries)

---

## Current Directory Structure

```
dynamic-sow/
├── index.html              # Main SPA with two-panel layout
├── css/
│   └── main.css           # Complete styling system (6.3KB)
├── js/
│   ├── app.js             # Application controller (5.2KB)
│   ├── flowchart-data.js  # Product definitions (1.3KB)
│   ├── renderer.js        # Mermaid integration (3.4KB)
│   └── exporter.js        # Export functionality (4.0KB)
├── plan/
│   ├── NAO.txt            # NAO Mermaid source
│   └── PXL_20260209_213536921.jpg  # Original whiteboard design
├── plan.md                # This file - project tracking
└── README.md              # User documentation
```

---

## ✅ Completed Features (v1.0)

### Core Functionality
- [x] Two-panel responsive layout (product selection + flowchart display) [#1](https://github.com/timLP79/dynamic-sow/issues/1) ✓
- [x] Dynamic product card generation from data file [#2](https://github.com/timLP79/dynamic-sow/issues/2) ✓
- [x] Live Mermaid flowchart rendering [#3](https://github.com/timLP79/dynamic-sow/issues/3) ✓
- [x] Custom Mermaid theme with brand colors [#3](https://github.com/timLP79/dynamic-sow/issues/3) ✓
- [x] SVG export with auto-generated filenames [#4](https://github.com/timLP79/dynamic-sow/issues/4) ✓
- [x] PNG export with 2x resolution for high quality [#5](https://github.com/timLP79/dynamic-sow/issues/5) ✓
- [x] Active state management for selected products [#2](https://github.com/timLP79/dynamic-sow/issues/2) ✓
- [x] Placeholder states for empty/loading states [#1](https://github.com/timLP79/dynamic-sow/issues/1) ✓

### NAO Product Implementation
- [x] Complete NAO flowchart [#6](https://github.com/timLP79/dynamic-sow/issues/6) ✓ with:
  - Website signup form fields (FirstName, LastName, Email, Phone)
  - DDC (Data Device Collector) integration
  - NAO API with Name Template and MFA processing
  - K360 Policies & Segments decision engine
  - Three outcomes: ALLOW, BLOCK, CHALLENGE
  - MFA challenge flow with success/failure paths
  - Proper subgraph grouping for clean layout

### Documentation
- [x] Comprehensive README with Quick Start, troubleshooting, examples [#7](https://github.com/timLP79/dynamic-sow/issues/7) ✓
- [x] Project roadmap and tracking document [#8](https://github.com/timLP79/dynamic-sow/issues/8) ✓
- [x] Inline code comments and JSDoc [#7](https://github.com/timLP79/dynamic-sow/issues/7) ✓
- [x] Mermaid syntax guide and layout best practices [#7](https://github.com/timLP79/dynamic-sow/issues/7) ✓
- [x] ES6 module CORS warning prominently displayed [#7](https://github.com/timLP79/dynamic-sow/issues/7) ✓

### Developer Experience
- [x] ES6 module structure for clean code organization [#3](https://github.com/timLP79/dynamic-sow/issues/3) ✓
- [x] Modular architecture (data, rendering, export, controller) [#1-8](https://github.com/timLP79/dynamic-sow/issues) ✓
- [x] Zero build process - just open and run [#7](https://github.com/timLP79/dynamic-sow/issues/7) ✓
- [x] GitHub Pages deployment ready [#7](https://github.com/timLP79/dynamic-sow/issues/7) ✓

---

## 🚧 In Progress

- [ ] TBD (check GitHub Project Board for current work)

---

## 📋 Planned Features (Backlog)

### Additional Products
- [ ] **Logo** - Logo product architecture flowchart [#9](https://github.com/timLP79/dynamic-sow/issues/9)
- [ ] **Signatures** - Signatures product flowchart [#10](https://github.com/timLP79/dynamic-sow/issues/10)
- [ ] **DDC** - DDC standalone product flowchart [#11](https://github.com/timLP79/dynamic-sow/issues/11)
- [ ] **Travel Demo** - Travel demo flow
- [ ] **Orders (PS)** - Orders processing flow
- [ ] **Challenge (AR)** - Account review challenge flow
- [ ] **Alerts (KCM)** - Kount case management alerts

### Export Enhancements
- [ ] PDF export option [#13](https://github.com/timLP79/dynamic-sow/issues/13)
- [ ] Copy to clipboard functionality [#14](https://github.com/timLP79/dynamic-sow/issues/14)
- [ ] Email integration (mailto: with embedded image)
- [ ] Shareable URLs with query parameters [#15](https://github.com/timLP79/dynamic-sow/issues/15)
- [ ] Save/load custom flowcharts from browser storage

### UI/UX Improvements
- [ ] Dark mode toggle [#16](https://github.com/timLP79/dynamic-sow/issues/16)
- [ ] Zoom/pan controls for large diagrams [#17](https://github.com/timLP79/dynamic-sow/issues/17)
- [ ] Fullscreen mode for flowchart view
- [ ] Print-optimized CSS
- [ ] Keyboard shortcuts (arrow keys for product navigation) [#18](https://github.com/timLP79/dynamic-sow/issues/18)
- [ ] Search/filter for products when list grows large
- [ ] Animated transitions between flowcharts

### Flowchart Customization
- [ ] Color theme picker (default, neutral, dark, forest)
- [ ] Font size adjustment
- [ ] Custom brand colors override
- [ ] Editable Mermaid code before rendering
- [ ] Multiple variations per product

### Developer Features
- [ ] JSON/YAML config file for products (easier for non-devs)
- [ ] Flowchart validation before rendering
- [ ] Live preview mode when editing flowchart-data.js
- [ ] Admin panel for managing products (future)

### Quality & Performance
- [ ] Unit tests for core functions
- [ ] E2E tests with Playwright
- [ ] Performance monitoring for large flowcharts
- [ ] Lazy loading for multiple products
- [ ] Service worker for offline capability

---

## 🐛 Known Issues

### High Priority
- [ ] BLOCK outcome in NAO flowchart doesn't have an exit arrow (currently just implied) [#12](https://github.com/timLP79/dynamic-sow/issues/12)

### Low Priority
- [ ] PNG export quality could be better for very large diagrams [#19](https://github.com/timLP79/dynamic-sow/issues/19)
- [ ] Mobile landscape mode could use better spacing
- [ ] Export filename doesn't sanitize special characters from product name

### Browser-Specific
- [ ] Safari sometimes requires double-click on product card (needs investigation) [#20](https://github.com/timLP79/dynamic-sow/issues/20)

---

## 💡 Enhancement Ideas

### User Requests
- [ ] Combine multiple products into one comprehensive flowchart
- [ ] Add notes/annotations to exported diagrams
- [ ] Version history for flowchart changes
- [ ] Client-specific branding (custom colors, logo)

### Technical Debt
- [ ] Consider migrating to Vite for better dev experience (but keep no-build prod)
- [ ] Add TypeScript types for better IDE support
- [ ] Create reusable component library for consistent styling
- [ ] Add linting (ESLint) and formatting (Prettier)

### Integration Ideas
- [ ] Confluence plugin for embedding flowcharts
- [ ] Slack integration for sharing diagrams
- [ ] API endpoint for programmatic flowchart generation
- [ ] CLI tool for batch export

---

## Implementation Priorities

### Phase 1: Core Products (Next Sprint)
1. Add Logo product flowchart [#9](https://github.com/timLP79/dynamic-sow/issues/9)
2. Add Signatures product flowchart [#10](https://github.com/timLP79/dynamic-sow/issues/10)
3. Add DDC product flowchart [#11](https://github.com/timLP79/dynamic-sow/issues/11)
4. Fix BLOCK outcome missing arrow in NAO [#12](https://github.com/timLP79/dynamic-sow/issues/12)

### Phase 2: Export Improvements
1. PDF export [#13](https://github.com/timLP79/dynamic-sow/issues/13)
2. Copy to clipboard [#14](https://github.com/timLP79/dynamic-sow/issues/14)
3. Shareable URLs [#15](https://github.com/timLP79/dynamic-sow/issues/15)

### Phase 3: UX Polish
1. Dark mode [#16](https://github.com/timLP79/dynamic-sow/issues/16)
2. Zoom/pan controls [#17](https://github.com/timLP79/dynamic-sow/issues/17)
3. Keyboard shortcuts [#18](https://github.com/timLP79/dynamic-sow/issues/18)

### Phase 4: Advanced Features
1. Flowchart customization
2. Multiple variations per product
3. Admin panel

---

## Key Design Decisions

### 1. **Pure Vanilla JavaScript (No Framework)**
- **Why:** Keeps bundle size tiny (~15KB), no build step, easy to understand
- **Trade-off:** More verbose than React/Vue, but better for learning and maintenance

### 2. **ES6 Modules with CDN Libraries**
- **Why:** Modern, clean imports, no npm dependencies
- **Trade-off:** Requires web server (can't use file://), but GitHub Pages solves this

### 3. **Data-Driven Product Cards**
- **Why:** Adding new products is just editing one file (flowchart-data.js)
- **Trade-off:** All product data loaded upfront (fine for <20 products)

### 4. **Subgraph-Based Flowchart Layout**
- **Why:** Clean visual grouping, easier to understand complex flows
- **Trade-off:** Takes more horizontal space, but we have room

### 5. **Client-Side Only (No Backend)**
- **Why:** Simple deployment, privacy (no data sent to server), fast
- **Trade-off:** Can't save/share flowcharts without browser storage or URL params

---

## Verification Checklist

### Development
- [x] Local web server starts without errors
- [x] All JavaScript modules load correctly
- [x] Mermaid renders without console errors
- [x] Product card selection highlights correctly
- [x] Export buttons enable/disable appropriately

### Functionality
- [x] NAO flowchart renders with correct layout
- [x] SVG export downloads with correct filename
- [x] PNG export produces high-quality image
- [x] Responsive layout works on mobile (tested 375px width)
- [x] All links in README work correctly

### Browser Compatibility
- [x] Chrome 120+ (tested)
- [x] Firefox 115+ (tested)
- [ ] Safari 14+ (needs testing)
- [ ] Edge 120+ (needs testing)

### Performance
- [x] Initial load < 1 second (on good connection)
- [x] Flowchart render < 200ms
- [x] SVG export < 100ms
- [ ] PNG export < 2 seconds (needs optimization)

---

## Development Workflow

### Adding a New Product

1. **Create Mermaid code** in `plan/` directory (e.g., `LOGO.txt`)
2. **Test in Mermaid Live Editor:** https://mermaid.live
3. **Add to `js/flowchart-data.js`:**
   ```javascript
   LOGO: {
     id: 'logo',
     name: 'Logo',
     description: 'Logo product architecture flow',
     mermaidCode: `flowchart LR
       // your code here
     `
   }
   ```
4. **Refresh browser** - product card appears automatically
5. **Test export** - verify SVG and PNG work correctly
6. **Commit and push** to GitHub

### Testing Locally
```bash
cd /run/host/var/home/tim/work-projects/dynamic-sow
python3 -m http.server 8000
# Open http://localhost:8000
```

### Deploying to GitHub Pages
```bash
git add .
git commit -m "Add new product: Logo"
git push origin main
# Wait ~1 minute for GitHub Pages to rebuild
```

---

## Metrics & Goals

### Current Stats (v1.0)
- **Products:** 1 (NAO)
- **Code Size:** ~15KB (uncompressed)
- **Lines of Code:** ~500
- **Load Time:** <1 second
- **Browser Support:** 3/4 major browsers tested

### Goals for v2.0
- **Products:** 5+ (Logo, Signatures, DDC, Travel Demo, Orders)
- **Code Size:** <25KB
- **Load Time:** <1.5 seconds
- **Browser Support:** 4/4 major browsers
- **Test Coverage:** >80%

---

## Resources

### Documentation
- Mermaid.js Docs: https://mermaid.js.org/syntax/flowchart.html
- Mermaid Live Editor: https://mermaid.live
- html2canvas Docs: https://html2canvas.hertzen.com/

### References
- Original whiteboard design: `plan/PXL_20260209_213536921.jpg`
- NAO flowchart source: `plan/NAO.txt`

### Similar Projects
- cs408-go-stack: `/run/host/var/home/tim/bsu/spring2026/cs408/go-full-stack/`

---

---

## 📊 Issue Tracking Summary

### ✅ Completed (8 issues closed)
- [#1](https://github.com/timLP79/dynamic-sow/issues/1) - Implement two-panel responsive layout ✓
- [#2](https://github.com/timLP79/dynamic-sow/issues/2) - Implement dynamic product card generation ✓
- [#3](https://github.com/timLP79/dynamic-sow/issues/3) - Integrate Mermaid.js for live flowchart rendering ✓
- [#4](https://github.com/timLP79/dynamic-sow/issues/4) - Implement SVG export functionality ✓
- [#5](https://github.com/timLP79/dynamic-sow/issues/5) - Implement PNG export functionality ✓
- [#6](https://github.com/timLP79/dynamic-sow/issues/6) - Implement NAO product flowchart ✓
- [#7](https://github.com/timLP79/dynamic-sow/issues/7) - Create comprehensive documentation ✓
- [#8](https://github.com/timLP79/dynamic-sow/issues/8) - Create project roadmap and tracking document ✓

### 🔓 Open Issues (12 active)

**High Priority - Products (4 issues):**
- [#9](https://github.com/timLP79/dynamic-sow/issues/9) - Add Logo product flowchart
- [#10](https://github.com/timLP79/dynamic-sow/issues/10) - Add Signatures product flowchart
- [#11](https://github.com/timLP79/dynamic-sow/issues/11) - Add DDC product flowchart
- [#12](https://github.com/timLP79/dynamic-sow/issues/12) - Fix BLOCK outcome missing exit arrow in NAO (bug)

**Export Enhancements (3 issues):**
- [#13](https://github.com/timLP79/dynamic-sow/issues/13) - Add PDF export functionality
- [#14](https://github.com/timLP79/dynamic-sow/issues/14) - Add copy to clipboard functionality
- [#19](https://github.com/timLP79/dynamic-sow/issues/19) - Improve PNG export quality for large diagrams (bug)

**UI/UX Improvements (4 issues):**
- [#15](https://github.com/timLP79/dynamic-sow/issues/15) - Implement shareable URLs with query parameters
- [#16](https://github.com/timLP79/dynamic-sow/issues/16) - Add dark mode toggle
- [#17](https://github.com/timLP79/dynamic-sow/issues/17) - Add zoom/pan controls for large diagrams
- [#18](https://github.com/timLP79/dynamic-sow/issues/18) - Add keyboard shortcuts

**Testing (1 issue):**
- [#20](https://github.com/timLP79/dynamic-sow/issues/20) - Add browser compatibility testing for Safari

### 🏷️ Labels Used
- `completed` - Work that has been completed (green)
- `enhancement` - New feature or request (light blue)
- `bug` - Something isn't working (red)
- `product` - Product-specific feature or flowchart (blue)
- `export` - Export functionality (yellow)
- `ui/ux` - User interface improvements (purple)
- `documentation` - Documentation improvements (blue)
- `testing` - Testing and QA (light blue)

---

**Last Updated:** February 10, 2026
**Current Version:** 1.0
**Next Milestone:** Add 3 more products (Logo, Signatures, DDC)
**Total Issues:** 20 (8 closed, 12 open)
