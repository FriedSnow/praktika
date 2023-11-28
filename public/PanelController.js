export default class PanelController {
    constructor() {
        this.namediv = document.getElementById('name');
        this.altitude = document.getElementById('alt');
        this.planeType = document.getElementById('planeclass');
        this.price = document.getElementById('price');
        this.classdiv = document.getElementById('planeclass');
        this.yeardiv = document.getElementById('year');

        this.arrow100 = document.getElementById('arrow100');
        this.arrow1k = document.getElementById('arrow1k');
        this.aarrow100 = document.getElementById('aarrow100');
        this.aarrow1k = document.getElementById('aarrow1k');
        this.speeddiv = document.getElementById('counter');
    }

    setName(planeName) {
        this.namediv.textContent = planeName;
    }

    setPlaneType(planeType) {
        this.classdiv.textContent = planeType;
    }

    setReleaseDate(date) {
        this.yeardiv.textContent = date;
    }

    setPrice(price) {
        this.price.textContent = price;
    }

    updateSpeed(speedIn) {
        this.speeddiv.textContent = speedIn + "км/ч"
        let speed1k = Math.floor(speedIn / 1000);
        let speed100 = (speedIn / 100);
    
        const rotationAngle100 = speed100 * 36;
        const rotationAngle1k = (speed1k + (speed100 / 10 - speed1k)) * 36;
    
        this.arrow100.style.transform = `rotate(${rotationAngle100}deg)`;
        this.arrow1k.style.transform = `rotate(${rotationAngle1k}deg)`;

    }

    updateAlt(altIn) {
        this.altitude.textContent = altIn + 'м'
        let alt1k = Math.floor(altIn / 10000);
        let alt100 = (altIn / 1000);
    
        const rotationAngle100 = alt100 * 36;
        const rotationAngle1k = (alt1k + (alt100 / 10 - alt1k)) * 36;
    
        this.aarrow100.style.transform = `rotate(${rotationAngle100}deg)`;
        this.aarrow1k.style.transform = `rotate(${rotationAngle1k}deg)`;
    }
}