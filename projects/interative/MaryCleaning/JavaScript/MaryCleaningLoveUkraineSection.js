//Повідомляємо браузеру, що коли виникне подія DOMContentLoaded потрібно буде виконати саме цей обробник
document.addEventListener ("DOMContentLoaded", function () { 
  //Отримаємо об'єктне значне що описує об'єкт HTML даної нашої з вами WEB-сторінки 
  // з даним ідентіфікатором AnimateSection (це дана наша спливаюча секція, 
  // що виникає відразу ж опісля того як будуть оброблені абсолютно всі теги HTML 
  // даної нашої з вами WEB-сторінки і, відповідно, опісля того, яу буде повністю
  // створена дана її модель DOM) і присвоюємо його даному об'єкту section.
  //var marypngimageobjects=document.getElementById("marypng");
  //var marypnimageobjectcoords= marypngimageobjects.getBoundingClientRect();
  //console.log ("marypnimageobjectcoords.left= " + marypnimageobjectcoords.left+ " marypnimageobjectcoords.top= "+ marypnimageobjectcoords.top);
  var section=document.getElementById("AnimateSection");
  var sound;
  sound=document.getElementById("SoundEffect");
  var buttonSnd=document.getElementById("GimnUkrainy");
  buttonSnd.addEventListener ("click", function () {sound.play();})
  setTimeout(
    () => {
      section.classList.add("show"); 
      // Звертаємося до об`'єкту section, описує дану нашу вами секцію, що повинна 
      // з'являтися одразу ж опісля завантаження та обробки всіх тегів HTML даної нашої 
      // WEB-сторінки і, відповідно одразу ж по завершенню створення даної її моделі DOM,
      // як об'єкт HTML з ідентифікатором AnimateSection яким вона, власне  і є далі за допомогою
      // властивості classList даного об'єкту section отримуємо доступ до списку класів даної
      // секції як даного об.єкту HTML і додаємо туди клас show і, таким чином, додємо їй даний клас.
      // Це в решті решт призводить до її появлення на єкрані. 
      //  sound.play(); // Відтворюємо звук при натисканні
      section.style.display="flex";
    }, 1000 // робимо затримку на 1000мс
  );
 var closeBtn=document.getElementById("CloseBtn");
  //Отримаємо об'єктне значне що описує об'єкт HTML даної нашої з вами WEB-сторінки 
  // з даним ідентіфікатором CloseBtn (це зображення кнопки, при кліканні на якому
  // дана наша спливаюча секція, 
  // що виникає відразу ж опісля того як будуть оброблені абсолютно всі теги HTML 
  // даної нашої з вами WEB-сторінки і, відповідно, опісля того, яу буде повністю
  // створена дана її модель DOM), повинна зникнути і
  //  присвоюємо його даному об'єкту closeBtn.
  closeBtn.addEventListener ("click", function () {
    // Вказуємо браузеру, що він повинен фіксувати подію "click" при натисканні на
    // дану кнопку з хрестиком (вона описується за допомогою об'єктного значення даного
    // об'єкта closeBtn даного сценарію) даної секції, що описується за допомогою 
    // об'єктного значення даного об'єкту section даного сценарію.
    // Також ми йому вказкємо, що при фіксації даної події при натисканні на 
    // дану кнопку він повинен виконати саме даний обробник, в наслідок чого він повинен
    // прибрати дану секцію з екрану.
    sound.pause();
    sound.currentTime=0;
    var snd=document.getElementById("SndEffect");
    snd.play();
    section.classList.add("hide");  
 section.style.transform="translateY (0)";
  setTimeout (
    ()=> {
      section.style.display="none";
    }, 
    10000
    ); 
   } //Кінець обробника події "click" для об'єкту closeBtn який описує  наше зображення з кнопкою з хрестиком
      // Даний обробник забеспечує зникнення всіє даної секцїї, яка описується даним
      // об'єктом section і до складу якої і входить дане зображення кнопки з хрестиком
  ); // Кінець  closeBtn.addEventListener ("click", function () {} );
 } //Кінець обробника події DOMContentLoaded даного нашого об'єкту document, який за допомогою
   // даного свого об'єктного значення описує весь HTML-код даної WEB-сторінки і яка виникає 
   // лише опісля повного завершення завантаження та обробки всього ї даного HTML-коду та,
   // відповідно після повного завершення створення її моделі DOM. 
); // Кінець  document.addEventListener ("DOMContentLoaded", function () {} ); 
   // і всього даного сценарію.
var cleaner;
cleaner=document.getElementById("Cleaner");
cleaner.style.cursor="pointer";
document.getElementById("Cleaner").addEventListener("click", function (event) {

  window.open("../AdditionalHTML/cleaner.html", "_blank", "width=600, height=600");//.document.write("Цей текст з'являється при кліку!");
}
);

