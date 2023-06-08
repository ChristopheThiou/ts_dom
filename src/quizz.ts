const quizz = [
  {
    question: "Quelle est ...?",
    bonneReponse: 0,
    reponses: ["Réponse 1", "Réponse 2", "Réponse 3"],
  },
  {
    question: "Quelle est ...?",
    bonneReponse: 2,
    reponses: ["Réponse 1", "Réponse 2", "Réponse 3", "Réponse 4"],
  },
  {
    question: "Quelle est ...?",
    bonneReponse: 1,
    reponses: ["Réponse 1", "Réponse 2"],
  },
  {
    question: "Quelle est ...?",
    bonneReponse: 0,
    reponses: ["Réponse 1", "Réponse 2", "Réponse 3"],
  },
];

const div = document.querySelector("div");

displayQuizz();

function displayQuizz() {
  for (const item of quizz) {
    const p = document.createElement("p");
    p.textContent = item.question;
    div.appendChild(p);

    const form = document.createElement("form");
    div.appendChild(form);

    const ul = document.createElement("ul");
    form.appendChild(ul);

    const li = document.createElement("li");
    ul.appendChild(li);

    for (const reponse of quizz) {
      const input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("id", `${item.reponses[0]}`);
      input.setAttribute("value", `${item.reponses[0]}`);
      li.appendChild(input);
    }

    const label = document.createElement("label");
    label.textContent = String(item.reponses[0]);
    li.appendChild(label);
  }
}
