# User Management Dashboard

A React-based web application to manage user details, including viewing, adding, editing, and deleting user information. The app interacts with the JSONPlaceholder API for demonstration purposes.

## Features

- Display a list of users with their details: ID, First Name, Last Name, Email, and Department.
- Add a new user via a form.
- Edit existing user details.
- Delete users from the list.
- Responsive design for mobile and desktop devices.

## Tech Stack

- React.js
- Axios for API requests
- JSONPlaceholder API

## Setup and Run Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/user-management.git
   cd user-management


## Challenges Faced

## Mock API Limitations:
- The JSONPlaceholder API does not persist added or edited data, which required simulating these operations on the client side.

## State Management:
- Handling separate states for form data and user list required careful attention to prevent overwriting or losing data during navigation.

## Error Handling:
- Ensuring that API errors are gracefully handled and displayed to the user was challenging but necessary for robustness.
  
## Responsiveness:
- Designing a responsive layout that works well across devices took additional effort in tweaking CSS styles.

## Potential Improvements
- Implement server-side persistence using a custom backend.
- Add pagination or infinite scrolling for better scalability with large datasets.
- Incorporate unit and integration testing to ensure reliability.
- Use a state management library like Redux for more complex applications.
