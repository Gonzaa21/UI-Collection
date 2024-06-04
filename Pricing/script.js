const payments = document.querySelectorAll('[class^="payment-"]');
const imageCards = document.querySelectorAll('[class^="image-cards-"]');

payments.forEach((payment, index) => {
  payment.addEventListener('click', () => {
    imageCards[index].style.display = "flex";
  });
});