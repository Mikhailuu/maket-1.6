var showmoreWrapper = document.querySelector('.showmore-text')
var showmoreBtnCont = document.querySelector('.showmore-content')
var showmoreBtnTxt = showmoreBtnCont.querySelector('.showmore__button')
var showmoreIconTxt = showmoreBtnCont.querySelector('.showmore__icon')

var textExpand = function () {
  if (!showmoreWrapper.classList.value.includes('showmore-wrapper--expand')) {
    showmoreWrapper.classList.add('showmore-wrapper--expand')
    showmoreBtnTxt.textContent = 'Скрыть'
    showmoreIconTxt.classList.add('showmore__icon--expand')
  } else {
    showmoreWrapper.classList.remove('showmore-wrapper--expand')
    showmoreBtnTxt.textContent = 'Показать ещё'
    showmoreIconTxt.classList.remove('showmore__icon--expand')
  }
}

showmoreBtnTxt.addEventListener('click', textExpand)

var listBrnds = document.querySelector('.showmore-brands').children
var shomoreBtnBrandsCont = document.querySelector('.showmore-brands-btn')
var brandExpandBtn = shomoreBtnBrandsCont.querySelector('.showmore__button')
var brandExpandIcon = shomoreBtnBrandsCont.querySelector('.showmore__icon')

var showmoreBrands = function () {
  var count = 0
  if (window.matchMedia('(min-width: 768px)')) {
    count = 6
  } else {
    count = 8
  }
  for (var i = count; i < listBrnds.length; i++) {
    if (listBrnds[i].style.display == 'block') {
      listBrnds[i].style.display = 'none'
      brandExpandIcon.classList.remove('showmore__icon--expand')
    } else {
      listBrnds[i].style.display = 'block'
      brandExpandIcon.classList.add('showmore__icon--expand')
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  showmoreBrands()
})
showmoreBrands()
brandExpandBtn.addEventListener('click', showmoreBrands)

var listTechs = document.querySelector('.showmore-techs').children
var shomoreBtnTechsCont = document.querySelector('.showmore-techs-btn')
var textExpandBtn = shomoreBtnTechsCont.querySelector('.showmore__button')
var textExpandIcon = shomoreBtnTechsCont.querySelector('.showmore__icon')

var showmoreTechs = function () {
  var count = 0
  if (window.matchMedia('(min-width: 768px)')) {
    count = 4
  } else {
    count = 6
  }
  for (var i = count; i < listTechs.length; i++) {
    if (listTechs[i].style.display == 'flex') {
      listTechs[i].style.display = 'none'
      textExpandIcon.classList.remove('showmore__icon--expand')
    } else {
      listTechs[i].style.display = 'flex'
      textExpandIcon.classList.add('showmore__icon--expand')
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  showmoreTechs()
  console.log('workssss')
})
showmoreTechs()
textExpandBtn.addEventListener('click', showmoreTechs)
