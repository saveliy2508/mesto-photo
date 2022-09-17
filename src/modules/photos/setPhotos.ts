import handleDeleteItem from "./handleDeleteItem";
import render from "../common/render";
import handleLikeItem from "./handleLikeItem";
import photoItemTemplate from "./photoItemTamplate";
import openBigPhoto from './openBigPhoto'
import {IPhoto} from "../../types/interfaces";

/**
 * Функция перезагружающая список фотокарточек
 */

function setPhotos() {
    let photos;
    photos = localStorage.getItem('photos')
    if (photos) {
        photos = JSON.parse(photos)
    }
    const photosList = document.querySelector('.images_container')
    if (photosList && photos) {
        photosList.innerHTML = ''
        photos.forEach((item: IPhoto) => {
            render(photosList, photoItemTemplate(item.name, item.src, item.id))

            // Слушатель удаления кнопок
            const deleteButton = document.querySelector(`.images_item_${item.id} .images_itemCross`)
            if (deleteButton) {
                deleteButton.addEventListener('click', () => handleDeleteItem(item.id))
            }

            // Проверка на лайк при загрузке
            const svgElem = document.querySelector(`.images_item_${item.id} .images_itemLike`)
            if (svgElem) {
                if (item.liked) {
                    svgElem.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19L1.6841 9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583823 2.76979 1.6841 1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806 1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186Z" fill="black"/>`
                } else {
                    svgElem.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2444 2.74849C17.5625 1.08549 14.8243 1.08384 13.1403 2.74355L10.9911 4.91203L8.82016 2.76549C7.13407 1.08182 4.40014 1.08935 2.74406 2.74323L2.73878 2.7485C1.93084 3.54736 1.5 4.60323 1.5 5.74496C1.5 6.87098 1.94247 7.93498 2.74468 8.74728L10.9804 16.8905L19.2444 8.71923C20.9215 7.06094 20.9138 4.38283 19.2497 2.75372L19.2444 2.74849ZM10.9804 19L1.6841 9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583822 2.76979 1.6841 1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806 1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19Z" fill="black"/>`
                }
            }

            // Слушатель лайка
            const likeButton = document.querySelector(`.images_item_${item.id} .images_itemLike`)
            if (likeButton) {
                likeButton.addEventListener('click', () => handleLikeItem(item.id))
            }

            const photoImage = document.querySelector(`.images_item_${item.id} .images_photo`)
            if (photoImage) {
                photoImage.addEventListener('click', () => openBigPhoto(item.src))
            }
        })
    }
    if (photosList && (photos?.length === 0 || photos === null)) {
        photosList.innerHTML = 'Загрузите свое первое изображение нажав на плюсик...'
    }
}


export default setPhotos