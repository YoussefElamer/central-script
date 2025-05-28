(function () {
  // إعلان في أعلى الصفحة
  const ad = document.createElement('div');
  ad.innerHTML = '<div style="background:#222;color:#fff;padding:10px;text-align:center;">🔔 إعلان من موقعنا: تابعنا لكل جديد!</div>';
  document.body.insertBefore(ad, document.body.firstChild);

  // تعديل بسيط في شكل العناوين
  const style = document.createElement('style');
  style.innerHTML = `
    h1, .post-title {
      color: purple !important;
      font-family: 'Cairo', sans-serif;
    }
  `;
  document.head.appendChild(style);
})();
