/**
 * Dynamic SOW - Main Application Controller
 *
 * Coordinates between UI, renderer, and exporter modules.
 */

import { FlowchartData } from './flowchart-data.js';
import { FlowchartRenderer } from './renderer.js';
import { FlowchartExporter } from './exporter.js';

const App = {
  currentProduct: null,

  /**
   * Initialize the application
   */
  init() {
    // Wait for Mermaid to be loaded before rendering
    this.waitForMermaid().then(() => {
      // Initialize renderer
      FlowchartRenderer.init('flowchartContainer');

      // Render product cards
      this.renderProductCards();

      // Set up export button handlers
      this.setupExportButtons();

      console.log('Dynamic SOW initialized successfully');
    });
  },

  /**
   * Wait for Mermaid library to be loaded
   */
  waitForMermaid() {
    return new Promise((resolve) => {
      const checkMermaid = () => {
        if (window.mermaid) {
          resolve();
        } else {
          setTimeout(checkMermaid, 100);
        }
      };
      checkMermaid();
    });
  },

  /**
   * Dynamically render product cards from FlowchartData
   */
  renderProductCards() {
    const container = document.getElementById('productCards');

    if (!container) {
      console.error('Product cards container not found');
      return;
    }

    // Clear existing content
    container.innerHTML = '';

    // Generate a card for each product
    Object.values(FlowchartData).forEach(product => {
      const card = this.createProductCard(product);
      container.appendChild(card);
    });
  },

  /**
   * Create a product card element
   * @param {Object} product - Product data object
   * @returns {HTMLElement} - Card element
   */
  createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productId = product.id;

    card.innerHTML = `
      <h3 class="product-card__title">${product.name}</h3>
      <p class="product-card__description">${product.description}</p>
    `;

    // Add click handler
    card.addEventListener('click', () => this.selectProduct(product.id));

    return card;
  },

  /**
   * Handle product selection
   * @param {string} productId - ID of the selected product
   */
  async selectProduct(productId) {
    // Find the product data
    const product = Object.values(FlowchartData).find(p => p.id === productId);

    if (!product) {
      console.error(`Product ${productId} not found`);
      return;
    }

    // Update current product
    this.currentProduct = product;

    // Update UI state
    this.updateProductCardStates(productId);
    this.updateFlowchartTitle(product.name);

    // Render the flowchart
    await FlowchartRenderer.render(product.mermaidCode);

    // Enable export buttons
    this.enableExportButtons();

    // Close offcanvas on mobile after selecting a product
    const sidebarEl = document.getElementById('sidebarPanel');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(sidebarEl);
    if (bsOffcanvas) bsOffcanvas.hide();
  },

  /**
   * Update active state of product cards
   * @param {string} activeProductId - ID of the active product
   */
  updateProductCardStates(activeProductId) {
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
      if (card.dataset.productId === activeProductId) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  },

  /**
   * Update the flowchart panel title
   * @param {string} productName - Name of the product
   */
  updateFlowchartTitle(productName) {
    const titleElement = document.getElementById('flowchartTitle');

    if (titleElement) {
      titleElement.textContent = `${productName} Flowchart`;
    }
  },

  /**
   * Set up export button event handlers
   */
  setupExportButtons() {
    const svgButton = document.getElementById('exportSVG');
    const pngButton = document.getElementById('exportPNG');

    if (svgButton) {
      svgButton.addEventListener('click', () => this.handleExportSVG());
    }

    if (pngButton) {
      pngButton.addEventListener('click', () => this.handleExportPNG());
    }
  },

  /**
   * Enable export buttons
   */
  enableExportButtons() {
    const svgButton = document.getElementById('exportSVG');
    const pngButton = document.getElementById('exportPNG');

    if (svgButton) svgButton.disabled = false;
    if (pngButton) pngButton.disabled = false;
  },

  /**
   * Disable export buttons
   */
  disableExportButtons() {
    const svgButton = document.getElementById('exportSVG');
    const pngButton = document.getElementById('exportPNG');

    if (svgButton) svgButton.disabled = true;
    if (pngButton) pngButton.disabled = true;
  },

  /**
   * Handle SVG export button click
   */
  handleExportSVG() {
    if (!this.currentProduct) {
      alert('Please select a product first');
      return;
    }

    FlowchartExporter.exportSVG(this.currentProduct.name);
  },

  /**
   * Handle PNG export button click
   */
  handleExportPNG() {
    if (!this.currentProduct) {
      alert('Please select a product first');
      return;
    }

    FlowchartExporter.exportPNG(this.currentProduct.name);
  }
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
