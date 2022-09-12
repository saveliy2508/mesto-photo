/**
 * Функция закрытия модального окна
 */

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

export default closeModal