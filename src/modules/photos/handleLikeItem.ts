import setPhotos from "./setPhotos";

/**
 * Фунция лайка одного фото
 */

function handleLikeItem(name: string) {
    const photosData = localStorage.getItem('photos')
    if (photosData) {
        let photos = JSON.parse(photosData)
        const newPhoto = photos.map((item: { name: string, liked: boolean }) => {
            if (item.name === name) {
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