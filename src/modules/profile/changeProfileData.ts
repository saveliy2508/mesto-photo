import closeModal from "../modal/closeModal";

/**
 * Изменение данных профиля
 */
function changeProfileData() {
    //Установка имени
    const nameInput: HTMLInputElement | null = document.querySelector('.modalProfile_name')
    const nameElement = document.querySelector('.profile_name')
    if (nameInput && nameElement && nameInput.value) {
        nameElement.textContent = nameInput.value
        localStorage.setItem('name', nameInput.value)
        nameInput.value = ''
    }
    //Установка описания
    const descriptionInput: HTMLInputElement | null = document.querySelector('.modalProfile_description')
    const descriptionElement = document.querySelector('.profile_description')
    if (descriptionInput && descriptionElement && descriptionInput.value) {
        descriptionElement.textContent = descriptionInput.value
        localStorage.setItem('description', descriptionInput.value)
        descriptionInput.value = ''
    }
    //Установка картинки
    const avatarInput: HTMLInputElement | null = document.querySelector('.modalProfile_avatar')
    const avatarElement = document.querySelector('.profile_userPhoto')
    if (avatarInput && avatarElement && avatarInput.value) {
        const img = new Image()
        img.src = avatarInput.value
        img.onload = () => {
            avatarElement.setAttribute('src', avatarInput.value)
            localStorage.setItem('photo', avatarInput.value)
            avatarInput.value = ''
        }
        img.onerror = () => {
            alert('Изображение не найдено')
            avatarInput.value = ''
        }
    }
    closeModal()
}

export default changeProfileData