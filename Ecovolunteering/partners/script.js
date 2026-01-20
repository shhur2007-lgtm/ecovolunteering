const homeBtn = document.getElementById("homeBtn");
const charityBtn = document.getElementById("charityBtn");
const partnersBtn = document.getElementById("partnersBtn");
const aboutBtn = document.getElementById("aboutBtn");

function eng_lang() {
  homeBtn.textContent = "Home page";
  charityBtn.textContent = "Charity";
  partnersBtn.textContent = "Our Partners";
  aboutBtn.textContent = "About us"
  document.getElementById('first_article').textContent = "Greenpeace is an international environmental organization that uses peaceful protest and creative confrontation to draw attention to global environmental problems and promote solutions. The organization addresses a wide range of issues, including climate change, forest protection, biodiversity, oceans, and pollution control."
  document.getElementById('second_article').textContent = "The World Wildlife Fund (WWF) is a leading global conservation organization, founded in 1961 and working in nearly 100 countries. Its mission is to build a future where people and nature live in harmony. It works to conserve the planet's biodiversity, focusing on protecting animal species, forests, freshwater, and oceans, combating climate change, and promoting sustainable trade."
  document.getElementById('third_article').textContent = "BirdLife International is a global partnership of non-governmental organizations dedicated to the conservation of birds, their habitats, and global biodiversity. It is the world's largest conservation partnership, uniting over 120 national partners worldwide."
  document.getElementById('first_h2').textContent = "Our Partners";
}

 function rus_lang(){
  homeBtn.textContent = "Главная";
  charityBtn.textContent = "Благотворительность";
  partnersBtn.textContent = "Наши Партнёры";
  aboutBtn.textContent = "О нас"
  document.getElementById('first_article').textContent = "Greenpeace — это международная экологическая организация, которая использует мирные протесты и творческую конфронтацию для привлечения внимания к глобальным экологическим проблемам и продвижения решений. Организация занимается широким кругом вопросов, включая изменение климата, защиту лесов, биоразнообразия, океанов и борьбу с загрязнением."
  document.getElementById('second_article').textContent = "Всемирный фонд дикой природы (WWF) — это ведущая глобальная природоохранная организация, которая была основана в 1961 году и работает почти в 100 странах мира. Миссия фонда — построить будущее, в котором люди и природа будут жить в гармонии. Он занимается сохранением биологического разнообразия планеты, фокусируясь на защите видов животных, лесов, пресной воды, океанов, борьбе с изменением климата и устойчивой торговле."
  document.getElementById('third_article').textContent = "BirdLife International — это всемирное партнерство неправительственных организаций, которое занимается охраной птиц, их среды обитания и глобального биоразнообразия. Это крупнейшее в мире партнерство природоохранных организаций, объединяющее более 120 национальных партнеров по всему миру."
  document.getElementById('first_h2').textContent = "Наши Партнёры";
 }

const prevBtn = document.querySelector("[data-btn-prev]");
const nextBtn = document.querySelector("[data-btn-next]");
const labelPartner = document.getElementById('partner_name');

const partnerNames = [
  'Greenpeace',
  'WWF (World Wildlife Fund)',
  'BirdLife'
];

let currentPartner = 0;

function updatePartnerName() {
  labelPartner.textContent = partnerNames[currentPartner];
}

prevBtn.onclick = function() {
  currentPartner = (currentPartner - 1 + partnerNames.length) % partnerNames.length;
  updatePartnerName();
};

nextBtn.onclick = function() {
  currentPartner = (currentPartner + 1) % partnerNames.length;
  updatePartnerName();
};
updatePartnerName();

//button

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

//ссылки на страницы
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
// выбор язка

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

