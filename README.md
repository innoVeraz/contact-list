# Contact List Application

School project to test understanding some basics of JavaScript
Array, Object structure, if/else and DOM manipulation

## Task Description

The task is to develop a contact list application where the user can create, edit, and delete contacts. The task is divided into three parts: structure, interaction, and design.

### Part 1: Structure

The application should be built with an HTML structure that meets the following minimum requirements:

- **Create New Contact**:

  - A text field where the user can enter a name.
  - A text field where the user can enter a phone number.
  - A button to create a new contact.

- **Contact List**:
  - If the user has added contacts, they should be displayed in a list.
  - Each contact should consist of two filled text fields (name and phone number), which are locked (`disabled`) by default.
  - Each contact should have buttons to:
    - Edit contact information.
    - Delete the contact.

### Part 2: Interaction

Implement the following functionality in the application using JavaScript:

- **Scenario 1 - Create Contact**:

  - The user enters a name and phone number in the respective fields.
  - The user clicks the button to create a contact.
  - The new contact is added to the contact list.

- **Scenario 2 - Edit Contact**:

  - The contact's text fields for name and phone number are locked by default.
  - When the user clicks the "Edit" button, the contact's name and phone number can be edited.
  - When the user is done and clicks the same button (which now changes to "Save"), the fields are locked again.
  - The edit process should be repeatable multiple times.

- **Scenario 3 - Delete Contact**:
  - The user can click the "Delete" button to remove a contact from the list.

### Part 3: Design (Optional)

Apply appropriate CSS to make the application look visually appealing and user-friendly. You can use any framework such as Bootstrap or write your own custom CSS.

#### Improvements:

- Responsive design.
- Grid for contact list

![app final look](assets/app.png)
