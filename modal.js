let modal = document.querySelector('.modal-window')
let modalImg = document.querySelector('.modal-img')
let images = document.querySelectorAll('.img-item')
let imgIndex = 0;
function closeModal(){
    modal.style.display = 'none'
}

function showImg(element){
    modal.style.display = 'flex'
    modalImg.src = element.src
    for(let i = 0; i < images.length; i++){
        if(images[i].src == element.src){
            imgIndex = i;
            // 3
        }   
    }
}
function slideImg(n){
    imgIndex += n;
    changeImg(imgIndex)
}

function changeImg(i){
    if(i < 0){
        i = images.length - 1
        imgIndex = i
    }
    if(i >= images.length){
        i = 0;
        imgIndex = i
    }
    modalImg.src = images[i].src
}