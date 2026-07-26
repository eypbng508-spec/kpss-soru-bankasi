// data.js dosyasının yeni ve sorunsuz içeriği:

window.getKpssData = function () {
    return {
        "Tarih": {
            "İslamiyet Öncesi Türk Tarihi": {
                notlar: window.tarih_1_notlari || [],
                sorular: window.tarih_1_sorulari || []
            },
            "İlk Türk-İslam Devletleri": {
                notlar: window.tarih_2_notlari || [],
                sorular: window.tarih_2_sorulari || []
            },
            "Anadolu Selçuklu Devleti": {
                notlar: window.tarih_3_notlari || [],
                sorular: window.tarih_3_sorulari || []
            },
            "Osmanlı Kültür ve Medeniyeti": {
                notlar: window.tarih_4_notlari || [],
                sorular: window.tarih_4_sorulari || []
            },
            "Osmanlı Devleti Kuruluş Dönemi": {
                notlar: window.tarih_5_notlari || [],
                sorular: window.tarih_5_sorulari || []
            },
            "Osmanlı Devleti Yükselme Dönemi":{
                notlar:window.tarih_6_notlari ||[],
                sorular:window.tarih_6_sorulari || []
            },
        },
        "Coğrafya": {
            "Türkiye'nin Coğrafi Konumu": {
                notlar: window.cografya_1_notlari || [],
                sorular: window.cografya_1_sorulari || []
            },
            "İç Kuvvetler": {
                notlar: window.cografya_2_notlari || [],
                sorular: window.cografya_2_sorulari || []
            },
            "Dış Kuvvetler": {
                notlar: window.cografya_3_notlari || [],
                sorular: window.cografya_3_sorulari || []
            },
            "Türkiyenin Platoları": {
                notlar: window.cografya_4_notlari || [],
                sorular: window.cografya_4_sorulari || []
            },
            "Türkiyenin Ovaları": {
                notlar: window.cografya_5_notlari || [],
                sorular: window.cografya_5_sorulari || []
            },
            // Yeni Eklenen Dış Kuvvetler Alt Başlıkları ve Soru Setleri:
            "Akarsu Vadileri ve Şelaleler": {
                notlar: window.cografya_6_notlari || [],
                sorular: window.cografya_6_sorulari || []
            },
            "Rüzgar Şekilleri": {
                notlar: window.cografya_7_notlari || [],
                sorular: window.cografya_7_sorulari || []
            },
            "Buzul Şekilleri": {
                notlar: window.cografya_8_notlari || [],
                sorular: window.cografya_8_sorulari || []
            },
            "Karstik Şekiller": {
                notlar: window.cografya_9_notlari || [],
                sorular: window.cografya_9_sorulari || []
            },
            "Kıyı Şekilleri": {
                notlar: window.cografya_10_notlari || [],
                sorular: window.cografya_10_sorulari || []
            },
            "Harita Bilgisi ve Engebe": {
                notlar: window.cografya_11_notlari || [],
                sorular: window.cografya_11_sorulari || []
            },
            "Türkiyenin İklimi": {
                notlar: window.cografya_12_notlari || [],
                sorular: window.cografya_12_sorulari || []
            }
        }
    };
};

// Eski kodların kırılmaması için geriye uyumluluk desteği:
Object.defineProperty(window, 'kpssData', {
    get: function () {
        return window.getKpssData();
    },
    configurable: true
});