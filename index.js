// Hospital class 
class Hospital {
    // Static property
    static availableDoctors = 10;

    // Constructor for Hospital instances
    constructor(hospitalName, doctorsDepartment) {
        this.hospitalName = hospitalName;
        this.doctorsDepartment = doctorsDepartment;
    }

    // Method to verify appointment
    verifyAppointment() {
        console.log(`Hospital ${this.hospitalName} has verified your appointment.`);
    }

    // Static method to assign doctors
    static assignDoctors(hospitalInstance) {
        if (Hospital.availableDoctors > 0) {
            console.log(`A doctor from the ${hospitalInstance.doctorsDepartment} department has been assigned to you!`);
        }
        else {
            console.log("No available doctor!");
        }
    }
}

const hospital = new Hospital("MedBud", "Neurology");

hospital.verifyAppointment();
Hospital.assignDoctors(hospital);


// User class
class User {
    // Static property
    static profileViews = 0;

    // Constructor for User instances
    constructor(userId, name) {
        this.userId = userId
        this.name = name;
        User.profileViews++;
    }

    // Method to login
    login() {
        console.log(`${this.name} has logged in.`)
    }

    // Static method to view profile
    static viewProfile(userInstance) {
        if (Hospital.profileViews > 0) {
            console.log(`User with Id No ${userInstance.userId} viewed their profile.`);
        }
        else {
            console.log("No profile views yet.");
        }
    }
}

const user = new User("001", "Wendy");
user.login();
User.viewProfile(user);

// Bookings class
class Bookings {
    // Static property
    static noOfBookings = 0;

    // Constructor for Bookings instances
    constructor(userName, dateBooked) {
        this.userName = userName;
        this.dateBooked = dateBooked;
        Bookings.noOfBookings++;
    }

    // Static method to book appointments
    static bookAppointments(bookingsInstance) {
        if (Bookings.noOfBookings > 0) {
            console.log(`You have a pending appointment on ${bookingsInstance.dateBooked}.`);
        }
        else {
            console.log("You have no appointments!")
        }
    }

    // Method to cancel appointments
    cancelAppointments() {
        console.log(`${this.userName} has canceled her appointment.`)
    }
}

const bookings = new Bookings("Wendy", "19/01/2025");
Bookings.bookAppointments(bookings);
bookings.cancelAppointments();

// Booking History class
class BookingHistory {
    // Static property
    static appointmentHistory = 5;

    // Constructor for Booking History instances
    constructor(noOfAppointments, departmentVisited) {
        this.noOfAppointments = noOfAppointments;
        this.departmentVisited = departmentVisited;
    }

    // Static method to view attended appointments
    static viewAttendedAppointments(bookingHistoryInstance) {
        if (BookingHistory.appointmentHistory > 0) {
            console.log(`You have had ${bookingHistoryInstance.noOfAppointments} visits to the ${bookingHistoryInstance.departmentVisited} department.`)
        }
        else {
            console.log("You have no booking history")
        }
    }

    // Method to view missed appointments
    viewMissedAppointments() {
        console.log("You have no missed appointment.")
    }
}

const bookingHistory = new BookingHistory(3, "Gynaecology");
BookingHistory.viewAttendedAppointments(bookingHistory);
bookingHistory.viewMissedAppointments();