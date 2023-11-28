import PanelController from "../PanelController.js"
import getItem from "../front/item.js"

export default class CoolPlane {
    /**
     * @param {string} name
     * @param {string[]} descriptions
     * @param {string[]} pictures
     */
    constructor(
        name,
        descriptions,
        pictures,
        speed,
        altitude,
        type,
        releaseDate,
        price) {
        this.name = name
        this.descriptions = descriptions
        this.pictures = pictures
        this.speed = speed
        this.altitude = altitude
        this.type = type
        this.releaseDate = releaseDate
        this.price = price
    }

    getElement() {
        const item = getItem(
            this.pictures[2],
            this.pictures[0], 
            this.pictures[1], 
            this.descriptions[0],
            this.descriptions[1]
        );
        item.addEventListener('mouseover', () => {
            const panelController = new PanelController();

            panelController.updateSpeed(this.speed);
            panelController.updateAlt(this.altitude)
            panelController.setName(this.name)
            panelController.setPlaneType(this.type)
            panelController.setReleaseDate(this.releaseDate)
            panelController.setPrice(this.price)
        })

        return item;
    }
}