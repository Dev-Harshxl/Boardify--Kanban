Skip to content
Navigation Menu
Dev-Harshxl
/
Boardify--Kanban

Type / to search
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
1
Insights
Settings
Editing README.md in Boardify--Kanban
BreadcrumbsBoardify--Kanban
/
README.md
in
master

Edit

Preview
Indent mode

Spaces
Indent size

2
Line wrap mode

Soft wrap
Editing README.md file contents
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75

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


2.   Install the dependencies:
    ```bash
    npm install

3. Set up Firebase:

-Go to the Firebase Console.
-Create a new project or use an existing one.
-Add a web app to your project.
 edit the const firebaseconfig (Kanban/src/firebase.js):
    ```bash
        const firebaseConfig = {
        apiKey: "Your API KEY",
        authDomain: "Your authDomain",
        projectId: "Your Project ID",
        storageBucket: "Your Storage Bucket",
        messagingSenderId: "Your messagingSenderId",
        appId: "your app id"

    Note: - This above code is already written inside your firebase console
    You can copy it and use it directly
};


4. Start the development server:

   ```bash
       npm start

5. Usage

-**User Registration and Login: Register a new account or log in with existing credentials.**
-**Create Boards: Create new boards for different projects or workflows.**
-**Add Lists and Cards: Add lists to boards and cards to lists to represent tasks.**
-**Drag and Drop: Drag and drop cards between lists to change their status or workflow stage.**
-**Task Details: Click on a card to view and edit task details, such as description, due date, and attachments.**


Contributing
Contributions are welcome! 

Use Control + Shift + m to toggle the tab key moving focus. Alternatively, use esc then tab to move to the next interactive element on the page.
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Editing Boardify--Kanban/README.md at master · Dev-Harshxl/Boardify--Kanban
