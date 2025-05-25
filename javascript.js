window.location.href = `payment.html?item=${itemName}&price=${price}`;

document.addEventListener('DOMContentLoaded', function() {
  // Simulated status updates
  let statusIndex = 0;
  const statusMessages = [
    'Your order is being processed...',
    'Your order is being prepared...',
    'Your order is on the way...',
    'Your order has been delivered!'
  ];

  const statusSteps = document.querySelectorAll('.status-step');
  const statusMessageElement = document.getElementById('status-message');

  function updateOrderStatus() {
    if (statusIndex < statusMessages.length) {
      // Update the status message
      statusMessageElement.textContent = statusMessages[statusIndex];
      
      // Activate the current status step
      statusSteps[statusIndex].classList.add('active');
      
      // Move to the next status step
      statusIndex++;
      
      // After 3 seconds, update the status again
      setTimeout(updateOrderStatus, 3000);
    }
  }

  // Start updating status after the page loads
  updateOrderStatus();
});

document.addEventListener('DOMContentLoaded', function() {
  // Simulated delivery status updates
  let statusIndex = 0;
  const statusMessages = [
    'Your order is placed and being prepared...',
    'Your order is being processed...',
    'Your order has been shipped...',
    'Your order is out for delivery...',
    'Your order has been delivered!'
  ];

  const statusSteps = document.querySelectorAll('.status-step');
  const statusMessageElement = document.getElementById('status-message');

  function updateDeliveryStatus() {
    if (statusIndex < statusMessages.length) {
      // Update the status message
      statusMessageElement.textContent = statusMessages[statusIndex];

      // Activate the current status step
      statusSteps[statusIndex].classList.add('active');
      
      // Move to the next status step
      statusIndex++;
      
      // After 3 seconds, update the status again
      setTimeout(updateDeliveryStatus, 3000);
    }
  }

  // Start updating status after the page loads
  updateDeliveryStatus();
});

