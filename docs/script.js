/* script.js - Dynamic Component Loader with Script Execution */

function loadComponent(elementId, fileUrl, priority = 'normal') {
    return fetch(fileUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fileUrl}: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const container = document.getElementById(elementId);
            if (!container) {
                console.error(`Container #${elementId} not found`);
                return;
            }
            
            container.innerHTML = html;

            // Execute any <script> tags in the loaded content
            const scripts = container.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                
                // Copy all attributes
                [...oldScript.attributes].forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                
                // Copy inline script content
                if (oldScript.textContent) {
                    newScript.textContent = oldScript.textContent;
                }
                
                // Replace to trigger execution
                oldScript.parentNode.replaceChild(newScript, oldScript);
            });

            console.log(`✅ Loaded ${elementId} (${priority})`);
        })
        .catch(error => {
            console.error(`❌ Error loading ${elementId}:`, error);
            document.getElementById(elementId).innerHTML = 
                `<div style="padding:2rem;text-align:center;color:#e74c3c;font-family:sans-serif">
                    ⚠️ Failed to load ${fileUrl}.<br>
                    <small>Please ensure you're running on a local server (not file://)</small>
                </div>`;
        });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing Kadongo Resort...');
    
    // Load header first (critical for navigation)
    loadComponent('header-placeholder', 'header.html', 'critical')
        .then(() => loadComponent('footer-placeholder', 'footer.html', 'normal'))
        .then(() => {
            console.log('✨ All components loaded successfully');
        });
});

// Fallback: If DOM already loaded, load immediately
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('⚡ DOM already ready, loading components immediately...');
    loadComponent('header-placeholder', 'header.html', 'critical');
    loadComponent('footer-placeholder', 'footer.html', 'normal');
}

// Global function to highlight active nav link (called from index.html)
function highlightActiveLink() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href === currentFile || (href === 'index.html' && currentFile === '') || (href === '' && currentFile === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}