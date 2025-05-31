    $(document).ready(function() {
        $('a[href^="#button-four-Losha-"]').each(function() {
            var hrefRemainder = $(this).attr('href').replace('#button-four-Losha-', '');
            var parts = hrefRemainder.split(':');
            var colorPart = parts[0];
            var baseUrl = parts.slice(1).join(':');
            var colors = colorPart.split('-');
            var gradient = colors.length === 1 ? `linear-gradient(90deg, ${colors[0]}, ${colors[0]})` : `linear-gradient(90deg, ${colors.join(', ')})`;

            $(this).attr('href', baseUrl);
            $(this).css({
                'display': 'inline-block',
                'padding': '10px 20px',
                'background': gradient,
                'background-size': '200% auto',
                'background-position': 'left center',
                'color': '#ffffff',
                'text-decoration': 'none',
                'border-radius': '10px',
                'font-weight': 'bold',
                'transition': 'background-position 0.4s ease-in-out, transform 0.4s ease',
                'border': `2px solid ${colors[0]}`,
                'cursor': 'pointer',
                'z-index': '1000',
                'overflow': 'hidden',
                'max-width': '100%',
                'margin': '15px'
            });

            $(this).hover(
                function() {
                    $(this).css('background-position', 'right center');
                    $(this).css('transform', 'scale(1.05)');
                },
                function() {
                    $(this).css('background-position', 'left center');
                    $(this).css('transform', 'scale(1)');
                }
            );
        });
    });
