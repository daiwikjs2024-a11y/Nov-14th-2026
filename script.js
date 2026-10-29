const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false');
}));

document.querySelectorAll('.reason-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.reason-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    document.getElementById('reasonReveal').textContent = card.dataset.reason;
  });
});

const quiz = [
  {q:'Where did our story begin?', options:['At a fancy restaurant 🍝','At Brilliant Center 📚','In a moonflower garden 🌙'], correct:1, ok:'Correct! One shy little “hi” and a whole universe began. ♡', no:'It was Brilliant Center, rabbit! 📚'},
  {q:'What important thing happened on November 14, 2025?', options:['We adopted 17 rabbits','You gave me a letter and I said yes 💌','We opened a pasta shop'], correct:1, ok:'YES. That letter changed everything. 💌', no:'You gave me that very sweet letter… and I said yes. Best decision.'},
  {q:'What did you do on the staircase after our test?', options:['Gave me a high-five','Borrowed my notes','Kissed my cheek and ran away 😭'], correct:2, ok:'GUILTY. Tiny romantic criminal behaviour. 😭♡', no:'You kissed my cheek and RAN. I remember everything.'},
  {q:'What is your official title in my life?', options:['My rabbit 🐇','Chief pasta inspector','Professional compliment denier'], correct:0, ok:'Correct, my rabbit. And yes, you are also the compliment denier. ♡', no:'You are, first and foremost, MY RABBIT. All other titles are secondary.'}
];
let questionIndex = 0, answered = false, score = 0;
const questionEl = document.getElementById('quizQuestion');
const optionsEl = document.getElementById('quizOptions');
const progressEl = document.getElementById('quizProgress');
const feedbackEl = document.getElementById('quizFeedback');
const nextBtn = document.getElementById('quizNext');
function renderQuestion(){
  const q = quiz[questionIndex]; answered = false;
  progressEl.textContent = `QUESTION ${questionIndex+1} OF ${quiz.length}`;
  questionEl.textContent = q.q; feedbackEl.textContent = ''; nextBtn.hidden = true;
  optionsEl.innerHTML = '';
  q.options.forEach((text,i) => {
    const button = document.createElement('button'); button.textContent = text;
    button.addEventListener('click', () => answer(i, button)); optionsEl.appendChild(button);
  });
}
function answer(index, button){
  if(answered) return; answered = true;
  const q = quiz[questionIndex];
  [...optionsEl.children].forEach((b,i) => { b.disabled = true; if(i === q.correct) b.classList.add('correct'); });
  if(index === q.correct){score++; feedbackEl.textContent = q.ok;}
  else {button.classList.add('wrong'); feedbackEl.textContent = q.no;}
  nextBtn.hidden = false;
  nextBtn.textContent = questionIndex === quiz.length-1 ? 'See my result ♡' : 'Next question →';
}
nextBtn.addEventListener('click', () => {
  if(questionIndex < quiz.length-1){ questionIndex++; renderQuestion(); }
  else {
    progressEl.textContent = 'QUIZ COMPLETE ♡';
    questionEl.textContent = score === quiz.length ? 'Okay, you know our lore perfectly. 🥹' : 'You may need to spend more quality time with your boyfriend. 😌';
    optionsEl.innerHTML = '';
    feedbackEl.textContent = `${score} / ${quiz.length} correct. Regardless of the score, you’re still my favourite rabbit.`;
    nextBtn.hidden = true;
  }
});
renderQuestion();

document.getElementById('secretButton').addEventListener('click', () => {
  const message = document.getElementById('secretMessage');
  message.hidden = !message.hidden;
  document.getElementById('secretButton').textContent = message.hidden ? 'Psst… there’s one more thing' : 'Okay, that’s enough cuteness ♡';
  if(!message.hidden) message.scrollIntoView({behavior:'smooth', block:'center'});
});
