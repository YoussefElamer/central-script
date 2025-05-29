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
