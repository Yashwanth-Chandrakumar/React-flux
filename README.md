
# ImageGen: Image Generation Platform

## Overview

**ImageGen** is a powerful web application built with **React** and **Vite** for the frontend, coupled with a **Spring Boot** backend. The platform leverages the open-source **Flux Model** to generate images based on user input and stores the generated images in **Amazon S3**. Whether you're a designer, content creator, or AI enthusiast, ImageGen empowers you to easily generate high-quality images directly from text prompts.

### Key Features

- **Image Generation with Flux Model**: The Flux model is an open-source deep learning model that generates high-quality images from textual descriptions.
- **Amazon S3 Storage**: Generated images are securely stored and served through **Amazon S3**, ensuring scalability and high availability.
- **User-Friendly Interface**: The app features an intuitive React-based UI powered by Vite for a fast and responsive experience.
- **Backend with Spring Boot**: The backend is built using **Spring Boot**, providing a robust and scalable API to handle image generation requests.
- **Real-Time Image Generation**: Users can generate and download images in real-time, with the application efficiently handling requests through asynchronous processing.

## Technologies Used

- **Frontend**:
  - **React**: For building the interactive user interface.
  - **Vite**: For fast and optimized bundling during development and production.
  - **Axios**: For making HTTP requests to the backend API.
  - **Tailwind CSS**: For modern and responsive styling.

- **Backend**:
  - **Spring Boot**: A Java-based backend framework to manage API requests and communicate with the Flux model.
  - **Flux Model**: Open-source model for generating images based on text prompts.
  - **Amazon S3**: For storing and serving generated images.
  - **Spring Data JPA**: For interacting with the database (if needed) to manage user data or image metadata.

## Getting Started

To get started with ImageGen, follow the steps below to set up both the frontend and backend locally.

### Prerequisites

- Java 11 or higher for running Spring Boot
- Node.js and npm (or yarn) for running the frontend
- AWS Account for S3 Storage

### Frontend Setup (React + Vite)

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/imagegen.git
   ```

2. Navigate to the frontend directory:

   ```bash
   cd imagegen/frontend
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

   or using yarn:

   ```bash
   yarn install
   ```

4. Set up environment variables for the backend API and AWS S3 in `.env.local`:

   ```bash
   REACT_APP_API_URL=http://localhost:8080/api
   REACT_APP_S3_BUCKET=your-s3-bucket-name
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   or using yarn:

   ```bash
   yarn dev
   ```

   Visit `http://localhost:3000` to see the frontend in action.

### Backend Setup (Spring Boot)

1. Navigate to the backend directory:

   ```bash
   cd imagegen/backend
   ```

2. Open `application.properties` or `application.yml` and configure the AWS S3 credentials:

   ```properties
   amazon.s3.access-key=your-aws-access-key
   amazon.s3.secret-key=your-aws-secret-key
   amazon.s3.region=your-s3-region
   amazon.s3.bucket-name=your-s3-bucket-name
   ```

3. Build and run the Spring Boot application:

   ```bash
   ./mvnw spring-boot:run
   ```

   This will start the backend server at `http://localhost:8080`.

### AWS S3 Setup

1. Create an S3 bucket in the AWS Management Console.
2. Create an IAM user with programmatic access and attach the `AmazonS3FullAccess` policy.
3. Use the IAM credentials to configure your Spring Boot application for AWS S3 access.

## Usage

1. **Generate Images**:
   - Open the frontend application in your browser.
   - Enter a description in the provided text box and click "Generate Image".
   - The backend will send the description to the Flux model for image generation.
   - Once generated, the image will be uploaded to Amazon S3 and displayed on the screen.

2. **Download Images**:
   - After the image is generated and displayed, you can download it directly by clicking the download button.

3. **Manage Your Images**:
   - All generated images are stored securely in your configured S3 bucket.
   - You can manage your images directly from AWS S3 via the AWS Management Console.

