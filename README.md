# Event Management System

## Description

The Event Management System is a robust application designed to streamline event planning, attendee registration, and management. This system provides features to create events, register attendees, and track event details, ensuring seamless organization and execution of events. Whether you're organizing a tech conference, an art exhibition, or a corporate meeting, this system simplifies the process for event planners and attendees alike.

## Features

- **Event Planner Capabilities**:
  - Create and manage events with unique identifiers.
  - View a list of all planned events.
  - Retrieve details of a specific event.
  - View all attendees registered for a particular event.

- **Event Management**:
  - Maintain detailed records of events, including names, locations, and attendee lists.
  - Track the total number of events created.

- **Attendee Interaction**:
  - Register for events and appear on the attendee list.
  - View and manage personal registration details.

## Class Diagram

![Class Diagram](https://drive.google.com/file/d/1tm2AhzFvALjWxR6mYjrUE4Y-mCfcLkY9/view?usp=sharing)

## Use Case Diagram

![Use Case Diagram](https://drive.google.com/file/d/1_PD1naQumG2qhsSU0AQclg2D-H29uaCv/view?usp=sharing)

## Example Usage

```javascript
// Example demonstrating the Event Management System functionality

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
```

## Screenshot of System

 ![Event Management System ](<Screenshot-ems.png>)

