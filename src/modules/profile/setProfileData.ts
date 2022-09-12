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

export default setProfileData