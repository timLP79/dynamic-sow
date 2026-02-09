/**
 * Flowchart Exporter Module
 *
 * Handles exporting flowcharts to SVG and PNG formats.
 */

export const FlowchartExporter = {

  /**
   * Export the flowchart as SVG
   * @param {string} productName - Name of the product for filename
   */
  exportSVG(productName) {
    try {
      const svgElement = document.querySelector('#flowchartContainer svg');

      if (!svgElement) {
        console.error('No SVG element found to export');
        alert('No flowchart to export. Please select a product first.');
        return;
      }

      // Clone the SVG to avoid modifying the displayed version
      const svgClone = svgElement.cloneNode(true);

      // Ensure SVG has proper XML namespace
      svgClone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svgClone.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');

      // Serialize SVG to string
      const svgData = new XMLSerializer().serializeToString(svgClone);

      // Create blob and download
      const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const filename = this.generateFilename(productName, 'svg');

      this.downloadFile(blob, filename);

    } catch (error) {
      console.error('Error exporting SVG:', error);
      alert('Failed to export SVG. Please try again.');
    }
  },

  /**
   * Export the flowchart as PNG
   * @param {string} productName - Name of the product for filename
   */
  async exportPNG(productName) {
    try {
      const diagramContainer = document.querySelector('#flowchartContainer .mermaid-diagram');

      if (!diagramContainer) {
        console.error('No diagram found to export');
        alert('No flowchart to export. Please select a product first.');
        return;
      }

      // Check if html2canvas is loaded
      if (typeof html2canvas === 'undefined') {
        console.error('html2canvas library not loaded');
        alert('PNG export is currently unavailable. Please try SVG export instead.');
        return;
      }

      // Show loading state (optional - you could add a loading indicator)
      console.log('Generating PNG...');

      // Convert to canvas with high quality
      const canvas = await html2canvas(diagramContainer, {
        backgroundColor: '#ffffff',
        scale: 2, // 2x resolution for better quality
        logging: false,
        useCORS: true
      });

      // Convert canvas to blob
      canvas.toBlob((blob) => {
        if (blob) {
          const filename = this.generateFilename(productName, 'png');
          this.downloadFile(blob, filename);
        } else {
          throw new Error('Failed to create PNG blob');
        }
      }, 'image/png');

    } catch (error) {
      console.error('Error exporting PNG:', error);
      alert('Failed to export PNG. Please try again or use SVG export instead.');
    }
  },

  /**
   * Generate a filename for the export
   * @param {string} productName - Name of the product
   * @param {string} extension - File extension (svg or png)
   * @returns {string} - Generated filename
   */
  generateFilename(productName, extension) {
    const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const safeName = productName.toLowerCase().replace(/\s+/g, '-');
    return `${safeName}-flowchart-${date}.${extension}`;
  },

  /**
   * Trigger file download
   * @param {Blob} blob - File blob to download
   * @param {string} filename - Filename for the download
   */
  downloadFile(blob, filename) {
    try {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;

      // Trigger download
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      console.log(`Successfully exported: ${filename}`);

    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Failed to download file. Please try again.');
    }
  }
};
