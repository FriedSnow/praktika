export default function createItem(imgM, img1, img2, desc1, desc2) {
    let itemWrapper = document.createElement('div')
    itemWrapper.style.position = "relative"

    let item = document.createElement('div')
    itemWrapper.append(item);

    let itemImgMain = document.createElement('img')
    let itemImgAdd1 = document.createElement('img')
    let itemImgAdd2 = document.createElement('img')
    let itemDesc1 = document.createElement('p')
    let itemDesc2 = document.createElement('p')

    item.style.width = "90%"
    item.style.maxWidth = "1920px"
    item.style.height = "625px"
    item.style.border = "1px solid #000"
    item.style.borderRadius = "10px"
    item.style.position = "absolute"
    item.style.left = "5%"
    item.style.display = "flex"
    item.style.backdropFilter = "blur(10px)"
    item.style.background = "rgba(0, 0, 0, 0.1)"
    item.classList.add('row')

    itemImgMain.style.width = "50%"
    itemImgMain.style.height = "90%"
    itemImgMain.style.marginLeft = "30px"
    itemImgMain.style.marginTop = "30px"
    itemImgMain.style.border = "1px solid #000"
    itemImgMain.style.borderRadius = "10px"
    itemImgMain.src = imgM
    itemImgMain.style.backgroundSize = "cover"

    itemImgAdd1.style.width = "25%"
    itemImgAdd1.style.height = "43%"
    itemImgAdd1.style.left = "925px"
    itemImgAdd1.style.top = "30px"
    itemImgAdd1.style.border = "1px solid #000"
    itemImgAdd1.style.borderRadius = "10px"
    itemImgAdd1.style.position = "absolute"
    itemImgAdd1.src = img1
    itemImgAdd1.style.backgroundSize = "cover"

    itemDesc1.style.width = "16.75%"
    itemDesc1.style.height = "40%"
    itemDesc1.style.left = "1390px"
    itemDesc1.style.top = "15px"
    itemDesc1.style.border = "1px solid #000"
    itemDesc1.style.borderRadius = "10px"
    itemDesc1.style.position = "absolute"
    itemDesc1.style.float = "right"
    itemDesc1.style.padding = "10px"
    itemDesc1.style.background = "rgba(0, 0, 0, 0.2)"
    itemDesc1.textContent = desc1

    itemImgAdd2.style.width = "25%"
    itemImgAdd2.style.height = "43%"
    itemImgAdd2.style.left = "1270px"
    itemImgAdd2.style.top = "324px"
    itemImgAdd2.style.border = "1px solid #000"
    itemImgAdd2.style.borderRadius = "10px"
    itemImgAdd2.style.position = "absolute"
    itemImgAdd2.src = img2
    itemImgAdd2.style.backgroundSize = "cover"

    itemDesc2.style.width = "16.5%"
    itemDesc2.style.height = "40%"
    itemDesc2.style.left = "925px"
    itemDesc2.style.top = "309px"
    itemDesc2.style.border = "1px solid #000"
    itemDesc2.style.borderRadius = "10px"
    itemDesc2.style.position = "absolute"
    itemDesc2.style.float = "right"
    itemDesc2.style.padding = "10px"
    itemDesc2.style.background = "rgba(0, 0, 0, 0.2)"
    itemDesc2.textContent = desc2

    item.append(itemImgMain)
    item.append(itemImgAdd1)
    item.append(itemDesc1)
    item.append(itemImgAdd2)
    item.append(itemDesc2)

    return itemWrapper;
}