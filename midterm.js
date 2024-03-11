//person
class Person {
  account = null;
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = "";
  constructor(name, address, email, phone, accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }
  toString(){
   return ` Person[Name: ${this.name} Address:${this.address} Email:${this.email} Telephone:${this.phone} AccountType: ${this.accountType} `;
  }
}

class Account {
  username = "";
  password = "";
  status = "";
  constructor(username, password, status) {
    this.username = username;
    this.password = password;
    this.status = status;
  }
  login(username, password) {
    this.username = username;
    this.password = password;
  }
  resetPassword(username, newPassword) {
    this.username = username;
    this.password = newPassword;
  }
}

class Receptionist extends Person {
  constructor(name, address, email, phone, accountType){
    super(name, address, email, phone, accountType);
  }

  createBooking() {}
  toString() {
    return `${super.toString()}`;
  }
}
class Guest extends Person {
  roomBooking = [];
  totalRoomBooked = 0;
  constructor(name, address, email, phone, accountType,totalRoomBooked) {
    super(name, address, email, phone, accountType);
    this.totalRoomBooked = totalRoomBooked;
  }
  createBooking() {}
  toString() {
    return `${super.toString()} Total Booking: ${this.totalRoomBooked}`;
  }
}
//booking
class RoomBooking {
  notification = [];
  reservationNumber = "";
  startDate = "";
  durationDays = 0;
  status = "";
  createdBy = "";
  constructor(reservationNumber, startDate, durationDays, status, createdBy) {
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durationDays = durationDays;
    this.status = status;
    this.createdBy = createdBy;
  }
  getDetail() {}
  createBooking() {}
}
class Notification {
  notification = 0;
  createOn = "";
  content = "";
  sender = "";
  recipient = "";
  constructor(notification, createOn, content, sender, recipient) {
    this.notification = notification;
    this.createOn = createOn;
    this.content = content;
    this.recipient = recipient;
    this.sender = sender;
  }
  send(sender, recipient, content) {
    this.sender = sender;
    this.recipient = recipient;
    this.content = content;
  }
}

//room
class Hotal {
  room = [];
  name = "";
  location = "";
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  getRoom() {
    return this.room;
  }
  addnewRooms(room) {
    this.room = room.status;
  }
}
class Room {
  hotal = null;
  roomNumber = "";
  style = "";
  status = "";
  roomPrice = 0.0;
  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }
  isRoomAvailable() {}
  createRoom() {}
}

class AccountType {
  static GUEST = new AccountType("Guest");
  static RECEPTIONIST = new AccountType("Receptionist");
  constructor(type) {
    this.type = type;
  }
}

class AccountStatus {
  static Active = new AccountStatus("Active");
  static Banned = new AccountStatus("Banned");
  constructor(status) {
    this.status = status;
  }
}

class RoomStatus {
  static Available = new RoomStatus("Available");
  static Disavailable = new RoomStatus("Disavailable");
  static LateCheckout = new RoomStatus("LateCheckout");
  static EarlyCheckin = new RoomStatus("EarlyCheckin");
  constructor(type) {
    this.type = type;
  }

  static getServiceDiscountRate(type) {
    switch (type) {
      case "Available":
        return true;
      case "Disavailable":
        return false;
      default:
        return " ";
    }
  }
}

const main = () => {
  const person1 = new Person(
    "Alice",
    "Alice Home",
    "Alice@email.com",
    "0000000001",
    "Guest"
  );
  const person2 = new Person(
    "Bob",
    "Bob Home",
    "Bob@email.com",
    "0000000002",
    "Guest"
  );
   const person3 = new Person(
     "Catherine",
     "Catherine Home",
     "Catherine@email.com",
     "0000000003",
     "Receptionist "
   );
  
    const person4 = new Person(
      "David",
      "David Home",
      "David@email.com",
      "0000000004",
      "Receptionist "
    );
  
  const guest1 = new Guest(person1.name,person1.address,person1.email,person1.phone,person1.accountType,6);
  const guest2 = new Guest(
    person2.name,
    person2.address,
    person2.email,
    person2.phone,
    person2.accountType,
    6
  );
   const receptoinist1 = new Receptionist(
     person3.name,
     person3.address,
     person3.email,
     person3.phone,
     person3.accountType,
     6
   );
    const receptoinist2 = new Receptionist(
      person4.name,
      person4.address,
      person4.email,
      person4.phone,
      person4.accountType,
      6
    );


  console.log(guest1.toString());
  console.log(guest2.toString());
  console.log(receptoinist1.toString());
  console.log(receptoinist2.toString());
};

main();
