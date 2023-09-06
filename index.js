function saatGuncelle() {
    var saatDiv = document.getElementById("saat");
    var tarih = new Date(); // Şu anki tarihi ve saati al

    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();

    // Saat, dakika ve saniye değerlerini ekranda göster
    saatDiv.textContent = `${saat.toString().padStart(2, '0')} : ${dakika.toString().padStart(2, '0')} : ${saniye.toString().padStart(2, '0')}`;
}

// Her saniyede bir saatGuncelle fonksiyonunu çağırarak saati güncelle
setInterval(saatGuncelle, 1000);

// Sayfa yüklendiğinde ilk kez saatGuncelle fonksiyonunu çağırarak saati göster
saatGuncelle();

var name = prompt("Adınızı giriniz.");

document.getElementById("myName").innerText = name;