fetch('./assets/data/website.json')
    .then(response => response.json())
    .then(websiteData => {
        let html = '';

        websiteData.forEach(entry => {
            const category = entry.category;
            const paths = entry.paths;

            html += `<h2 class="h2 section-title" style="--fs-2: 4rem; margin-top: 30px; margin-bottom: 10px; color: #333300;">${category}</h2>\n`;

            html += '<ul class="service-list">\n';

            paths.forEach(path => {
                html += '<li>\n';
                html += '<div class="service-card">\n';
                html += `<figure class="card-banner">\n`;
                html += `<img src="${path.pic}" width="728" height="344" loading="lazy" alt="${path.name}" class="w-100">\n`;
                html += '</figure>\n';
                html += '<div class="card-content">\n';
                html += `<h3 class="h3"><a href="${path.path}/index.html" class="card-title">${path.name}</a></h3>\n`;
                html += `<p class="card-text">${category} Website for your ${path.name.toLowerCase().replace(" ", "_")} shop.</p>\n`;
                html += `<a href="${path.path}/index.html" class="btn-link"><span class="span">Visit Website</span></a>\n`;
                html += '</div>\n';
                html += '</div>\n';
                html += '</li>\n';
            });

            html += '</ul>\n';
        });

        document.getElementById('dynamic-content').innerHTML = html;
        
        // Additional code to center-align cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            const cardCount = paths.length;
            if (cardCount < 3) {
                card.style.margin = '0 auto';
            }
        });
    });
