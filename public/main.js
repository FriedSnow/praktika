import getAllCoolPlanes from './requests.js';
import CoolPlane from './models/CoolPlane.js';

function transform(obj) {
    const {alt, desc1, desc2, id, img1, img2, imgmain, name, price, speed, year} = obj;
    const planeType = obj['class']
    
    return new CoolPlane(
        name,
        [desc1, desc2],
        [img1, img2, imgmain],
        speed,
        alt,
        planeType,
        year,
        price
    )
}

const planesListElement = document.getElementById('plane-list')

/**
 * @param {CoolPlane[]} planes
*/
function renderPlanes(planes) {
    planes.forEach(plane => {
        planesListElement.append(plane.getElement())
    })
}

getAllCoolPlanes()
    .then(e => e.map(transform))
    .then(renderPlanes)
