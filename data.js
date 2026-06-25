// data.js dosyasının yeni ve sorunsuz içeriği:

window.getKpssData = function() {
    return {
        "Tarih": {
            "İslamiyet Öncesi Türk Tarihi": {
                notlar: window.tarih_1_notlari || [],
                sorular: window.tarih_1_sorulari || []
            },
            "İlk Türk-İslam Devletleri": {
                notlar: window.tarih_2_notlari || [],
                sorular: window.tarih_2_sorulari || []
            }
        },
        "Coğrafya": {
            "Türkiye'nin Coğrafi Konumu": {
                notlar: window.cografya_1_notlari || [],
                sorular: window.cografya_1_sorulari || []
            }
        }
    };
};

// Eski kodların kırılmaması için geriye uyumluluk desteği:
Object.defineProperty(window, 'kpssData', {
    get: function() {
        return window.getKpssData();
    },
    configurable: true
});