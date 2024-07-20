# Boardify Application

A Kanban application built with React.js, Firebase, Drag & Drop, Material-UI (MUI) v5, and Zustand. This application allows users to manage tasks and workflows with a user-friendly interface.

## Features

- **User Registration and Login:** Personalized access to the Kanban board.
- **Responsive UI/UX:** Seamless task management across devices.
- **Create Boards, Lists, and Cards:** Represent tasks or work items.
- **Drag-and-Drop Functionality:** Easy movement of cards between different lists or stages of workflow.
- **Task Management:** Assign tasks, set due dates, add descriptions, and attach files to cards.

Acknowledgments
**React.js**
**Firebase**
**Material-UI**
**Zustand**


## Installation

### Prerequisites

- Node.js and npm installed
- Firebase project set up


### Steps

1. Clone the repository:
      ```bash
      git clone https://github.com/Dev-Harshxl/Boardify--Kanban-.git


2. Install the dependencies:
      ```bash
      npm install

3. Set up Firebase:
-Go to the Firebase Console.
-Create a new project or use an existing one.
-Add a web app to your project.
-Edit the const firebaseconfig (Kanban/src/firebase.js):
      ```bash
        const firebaseConfig = {
        apiKey: "Your API KEY",
        authDomain: "Your authDomain",
        projectId: "Your Project ID",
        storageBucket: "Your Storage Bucket",
        messagingSenderId: "Your messagingSenderId",
        appId: "your app id"
   };
Note: - This above code is already written inside your firebase console
    You can copy it and use it directly

4. Start the development server:
   
   ```bash
    npm start


5. Usage

-**User Registration and Login: Register a new account or log in with existing credentials.**
-**Create Boards: Create new boards for different projects or workflows.**
-**Add Lists and Cards: Add lists to boards and cards to lists to represent tasks.**
-**Drag and Drop: Drag and drop cards between lists to change their status or workflow stage.**
-**Task Details: Click on a card to view and edit task details, such as description, due date, and attachments.**


# Contributing
Contributions are welcome! 
