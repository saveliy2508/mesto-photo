/**
 * Функция возвращающая шаблон фотокарточки
 */

function photoItemTemplate(name: string, src: string, id: number) {
    const photoItem = document.createElement('div')
    photoItem.classList.add(`images_item`)
    photoItem.classList.add(`images_item_${id}`)
    photoItem.innerHTML =
        `<div class="images_photo">
                <img src=${src} alt="photo">
             </div>
             <div class="images_itemLabel">
                 <span class="images_itemName">${name}</span>
                 <div>
                 <svg class="images_itemCross" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="22px" height="19px" viewBox="0 0 503.021 503.021"
                 style="enable-background:new 0 0 503.021 503.021;"
                 xml:space="preserve">
\t\t                <path d="M491.613,75.643l-64.235-64.235c-15.202-15.202-39.854-15.202-55.056,0L251.507,132.222L130.686,11.407
\t\t\t                c-15.202-15.202-39.853-15.202-55.055,0L11.401,75.643c-15.202,15.202-15.202,39.854,0,55.056l120.821,120.815L11.401,372.328
\t\t\t                c-15.202,15.202-15.202,39.854,0,55.056l64.235,64.229c15.202,15.202,39.854,15.202,55.056,0l120.815-120.814l120.822,120.814
\t\t\t                c15.202,15.202,39.854,15.202,55.056,0l64.235-64.229c15.202-15.202,15.202-39.854,0-55.056L370.793,251.514l120.82-120.815
\t\t\t                C506.815,115.49,506.815,90.845,491.613,75.643z"/>
                 </svg>
                 <svg class="images_itemLike" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M19.2444 2.74849C17.5625 1.08549 14.8243 1.08384 13.1403 2.74355L10.9911 4.91203L8.82016 2.76549C7.13407 1.08182 4.40014 1.08935 2.74406 2.74323L2.73878 2.7485C1.93084 3.54736 1.5 4.60323 1.5 5.74496C1.5 6.87098 1.94247 7.93498 2.74468 8.74728L10.9804 16.8905L19.2444 8.71923C20.9215 7.06094 20.9138 4.38283 19.2497 2.75372L19.2444 2.74849ZM10.9804 19L1.6841 9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583822 2.76979 1.6841 1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806 1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19Z"
                          fill="black"/>
                 </svg>
                 </div>
             </div>`
    return photoItem
}

export default photoItemTemplate