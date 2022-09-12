import setPhotos from "./setPhotos";

/**
 * Функция удаления одной фото
 */

function handleDeleteItem(name: string) {
    const photosData = localStorage.getItem('photos')
    if (photosData) {
        let photos = JSON.parse(photosData)
        photos = photos.filter((item: { name: string }) => item.name !== name)
        localStorage.setItem('photos', JSON.stringify(photos))
        setPhotos()
    }
}

export default handleDeleteItem