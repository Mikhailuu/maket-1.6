var sideBlock = document.querySelector('.side-block')
var sideBlockButton = document.querySelector('.side-block-button')
var closeSideBlockBtn = document.querySelector('.side-block-button--close')
var mainWrapper = document.querySelector('.main')

var closeSide = function () {
  sideBlock.classList.add('side-block--hidden')
}

var openSide = function () {
  sideBlock.classList.remove('side-block--hidden')
}
var sideAct = function () {
  sideBlockButton.addEventListener('click', function (e) {
    e.stopPropagation()
    openSide()
  })
  closeSideBlockBtn.addEventListener('click', function () {
    closeSide()
  })
}

if (sideBlock.classList.value.includes('side-block--hidden')) {
  mainWrapper.onclick = function (e) {
    e.stopPropagation()
    sideBlock.classList.add('side-block--hidden')
  }
}

sideAct()

const modalFeedback = document.querySelector('.feedback')
const feedbackButton = document.querySelector('.modal-feedback')
const footetFeedbackButton = document.querySelector('.footer-modal-feedback')
feedbackButton.addEventListener('click', function () {
  modalFeedback.showModal()
})
footetFeedbackButton.addEventListener('click', function () {
  modalFeedback.showModal()
})
const closeButtonFeedback = modalFeedback.querySelector('.close-button')
closeButtonFeedback.addEventListener('click', function () {
  modalFeedback.close()
})

const modalCall = document.querySelector('.call')
const callbutton = document.querySelector('.modal-call')
const footerCallbutton = document.querySelector('.footer-modal-call')
footerCallbutton.addEventListener('click', function () {
  modalCall.showModal()
})
callbutton.addEventListener('click', function () {
  modalCall.showModal()
})
const closeButtonCall = modalCall.querySelector('.close-button')
closeButtonCall.addEventListener('click', function () {
  modalCall.close()
})
