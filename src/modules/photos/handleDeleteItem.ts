import setPhotos from "./setPhotos";
import {IUser} from "../../types/interfaces";

/**
 * Функция удаления одной фото
 */

function handleDeleteItem(id: number) {
    const photosData = localStorage.getItem('photos')
    if (photosData) {
        let photos = JSON.parse(photosData)
        photos = photos.filter((item: IUser) => item.id !== id)
        localStorage.setItem('photos', JSON.stringify(photos))
        setPhotos()
    }
}

export default handleDeleteItem