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
        const img = new Image()
        img.src = srcInput.value
        img.onload = () => {
            //Если в localStorage что то было, то берем старое значение и добавляем
            if (photosData) {
                const photos = JSON.parse(photosData)
                const date = new Date()
                photos.push({id: date.getTime(), name: nameInput.value, src: srcInput.value, liked: false})
                localStorage.setItem('photos', JSON.stringify(photos))
                setPhotos()
                // Если ничего не было, то создаем массив и добавляем в него
            } else {
                const photos = []
                const date = new Date()
                photos.push({id: date.getTime(), name: nameInput.value, src: srcInput.value, liked: false})
                localStorage.setItem('photos', JSON.stringify(photos))
                setPhotos()
            }
            nameInput.value = ''
            srcInput.value = ''
        }
        img.onerror = () => {
            alert('Изображение не найдено')
            nameInput.value = ''
            srcInput.value = ''
        }
    }

    closeModal()
}

export default addPhoto