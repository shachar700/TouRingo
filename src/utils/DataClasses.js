
const row = (content) => `<div class="row">${content}</div>`
const col = (content) => `<div class="col">${content}</div>`

export class Account {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    // Method to display user info (for demonstration purposes)
    displayInfo() {
        console.log(`Username: ${this.username}, Password: ${this.password}`);
    }
}

export class Town {

    constructor(name) {
        this.name = name;
    }
}

export class WP_Event {

    constructor(id, date, address, phone, description,
        openingTime, closingTime, townName, creatorUsername, images) {
        this.id = id;
        this.date = date;
        this.address = address;
        this.phone = phone;
        this.description = description;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
        this.townName = townName;
        this.creatorUsername = creatorUsername;
        this.images = images;
    }
/*var nowDate = new Date(); 
var date = this.date.getFullYear()+'/'+(this.date.getMonth()+1)+'/'+this.date.getDate();*/
    buildElement() {
        const rowDiv = document.createElement('div'); //bg-gradient-to-r from-blue-100 to-blue-200
        rowDiv.className = 'bg-gray-200 p-3 shadow rounded-lg flex space-x-8'; // Add a class for styling purposes
        const htmlContent = `
            <div class="col-auto absolute font-bold text-left">${this.id}</div>
            <div class="col-auto ">${this.date.getFullYear()+'/'+(this.date.getMonth()+1)+'/'+this.date.getDate()}</div>
            <div class="col-auto ">${this.address}</div>
            <div class="col-auto ">${this.phone}</div>
            <div class="col-auto ">${this.description}</div>
            <div class="col-auto ">${this.openingTime}</div>
            <div class="col-auto ">${this.closingTime}</div>
            <div class="col-auto ">${this.townName}</div>
            <div class="col-auto ">${this.creatorUsername}</div>
            <div class="col-auto flex space-x-2 ">
                ${this.images.map(img => `<img src="${img}" alt="Image" class="w-16 h-16 rounded-lg border img-fluid">`).join('')}
            </div>
        `;
        rowDiv.innerHTML = htmlContent;
        return rowDiv; 
    }
}

export class Daily_Event extends WP_Event {

    constructor(id, date, address, phone, description,
        openingTime, closingTime, townName, creatorUsername, images,
        openDays, type, maxPossibleBookingperDay) {
        super(id, date, address, phone, description,
            openingTime, closingTime, townName, creatorUsername, images);
        this.openDays = openDays;
        this.type = type;
        this.maxPossibleBookingperDay = maxPossibleBookingperDay;
    }

    buildElement() {
        const rowDiv = super.buildElement();
        rowDiv.innerHTML += `
            <div class="cell openDays">${this.openDays.toString()}</div>
            <div class="cell eventType">${this.type.toString()}</div>
            <div class="cell maxPossibleBookings">${this.maxPossibleBookingperDay.toString()}</div>
        `;
        return rowDiv;
    }
}

export class OneTime_Event extends WP_Event {

    constructor(id, date, address, phone, description,
        openingTime, closingTime, townName, creatorUsername, images, maxPossibleBookingper) {
        super(id, date, address, phone, description,
            openingTime, closingTime, townName, creatorUsername, images);
        this.maxPossibleBookingper = maxPossibleBookingper;
    }

    buildElement() {
        const rowDiv = super.buildElement();
        rowDiv.innerHTML += `
            <div class="cell maxPossibleBookings">${this.maxPossibleBookingper.toString()}</div>
        `;
        return rowDiv;
    }
}

export class Event_Image {

    constructor(id, title, url, eventId) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.eventId = eventId;
    }
}

export class Review {

    constructor(reviewId, score, date, eventId, accountUsername) {
        this.reviewId = reviewId;
        this.score = score;
        this.date = date;
        this.eventId = eventId;
        this.accountUsername = accountUsername;
    }
}

export class Booking {

    constructor(id, date, isActive, accountUsername, eventId) {
        this.id = id;
        this.date = date;
        this.isActive = isActive;
        this.accountUsername = accountUsername;
        this.eventId = eventId;
    }
}