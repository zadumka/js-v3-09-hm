document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.querySelector('.feedback-form');

    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  feedbackForm.email.value = savedFormData.email || '';
  feedbackForm.message.value = savedFormData.message || '';

  feedbackForm.addEventListener('input', function (event) {
    if (event.target.name === 'email' || event.target.name === 'message') {
        const formData = {
            email: feedbackForm.email.value.trim(),
            message: feedbackForm.message.value.trim()
          };
          localStorage.setItem('feedback-form-state', JSON.stringify(formData));
        }
      });
      feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();
    
        const email = feedbackForm.email.value.trim();
        const message = feedbackForm.message.value.trim();
        if (email && message) {
            localStorage.removeItem('feedback-form-state');
            feedbackForm.reset();
          }
        });
      });    