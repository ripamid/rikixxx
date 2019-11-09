function HargaBuah()
{
    var jeruk = 8000 * parseInt(document.getElementById('jumlah_jeruk').value);
    var jambu = 7000 * parseInt(document.getElementById('jumlah_jambu').value);
    var apel = 15000 * parseInt(document.getElementById('jumlah_apel').value);
    var anggur = 17000 * parseInt(document.getElementById('jumlah_anggur').value);
    var mangga = 10000 * parseInt(document.getElementById('jumlah_mangga').value);
    var melon = 20000 * parseInt(document.getElementById('jumlah_melon').value);

    var TotalJumlah = jeruk+jambu+apel+anggur+mangga+melon;

    document.getElementById('Total_Harga').value = TotalJumlah;
}