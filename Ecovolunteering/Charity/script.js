const homeBtn = document.getElementById("homeBtn");
const charityBtn = document.getElementById("charityBtn");
const partnersBtn = document.getElementById("partnersBtn");
const aboutBtn = document.getElementById("aboutBtn");

function eng_lang() {
  homeBtn.textContent = "Home page";
  charityBtn.textContent = "Charity";
  partnersBtn.textContent = "Our Partners";
  aboutBtn.textContent = "About us";
  document.getElementById('first_a').textContent = "Today, the ocean resembles a vast hall of mirrors, reflecting not only the skies but also human carelessness. Its waves carry plastic bottles rather than pearls, and its depths conceal not treasures but the shadows of oil spills. Fish and birds mistake trash for food, and corals lose their vibrant colors, as if someone were erasing an artist's brushstrokes from a canvas. A polluted ocean sounds like a silent plea for help—and every discarded plastic bag turns it into a cry we must hear."
  document.getElementById('second_a').textContent = "The forest, once filled with the whisper of leaves and the singing of birds, increasingly sounds like a landfill, where the cracking of plastic bottles drowns out the natural symphony. Bags hide among the tree roots like alien creatures, and rusty iron glistens in the sun instead of dew. Animals carefully avoid these human traces, as if sensing their danger. The polluted forest resembles a book whose pages are covered in trash, and each new line erases the memory of purity and harmony."
   document.getElementById('third_a').textContent = "Human health and the environment are intertwined, like breath and air. When a forest is clean, it brings freshness to the lungs; when the ocean is clear, it nourishes the body and soul. But when nature becomes ill, we feel its pain: in every misty breath, in every bitter-tasting drop of water. The environment is a mirror of our health, and we are its reflection.We are leaves on the planet's branches, and if the roots are poisoned, life itself loses its strength. By caring for the earth, we heal ourselves; by keeping rivers and forests clean, we preserve the harmony of our hearts. After all, human health is a song that nature writes with us, and only in its purity does it truly resonate."
   document.getElementById('donatepls').textContent = "By donating just $1, you will be of great help to our volunteers."
   document.getElementById('button').textContent = "Donate"
  }

 function rus_lang(){
  homeBtn.textContent = "Главная";
  charityBtn.textContent = "Благотворительность";
  partnersBtn.textContent = "Наши Партнёры";
  aboutBtn.textContent = "О нас";
  document.getElementById('first_a').textContent = "Океан сегодня напоминает огромный зеркальный зал, где отражаются не только небеса, но и человеческая беспечность. Его волны несут не жемчужины, а пластиковые бутылки, его глубины скрывают не сокровища, а тени нефтяных пятен. Рыбы и птицы путают мусор с пищей, а кораллы теряют свои яркие краски, словно кто-то стирает мазки художника с полотна. Загрязнённый океан звучит как тихая просьба о помощи — и каждый выброшенный пакет превращает её в крик, который мы обязаны услышать."
  document.getElementById('second_a').textContent = "Лес, когда-то полный шёпота листвы и пения птиц, всё чаще звучит как свалка, где треск пластиковых бутылок заглушает природную симфонию. Между корнями деревьев прячутся пакеты, словно чужеродные существа, а ржавое железо блестит под солнцем вместо росы. Животные осторожно обходят эти следы человека, будто чувствуют, что они несут опасность. Загрязнённый лес напоминает книгу, страницы которой исписаны мусором, и каждая новая строчка стирает память о чистоте и гармонии."
   document.getElementById('third_a').textContent = "Здоровье человека и экология переплетаются, как дыхание и воздух. Когда лес чист, он дарит лёгким свежесть, когда океан прозрачен — он питает тело и душу. Но стоит природе заболеть, и человек чувствует её боль: в каждом вдохе с дымкой, в каждой капле воды с горьким привкусом. Экология — это зеркало нашего здоровья, а мы — её отражение.Мы — листья на ветвях планеты, и если корни отравлены, то и жизнь теряет силу. Заботясь о земле, мы лечим себя; сохраняя чистоту рек и лесов, мы сохраняем гармонию сердца. Ведь здоровье человека — это песня, которую природа пишет вместе с нами, и только в её чистоте она звучит по-настоящему."
  document.getElementById('donatepls').textContent = "Пожертвовав всего-лишь 1 доллар, вы окажите огромную помощь нашим волонтёрам."
   document.getElementById('button').textContent = "Пожертвовать"
  }
let header_buttn = document.getElementById('header_button');
let counter = 0;

header_buttn.onclick = function(){
if (counter % 2 == 0){
    document.getElementById('header').style.display = 'flex';
  }else{
    document.getElementById('header').style.display = 'none';
  }
  counter++;
}

homeBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

charityBtn.addEventListener("click", () => {
  window.location.href = "charity.html";
});

partnersBtn.addEventListener("click", () => {
  window.location.href = "partners.html"; 
});

aboutBtn.addEventListener("click", () => {
  window.location.href = "aboutus.html";
});


document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("lang");

  langSelect.addEventListener("change", () => {
    if (langSelect.value === "English") {
      
      alert("You have selected English language.");
      eng_lang();

    } else if (langSelect.value === "Русский") {
      alert("Вы выбрали русский язык.");
      rus_lang();
    }
  });
});

let butn= document.getElementById('button');
        let pro = document.getElementById('bar');
        let per = document.getElementById('percent');
        
        per.textContent = (`${pro.value}$`)

        butn.onclick = function(){
              pro.value += 1;
               per.textContent = (`${pro.value}$`)
        }
