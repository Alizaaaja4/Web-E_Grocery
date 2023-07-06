
function validateForm() {
  // Mengambil nilai dari input
  var nama = document.getElementById('nama').value;
  var email = document.getElementById('mail').value;
  var phone = document.getElementById('phone').value;
  var pesan = document.getElementById('pesan').value;

  // Validasi input
  if (nama === '') {
    alert('Please fill in your name');
    return false;
  }

  if (email === '') {
    alert('Please fill out your email address');
    return false;
  }

  if (phone === '') {
    alert('Please fill in your phone number');
    return false;
  }

  if (pesan === '') {
    alert('Please fill out your message');
    return false;
  }

  // Semua input telah valid
  alert('Request completed form');
  return true;
}
