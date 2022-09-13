import setPhotos from "./setPhotos";

/**
 * Функция удаления одной фото
 */

function handleDeleteItem(id: number) {
    const photosData = localStorage.getItem('photos')
    if (photosData) {
        let photos = JSON.parse(photosData)
        photos = photos.filter((item: { id: number }) => item.id !== id)
        localStorage.setItem('photos', JSON.stringify(photos))
        setPhotos()
    }
}

export default handleDeleteItem