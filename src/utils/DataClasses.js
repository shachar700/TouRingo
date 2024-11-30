
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

export class Town{

    constructor(name){
        this.name = name;
    }
}

export class WP_Event{
    
    constructor(id,date, address, phone, description,
        openingTime, closingTime, townName, creatorUsername, images){
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
}

export class Daily_Event extends WP_Event{

    constructor(id,date, address, phone, description,
        openingTime, closingTime, townName, creatorUsername, images,
        openDays, type, maxPossibleBookingperDay){
            super(id,date, address, phone, description,
                openingTime, closingTime, townName, creatorUsername, images);
            this.openDays = openDays;
            this.type = type;
            this.maxPossibleBookingperDay = maxPossibleBookingperDay;
        }
}

export class OneTime_Event extends WP_Event{

    constructor(id, date, address, phone, description,
        openingTime, closingTime, townName, creatorUsername, images, maxPossibleBookingper){
            super(id,date, address, phone, description,
                openingTime, closingTime, townName, creatorUsername, images);
            this.maxPossibleBookingper = maxPossibleBookingper;
        }
}

export class Event_Image {

    constructor(id, title, url, eventId){
        this.id = id;
        this.title = title;
        this.url = url;
        this.eventId = eventId;
    }
}

export class Review{

    constructor(reviewId, score, date, eventId, accountUsername){
        this.reviewId = reviewId;
        this.score = score;
        this.date = date;
        this.eventId = eventId;
        this.accountUsername = accountUsername;
    }
}

export class Booking{

    constructor(id, date, isActive, accountUsername, eventId){
        this.id = id;
        this.date = date;
        this.isActive = isActive;
        this.accountUsername = accountUsername;
        this.eventId = eventId;
    }
}