document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the values from the input fields
    var nama = document.getElementById('nama').value.trim();
    var alamat = document.getElementById('alamat').value.trim();
    var nohp = document.getElementById('nohp').value.trim();
    var product = document.getElementById('product').value.trim();
    
    // Check if all fields are filled
    if (!nama || !alamat || !nohp || !product) {
        alert("Semua kolom harus diisi!");
        return;
    }
    
    // Construct the WhatsApp message
    var message = `Assalamualaikum kak saya mau order%0A` +
                  `Nama: ${encodeURIComponent(nama)}%0A` +
                  `Alamat lengkap: ${encodeURIComponent(alamat)}%0A` +
                  `No Hp: ${encodeURIComponent(nohp)}%0A` +
                  `Nama Produk: ${encodeURIComponent(product)}%0A`;
    
    // WhatsApp URL
    var whatsappUrl = `https://api.whatsapp.com/send?phone=6289688152886&text=${message}`;
    
    // Debug: Log the URL to the console
    console.log(whatsappUrl);
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
});