import setPhotos from "./setPhotos";
import {IUser} from "../../types/interfaces";

/**
 * Фунция лайка одного фото
 */

function handleLikeItem(id: number) {
    const photosData = localStorage.getItem('photos')
    if (photosData) {
        let photos = JSON.parse(photosData)
        const newPhoto = photos.map((item: IUser) => {
            if (item.id === id) {
                return {
                    ...item,
                    liked: !item.liked
                }
            } else {
                return item
            }
        })
        localStorage.setItem('photos', JSON.stringify(newPhoto))
        setPhotos()
    }
}

export default handleLikeItem