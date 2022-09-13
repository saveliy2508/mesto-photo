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
    if (modalType === 'bigPhoto') {
        const modalBigPhoto = document.querySelector('.modalBig')
        if (modalWrapper && modalBigPhoto) {
            modalWrapper.classList.remove('modalHide')
            modalBigPhoto.classList.remove('modalHide')
        }
    }
}

export default openModal