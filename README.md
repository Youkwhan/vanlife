# vanlife
A landing page website for van rentals

**Link to project:** [https://boisterous-gumption-10ba88.netlify.app/](https://boisterous-gumption-10ba88.netlify.app/)

![vanlife readme](https://github.com/Youkwhan/vanlife/assets/37788922/68063a26-6e42-41de-9fbf-b920e166f7f2)

## Overview
Welcome to our rental website, where you can find the perfect travel van for your next road trip adventure. Whether you're looking to host your own van or discover and rent a new one, we've got you covered!

This project revolves around leveraging the power of React Router 6, a powerful library for managing routing in React applications. Our primary focus was on utilizing its features to set up nested routes and create a seamless Single Page Application (SPA) experience for our users.

### Built with: 
- React.js
- React Router v6
- JavaScript
- Vanilla CSS
- Firebase (FireStore)
- Mirage.js

## Setup
1. Clone this repo to your own machine
2. `cd` to the main folder in Terminal
3. Run `npm install`
4. Run `npm run dev` to spin up the dev server
5. Copy/paste or click on the localhost URL it provides

## How It's Made
This project is developed using React Router, which is built on top of the Remix framework. By utilizing React Router's nested routes, our application behaves like a Single Page Application (SPA), providing a seamless and dynamic user experience. 
Additionally, we leverage Remix's server concepts of loaders and actions to efficiently perform data reads and writes.
Throughout the development process of this app, MirageJS was used to mimick a database holding all the relevant information such as images, profiles and user details. After finishing up the router setup I connected this app to Google Firestore.

### Optimizations:
Some optimization techniques we used to enhance performance, includes:
- Parallel data fetching: By fetching data in parallel, we minimize latency and enhance the overall loading speed of our app. This approach allows us to retrieve multiple sets of data simultaneously, improving efficiency.
- Deferred data loading for slow network/api requests. This way we ensure that essential data is prioritized and a better user expereience where components will render even before the data is recieved through the `loaders`.
- Client-side routing: Leveraging the capabilities of React Router, we utilize client-side routing to handle navigation and rendering of components on the client side. This approach eliminates the need for full-page refreshes, resulting in a smoother and more interactive user experience.
  
## Features
### **Search Filter**:
Users can filter by van type. Selecting a type (simple, rugged, or luxury) will return a list of vans of that type.
The results of that search can be viewed and selected. Clicking on any listing will take the user to the details of that listing.

### **Saved previous route**: 
Clicking the "Back to rugged vans" sends the user back to the overview of all rugged vans, including the previously selected search parameters in the URL

### **Login**: 
I have created an user account, to test the protected routes and log in to the hosts dashboard. To log in, use the following login details:

- Username: user@vanlife.com
- Password: van123

I also added a very basic logout scenario, that logs out a user and revokes access to all protected routes.

## What I Learned
- Route handling and parameters: I learned how to configure and set up the router to enable efficient navigation and how to extract and utilize route parameters to pass data between components and pages within the application
- Nested routes and outlet: I explored the concept of nested routes and how to enable the creation of hierarchical structures and organized content within the application
- Protected Routes: to ensure that certain pages and components can only be accessed by authenticated users. 
- Form component and action function: When submitting in our form using the action function, instead of throwing an errorElement that will redirect us, we can return data using the useActionData to display helpful information to correct the form validation.
- Loader function: provides a smooth loading experience for the user, as the delay gives the impression that the data is being retrieved in the background while still allowing the rest of the page to load and render. 
- Defer, Await, Suspense: To bring back the benefits of switching to the route immediately without causing delays due to request or promise handling in the loader function by passing the promise itself instead of waiting for the values and then routing.

## Credit
- To Bob Ziroll and his course in React Router 6 
- Figma file: [link](https://www.figma.com/file/Ep0KBPN5sLBdUjA3HirUoZ/%23VanLife?type=design&node-id=0-1&mode=design&t=VDq4GCjy39T7G77P-0)
- Scrimba Community and their help

## Connect

Thank you for reading about this project. If you'd like to connect with me for mentoring, collaboration, or employment opportunities, you can do so via the following links:

- Email [Youkwhan@gmail.com](**Youkwhan@gmail.com**)
- LinkedIn [https://www.linkedin.com/in/youkwhan/](https://www.linkedin.com/in/youkwhan/)
- Portfolio [https://devyouk.netlify.app](https://devyouk.netlify.app)

### License
This project is licensed under the [MIT License](LICENSE.md).
