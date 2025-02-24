// script.js
// Gestion du diaporama sur la page d'accueil
let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? 1 : 0;
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 2000); // Change d'image toutes les 2 secondes
showSlide(currentSlide); // Affiche la première image


// Gestion des modals
const verifierCouponBtn = document.getElementById('verifier-coupon');
const statutCouponBtn = document.getElementById('statut-coupon');
const remboursementBtn = document.getElementById('remboursement');
const nousContacterBtn = document.getElementById('nous-contacter');

const formCouponModal = document.getElementById('form-coupon');
const formRemboursementModal = document.getElementById('form-remboursement');
const formContactModal = document.getElementById('form-contact');

const closeButtons = document.querySelectorAll('.close');

// Ouvrir les modals
verifierCouponBtn.addEventListener('click', () => {
  formCouponModal.style.display = 'flex';
});

statutCouponBtn.addEventListener('click', () => {
  formCouponModal.style.display = 'flex';
});

remboursementBtn.addEventListener('click', () => {
  formRemboursementModal.style.display = 'flex';
});

nousContacterBtn.addEventListener('click', () => {
  formContactModal.style.display = 'flex';
});

// Fermer les modals
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    formCouponModal.style.display = 'none';
    formRemboursementModal.style.display = 'none';
    formContactModal.style.display = 'none';
  });
});

// Fermer les modals en cliquant à l'extérieur
window.addEventListener('click', (event) => {
  if (event.target === formCouponModal) {
    formCouponModal.style.display = 'none';
  }
  if (event.target === formRemboursementModal) {
    formRemboursementModal.style.display = 'none';
  }
  if (event.target === formContactModal) {
    formContactModal.style.display = 'none';
  }
});

// Validation des champs Code
const validateCodes = () => {
  const code1 = document.querySelector('input[name="code1"]').value;
  const code2 = document.querySelector('input[name="code2"]').value;
  const code3 = document.querySelector('input[name="code3"]').value;

  // Si tous les codes sont remplis, ils doivent être différents
  if (code1 && code2 && code3) {
    if (code1 === code2 || code1 === code3 || code2 === code3) {
      alert("Les codes doivent être différents s'ils sont tous remplis.");
      return false;
    }
  }

  return true;
};

// Ajouter la validation au formulaire de vérification de coupon
document.querySelector('#form-coupon form').addEventListener('submit', (e) => {
  if (!validateCodes()) {
    e.preventDefault();
  }
});

// Gestion des modals FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});

