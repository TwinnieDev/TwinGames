var showAndHide = document.getElementById('container')
var btnDisplay = document.getElementById('showHide')

var showAndHide1 = true
var showHide =
    btnDisplay.addEventListener("click", function () {
        if (showAndHide1) {
            showAndHide1 = false
            showAndHide.style.display = 'none'
        } else {
            showAndHide1 = true
            showAndHide.style.display = 'block'
        }
    })

// nav

let toggleBtn = document.querySelector('.toggle_btn')
let toggleBtnIcon = document.querySelector('.toggle_btn i')
let dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    let isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}
// caousel
var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.imgcarousel img')
var prevBtn = document.querySelector('.prev')
var nextvBtn = document.querySelector('.next')
var currenIndex = 0

function updateImgByIndex(index) {

    document.querySelectorAll('.imgcarousel div').forEach(item => {
        item.classList.remove('activecarousel')
    })
    currenIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('activecarousel')
}

listImg.forEach((imgElement, index) => {

    imgElement.addEventListener('click', e => {
        imgFeature.style.opacity = '0'

        setTimeout(() => {
            updateImgByIndex(index)
            imgFeature.style.opacity = '1'
        }, 300)

    })
})

prevBtn.addEventListener('click', e => {
    imgFeature.style.animation = ''
    if (currenIndex == 0) {
        currenIndex = listImg.length - 1
    } else {
        currenIndex--
    }

    setTimeout(() => {
        updateImgByIndex(currenIndex)
        imgFeature.style.animation = 'slideLeft 0.8s ease-in-out forwards'
    }, 200)
})
nextvBtn.addEventListener('click', e => {
    imgFeature.style.animation = ''
    if (currenIndex == listImg.length - 1) {
        currenIndex = 0
    } else {
        currenIndex++
    }

    setTimeout(() => {
        updateImgByIndex(currenIndex)
        imgFeature.style.animation = 'slideRight 0.8s ease-in-out forwards'
    }, 200)
})

updateImgByIndex(0)

// showhide preright

var dlc = document.querySelector('.dlc1')
var mod = document.querySelector('.mod1')
var dlc1 = document.querySelector('.dlc')
var mod1 = document.querySelector('.mod')

function showDLC() {
    dlc.style.display = 'block'
    mod.style.display = 'none'
    dlc1.style.background = 'red'
    mod1.style.background = '#6c757d'
}
function showMOD() {
    dlc.style.display = 'none'
    mod.style.display = 'block'
    mod1.style.background = 'red'
    dlc1.style.background = '#6c757d'
}
// show hide desciption


$(document).ready(function () {
    $(".btntxtshowhide").click(function () {
        $(".txthide").toggle('fast');
    });
});
