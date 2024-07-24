let header = document.getElementById('header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
 let scrollTop = window.scrollY;
 if (scrollTop > lastScrollTop) {
   header.classList.add('hide');
   header.classList.remove('scrolled');
 } else {
   header.classList.remove('hide');
   if (scrollTop > 100) {
     header.classList.add('scrolled');
   } else {
     header.classList.remove('scrolled');
   }
 }
 lastScrollTop = scrollTop;
});

/*FAQ SECTION*/
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
          const answer = item.querySelector('.faq-answer');
          const isVisible = answer.style.display === 'block';
          
          // Hide all answers
          document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
          
          // Show the clicked answer if it was not already visible
          answer.style.display = isVisible ? 'none' : 'block';
      });
  });
});

const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);
