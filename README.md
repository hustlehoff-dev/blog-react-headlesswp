# React Crypto Blog - Headless WordPress

A modern cryptocurrency blog built with React for the frontend and WordPress as the headless backend. This project demonstrates the integration of React with WordPress REST API to deliver a fast, responsive, and scalable blogging platform tailored for cryptocurrency enthusiasts.

While there are more advanced backend solutions available, WordPress was the perfect choice for my needs in this project. Its flexibility and ease of integration with React allowed for rapid development. If required, the project can be easily adapted to work with more robust backend solutions in the future, such as Node.js (Express), Django or Flask (Python), Ruby on Rails, or modern headless CMS platforms like Strapi, Contentful, or Sanity.io.

---

## Features

- **Headless WordPress Integration**: WordPress provides backend for managing content, exposed via its REST API. Can be accessed using website.com/cms.
- **React Frontend**: A fast, dynamic frontend built with React, ensuring excellent performance and user experience.
- **Crypto-Focused Design**: The blog is tailored for cryptocurrency-related content, featuring customizable components for prices, trends, and analysis.
- **Crypto Ticker/Prices**: App fetches crypto data using Coingecko's API and stores it in localStorage to prevent over-fetching.
- **Responsive Design**: Mobile-first approach with a fully responsive layout.
- **Dynamic Routing**: React Router is used for seamless navigation between posts, categories, and pages.
- **Dynamic news feed**: Posts are loaded dynamicly and asynchronously (infinite-scrolling).
- **SEO Optimized**: Meta tags and dynamic content are optimized for search engines.
- **Theme Customization**: Built-in support for easy customization of the design and layout.

---

## Screenshots

![{5D976859-737F-4689-B899-14887A03DB36}](https://github.com/user-attachments/assets/c3250450-2c2b-47fd-a587-86033dc74413)
![{45D71C9A-04E8-4306-A869-1D42A8105608}](https://github.com/user-attachments/assets/307a493c-16b0-4807-96f4-cd9fa67458a6)
![{26BDE613-0B2F-4D18-B12A-3A956F11011B}](https://github.com/user-attachments/assets/3f3d7c5e-fc4a-40a4-a8eb-df11c1c15ee0)
![{2FD80D95-EDFD-42E3-A87D-CFBB369A833C}](https://github.com/user-attachments/assets/23006e19-e10c-451b-aa4f-61b750a4f2d5)
![{3D42FD40-AAF1-4464-A5FE-368844255D77}](https://github.com/user-attachments/assets/d36285bc-a302-4fc1-b104-36fb05da1fc0)

---

## Tech Stack

### Frontend

- **React**: Component-based architecture for building the user interface.
- **React Router**: For handling dynamic routing.
- **Fetching**: Raw API calls. Project could use Axios/GraphQL, but it was not necessary for my needs.
- **Styles**: Used SASS/SCSS for styling. Variables are stored in \_variables.scss in root folder.

### Backend

- **WordPress**: Headless CMS to manage blog posts, categories, and pages.
- **WordPress REST API**: Exposes the content via JSON for consumption by the React frontend. Content is fetched asynchronously.

---

## To Do's

- **Desktop Styles**: Currently preparing desktop styles (app created using mobile-1st approach).
- **Subpages**: I will add subpages (Guides, Wallets).
- **Socials**: I will add likes/share socials features with counters.
- **Dark Mode**: Currently implementing dark mode for the app.
- **Authors**: I will add authors pages that display their contributions.
- **Multilinguality**: I am going to add other languages support.

All rights reserved.  
This software and its source code are the property of @hustlehoff-dev.  
Unauthorized use, distribution, or modification is prohibited without prior written consent.
