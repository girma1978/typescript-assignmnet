# typescript-assignmnet
# Vehicle Management System

## Overview

This project simulates a Vehicle Management System in TypeScript, modeling various vehicle types like trucks, motorbikes, and cars. It includes behaviors such as starting, stopping, accelerating, and towing, leveraging class inheritance and interfaces.

### Key Features:
- **Driveable Interface**: Defines driving behaviors (start, stop, accelerate, etc.).
- **AbleToTow Interface**: Enables vehicles like trucks to tow others.
- **Vehicle Classes**: Includes `Truck`, `Motorbike`, `Car`, and `Wheel` classes with specific behaviors.

## Classes

- **Vehicle**: A base class with common properties and methods (start, stop, accelerate).
- **Truck**: Extends `Vehicle`, implements `AbleToTow` for towing other vehicles.
- **Motorbike**: Inherits from `Vehicle`, representing a motorbike.
- **Car**: Inherits from `Vehicle`, representing a car.
- **Wheel**: Represents a wheel with basic properties like diameter.

## link to the video 
https://app.screencastify.com/v2/manage/videos/peZ4RbYDtUR1Ynucl0em
