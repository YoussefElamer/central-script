 $(document).ready(function() {
        $('a[href^="#button-five-Losha-"]').each(function() {
            var hrefRemainder = $(this).attr('href').replace('#button-five-Losha-', '');
            var parts = hrefRemainder.split(':');
            var colors = parts[0].split('-'); 
            var baseUrl = parts.slice(1).join(':');
            $(this).attr('href', baseUrl);
            var gradientColors = colors.join(', '); 
            var backgroundColor = `linear-gradient(45deg, ${gradientColors})`;
            $(this).css({
                'display': 'inline-block',
                'padding': '12px 30px', 
                'background-image': backgroundColor, 
                'color': '#ffffff', 
                'text-decoration': 'none', 
                'border-radius': '25px', 
                'font-weight': 'bold',
                'box-shadow': '0 4px 20px rgba(0, 0, 0, 0.3)', 
                'border': `2px solid ${colors[0]}`, 
                'cursor': 'pointer', 
                'transition': 'background 0.3s ease, color 0.3s ease, transform 0.3s ease',
                'z-index': '1000',
                'overflow': 'hidden',
                'max-width': '100%',
                'margin': '15px'
            });

            function adjustColor(color, amount) {
                let usePound = false;
                if (color[0] === "#") {
                    color = color.slice(1);
                    usePound = true;
                }
                let num = parseInt(color, 16);
                let r = (num >> 16) + amount;
                let g = ((num >> 8) & 0x00FF) + amount;
                let b = (num & 0x0000FF) + amount;
                if (r > 255) r = 255;
                else if (r < 0) r = 0;
                if (g > 255) g = 255;
                else if (g < 0) g = 0;
                if (b > 255) b = 255;
                else if (b < 0) b = 0;
                return (usePound ? "#" : "") + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
            }

            $(this).hover(
                function() {
                    var hoverColors = colors.map(function(color) {
                        return adjustColor(color, -50); 
                    });
                    var hoverGradient = `linear-gradient(45deg, ${hoverColors.join(', ')})`;
                    $(this).css({
                        'background-image': hoverGradient,
                        'transform': 'scale(1.05)'
                    });
                },
                function() {
                    var originalGradient = `linear-gradient(45deg, ${gradientColors})`;
                    $(this).css({
                        'background-image': originalGradient,
                        'transform': 'scale(1)' 
                    });
                }
            );

            $(this).mousedown(function() {
                $(this).css('transform', 'scale(0.95)');
            });

            $(this).mouseup(function() {
                $(this).css('transform', 'scale(1)');
            });
        });
    });
