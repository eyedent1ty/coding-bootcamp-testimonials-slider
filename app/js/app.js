const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let currentIdx = 0;

const persons = [
  {
    name: 'Tanya Sinclair',
    role: 'UX Engineer',
    quote:
      "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
  },
  {
    name: 'John Tarkpor',
    role: 'Junior Front-end Developer',
    quote:
      "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
  },
];

const isIdxValid = (idx) => {
  return idx === 0 || idx === 1 ? true : false;
};

const clickButtonHandler = (arrOfPerson, idx) => {
  if (!isIdxValid(idx)) {
    return;
  }
  const imgElement = document.querySelector('#img');
  const quoteElement = document.querySelector('#quote');
  const nameElement = document.querySelector('#user-name');
  const roleElement = document.querySelector('#user-role');
  imgElement.classList.toggle('tanya');
  imgElement.classList.toggle('john');

  const { name, role, quote } = arrOfPerson[idx];
  quoteElement.innerHTML = quote;
  nameElement.innerHTML = name;
  roleElement.innerHTML = role;

  return !idx ? ++idx : --idx;
};

next.addEventListener('click', function () {
  if (currentIdx === 1) return;
  currentIdx = clickButtonHandler(persons, currentIdx);
});

prev.addEventListener('click', function () {
  if (currentIdx === 0) return;
  currentIdx = clickButtonHandler(persons, currentIdx);
});
