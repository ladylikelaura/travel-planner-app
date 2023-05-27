

# Travel Planner App
This is a travel planner application that allows users to plan their trips by providing weather information and displaying images of their desired travel destinations. The application utilizes webpack as a module bundler and integrates with the Geonames, Weatherbit, and Pixabay APIs.

## Features
Trip Planning: Users can enter the desired destination and dates of their trip.
Weather Information: The application fetches weather data from the Weatherbit API to provide current and forecast weather conditions for the selected destination.
Destination Images: The application retrieves destination images from the Pixabay API and displays them to give users a visual representation of their desired travel location.

## Technologies Used
HTML5
CSS3
JavaScript
webpack
APIs Used
Geonames API: The Geonames API is used to obtain the geographical coordinates (latitude and longitude) of the specified travel destination.
Weatherbit API: The Weatherbit API is utilized to fetch weather data, including current conditions and forecast, based on the geographical coordinates of the selected destination.
Pixabay API: The Pixabay API is used to retrieve images related to the specified travel destination, which are then displayed in the application.
Installation
Clone the repository: git clone <repository-url>
Navigate to the project directory: cd travel-planner-app
Install the dependencies: npm install
## Configuration
Create a .env file in the root directory of the project.
Obtain API keys for the Geonames, Weatherbit, and Pixabay APIs.
Add the following environment variables to the .env file:
makefile
Copy code
GEONAMES_API_KEY=<your-geonames-api-key>
WEATHERBIT_API_KEY=<your-weatherbit-api-key>
PIXABAY_API_KEY=<your-pixabay-api-key>
## Usage
Run the application locally: npm run start
Open your web browser and navigate to the local host
Enter the destination and dates of your trip in the provided input fields.
Click the "Plan Trip" button to retrieve weather information and display destination images.
## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

