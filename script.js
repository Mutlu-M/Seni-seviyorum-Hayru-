document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const messageDisplay = document.getElementById('message');

    // "Hayır" mesajları listesi
    const noMessages = [
       "Hayruş çok özür dilerim,hislerini anlıyorum. Yapmamam gereken bir şey yaptım.",
        "Affet. özrüm kabahatimden büyük biliyorum",
        "Kalbin kırıldı hemde çok ama vazgeçmeyeceğim. Sana kendimi affettirene kadar uğraşacağım.",
        "Bu cevabı kabul etmiyorum! Lütfen bir kez daha düşün.",
      "Hayıra basma artık.",
      "Lütfen basma.",
      "Ama hala basıyorsun.",
      "Tamam bas.",
      "Şaka yapıyorum basmaaaa.",
      "Belki de seni affettirecek yeni bir şey söylemeliyim? Ne dersin?",
        "Seni çok seviyorum pes etmeyeceğim bunuda biliyorsun ❤️❤️❤️.",

    ];

    let noClickCount = 0; // "Hayır"a kaç kez basıldığını takip eder

    yesBtn.addEventListener('click', function() {
        messageDisplay.textContent = "Çok teşekkür ederim! Bu benim için dünyalara bedel biliyorsun. Seni çok seviyorum güzelim hemen beni arıyorsun.";
        messageDisplay.classList.remove('hidden');
        // Evet dedikten sonra iki butonu da gizle
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
    });

    noBtn.addEventListener('click', function() {
        // "Hayır" mesajlarını sırayla göster
        messageDisplay.textContent = noMessages[noClickCount % noMessages.length];
        messageDisplay.classList.remove('hidden');

        noClickCount++; // Her tıklamada sayacı artır

        // Eğer tüm "Hayır" mesajları gösterildiyse (veya sona yaklaşıldıysa)
        // son mesajı göster ve "Hayır" butonunu gizle.
        // Burada son mesaja gelindiğinde veya ondan sonraki tıklamada buton gizlenir.
        if (noClickCount >= noMessages.length) {
            // İsterseniz son "Hayır" mesajından sonra farklı bir son mesaj da gösterebilirsiniz:
            // messageDisplay.textContent = "Artık ne diyeceğimi bilemiyorum... Yine de seni seviyorum.";
            noBtn.style.display = 'none'; // "Hayır" butonunu gizle
        }
    });
});