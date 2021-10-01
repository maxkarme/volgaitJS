let VIDGET_COMPONENT_HTML = `<div class="vidget" id="vidget_vidget">
<div class="vidget__header">
    <div class="vidget__header-left">
        <div class="vidget__header-photo-block" id="vidget_imgBlock">
            <div class="vidget__header-photo-wrap">
                <img src="" class="vidget__header-photo" id="vidget_photo" alt="">
            </div>
            <div class="vidget__header-video-wrap">
                <video src="" class="vidget__header-video" id="vidget_video"></video>
            </div>
            <p class="vidget__header-cross vidget__header-cross_one" id="vidget_cross1">+</p>
            <p class="vidget__header-cross vidget__header-cross_two" id="vidget_cross2">+</p>
            <div class="vidget__header-btn" id="vidget_takeBtn" onselectstart="return false">
                <img onselectstart="return false" src="./img/photo-icon.png" class="vidget__header-icon" alt="">
                <span onselectstart="return false" class="vidget__header__btn-text">Take Photo</span>
            </div>
            <div class="vidget__header__upload-wrap">
                <div class="vidget__header__upload" id="vidget_downloadBtn">
                    <p class="widget__header__upload-plus">+</p>
                    <p class="widget__header__upload-text">Upload Image</p>
                    <form action="" class="vidget__header-download-wrap">
                        <input type="file" hidden id="vidget_downloadInput">
                    </form>
                </div>
            </div>
            <div class="vidget__header-glasses-wrap" id="vidget_glasses">
                <img src="" alt="" class="vidget__header-glasses">
            </div>
        </div>
        <div class="vidget__header__buttons-wrap">
            <button class="vidget__header__solid-button" id="vidget_tryBtn">Try On Glasses</button>
            <button class="vidget__header__underline-button">Reset Adjastments</button>
        </div>
    </div>
    <div class="vidget__header-info">
        <div class="vidget__header-info_top">
            <h3 class="vidget__header-title vidget__header-title_up">Ray Ban 3545V</h3>
            <img src="" alt="" class="vidget__header-glasses-img" data-id="0" id="vidget_currentMirrorsItem">
            <button class="vidget__header-glasses-btn">Choose Lenses</button>
        </div>
        <div class="vidget__header-info_bottom">
            <h3 class="vidget__header-title vidget__header-title_bottom">Product Description</h3>
            <p class="vidget__header-info-text">
                The Ray-Ban 5228 is the slimmer take on the iconic wayframe. Crafted
                from premium acetate, its sleek arms, silver accents and rich hue
                continues to leave a mark now just as it did in the early 1950's.
            </p>
        </div>
    </div>
    <div class="vidget__settings">
        <button class="vidget__settings-back" id="vidget_backBtn">
            <span class="vidget__settings__back-bracket">‹</span>Back
        </button>
        <h2 class="vidget__settings-title">Adjust the image</h2>
        <div class="vidget__settings-list">
            <div class="vidget__settings__list-item">
                <div class="vidget__settings__list__item-text-block">
                    <span class="vidget__settings__list-num">1.</span>
                    <p class="vidget__settings__list-text">
                        the RED targets to the center of your eyes
                    </p>
                </div>
            </div>
            <div class="vidget__settings__list-item">
                <div class="vidget__settings__list__item-text-block">
                    <span class="vidget__settings__list-num">2.</span>
                    <p class="vidget__settings__list-text">
                        to reposition photo
                    </p>
                </div>
            </div>
            <div class="vidget__settings__list-item">
                <div class="vidget__settings__list__item-text-block">
                    <span class="vidget__settings__list-num">3.</span>
                    <p class="vidget__settings__list-text">
                        set Your PD, if you know it
                    </p>
                </div>
                <input value="62" id="vidget_PD" type="text" class="vidget__settings__list-input">
            </div>
            <div class="vidget__settings__list-item">
                <div class="vidget__settings__list__item-text-block">
                    <span class="vidget__settings__list-num">4.</span>
                    <p class="vidget__settings__list-text">
                        Adjust the photo with the controls.
                    </p>
                </div>
            </div>
        </div>
        <form action="" class="vidget__settings-form" id="vidget_form">
            <div class="vidget__settings__form-item">
                <h3 class="vidget__settings__form__item-title">Photo Size</h3>
                <input type="range" min="30" max="200" value="100" name="size"
                    class="vidget__settings__form-input">
            </div>
            <div class="vidget__settings__form-item">
                <h3 class="vidget__settings__form__item-title">Photo Rotation</h3>
                <input type="range" name="rotation" min="-180" max="180" value="0"
                    class="vidget__settings__form-input">
            </div>
        </form>
    </div>
</div>
<div class="vidget__similar">
    <h2 class="vidget__similar-title">Similar Frames</h2>
    <div class="vidget__similar__img-wrap">
        <div class="vidget__similar__img-item">
            <img src="" alt="" class="vidget__similar-img">
            <p class="vidget__similar-text">Muse Skip Shiny Black</p>
        </div>
        <div class="vidget__similar__img-item">
            <img src="" alt="" class="vidget__similar-img">
            <p class="vidget__similar-text">Muse Skip Shiny Black</p>
        </div>
        <div class="vidget__similar__img-item">
            <img src="" alt="" class="vidget__similar-img">
            <p class="vidget__similar-text">Muse Skip Shiny Black</p>
        </div>
    </div>
</div>
</div>`;

if(document.getElementById("virtual-mirror-widget")) document.getElementById("virtual-mirror-widget").innerHTML = VIDGET_COMPONENT_HTML;

let vidgetObj = {
    vidget: document.getElementById('vidget_vidget'),
    takeBtn: document.getElementById('vidget_takeBtn'),
    downloadBtn: document.getElementById('vidget_downloadBtn'),
    backBtn: document.getElementById('vidget_backBtn'),
    form: document.getElementById('vidget_form'),
    downloadInput: document.getElementById('vidget_downloadInput'),
    imgBlock: document.getElementById('vidget_imgBlock'),
    photoHTML: document.getElementById('vidget_photo'),
    tryBtn: document.getElementById('vidget_tryBtn'),
    glasses: document.getElementById('vidget_glasses'),
    PD: document.getElementById('vidget_PD'),
    currentMirrorsItem: document.getElementById('vidget_currentMirrorsItem'),
    form: document.getElementById('vidget_form'),
    video: document.getElementById('vidget_video'),
    state: 'default',
    settings: {
        photo: {
            state: '',
            x: 0,
            y: 0,
            startX: 0,
            startY: 0
        },
        cross1: {
            state: '',
            x: document.getElementById('vidget_cross1').getBoundingClientRect().left,
            y: document.getElementById('vidget_cross1').getBoundingClientRect().top,
            startX: 0,
            startY: 0,
            html: document.getElementById('vidget_cross1')
        },

        cross2: {
            state: '',
            x: document.getElementById('vidget_cross2').getBoundingClientRect().left + 50,
            y: document.getElementById('vidget_cross2').getBoundingClientRect().top,
            startX: 0,
            startY: 0,
            html: document.getElementById('vidget_cross2')
        }
    },
    allowVideo: false,
    currentMirrors: 0
}

vidgetObj.initVidget = (vidgetElem) => {
    fetch("https://optimaxdev.github.io/volga-it/response.json")
        .then((res) => res.json())
        .then(res => {
            vidgetElem.items = res.items;
            let wrap = document.querySelector(".vidget__similar__img-wrap");
            fetch(vidgetElem.items[0].image)
                .then(res => res.blob())
                .then(res => URL.createObjectURL(res))
                .then(url => {
                    vidgetElem.currentMirrorsItem.src = url;
                    let parent = vidgetElem.currentMirrorsItem.parentElement;
                    parent.children[0].textContent = vidgetElem.items[0].name;
                    parent.parentElement.children[1].children[1].textContent = vidgetElem.items[0].description;
                });

            for(let i = 0; i < 3; ++i) {
                fetch(vidgetElem.items[i + 1].image)
                .then(res => res.blob())
                .then(res => URL.createObjectURL(res))
                .then(url => {
                        wrap.children[i].children[0].src = url;
                        wrap.children[i].children[0].dataset.id = i + 1;
                        wrap.children[i].children[1].textContent = vidgetElem.items[i + 1].name;
                    })
            }
        });
}

vidgetObj.initVidget(vidgetObj);

vidgetObj.takeBtn.onclick = () => {
    vidgetObj.glasses.classList.remove("active");
    if((vidgetObj.state == "default" || vidgetObj.state == "settings") && !vidgetObj.allowVideo) {
        navigator.mediaDevices.getUserMedia({video: true})
        .then((stream) => {
            vidgetObj.video.srcObject = stream;
            vidgetObj.video.play();
            vidgetObj.vidget.classList.add('vidget_get-video');
            vidgetObj.vidget.classList.remove('vidget_settings-photo');
            vidgetObj.state = 'gettingVideo';
            vidgetObj.allowVideo = true;
        }).catch((err) => {
            vidgetObj.vidget.classList.add('vidget_get-photo');
            vidgetObj.vidget.classList.remove('vidget_settings-photo');
            vidgetObj.state = 'getting';
        });
    } else if(vidgetObj.state == "gettingVideo") {
        let canv = document.createElement("canvas");
        let ctx = canv.getContext("2d");

        let height = vidgetObj.video.clientHeight;
        let width = vidgetObj.video.clientWidth;

        canv.width = width;
        canv.height = height;
        ctx.drawImage(vidgetObj.video, 0, 0, 600, height);
        let url = canv.toDataURL("image/png");

        vidgetObj.photoHTML.src = url;

        vidgetObj.vidget.classList.remove('vidget_get-video');
        vidgetObj.vidget.classList.add('vidget_settings-photo');
        vidgetObj.takeBtn.children[1].textContent = 'Retake';
        vidgetObj.state = 'settings';

        vidgetObj.video.pause();
    } else if((vidgetObj.state == "settings" || vidgetObj.state == "default") && vidgetObj.allowVideo) {       
        vidgetObj.video.play();
        vidgetObj.vidget.classList.add('vidget_get-video');
        vidgetObj.vidget.classList.remove('vidget_settings-photo');
        vidgetObj.state = 'gettingVideo';
    }
}

for(let i = 0; i < 3; ++i) {
    let elem = document.getElementsByClassName("vidget__similar__img-item")[i];
    elem.onclick = (e) => {
        target = e.target.closest(".vidget__similar__img-item");
        let copyId = target.children[0].dataset.id;
        let copyURL = target.children[0].src;

        target.children[0].dataset.id = vidgetObj.currentMirrorsItem.dataset.id;
        target.children[0].src = vidgetObj.currentMirrorsItem.src;
        target.children[1].textContent = vidgetObj.items[vidgetObj.currentMirrors].name;

        vidgetObj.currentMirrorsItem.dataset.id = copyId;
        vidgetObj.currentMirrorsItem.src = copyURL;

        vidgetObj.currentMirrors = copyId;

        let parent = vidgetObj.currentMirrorsItem.parentElement;
        parent.children[0].textContent = vidgetObj.items[copyId].name;
        parent.parentElement.children[1].children[1].textContent = vidgetObj.items[copyId].description;

    }
}

vidgetObj.downloadBtn.onclick = () => {
    vidgetObj.downloadInput.click();
}

vidgetObj.downloadInput.onchange = (e) => {
    let file = e.target.files[0];

    if (file.type.indexOf('jpeg') == -1 &&
        file.type.indexOf('image') == -1 &&
        file.type.indexOf('png') == -1) return;

    let url = URL.createObjectURL(file);

    vidgetObj.photoHTML.src = url;

    vidgetObj.vidget.classList.remove('vidget_get-photo');
    vidgetObj.vidget.classList.add('vidget_settings-photo');
    vidgetObj.takeBtn.children[1].textContent = 'Retake';
    vidgetObj.state = 'settings';

    vidgetObj.downloadInput.parentElement.reset();
}

vidgetObj.backBtn.onclick = () => {
    vidgetObj.vidget.classList.remove('vidget_settings-photo');
    vidgetObj.takeBtn.children[1].textContent = 'Take Photo';
    vidgetObj.state = 'default';
}

vidgetObj.imgBlock.onpointerdown = (e) => {
    if (e.target.id == 'vidget_cross1' || e.target.id == 'vidget_cross2') return;
    if (vidgetObj.state != 'settings') return;
    vidgetObj.settings.photo.state = 'mousedown';
    vidgetObj.settings.photo.startX = e.clientX;
    vidgetObj.settings.photo.startY = e.clientY;
}

let vidget_photoMove = (e) => {
    let photo = vidgetObj.settings.photo;

    let newX = photo.x + (e.clientX - photo.startX);
    let newY = photo.y + (e.clientY - photo.startY);

    photo.x = newX;
    photo.y = newY;

    photo.startX = e.clientX;
    photo.startY = e.clientY;

    vidgetObj.photoHTML.style.marginLeft = `${newX}px`;
    vidgetObj.photoHTML.style.marginTop = `${newY}px`;
}

let vidget_crossMove = (crossHTML, crossObj, e) => {
    let newX = crossObj.x + (e.clientX - crossObj.startX);
    let newY = crossObj.y + (e.clientY - crossObj.startY);

    crossObj.x = newX;
    crossObj.y = newY;

    crossObj.startX = e.clientX;
    crossObj.startY = e.clientY;

    crossHTML.style.left = `${newX}px`;
    crossHTML.style.top = `${newY}px`;
}

vidgetObj.imgBlock.onpointermove = (e) => {
    let photo = vidgetObj.settings.photo;
    let cross1Obj = vidgetObj.settings.cross1;
    let cross2Obj = vidgetObj.settings.cross2;
    if (photo.state == 'mousedown') {
        vidget_photoMove(e);
    }
    if (cross1Obj.state == 'mousedown') vidget_crossMove(vidgetObj.settings.cross1.html, cross1Obj, e);
    if (cross2Obj.state == 'mousedown') vidget_crossMove(vidgetObj.settings.cross2.html, cross2Obj, e);
}

document.onpointerup = () => {
    vidgetObj.settings.photo.state = '';
    vidgetObj.settings.cross1.state = '';
    vidgetObj.settings.cross2.state = '';
}

vidgetObj.form.size.oninput = (e) => {
    vidgetObj.photoHTML.style.width = `${e.target.value}%`;
}

vidgetObj.form.rotation.oninput = (e) => {
    vidgetObj.photoHTML.style.transform = `rotate(${e.target.value}deg)`;
}

vidgetObj.settings.cross1.html.onpointerdown = (e) => {
    vidgetObj.settings.cross1.state = 'mousedown';
    vidgetObj.settings.cross1.startX = e.clientX;
    vidgetObj.settings.cross1.startY = e.clientY;
}

vidgetObj.settings.cross2.html.onpointerdown = (e) => {
    vidgetObj.settings.cross2.state = 'mousedown';
    vidgetObj.settings.cross2.startX = e.clientX;
    vidgetObj.settings.cross2.startY = e.clientY;
}

vidgetObj.photoHTML.ondragstart = () => false;


let vidget_getDistance = (cross1Obj, cross2Obj) => {
    let diffX = Math.abs(cross1Obj.x - cross2Obj.x);
    let diffY = Math.abs(cross1Obj.y - cross2Obj.y);

    let res = Math.sqrt(diffX * diffX + diffY * diffY);
    return res;
}

let vidget_getRotation = (cross1Obj, cross2Obj) => {
    let leftCross;
    let rightCross;
    if (cross1Obj.x < cross2Obj.x) {
        leftCross = cross1Obj;
        rightCross = cross2Obj;
    } else {
        leftCross = cross2Obj;
        rightCross = cross1Obj;
    }

    let diffX = rightCross.x - leftCross.x;
    let diffY = rightCross.y - leftCross.y;

    let tan = diffY / diffX;

    return Math.atan(tan);
}

vidgetObj.tryBtn.onclick = async () => {
    let cross1Obj = vidgetObj.settings.cross1;
    let cross2Obj = vidgetObj.settings.cross2;

    let leftCross;
    let rightCross;
    if (cross1Obj.x < cross2Obj.x) {
        leftCross = cross1Obj;
        rightCross = cross2Obj;
    } else {
        leftCross = cross2Obj;
        rightCross = cross1Obj;
    }

    let pupilDistance = vidget_getDistance(cross1Obj, cross2Obj);

    let mirrors = vidgetObj.items[vidgetObj.currentMirrors];
    let url = await fetch(mirrors.mirror_frame)
        .then(res => res.blob())
        .then(res => URL.createObjectURL(res));

    let width = (mirrors.width / 100)   / (vidgetObj.PD.value / pupilDistance);
    width *= 100;
    vidgetObj.glasses.children[0].src = url;
    vidgetObj.glasses.style.width = `${width}px`;
    vidgetObj.glasses.classList.add('active');

    let rotation = vidget_getRotation(cross1Obj, cross2Obj);
    vidgetObj.glasses.style.transform = `rotate(${rotation}rad)`;


    let diffX = (width - pupilDistance) / 2;
    let diffY = (width - pupilDistance) / 3.5;

    let xCord = leftCross.x - diffX + 12;
    let yCord = leftCross.y - diffY + 26;

    vidgetObj.glasses.style.left = `${xCord}px`;
    vidgetObj.glasses.style.top = `${yCord}px`;

    vidgetObj.vidget.classList.remove('vidget_settings-photo');
    vidgetObj.takeBtn.children[1].textContent = 'Take Photo';
    vidgetObj.state = 'default';
}