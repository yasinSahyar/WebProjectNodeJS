// t1.js

document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('login-dialog');
  const openDialogButton = document.getElementById('open-dialog');

  openDialogButton.addEventListener('click', () => {
      dialog.showModal();
  });

  dialog.addEventListener('close', () => {
      if (dialog.returnValue === 'default') {
          // Add any action when the form is submitted and closed
          console.log('Dialog closed with form submission');
      }
  });

  // Optional: Add custom validation feedback or event listeners here
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (event) => {
      // You can add custom validation logic if needed
      // event.preventDefault(); // Prevent form submission for testing
  });
});
