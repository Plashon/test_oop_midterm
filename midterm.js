//person
class Person {
  account = null;
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = null;
  constructor(name, address, email, phone, accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }
  toString() {
    return ` Person[Name: ${this.name} Address:${this.address} Email:${this.email} Telephone:${this.phone} AccountType: ${this.accountType} `;
  }
}

class Receptionist extends Person {
  roomBooking = [];
  totalRoomBooked = 0;
  constructor(name, address, email, phone, accountType,totalRoomBooked) {
    super(name, address, email, phone, accountType);
    this.totalRoomBooked = totalRoomBooked;
  }
  addRoomBooking(roomBooking) {
    this.roomBooking.push(roomBooking);
  }
  createBooking(reservationNumber, startDate, durationDays, room,name) {
    //check availible
    //const isRoomAvailable = Room.isRoomAvailable(room,startDate,durationDays)
    if (room.isRoomAvailable()) {
      const roomBooking = new RoomBooking(
        reservationNumber,
        startDate,
        durationDays,
        room,name
      );
      this.addRoomBooking(roomBooking);
      this.totalRoomBooked++;
      return roomBooking;
    }
  }
  toStringDetail() {
    let inBooking = "";
    for (let i = 0; i < this.roomBooking.length; i++) {
      inBooking += "\t" + `${this.roomBooking[i].toStringReceptionist()} ` + "\n";
    }
    return `${super.toString()}\n ${inBooking}`;
  }
  toString(){
    return super.toString()
  }
}

class Guest extends Person {
  roomBooking = [];
  totalRoomBooked = 0;
  constructor(name, address, email, phone, accountType, totalRoomBooked = 0) {
    super(name, address, email, phone, accountType);
    this.totalRoomBooked = totalRoomBooked;
  }
  addRoomBooking(roomBooking) {
    this.roomBooking.push(roomBooking);
  }
  createBooking(reservationNumber, startDate, durationDays, room,name) {
    //check availible
    //const isRoomAvailable = Room.isRoomAvailable(room,startDate,durationDays)
    if (room.isRoomAvailable()) {
      const roomBooking = new RoomBooking(
        reservationNumber,
        startDate,
        durationDays,
        room,name
      );
      this.addRoomBooking(roomBooking);
      this.totalRoomBooked++;
      return roomBooking;
    }
  }
  toStringDetail() {
    let inBooking = "";
    for (let i = 0; i < this.roomBooking.length; i++) {
      inBooking += "\t" + `${this.roomBooking[i].toStringGuest()} ` + "\n";
    }
    return `${super.toString()} Total Booking: ${
      this.totalRoomBooked
    } \n ${inBooking}`;
  }
  toString(){
    return super.toString()
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
    if (this.username === username && this.password === password) {
      return true;
    } else {
      return false;
    }
  }
  resetPassword(username, newPassword) {
    if (this.username === username) {
      return `Username : ${this.username} New Password : ${(this.password =
        newPassword)}`;
    } else {
      return false;
    }
  }
  toString() {
    return `Username : ${this.username} Password : ${this.password} Status : ${this.status}`;
  }
}
//room hotel
class Hotel {
  rooms = [];
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
    this.rooms.push(room);
  }
  toString() {
    let inHotel = "";
    for (let i = 0; i < this.rooms.length; i++) {
      inHotel += "\t" + `${this.rooms[i].toString()} ` + "\n ";
    }
    return `Hotel : ${this.name} ${this.location} \n ${inHotel} `;
  }
}
class Room {
  roomNumber = "";
  style = null;
  status = null;
  roomPrice = 0;
  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }
  isRoomAvailable() {
    if (this.status == RoomStatus.AVAILABLE) {
      return true;
    } else {
      return false;
    }
  }
  createRoom(roomNumber, style, status, roomPrice) {
    const room5 = new Room(roomNumber, style, status, roomPrice);
    if (room5 != null) {
      return true;
    } else {
      false;
    }
  }
  toString() {
    return `Room [${this.roomNumber}  style : ${this.style}  status : ${this.status} price : ${this.roomPrice}]`;
  }
}

//booking
class RoomBooking {
  notifications = [];
  reservationNumber = "";
  startDate = "";
  durationDays = 0;
  status = null;
  createdBy = null;
  room = null;
  constructor(reservationNumber, startDate, durationDays, status, createdBy) {
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durationDays = durationDays;
    this.status = status;
    this.createdBy = createdBy;
  }
  createBooking(reservationNumber, startDate, durationDays, guest, room) {

  }
  toStringGuest() {
    return ` \n Detail: [Reservation Number: ${this.reservationNumber}, Check in date  ${this.startDate}, stay for  ${this.durationDays} night  ${this.status}, booked by: ${this.createdBy}]`;
  }

  toStringReceptionist() {
    return ` \n Detail: [Reservation Number: ${this.reservationNumber}, Check in date  ${this.startDate}, stay for  ${this.durationDays} night  ${this.status}, booked for: ${this.createdBy}]`;
  }
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

//Enum
class AccountType {
  static GUEST = "guest";
  static RECEPTIONIST = "receptionist";
  constructor(type) {
    this.type = type;
  }
}

class AccountStatus {
  static Active = new AccountStatus("active");
  static Banned = new AccountStatus("banned");
  constructor(status) {
    this.status = status;
  }
}

class RoomStatus {
  static AVAILABLE = "available";
  static DISAVAILABLE = "disavailable";
  static LATECHECKOUT = "latecheckout";
  static EARLYCHECKIN = "earlycheckin";
  constructor(type) {
    this.type = type;
  }
}

class RoomStyle {
  static DBSV = "Double bed Sea view";
  static TBPV = "Twin bed pool view";
  static TBSV = "Twin bed Sea view";
  static DBPV = "Double bed pool view";
  constructor(style) {
    this.style = style;
  }
}

const main = () => {
  const account1 = new Account("acc1", "p1111", AccountStatus.Active);

  const alice = new Guest(
    "Alice",
    "Alice Home",
    "Alice@email.com",
    "0000000001",
    AccountType.GUEST
  );
  const bob = new Guest(
    "Bob",
    "Bob Home",
    "Bob@email.com",
    "0000000002",
    AccountType.GUEST
  );
  const catherine = new Receptionist(
    "Catherine",
    "Catherine Home",
    "Catherine@email.com",
    "0000000003",
    AccountType.RECEPTIONIST
  );
  const david = new Receptionist(
    "David",
    "David Home",
    "David@email.com",
    "0000000004",
    AccountType.RECEPTIONIST
  );

  //hotel
  const hotel = new Hotel("SE Hotel", "NPRU");
  const room1 = new Room("R01", RoomStyle.DBPV, RoomStatus.AVAILABLE, 1000);
  const room2 = new Room("R02", RoomStyle.TBPV, RoomStatus.AVAILABLE, 2000);
  const room3 = new Room("R03", RoomStyle.TBSV, RoomStatus.AVAILABLE, 3000);
  const room4 = new Room("R04", RoomStyle.DBSV, RoomStatus.AVAILABLE, 4000);

  hotel.addnewRooms(room1);
  hotel.addnewRooms(room2);
  hotel.addnewRooms(room3);
  hotel.addnewRooms(room4);


  

  bob.createBooking("0521564546", "16/03/2024", 3, room4,"Bob");
  catherine.createBooking("0521564546", "19/03/2024", 5, room3, "Alice ");


 

  console.log(bob.toString());
  console.log(alice.toString());
  console.log(catherine.toString());
  console.log(david.toString());

  console.log(hotel.toString());

  console.log(bob.toStringDetail());
  console.log(catherine.toStringDetail());
};

main();
