document.addEventListener('DOMContentLoaded', () => {
    const userIdInput = document.querySelector('.userId');
    const getUserButton = document.querySelector('.getUser');
    const userResetButton = document.querySelector('.userReset');
    const nameInput = document.querySelector('.name');
    const userNameInput = document.querySelector('.userName');
    const emailInput = document.querySelector('.email');
    const cityInput = document.querySelector('.city');
    const streetInput = document.querySelector('.street');
    const zipcodeInput = document.querySelector('.zipcode');
    const userResultInput = document.querySelector('.userResult');
  
    const imageIdInput = document.querySelector('.imageId');
    const getImageButton = document.querySelector('.getImage');
    const imageResetButton = document.querySelector('.imageReset');
    const albumIdInput = document.querySelector('.albumId');
    const imageInput = document.querySelector('.image');
    const imageResultInput = document.querySelector('.imageResult');
  
    getUserButton.addEventListener('click', async () => {
      const userId = userIdInput.value.trim();
  
      if (userId === '') {
        alert('Please enter a User ID');
        return;
      }
  
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
  
        const user = await response.json();
  
        nameInput.value = user.name;
        userNameInput.value = user.username;
        emailInput.value = user.email;
        cityInput.value = user.address.city;
        streetInput.value = user.address.street;
        zipcodeInput.value = user.address.zipcode;
        userResultInput.value = 'Success';
        userResultInput.style.color = 'green';
      } catch (error) {
        nameInput.value = '';
        userNameInput.value = '';
        emailInput.value = '';
        cityInput.value = '';
        streetInput.value = '';
        zipcodeInput.value = '';
        userResultInput.value = 'User not found';
        userResultInput.style.color = 'red';
      }
    });
  
    userResetButton.addEventListener('click', () => {
      userIdInput.value = '';
      nameInput.value = '';
      userNameInput.value = '';
      emailInput.value = '';
      cityInput.value = '';
      streetInput.value = '';
      zipcodeInput.value = '';
      userResultInput.value = '';
      userResultInput.style.color = '';
    });
  
    getImageButton.addEventListener('click', async () => {
      const imageId = imageIdInput.value.trim();
  
      if (imageId === '') {
        alert('Please enter an Image ID');
        return;
      }
  
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${imageId}`);
        if (!response.ok) {
          throw new Error('Image not found');
        }
  
        const image = await response.json();
  
        albumIdInput.value = image.albumId;
        imageInput.src = image.thumbnailUrl;
        imageInput.alt = image.title;
        imageResultInput.value = 'Success';
        imageResultInput.style.color = 'green';
      } catch (error) {
        albumIdInput.value = '';
        imageInput.src = '';
        imageInput.alt = '';
        imageResultInput.value = 'Image not found';
        imageResultInput.style.color = 'red';
      }
    });
  
    imageResetButton.addEventListener('click', () => {
      imageIdInput.value = '';
      albumIdInput.value = '';
      imageInput.src = '';
      imageInput.alt = '';
      imageResultInput.value = '';
      imageResultInput.style.color = '';
    });
  });
  