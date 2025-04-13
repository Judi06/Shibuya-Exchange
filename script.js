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

// Gestion du menu hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

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
  navLinks.classList.remove('active');
  hamburger.classList.remove('active');
});

remboursementBtn.addEventListener('click', () => {
  formRemboursementModal.style.display = 'flex';
  navLinks.classList.remove('active');
  hamburger.classList.remove('active');
});

nousContacterBtn.addEventListener('click', () => {
  formContactModal.style.display = 'flex';
  navLinks.classList.remove('active');
  hamburger.classList.remove('active');
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

// Gestion du système d'avis
const stars = document.querySelectorAll('.rating-input i');
const reviewForm = document.getElementById('review-form');
const thankYouMessage = document.createElement('div');
thankYouMessage.className = 'thank-you-message';
thankYouMessage.innerHTML = `
  <h3>Merci pour votre avis !</h3>
  <p>Votre avis a été enregistré avec succès.</p>
  <button id="close-thank-you">Fermer</button>
`;
document.body.appendChild(thankYouMessage);

let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = parseInt(star.getAttribute('data-rating'));
    selectedRating = rating;
    
    stars.forEach((s, index) => {
      if (index < rating) {
        s.classList.remove('far');
        s.classList.add('fas', 'active');
      } else {
        s.classList.remove('fas', 'active');
        s.classList.add('far');
      }
    });
  });
});

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Ici, vous pourriez envoyer les données à un serveur
  // Pour cet exemple, nous affichons simplement le message de remerciement
  thankYouMessage.style.display = 'block';
  
  // Réinitialiser le formulaire
  reviewForm.reset();
  stars.forEach(star => {
    star.classList.remove('fas', 'active');
    star.classList.add('far');
  });
  selectedRating = 0;
});

document.getElementById('close-thank-you').addEventListener('click', () => {
  thankYouMessage.style.display = 'none';
});

// Fermer le menu lorsqu'on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});
