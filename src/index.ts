import './scss/index.scss'

import setProfileData from "./modules/profile/setProfileData";
import openModal from "./modules/modal/openModal";
import changeProfileData from "./modules/profile/changeProfileData";
import setPhotos from "./modules/photos/setPhotos";
import addPhoto from "./modules/photos/addPhoto";
import closeModal from "./modules/modal/closeModal";


window.onload = () => {
    // Загрузка профиля из localStorage
    setProfileData()

    // Загрузка всех фото
    setPhotos()

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

    // Карандашик - открытие модального окна
    const profileButton = document.querySelector('.profile_change')
    if (profileButton) {
        profileButton.addEventListener('click', () => openModal('profile'))
    }

    // Крестик - закрытие модального окна
    const cross = document.querySelector('.modals_cross')
    if (cross) {
        cross.addEventListener('click', closeModal)
    }
}
