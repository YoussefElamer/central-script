document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#button-six-Losha-"]').forEach(function(link) {
        var hrefRemainder = link.getAttribute('href').replace('#button-six-Losha-', '');
        var parts = hrefRemainder.split(':');
        var colorPart = parts[0];
        var baseUrl = parts.slice(1).join(':');
        var colors = colorPart.split('-');
        var gradient;
        if (colors.length === 1) {
            gradient = `linear-gradient(to right, ${colors[0]}, ${colors[0]})`;
        } else {
            gradient = `linear-gradient(to right, ${colors.join(', ')})`;
        }
        link.href = baseUrl;
        link.style.display = "inline-block";
        link.style.padding = "12px 25px";
        link.style.background = gradient;
        link.style.color = "#fff";
        link.style.textDecoration = "none";
        link.style.borderRadius = "50px";
        link.style.fontWeight = "600";
        link.style.fontSize = "16px";
        link.style.transition = "transform 0.4s ease, box-shadow 0.4s ease"; // التأكد من أن الـ transition مضاف على الخصائص بشكل صحيح
        link.style.border = "none";
        link.style.cursor = "pointer";
        link.style.textAlign = "center";
        var shadowColor = colors[0] + "80";
        link.style.boxShadow = `0 4px 15px ${shadowColor}`;
        
        link.addEventListener('mouseover', function() {
            this.style.transform = "scale(1.05)"; // التأثيرات عند تحريك الماوس
            var hoverShadowColor = colors[0] + "cc";
            this.style.boxShadow = `0 6px 20px ${hoverShadowColor}`;
        });
        link.addEventListener('mouseout', function() {
            this.style.transform = "scale(1)";
            this.style.boxShadow = `0 4px 15px ${shadowColor}`;
        });
    });
});
