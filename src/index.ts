import './scss/style.scss'

/**
 * Загрузка данных с localStorage
 */
function setProfileData() {
    const photo = localStorage.getItem('photo')
    const name = localStorage.getItem('name')
    const description = localStorage.getItem('description')

    //Установка фото
    const photoElement = document.querySelector('.profile_userPhoto')
    if (photoElement) {
        if (photo) {
            photoElement.setAttribute('src', photo)
        } else {
            photoElement.setAttribute('src', 'cdd6970e3d9f228be0e9.jpg')
        }
    }

    //Установка имени
    const nameElement = document.querySelector('.profile_name')
    if (nameElement) {
        if (name) {
            nameElement.innerHTML = name
        } else {
            nameElement.innerHTML = 'Установите имя'
        }
    }

    //Установка описания профиля
    const descriptionElement = document.querySelector('.profile_description')
    if (descriptionElement) {
        if (description) {
            descriptionElement.innerHTML = description
        } else {
            descriptionElement.innerHTML = 'Установите описание'
        }
    }
}

/**
 * Функция открывает модальное окно и навешивает слушатель на крестик, который его закрывает
 * (после нажатия на крестик его слушатель удаляется)
 */
function toggleModal() {
    const modalWrapper = document.querySelector('.modals-wrapper')
    const modalProfile = document.querySelector('.modalProfile')
    if (modalWrapper && modalProfile) {
        modalWrapper.classList.toggle('modalHide')
        modalProfile.classList.toggle('modalHide')
    }
}

/**
 * Изменение данных профиля
 */
function changeProfileData() {
    //Установка имени
    const nameInput: HTMLInputElement | null = document.querySelector('.modalProfile_name')
    const nameElement = document.querySelector('.profile_name')
    if (nameInput && nameElement && nameInput.value) {
        nameElement.innerHTML = nameInput.value
        localStorage.setItem('name', nameInput.value)
    }
    //Установка описания
    const descriptionInput: HTMLInputElement | null = document.querySelector('.modalProfile_description')
    const descriptionElement = document.querySelector('.profile_description')
    if (descriptionInput && descriptionElement && descriptionInput.value) {
        descriptionElement.innerHTML = descriptionInput.value
        localStorage.setItem('description', descriptionInput.value)
    }
    //Установка картинки
    const avatarInput: HTMLInputElement | null = document.querySelector('.modalProfile_avatar')
    const avatarElement = document.querySelector('.profile_userPhoto')
    if (avatarInput && avatarElement && avatarInput.value) {
        avatarElement.setAttribute('src', avatarInput.value)
        localStorage.setItem('photo', avatarInput.value)
    }
    toggleModal()
}

function photoItemTemplate(name: string, src: string, isLiked: boolean = false) {
    const photoItem = document.createElement('div')
    photoItem.classList.add('images_item')
    photoItem.innerHTML =
            `<div class="images_photo">
                <img src=${src} alt="photo">
             </div>
             <div class="images_itemLabel">
                 <span class="images_itemName">${name}</span>
                 <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M19.2444 2.74849C17.5625 1.08549 14.8243 1.08384 13.1403 2.74355L10.9911 4.91203L8.82016 2.76549C7.13407 1.08182 4.40014 1.08935 2.74406 2.74323L2.73878 2.7485C1.93084 3.54736 1.5 4.60323 1.5 5.74496C1.5 6.87098 1.94247 7.93498 2.74468 8.74728L10.9804 16.8905L19.2444 8.71923C20.9215 7.06094 20.9138 4.38283 19.2497 2.75372L19.2444 2.74849ZM10.9804 19L1.6841 9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583822 2.76979 1.6841 1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806 1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19Z"
                          fill="black"/>
                 </svg>
             </div>`
    const photosList = document.querySelector('.images_container')
    if (photosList) {
        photosList.append(photoItem)
    }
}

const render = (container: Element, item: Element) => {
    container.append(item)
}


function setPhotos() {
    let photos;
    photos = localStorage.getItem('photos')
    if (photos) {
        photos = JSON.parse(photos)
    }
    const photosList = document.querySelector('.images_container')
    if (photosList) {
        photos.forEach((item: { name: string, src: string }) => photoItemTemplate(item.name, item.src))
    }
}

window.onload = () => {
    // Загрузка всех фото
    setPhotos()

    // Загрузка профиля из localStorage
    setProfileData()

    // Установка новых значений профиля в найстройках
    const profileChangeButton = document.querySelector('.modalProfile_button')
    if (profileChangeButton) {
        profileChangeButton.addEventListener('click', changeProfileData)
    }

    // Карандашик и крестик - открытие/закрытие модального окна
    const profileButton = document.querySelector('.profile_change')
    const cross = document.querySelector('.modals_cross')
    if (profileButton) {
        profileButton.addEventListener('click', toggleModal)
    }
    if (cross) {
        cross.addEventListener('click', toggleModal)
    }
}
