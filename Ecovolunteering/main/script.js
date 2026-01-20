const homeBtn = document.getElementById("homeBtn");
const charityBtn = document.getElementById("charityBtn");
const partnersBtn = document.getElementById("partnersBtn");
const aboutBtn = document.getElementById("aboutBtn");

function eng_lang() {
  homeBtn.textContent = "Home page";
  charityBtn.textContent = "Charity";
  partnersBtn.textContent = "Our Partners";
  aboutBtn.textContent = "About us";
  document.getElementById('first_h2').textContent = "Waste sorting"
  document.getElementById('second_h2').textContent ="Ecological culture"
  document.getElementById('first_h4').textContent = "WE ARE"
  document.getElementById('second_h4').textContent = "FOR"
  document.getElementById('third_h4').textContent = "A HEALTHY"
  document.getElementById('fourth_h4').textContent ="PLANET!"
  document.getElementById('main_h1').textContent = "Eco-volunteering"
  document.getElementById('main_article').textContent = "Eco-volunteering is a voluntary, unpaid activity aimed at caring for nature and solving environmental problems, bringing together people who strive to contribute to environmental conservation. Volunteers participate in a wide range of activities: from cleaning up litter in forests and parks, planting trees, and helping animals in nature reserves, to educational outreach and organizing environmental events. This activity not only brings tangible practical benefits, helping clean and restore natural sites, but also changes public awareness, fostering a responsible attitude toward the planet and an understanding that even small, collective efforts can lead to significant positive changes."
}

 function rus_lang(){
  homeBtn.textContent = "Главная";
  charityBtn.textContent = "Благотворительность";
  partnersBtn.textContent = "Наши Партнёры";
  aboutBtn.textContent = "О нас"
  document.getElementById('first_h2').textContent = "Сортировка отходов"
  document.getElementById('second_h2').textContent ="Экологическая культура"
  document.getElementById('first_h4').textContent = "МЫ"
  document.getElementById('second_h4').textContent = "ЗА"
  document.getElementById('third_h4').textContent = "ЗДОРОВУЮ"
  document.getElementById('fourth_h4').textContent ="ПЛАНЕТУ"
  document.getElementById('main_h1').textContent = "Эковолонтерство"
  document.getElementById('main_article').textContent = "Эковолонтерство — это добровольная и безвозмездная деятельность, направленная на заботу о природе и решение экологических проблем, которая объединяет людей, стремящихся внести свой вклад в сохранение окружающей среды. Волонтеры участвуют в самых разных активностях: от уборки мусора в лесах и парках, высадки деревьев и помощи животным в заповедниках до просветительской работы и организации экологических акций. Эта деятельность не только приносит ощутимую практическую пользу, помогая очищать и восстанавливать природные объекты, но и меняет сознание общества, формируя ответственное отношение к планете и понимание, что даже небольшие, но коллективные усилия способны привести к значительным позитивным изменениям."
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
 

// Вешаем обработчики
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



 
 

