import closeModal from "../modal/closeModal";

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
    closeModal()
}

export default changeProfileData