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
function openModal(modalType: string) {
    const modalWrapper = document.querySelector('.modals-wrapper')
    if (modalType === 'profile') {
        const modalProfile = document.querySelector('.modalProfile')
        if (modalWrapper && modalProfile) {
            modalWrapper.classList.remove('modalHide')
            modalProfile.classList.remove('modalHide')
        }
    }
    if (modalType === 'newPhoto') {
        const modalPhoto = document.querySelector('.modalPhoto')
        if (modalWrapper && modalPhoto) {
            modalWrapper.classList.remove('modalHide')
            modalPhoto.classList.remove('modalHide')
        }
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
    openModal('profile')
}

/**
 * Функция удаления одной фото
 */
function handleDeleteItem(name: string) {
    const photosData = localStorage.getItem('photos')
    if (photosData) {
        let photos = JSON.parse(photosData)
        photos = photos.filter((item: { name: string }) => item.name !== name)
        localStorage.setItem('photos', JSON.stringify(photos))
        setPhotos()
    }
}


/**
 * Фунция лайка одного фото
 */

function handleLikeItem(name: string) {
    const photosData = localStorage.getItem('photos')
    if (photosData) {
        let photos = JSON.parse(photosData)
        const newPhoto = photos.map((item: { name: string, liked: boolean }) => {
            if (item.name === name) {
                return {
                    ...item,
                    liked: !item.liked
                }
            } else {
                return item
            }
        })
        localStorage.setItem('photos', JSON.stringify(newPhoto))
        setPhotos()
    }
}

function photoItemTemplate(name: string, src: string) {
    const photoItem = document.createElement('div')
    photoItem.classList.add(`images_item`)
    photoItem.classList.add(`images_item_${name}`)
    photoItem.innerHTML =
        `<div class="images_photo">
                <img src=${src} alt="photo">
             </div>
             <div class="images_itemLabel">
                 <span class="images_itemName">${name}</span>
                 <div>
                 <svg class="images_itemCross" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="22px" height="19px" viewBox="0 0 503.021 503.021"
                 style="enable-background:new 0 0 503.021 503.021;"
                 xml:space="preserve">
\t\t                <path d="M491.613,75.643l-64.235-64.235c-15.202-15.202-39.854-15.202-55.056,0L251.507,132.222L130.686,11.407
\t\t\t                c-15.202-15.202-39.853-15.202-55.055,0L11.401,75.643c-15.202,15.202-15.202,39.854,0,55.056l120.821,120.815L11.401,372.328
\t\t\t                c-15.202,15.202-15.202,39.854,0,55.056l64.235,64.229c15.202,15.202,39.854,15.202,55.056,0l120.815-120.814l120.822,120.814
\t\t\t                c15.202,15.202,39.854,15.202,55.056,0l64.235-64.229c15.202-15.202,15.202-39.854,0-55.056L370.793,251.514l120.82-120.815
\t\t\t                C506.815,115.49,506.815,90.845,491.613,75.643z"/>
                 </svg>
                 <svg class="images_itemLike" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M19.2444 2.74849C17.5625 1.08549 14.8243 1.08384 13.1403 2.74355L10.9911 4.91203L8.82016 2.76549C7.13407 1.08182 4.40014 1.08935 2.74406 2.74323L2.73878 2.7485C1.93084 3.54736 1.5 4.60323 1.5 5.74496C1.5 6.87098 1.94247 7.93498 2.74468 8.74728L10.9804 16.8905L19.2444 8.71923C20.9215 7.06094 20.9138 4.38283 19.2497 2.75372L19.2444 2.74849ZM10.9804 19L1.6841 9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583822 2.76979 1.6841 1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806 1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19Z"
                          fill="black"/>
                 </svg>
                 </div>
             </div>`
    return photoItem
}

const render = (container: Element, item: Element) => {
    container.append(item)
}

function closeModal() {
    const modalWrapper = document.querySelector('.modals-wrapper')
    const modalProfile = document.querySelector('.modalProfile')
    const modalPhoto = document.querySelector('.modalPhoto')
    if (modalWrapper && modalProfile && modalPhoto) {
        modalWrapper.classList.add('modalHide')
        modalProfile.classList.add('modalHide')
        modalPhoto.classList.add('modalHide')
    }
}

function setPhotos() {
    let photos;
    photos = localStorage.getItem('photos')
    if (photos) {
        photos = JSON.parse(photos)
    }
    const photosList = document.querySelector('.images_container')
    if (photosList) {
        photosList.innerHTML = ''
    }
    if (photosList && photos) {
        photos.forEach((item: { name: string, src: string, liked: boolean }) => {
            render(photosList, photoItemTemplate(item.name, item.src))

            // Слушатель удаления кнопок
            const deleteButton = document.querySelector(`.images_item_${item.name} .images_itemCross`)
            if (deleteButton) {
                deleteButton.addEventListener('click', () => handleDeleteItem(item.name))
            }

            // Проверка на лайк при загрузке
            const svgElem = document.querySelector(`.images_item_${item.name} .images_itemLike`)
            if (svgElem) {
                if (item.liked) {
                    svgElem.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19L1.6841 9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583823 2.76979 1.6841 1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806 1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186Z" fill="black"/>`
                } else {
                    svgElem.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2444 2.74849C17.5625 1.08549 14.8243 1.08384 13.1403 2.74355L10.9911 4.91203L8.82016 2.76549C7.13407 1.08182 4.40014 1.08935 2.74406 2.74323L2.73878 2.7485C1.93084 3.54736 1.5 4.60323 1.5 5.74496C1.5 6.87098 1.94247 7.93498 2.74468 8.74728L10.9804 16.8905L19.2444 8.71923C20.9215 7.06094 20.9138 4.38283 19.2497 2.75372L19.2444 2.74849ZM10.9804 19L1.6841 9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583822 2.76979 1.6841 1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806 1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19Z" fill="black"/>`
                }
            }

            // Слушатель лайка
            const likeButton = document.querySelector(`.images_item_${item.name} .images_itemLike`)
            if (likeButton) {
                likeButton.addEventListener('click', () => handleLikeItem(item.name))
            }
        })
    }
}

function addPhoto() {
    const nameInput: HTMLInputElement | null = document.querySelector('.modalPhoto_name')
    const srcInput: HTMLInputElement | null = document.querySelector('.modalPhoto_src')
    const photosData = localStorage.getItem('photos')
    if (nameInput && srcInput) {
        if (photosData) {
            const photos = JSON.parse(photosData)
            photos.push({name: nameInput.value, src: srcInput.value, liked: false})
            console.log(photos)
            console.log(JSON.stringify(photos))
            localStorage.setItem('photos', JSON.stringify(photos))
            setPhotos()
        } else {
            const photos = []
            photos.push({name: nameInput.value, src: srcInput.value, liked: false})
            console.log(photos)
            console.log(JSON.stringify(photos))
            localStorage.setItem('photos', JSON.stringify(photos))
            setPhotos()
        }
    }
    closeModal()
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

    // Слушатель на плюсик добавления записи
    const addItem = document.querySelector('.profile_control')
    if (addItem) {
        addItem.addEventListener('click', () => {
            openModal('newPhoto')
        })
    }

    // Слушатель на кнопку добавления новой записи в модальном окне
    const addItemButton = document.querySelector('.modalPhoto_button')
    if (addItemButton) {
        addItemButton.addEventListener('click', addPhoto)
    }

    // Карандашик и крестик - открытие/закрытие модального окна
    const profileButton = document.querySelector('.profile_change')
    if (profileButton) {
        profileButton.addEventListener('click', () => openModal('profile'))
    }
    const cross = document.querySelector('.modals_cross')
    if (cross) {
        cross.addEventListener('click', closeModal)
    }
}
