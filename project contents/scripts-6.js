// Function to scroll to the corresponding section
function scrollToSection(sectionId) {
    console.log("Attempting to scroll to:", sectionId);  // Log which section it tries to scroll to
    const element = document.getElementById(sectionId);
    if (element) {
      console.log("Found element, scrolling now.");
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log("Element not found for id:", sectionId);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("Document is ready. Setting up click events.");
    // Add event listeners to headings in the table of contents
    addClickEvent('data-overview', 'content-data-overview');
    addClickEvent('EDR', 'content-EDR');
    addClickEvent('DE', 'content-DE');
    addClickEvent('MV', 'content-MV');
    addClickEvent('solution', 'content-solution');
    addClickEvent('case-solution', 'content-case-solution');
    addClickEvent('results', 'content-results');
    addClickEvent('visualization', 'content-visualization');
});
  
function addClickEvent(tocId, targetId) {
    const tocElement = document.getElementById(tocId);
    if (tocElement) {
      console.log("Setting up click event for:", tocId);
      tocElement.onclick = function() {
        scrollToSection(targetId);
      };
    } else {
      console.log("TOC element not found for id:", tocId);
    }
}


