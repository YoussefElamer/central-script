    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('a[href="#fnote-warning"]').forEach(function(link) {
            link.style.display = 'inline-block';
            link.style.padding = '20px';
            link.style.backgroundColor = '#fff3cd';  /* لون الخلفية */
            link.style.color = '#856404';  /* لون النص */
            link.style.borderRight = '28px solid #ffc107';  /* الشريط الأصفر */
            link.style.borderRadius = '10px';
            link.style.fontSize = '1.2em';
            link.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            link.style.textAlign = 'left';  /* محاذاة النص لليسار */
            link.style.margin = '20px auto';
            link.style.width = 'fit-content';
            link.style.maxWidth = '100%';
            link.style.cursor = 'default';
            link.style.position = 'relative';  // إضافة هذا لجعل العلامة داخل الرابط
            
            // إضافة إيموجي تحذير
            const warningEmoji = document.createElement('span');
            warningEmoji.innerHTML = '&#9888;';  // رمز التحذير
            warningEmoji.style.position = 'absolute';  // جعلها فوق
            warningEmoji.style.top = '15px';  // محاذاة للوسط
            warningEmoji.style.right = '-24px';  // تحريكها أقصى اليمين
            warningEmoji.style.transform = 'translateY(-50%)';  // مركز الإيموجي عمودياً
            warningEmoji.style.fontSize = '1.4em';  // حجم الخط
            warningEmoji.style.color = '#ffea07';  // لون مختلف للإيموجي
            link.appendChild(warningEmoji);  // إضافة إيموجي التحذير إلى الرابط

            link.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();    /* منع التوجيه عند النقر */
            });
        });
    });
