/**
 * Flowchart Renderer Module
 *
 * Handles Mermaid.js initialization and flowchart rendering.
 */

export const FlowchartRenderer = {
  container: null,
  initialized: false,

  /**
   * Initialize the renderer with a container element
   * @param {string} containerId - The ID of the container element
   */
  init(containerId) {
    this.container = document.getElementById(containerId);

    if (!this.container) {
      console.error(`Container element #${containerId} not found`);
      return;
    }

    // Initialize Mermaid.js with configuration
    if (window.mermaid) {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: 'basis',
          padding: 20
        },
        fontSize: 16,
        themeVariables: {
          primaryColor: '#dbeafe',
          primaryTextColor: '#1e293b',
          primaryBorderColor: '#2563eb',
          lineColor: '#64748b',
          secondaryColor: '#f1f5f9',
          tertiaryColor: '#f8fafc',
          fontSize: '16px'
        }
      });
      this.initialized = true;
    } else {
      console.error('Mermaid.js not loaded');
    }
  },

  /**
   * Render a Mermaid flowchart
   * @param {string} mermaidCode - The Mermaid diagram code
   * @returns {Promise<void>}
   */
  async render(mermaidCode) {
    if (!this.initialized) {
      console.error('Renderer not initialized');
      return;
    }

    try {
      // Clear previous content
      this.clear();

      // Show loading state
      this.container.innerHTML = '<div class="loading"></div>';

      // Generate unique ID for this diagram
      const diagramId = `mermaid-diagram-${Date.now()}`;

      // Render the diagram
      const { svg } = await window.mermaid.render(diagramId, mermaidCode);

      // Create container for the diagram
      const diagramContainer = document.createElement('div');
      diagramContainer.className = 'mermaid-diagram';
      diagramContainer.innerHTML = svg;

      // Clear loading and insert diagram
      this.container.innerHTML = '';
      this.container.appendChild(diagramContainer);

    } catch (error) {
      console.error('Error rendering flowchart:', error);
      this.showError('Failed to render flowchart. Please check the Mermaid syntax.');
    }
  },

  /**
   * Clear the container
   */
  clear() {
    if (this.container) {
      this.container.innerHTML = '';
    }
  },

  /**
   * Show placeholder message
   */
  showPlaceholder() {
    if (this.container) {
      this.container.innerHTML = `
        <div class="empty-state">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="8" y="16" width="48" height="32" rx="4"/>
            <path d="M16 24h32M16 32h32M16 40h24"/>
          </svg>
          <p>Select a product from the left panel to view its flowchart</p>
        </div>
      `;
    }
  },

  /**
   * Show error message
   * @param {string} message - Error message to display
   */
  showError(message) {
    if (this.container) {
      this.container.innerHTML = `
        <div class="empty-state">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="32" cy="32" r="24"/>
            <path d="M32 20v16M32 44v.5"/>
          </svg>
          <p>${message}</p>
        </div>
      `;
    }
  }
};
