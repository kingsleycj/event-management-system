// Define the EventPlanner class
class EventPlanner {
  constructor(plannerName, plannerId) {
    this.plannerName = plannerName;
    this.plannerId = plannerId;
    this.plannedEvents = []; // List of planned events
  }

  // Method to create an event
  createEvent(event) {
    this.plannedEvents.push(event);
    console.log(`Event "${event.eventName}" created.`);
  }

  // Method to view planned events
  viewPlannedEvents() {
    console.log(`Events planned by ${this.plannerName}:`);
    this.plannedEvents.forEach((event) => {
      console.log(`- ${event.eventId}: ${event.eventName} at ${event.location}`);
    });
  }

  // Method to get details of a specific event
  getEventDetails(eventId) {
    const event = this.plannedEvents.find((e) => e.eventId === eventId);
    if (event) {
      event.showEventDetails();
    } else {
      console.log(`Event with ID ${eventId} not found.`);
    }
  }

  // Method to get all attendees of a specific event
  getAllAttendees(eventId) {
    const event = this.plannedEvents.find((e) => e.eventId === eventId);
    if (event) {
      console.log(`Attendees for event "${event.eventName}":`);
      event.attendees.forEach((att) => console.log(`- ${att.attendeeName}`));
    } else {
      console.log(`Event with ID ${eventId} not found.`);
    }
  }
}

// Define the Event class
class Event {
  static totalEvents = 0;

  constructor(eventId, eventName, location) {
    this.eventId = eventId; // Unique ID
    this.eventName = eventName;
    this.location = location;
    this.attendees = []; // List of attendees
    Event.totalEvents++;
  }

  // Method to add an attendee
  addAttendee(attendee) {
    this.attendees.push(attendee);
    console.log(`Attendee "${attendee.attendeeName}" added to event "${this.eventName}".`);
  }

  // Method to display event details
  showEventDetails() {
    console.log(`Event ID: ${this.eventId}`);
    console.log(`Event Name: ${this.eventName}`);
    console.log(`Location: ${this.location}`);
    console.log(`Attendees: ${this.attendees.map((a) => a.attendeeName).join(", ")}`);
  }
}

// Define the Attendee class
class Attendee {
  constructor(attendeeId, attendeeName, email) {
    this.attendeeId = attendeeId; // Unique ID
    this.attendeeName = attendeeName;
    this.email = email;
  }

  // Method to register for an event
  register(event) {
    event.addAttendee(this);
  }

  // Method to display attendee details
  getDetails() {
    console.log(`Attendee ID: ${this.attendeeId}, Name: ${this.attendeeName}, Email: ${this.email}`);
  }
}

// Example Usage
const planner1 = new EventPlanner("Kingsley Nweke", "P001");

const event1 = new Event("E001", "Tech Conference", "New Haven");
const event2 = new Event("E002", "Football Tryouts", "Nnamdi Azikiwe Stadium");

const attendee1 = new Attendee("A001", "Mike", "mike042@gmail.com");
const attendee2 = new Attendee("A002", "Tappi", "TappiIyene@gmail.com");

planner1.createEvent(event1);
planner1.createEvent(event2);

attendee1.register(event1);
attendee2.register(event2);

planner1.viewPlannedEvents();
planner1.getEventDetails("E001");
planner1.getAllAttendees("E002");


