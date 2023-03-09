window.onload = () => {
  
  const image = document.querySelector('.image');
  const text = document.querySelector('.text');
  // ketika tombol ditekan
  const button = document.querySelector('#file');
  button.addEventListener('change', function() {
    const file = this.files[0];
    /*
      jalankan fungsi renderImage()
      untuk menampilkan gambar
    */
    renderImage(file);
    /*
      jalankan fungsi filterFilename()
      untuk memfilter nama file
    */
    text.textContent = filterFilename(file.name);
  });
  
  // render gambar
  function renderImage(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => image.setAttribute('src', reader.result);
  }
  
  function filterFilename(param) {
    const limit = 20;
    const parts = param.split('.');
    const oldName = parts[0].trim();
    const name = parts[0].trim().substring(0, limit);
    const extension = parts[parts.length - 1].trim().toLowerCase();
    return (oldName.length > limit) ? `${name}.${extension}` : param;
  }
  
}