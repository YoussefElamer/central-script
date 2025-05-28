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

   $(document).ready(function() {
        $('a[href^="#button-five-losha-"]').each(function() {
            var hrefRemainder = $(this).attr('href').replace('#button-five-losha-', '');
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
  <script>
    document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
        document.querySelectorAll(&#39;a[href^=&quot;#button-one-Losha:&quot;]&#39;).forEach(function(link) {
            var url = link.getAttribute(&#39;href&#39;).replace(&#39;#button-one-Losha:&#39;, &#39;&#39;); // استخراج الرابط
            
            // تغيير الرابط إلى الرابط المستخرج
            link.href = url;
     

            // إضافة بعض الأنماط على الرابط
            link.style.display = &quot;inline-block&quot;;
            link.style.padding = &quot;10px 20px&quot;;
            link.style.background = &quot;linear-gradient(45deg, #ff69b4, #ed0bea)&quot;;
            link.style.color = &quot;#ffffff&quot;;
            link.style.textDecoration = &quot;none&quot;;
            link.style.borderRadius = &quot;10px&quot;;
            link.style.fontWeight = &quot;bold&quot;;
            link.style.transition = &quot;background 0.3s ease, color 0.3s ease&quot;;
            link.style.border = &quot;2px solid #ed0bea&quot;;
            link.style.cursor = &quot;pointer&quot;;

            // إضافة تأثير التحويم
            link.addEventListener(&#39;mouseover&#39;, function() {
                this.style.background = &quot;linear-gradient(45deg, #ed0bea, #ff69b4)&quot;;
                this.style.color = &quot;black&quot;; // لون النص عند التحويم
            });

            link.addEventListener(&#39;mouseout&#39;, function() {
                this.style.background = &quot;linear-gradient(45deg, #ff69b4, #ed0bea)&quot;;
                this.style.color = &quot;#ffffff&quot;; // لون النص يعود كما كان
            });
        });
    });
</script>
 
<script>
    document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
        document.querySelectorAll(&#39;a[href^=&quot;#button-three-Losha:&quot;]&#39;).forEach(function(link) {
            var url = link.getAttribute(&#39;href&#39;).replace(&#39;#button-three-Losha:&#39;, &#39;&#39;); // استخراج الرابط
            
            // تغيير الرابط إلى الرابط المستخرج
            link.href = url;
     

            // إضافة الأنماط على الرابط
            link.style.display = &quot;inline-block&quot;;
            link.style.padding = &quot;12px 25px&quot;; /* حجم الزر */
            link.style.backgroundColor = &quot;var(--keycolor)&quot;; /* خلفية الزر بلون الرئيسي */
            link.style.color = &quot;var(--link-color)&quot;; /* لون النص بلون الرابط */
            link.style.textDecoration = &quot;none&quot;; /* إزالة الخط السفلي */
            link.style.borderRadius = &quot;50px&quot;; /* زوايا دائرية بشكل أكثر وضوح&#1611;ا */
            link.style.fontWeight = &quot;bold&quot;;
            link.style.boxShadow = &quot;0 4px 15px rgba(0, 0, 0, 0.3)&quot;; /* إضافة ظل أكثر عمق&#1611;ا للزر */
            link.style.transition = &quot;background 0.3s ease, color 0.3s ease, transform 0.3s ease&quot;; /* تأثير الانتقال */
            link.style.border = &quot;2px solid transparent&quot;; /* لون الحدود شفاف في البداية */
            link.style.cursor = &quot;pointer&quot;; /* شكل مؤشر الفأرة */

            // إضافة تأثير التحويم
            link.addEventListener(&#39;mouseover&#39;, function() {
                this.style.backgroundColor = &quot;var(--link-color)&quot;; /* تغيير الخلفية عند التحويم للون الروابط */
                this.style.color = &quot;var(--keycolor)&quot;; /* لون النص يصبح لون الرئيسي */
                this.style.border = &quot;2px solid var(--keycolor)&quot;; /* جعل لون الحدود بلون الرئيسي */
                this.style.transform = &quot;translateY(-2px)&quot;; /* تأثير رفع الزر عند التحويم */
            });

            link.addEventListener(&#39;mouseout&#39;, function() {
                this.style.backgroundColor = &quot;var(--keycolor)&quot;; /* العودة للخلفية الأصلية */
                this.style.color = &quot;var(--link-color)&quot;; /* العودة للون النص الأصلي */
                this.style.border = &quot;2px solid transparent&quot;; /* جعل لون الحدود شفاف مرة أخرى */
                this.style.transform = &quot;translateY(0)&quot;; /* العودة للوضع الأصلي عند الخروج من التحويم */
            });
        });
    });
</script>
<script>
    document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
        document.querySelectorAll(&#39;a[href^=&quot;#button-two-losha:&quot;]&#39;).forEach(function(link) {
            var url = link.getAttribute(&#39;href&#39;).replace(&#39;#button-two-losha:&#39;, &#39;&#39;);
            link.href = url;

            // تصميم الزر
            link.style.display = &#39;inline-block&#39;;
            link.style.padding = &#39;12px 30px&#39;; /* حجم الزر */
            link.style.backgroundColor = &#39;#6a1cb7&#39;; /* لون الخلفية */
            link.style.color = &#39;#ffffff&#39;; /* لون النص أبيض */
            link.style.textDecoration = &#39;none&#39;; /* إزالة الخط السفلي */
            link.style.borderRadius = &#39;25px&#39;; /* زوايا دائرية أكبر */
            link.style.fontWeight = &#39;bold&#39;;
            link.style.boxShadow = &#39;0 4px 20px rgba(0, 0, 0, 0.3)&#39;; /* ظل أعمق */
            link.style.border = &#39;2px solid #ed0bea&#39;; /* لون الحدود */
            link.style.cursor = &#39;pointer&#39;; /* شكل مؤشر الفأرة */
            link.style.transition = &#39;background 0.3s ease, color 0.3s ease, transform 0.3s ease&#39;; /* تأثير الانتقال */

            // تأثير التحويم
            link.addEventListener(&#39;mouseover&#39;, function() {
                link.style.backgroundColor = &#39;#ed0bea&#39;; /* لون الخلفية عند التحويم */
                link.style.transform = &#39;scale(1.05)&#39;; /* تكبير الزر عند التحويم */
            });

            // تأثير الخروج
            link.addEventListener(&#39;mouseout&#39;, function() {
                link.style.backgroundColor = &#39;#6a1cb7&#39;; /* لون الخلفية الأصلي */
                link.style.transform = &#39;scale(1)&#39;; /* العودة للحجم الأصلي */
            });

            // تأثير الضغط
            link.addEventListener(&#39;mousedown&#39;, function() {
                link.style.transform = &#39;scale(0.95)&#39;; /* تصغير الزر عند الضغط */
            });
            link.addEventListener(&#39;mouseup&#39;, function() {
                link.style.transform = &#39;scale(1)&#39;; /* العودة للحجم الأصلي بعد الضغط */
            });
        });
    });
</script>
<script>
    document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
        document.querySelectorAll(&#39;a[href=&quot;#note-success&quot;]&#39;).forEach(function(link) {
            link.style.display = &#39;inline-block&#39;;
            link.style.padding = &#39;20px&#39;;
            link.style.backgroundColor = &#39;#d4edda&#39;;  /* لون الخلفية */
            link.style.color = &#39;#155724&#39;;  /* لون النص */
            link.style.borderRight = &#39;25px solid #28a745&#39;;  /* زيادة سمك الشريط الأخضر */
            link.style.borderRadius = &#39;10px&#39;;
            link.style.fontSize = &#39;1.2em&#39;;
            link.style.boxShadow = &#39;0 4px 6px rgba(0, 0, 0, 0.1)&#39;;
            link.style.textAlign = &#39;left&#39;;  /* محاذاة النص لليسار */
            link.style.margin = &#39;20px auto&#39;;
            link.style.width = &#39;fit-content&#39;;
            link.style.maxWidth = &#39;100%&#39;;
            link.style.cursor = &#39;default&#39;;
            link.style.position = &#39;relative&#39;;  // إضافة هذا لجعل العلامة داخل الرابط
            
            // إضافة علامة صح
            const checkMark = document.createElement(&#39;span&#39;);
            checkMark.innerHTML = &#39;&#10004;&#39;;  // استخدام HTML رمز علامة الصح
            checkMark.style.position = &#39;absolute&#39;;  // جعلها فوق
            checkMark.style.top = &#39;10px&#39;;  // محاذاة لأعلى
            checkMark.style.right = &#39;-24px&#39;;  // تحريكها أقصى اليمين
            checkMark.style.fontSize = &#39;1.5em&#39;;  // حجم الخط
            checkMark.style.color = &#39;#18de45&#39;;  // لون علامة الصح
            link.appendChild(checkMark);  // إضافة علامة الصح إلى الرابط

            link.addEventListener(&#39;click&#39;, function(event) {
                event.preventDefault();
                event.stopPropagation();  /* منع التوجيه عند النقر */  /* منع التوجيه عند النقر */
            });
        });
    });
</script>
<script>
    document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
        document.querySelectorAll(&#39;a[href=&quot;#note-info&quot;]&#39;).forEach(function(link) {
            link.style.display = &#39;inline-block&#39;;
            link.style.padding = &#39;20px&#39;;
            link.style.backgroundColor = &#39;#d1ecf1&#39;;  /* لون الخلفية */
            link.style.color = &#39;#0c5460&#39;;  /* لون النص */
            link.style.borderRight = &#39;25px solid #17a2b8&#39;;  /* الشريط الأزرق */
            link.style.borderRadius = &#39;10px&#39;;
            link.style.fontSize = &#39;1.2em&#39;;
            link.style.boxShadow = &#39;0 4px 6px rgba(0, 0, 0, 0.1)&#39;;
            link.style.textAlign = &#39;left&#39;;  /* محاذاة النص لليسار */
            link.style.margin = &#39;20px auto&#39;;
            link.style.width = &#39;fit-content&#39;;
            link.style.maxWidth = &#39;100%&#39;;
            link.style.cursor = &#39;default&#39;;
            link.style.position = &#39;relative&#39;;  // إضافة هذا لجعل العلامة داخل الرابط
            
            // إضافة رمز النجمة
            const starSymbol = document.createElement(&#39;span&#39;);
            starSymbol.innerHTML = &#39;&#9733;&#39;;  // رمز النجمة
            starSymbol.style.position = &#39;absolute&#39;;  // جعلها فوق
            starSymbol.style.top = &#39;15px&#39;;  // محاذاة للوسط
            starSymbol.style.right = &#39;-24px&#39;;  // تحريكها أقصى اليمين
            starSymbol.style.transform = &#39;translateY(-50%)&#39;;  // مركز النجمة عموديا&#1611;
            starSymbol.style.fontSize = &#39;1.5em&#39;;  // حجم الخط
            starSymbol.style.color = &#39;#36cee6&#39;;  // لون مختلف للنجمة
            link.appendChild(starSymbol);  // إضافة رمز النجمة إلى الرابط

            link.addEventListener(&#39;click&#39;, function(event) {
                event.preventDefault();
                event.stopPropagation();  
            });
        });
    });
</script>
<script>
    document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
        document.querySelectorAll(&#39;a[href=&quot;#note-warning&quot;]&#39;).forEach(function(link) {
            link.style.display = &#39;inline-block&#39;;
            link.style.padding = &#39;20px&#39;;
            link.style.backgroundColor = &#39;#fff3cd&#39;;  /* لون الخلفية */
            link.style.color = &#39;#856404&#39;;  /* لون النص */
            link.style.borderRight = &#39;28px solid #ffc107&#39;;  /* الشريط الأصفر */
            link.style.borderRadius = &#39;10px&#39;;
            link.style.fontSize = &#39;1.2em&#39;;
            link.style.boxShadow = &#39;0 4px 6px rgba(0, 0, 0, 0.1)&#39;;
            link.style.textAlign = &#39;left&#39;;  /* محاذاة النص لليسار */
            link.style.margin = &#39;20px auto&#39;;
            link.style.width = &#39;fit-content&#39;;
            link.style.maxWidth = &#39;100%&#39;;
            link.style.cursor = &#39;default&#39;;
            link.style.position = &#39;relative&#39;;  // إضافة هذا لجعل العلامة داخل الرابط
            
            // إضافة إيموجي تحذير
            const warningEmoji = document.createElement(&#39;span&#39;);
            warningEmoji.innerHTML = &#39;&#9888;&#39;;  // رمز التحذير
            warningEmoji.style.position = &#39;absolute&#39;;  // جعلها فوق
            warningEmoji.style.top = &#39;15px&#39;;  // محاذاة للوسط
            warningEmoji.style.right = &#39;-24px&#39;;  // تحريكها أقصى اليمين
            warningEmoji.style.transform = &#39;translateY(-50%)&#39;;  // مركز الإيموجي عموديا&#1611;
            warningEmoji.style.fontSize = &#39;1.4em&#39;;  // حجم الخط
            warningEmoji.style.color = &#39;#ffea07&#39;;  // لون مختلف للإيموجي
            link.appendChild(warningEmoji);  // إضافة إيموجي التحذير إلى الرابط

            link.addEventListener(&#39;click&#39;, function(event) {
                event.preventDefault();
                event.stopPropagation();    /* منع التوجيه عند النقر */
            });
        });
    });
</script>
<script>
    document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
        document.querySelectorAll(&#39;a[href=&quot;#note-danger&quot;]&#39;).forEach(function(link) {
            link.style.display = &#39;inline-block&#39;;
            link.style.padding = &#39;20px&#39;;
            link.style.backgroundColor = &#39;#f8d7da&#39;;  /* لون الخلفية */
            link.style.color = &#39;#721c24&#39;;  /* لون النص */
            link.style.borderRight = &#39;20px solid #dc3545&#39;;  /* زيادة سمك الشريط الأحمر */
            link.style.borderRadius = &#39;10px&#39;;
            link.style.fontSize = &#39;1.2em&#39;;
            link.style.boxShadow = &#39;0 4px 6px rgba(0, 0, 0, 0.1)&#39;;
            link.style.textAlign = &#39;left&#39;;  /* محاذاة النص لليسار */
            link.style.margin = &#39;20px auto&#39;;
            link.style.width = &#39;fit-content&#39;;
            link.style.maxWidth = &#39;100%&#39;;
            link.style.cursor = &#39;default&#39;;
            link.style.position = &#39;relative&#39;;  // إضافة هذا لجعل العلامة داخل الرابط
            
            // إضافة علامة التعجب
            const dangerSymbol = document.createElement(&#39;span&#39;);
            dangerSymbol.innerHTML = &#39;!&#39;;  // استخدام علامة التعجب
            dangerSymbol.style.position = &#39;absolute&#39;;  // جعلها فوق
            dangerSymbol.style.top = &#39;7px&#39;;  // محاذاة لأعلى
            dangerSymbol.style.right = &#39;-15px&#39;;  // تحريكها أقصى اليمين
            dangerSymbol.style.fontSize = &#39;2em&#39;;  // حجم الخط
            dangerSymbol.style.color = &#39;#e86673&#39;;  // لون علامة التعجب
            link.appendChild(dangerSymbol);  // إضافة علامة التعجب إلى الرابط

            link.addEventListener(&#39;click&#39;, function(event) {
                event.preventDefault();
                event.stopPropagation();  /* منع التوجيه عند النقر */
            });
        });
    });
</script>
