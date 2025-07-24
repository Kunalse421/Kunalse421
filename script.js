
    function generateCard() {
      const name = document.getElementById("userName").value.trim();
      const mood = document.getElementById("theme").value;
      const card = document.getElementById("card");

      if (!name || !mood) {
        alert("Please enter your name and select a mood.");
        return;
      }

      let message = "";
      switch (mood) {
        case "sad": message = "It’s okay to feel down. Better days are coming."; break;
        case "excited": message = "Your energy is contagious — keep it going!"; break;
        case "motivated": message = "You are capable of amazing things!"; break;
        case "angry": message = "Take a deep breath. You’ve got this."; break;
        case "confused": message = "Clarity comes with calm — stay grounded."; break;
        case "relax": message = "Peace begins with a deep breath."; break;
        case "loving": message = "You are loved more than you know."; break;
        case "tired": message = "Rest isn’t laziness — it’s self-care."; break;
      }

      card.className = mood;
      card.innerHTML = `<h2>Hi, ${name}!</h2><p>${message}</p>`;
      card.style.display = "block";
    }