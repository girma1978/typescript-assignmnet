# Vehicle Command Line Application

## Description

This project is a **Vehicle Command Line Application** that allows users to create and interact with different vehicle types, including **Car**, **Truck**, and **Motorbike**. The application prompts the user to enter vehicle details and then provides the ability to perform actions such as starting the vehicle, printing its details, and performing actions specific to each vehicle type (e.g., **wheelie** for motorbikes and **tow** for trucks).

---

## User Story

AS a developer  
I WANT to update an existing application to include additional vehicle types  
SO THAT I am able to comprehend and work with existing code bases.

---

## Acceptance Criteria

- **GIVEN** a command-line application that accepts user input:
  - **WHEN** I am prompted to create a new vehicle or perform an action on an existing vehicle:
    - **THEN** I can choose between the two options (create a new vehicle or perform an action on an existing vehicle).
  
  - **WHEN** I am prompted to choose the vehicle type during creation:
    - **THEN** I can choose between **Car**, **Truck**, or **Motorbike**.
  
  - **WHEN** I am prompted for details about the vehicle:
    - **THEN** I can enter the vehicle information (e.g., make, model, year, weight, etc.).
  
  - **WHEN** I have entered all the vehicle information:
    - **THEN** I can use the created vehicle.
  
  - **WHEN** I select an existing vehicle:
    - **THEN** I can perform actions on the selected vehicle.
  
  - **WHEN** I perform an action with a vehicle:
    - **THEN** I will see the result of the action in the command-line interface.
  
  - **WHEN** I complete the process of performing an action:
    - **THEN** I can perform additional actions until I choose to exit.

---

## Features

- **Create a New Vehicle**: Users can create a new vehicle by entering its details.
  - Available vehicle types: **Car**, **Truck**, **Motorbike**.
  - For **Motorbikes**, users can perform a **wheelie** action.
  - For **Trucks**, users can **tow** other vehicles.
  
- **Perform Actions with Vehicles**:
  - **Start the vehicle**: Start the selected vehicle and set its current speed.
  - **Turn right**: Turn the vehicle right.
  - **Wheelie**: Perform a wheelie (only available for **Motorbikes**).
  - **Tow**: Tow another vehicle (only available for **Trucks**).
  
- **View Vehicle Details**: Print the vehicle details, including VIN, make, model, year, weight, color, and wheels.

- **Command-Line Interface (CLI)**: Built with **Inquirer** to prompt the user for input and allow easy interaction.

---

### 1. Repository link

 https://github.com/girma1978/typescript-assignmnet
 
 
---

## link to the video 
https://drive.google.com/file/d/1-3bglbn-p03d3iiUO1VpTPywgvmRN0TV/view?usp=sharing


