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
  {q:'What is your official title in my life?', options:['My rabbit 🐇','Chief pasta inspector','Professional compliment denier'], correct:0, ok:'Correct, my rabbit. And yes, you are also the compliment denier. ♡', no:'You are, first and foremost, MY RABBIT. All other titles are secondary.'},
  {q:'How many times have I stared at you and you have never noticed?', options:['A few times','Every once in a while','Infinite ♾️'], correct:2, ok:'INFINITE. I could stare at you forever and you would still be clueless. 😭♡', no:'The answer is INFINITE. You really don’t notice how often I’m admiring you. ♾️'},
  {q:'What do you randomly ask me to buy you from the vending machine?', options:['A packet of chips','A chocolate 🍫','A bottle of juice'], correct:1, ok:'That chocolate mission is permanently part of our lore. 🍫♡', no:'It’s chocolate, obviously. I know your vending-machine priorities. 🍫'},
  {q:'What do you sometimes do in the car while holding my hand?', options:['Fall asleep 😴','Start singing loudly','Steal my phone'], correct:0, ok:'And I could happily sit there holding your hand forever. 🥹', no:'You fall asleep while holding my hand. One of my favourite little things. ♡'}
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


const hugButton = document.getElementById('hugButton');
if (hugButton) {
  hugButton.addEventListener('click', () => {
    const animation = document.getElementById('hugAnimation');
    animation.hidden = false;
    // Restart the animation each time the button is pressed.
    animation.classList.remove('hug-replay');
    void animation.offsetWidth;
    animation.classList.add('hug-replay');
    hugButton.textContent = 'One more hug? 🫂';
    animation.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}


// Tiny moonflower garden: each tap grows another bloom.
const bloomButton = document.getElementById('bloomButton');
if (bloomButton) {
  const flowers = [...document.querySelectorAll('.flower-stems span')];
  const bloomCount = document.getElementById('bloomCount');
  const bloomMessage = document.getElementById('bloomMessage');
  const bloomLines = [
    'One bloom for your smile. ♡',
    'Two blooms: one for you, one for me missing you.',
    'A little reminder that distance cannot make you less loved.',
    'This flower is for every ordinary day I want to spend with you.',
    'A whole tiny garden, because one reason to love you is never enough.',
    'A flower for the days I miss you, and another for the day I get to see you again. ♡',
    'This one is a promise to keep choosing you, even from far away. 🌙'
  ];
  let blooms = 0;
  bloomButton.addEventListener('click', () => {
    const flower = flowers[blooms % flowers.length];
    flower.classList.remove('bloomed');
    void flower.offsetWidth;
    flower.classList.add('bloomed');
    blooms++;
    bloomCount.textContent = String(blooms);
    bloomMessage.textContent = bloomLines[(blooms - 1) % bloomLines.length];
    bloomButton.textContent = blooms >= flowers.length ? 'Grow another moonflower ♡' : 'Plant another moonflower ♡';
  });
}

// A little pocket note for the days when the miles feel extra long.
const noteButton = document.getElementById('noteButton');
if (noteButton) {
  const pocketNote = document.getElementById('pocketNote');
  const pocketNotes = [
    'You do not have to earn reassurance. You can ask for it, any time. I am on your team. ♡',
    'If I could teleport for one minute, I would use it to hold your hand and steal one of your smiles.',
    'We are allowed to miss each other and still have good days. Both things can be true.',
    'You are not “too much” for needing time, attention, or a reminder that you are loved.',
    'Today, we only have to do today. One call, one message, one little step closer. 🌙',
    'Reminder from your idiot: you are beautiful, you are precious to me, and yes, I mean it. No appeals accepted.'
  ];
  let noteIndex = 0;
  noteButton.addEventListener('click', () => {
    pocketNote.hidden = false;
    pocketNote.textContent = pocketNotes[noteIndex % pocketNotes.length];
    noteIndex++;
    noteButton.textContent = 'Another tiny reminder ♡';
  });
}
