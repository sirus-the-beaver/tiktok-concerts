# tiktok-concerts

Welcome to the TikTok Concerts project! This project is part of the TechJam hackathon hosted by TikTok. It aims to enhance the user experience for live streaming concerts and performances on TikTok Live.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

TikTok Concerts is designed to improve the experience of watching live concerts on TikTok Live. It provides several features to help artists and users connect more easily. The core functionality includes:

- Scheduling public events
- Displaying a map of events happening around the world
- Notifying users about nearby events

## Features

- **Event Scheduling:** Artists can schedule their live performances and make them publicly available.
- **Global Events Map:** A dyanmic map showing all scheduled events worldwide.
- **User Notification:** Users receive notifications for events happening nearby.

## Tech Stack

This project is built using the following technologies:

- **Framework:** [Next.js](https:///nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind](https://tailwindcss.com/)
- **Database:** [MongoDB](https://mongodb.com/)
- **API:** Integration with Google Maps API

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/sirus-the-beaver/tiktok-concerts.git
    cd tiktok-concerts

2. **Install dependencies:**

    ```bash
    
3. **Go to Google Cloud Console to create a project, enable Maps JavaScript API, and obtain API key**

4. **Go to [MongoDB](https://mongodb.com) to create a project, and obtain MongoDB URI**

5. **Create a `.env` file to store your environment variables (Goole Maps API key and MongoDB URI)**

6. **Run the development server:**

    ```bash
    cd client
    npm run dev

- Open http://localhost:3000 with your browser

## Usage

- Navigate to /events to see a list of upcoming events
- Use the map feature to explore events happening around the world
- Sign up for notifications to get alerts about nearby events

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature/your-feature-name

3. Commit your changes:

    ```bash
    git commit -m "Add some features"

4. Push to the branch:

    ```bash
    git push origin feature/your-feature-name

5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/sirus-the-beaver/tiktok-concerts/blob/main/LICENSE) file for details.