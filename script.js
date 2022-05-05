window.onload = () => {
  
  function imagePreview() {
    const image = document.querySelector('.image');
    const button = document.querySelector('#upload-button');
    button.addEventListener('change', function() {
      const reader = new FileReader();
      const file = this.files[0];
      const name = file.name;
      const ekstension = name.split('.')[1];
      const name_text = document.querySelector('.name');
      const type_text = document.querySelector('.type');
      
      reader.readAsDataURL(file);
      reader.onload = function() {
        image.setAttribute('src', this.result);
      }
      
      name_text.textContent = name;
      type_text.textContent = `images/${ekstension.toLowerCase()}`;
    });
  }
  
  imagePreview();
  
}