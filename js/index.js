// Анимированное фото

// Элементы анимированного фото
const nameProfi = document.querySelector('#name');
const surname = document.querySelector('#surname');
const profession = document.querySelector('#profession');
// Текстовый контент
const arrWords = ['Валерий','Васильцов','Южный ведущий'];
const arrContainers = [nameProfi, surname, profession];
// Функция выводящая символы
function printTextToPhoto(text, textContainer){
   text.split('').forEach((e,i) => {
            setTimeout(()=>{
               textContainer.textContent += e;
            },300*i)
         })
}
// Запускаем анимацию при загрузке страницы
document.addEventListener('DOMContentLoaded', ()=>{
   arrWords.forEach((el,i) => {
      setTimeout(()=>{
         printTextToPhoto(el, arrContainers[i]);
      },3000*i)
   })
})
// Очищаем элементы и снова запускаем функцию каждые 12 секунд
setInterval(()=>{
   nameProfi.textContent = '';
   surname.textContent = '';
   profession.textContent = '';
   arrWords.forEach((el,i) => {
   setTimeout(()=>{
      printTextToPhoto(el, arrContainers[i]);
   },3000*i)
})},12000);


// Меню бургер
const body = document.querySelector('.body');
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__navigation');

burger.addEventListener('click',()=> {
   burger.classList.toggle('burger--open');
   navigation.classList.toggle('header__navigation--open');
   body.classList.toggle('body--no-scrool');
})
navigation.addEventListener('click',(event)=>{
   if(event.target.classList.contains('navigation__link')
   || event.target.classList.contains('navigation__item')){
      burger.classList.toggle('burger--open');
      navigation.classList.toggle('header__navigation--open');
      body.classList.toggle('body--no-scrool');
   }
})

// Читать далее...

const readMore = document.querySelector('.hero__button');
const text = document.querySelector('.hero__text');
readMore.addEventListener('click', ()=>{
   text.style.height = '1500px';
   readMore.textContent = '';
})