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
        }
    }

    //Установка имени
    const nameElement = document.querySelector('.profile_name')
    if (nameElement) {
        if (name) {
            nameElement.textContent = name
        } else {
            nameElement.textContent = 'Установите имя'
        }
    }

    //Установка описания профиля
    const descriptionElement = document.querySelector('.profile_description')
    if (descriptionElement) {
        if (description) {
            descriptionElement.textContent = description
        } else {
            descriptionElement.textContent = 'Установите описание'
        }
    }
}

export default setProfileData