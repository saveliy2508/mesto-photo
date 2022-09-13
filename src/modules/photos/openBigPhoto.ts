import openModal from "../modal/openModal";

/**
 * Функция открытия фото на весь экран
 */

function openBigPhoto(src: string) {
    openModal('bigPhoto')

    const modals = document.querySelector('.modals')
    if (modals) {
        modals.classList.add('modals--bigPhoto')
    }

    const modalBig: HTMLDivElement | null = document.querySelector('.modalBig')
    if(modalBig){
        modalBig.style.background = `url(${src}) no-repeat center`
        modalBig.style.backgroundSize = `contain`
    }
}

export default openBigPhoto