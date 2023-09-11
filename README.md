<br />
<div align="center">

  <h3 align="center" id="readme-top">Next.js Timesheet App</h3>

  <p align="center">
    <br />
    <a href="https://github.com/kccc23/timesheet-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/kccc23/timesheet-app/issues">Request Feature</a>
  </p>
</div>


## About The Project

A Timesheet App.

### Built With

This project is built with Next.js and Tailwind CSS.

### Features

* Home Page: Navigate to all Entries and Add Entry.
* Entries Page: List and manage all entries, with a toggle client list on the top link to view entries for specific clients.
* Entries Page by Client: View entries for specific clients.
* Add Entry Page: Add new time entry.


## Getting Started

Learn to run this locally.

### Prerequisites

* Node - install version 18 stable, visit https://nodejs.org/en

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_How you can install and setting up your app._

1. Clone the repo
   ```sh
   git clone https://github.com/kccc23/timesheet-app.git
   ```
2. Go to the project folder
   ```sh
   cd timesheet-app
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run on development server
   ```sh
   npm run dev
   ```
5. Open the app in your web brower at http://localhost:3000

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## API routes

* GET all entries /api/entries
* GET one entry by id /api/entries/:id
* GET all entries by client - /api/entries?client=clientName
* DELETE one entry by id /api/entries/:id
* POST create an entry /api/entries
* Here is an example of the data structure for creating an entry:
*  {
      "date": "2023-07-08",
      "client": "abc",
      "project": "abcd",
      "project_code": "123abc",
      "hours": 5.68,
      "billable": "No",
      "first_name": "Abc",
      "last_name": "Def",
      "billable_rate": 30
   }

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contact

If you have any questions or issues with Timesheet App, please contact Kaining Chen at kaining.chen.dev@gmail.com.

Thank you!

<p align="right">(<a href="#readme-top">back to top</a>)</p>
