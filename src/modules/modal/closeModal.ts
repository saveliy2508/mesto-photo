/**
 * Функция закрытия модального окна
 */

function closeModal() {
    const htmlTag = document.querySelector('html')
    if (htmlTag) {
        htmlTag.style.overflow = 'auto'
    }

    const modalWrapper = document.querySelector('.modals-wrapper')
    const modalProfile = document.querySelector('.modalProfile')
    const modalPhoto = document.querySelector('.modalPhoto')
    const modalBigPhoto = document.querySelector('.modalBig')
    if (modalWrapper && modalProfile && modalPhoto && modalBigPhoto) {
        modalWrapper.classList.add('modalHide')
        modalProfile.classList.add('modalHide')
        modalPhoto.classList.add('modalHide')
        modalBigPhoto.classList.add('modalHide')
    }
    const modals = document.querySelector('.modals')
    if (modals) {
        modals.classList.remove('modals--bigPhoto')
    }
}

export default closeModal