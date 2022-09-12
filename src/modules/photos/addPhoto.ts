import setPhotos from "./setPhotos";
import closeModal from "../modal/closeModal";

/**
 * Функция добавления фото
 */

function addPhoto() {
    const nameInput: HTMLInputElement | null = document.querySelector('.modalPhoto_name')
    const srcInput: HTMLInputElement | null = document.querySelector('.modalPhoto_src')
    const photosData = localStorage.getItem('photos')
    if (nameInput && srcInput) {
        //Если в localStorage что то было, то берем старое значение и добавляем
        if (photosData) {
            const photos = JSON.parse(photosData)
            photos.push({name: nameInput.value, src: srcInput.value, liked: false})
            localStorage.setItem('photos', JSON.stringify(photos))
            setPhotos()
        // Если ничего не было, то создаем массив и добавляем в него
        } else {
            const photos = []
            photos.push({name: nameInput.value, src: srcInput.value, liked: false})
            localStorage.setItem('photos', JSON.stringify(photos))
            setPhotos()
        }
    }
    closeModal()
}

export default addPhoto