# 🌟 OpenAI DALL-E Image Generation App

Welcome to **DALL-E Clone**, a full-stack web app that harnesses the power of **OpenAI's DALL-E API** to generate stunning AI-driven images. Build, share, and explore a community of AI-generated artwork—all in a sleek, responsive design. Whether you're an AI enthusiast or a casual creator, this project provides a seamless experience for exploring the magic of image generation.

## ✨ Features

- Generate AI images using DALL-E API
- Share generated images with the community
- View and download community-shared images
- Responsive design for various screen sizes

## 🌐 Demo
Here is a working live demo: https://tanhaow.github.io/OpenAI-Image-Generation-App/

## 🛠️ Technologies Used
- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Image Cloud Storage: Cloudinary
- AI Image Generation: OpenAI DALL-E API

## 📝 Description
This project is a deep dive into AI-powered creativity. Inspired by the possibilities of OpenAI's DALL-E API, I developed this application to create a platform where users can easily interact with AI models, generate images, and participate in an open community. 

- Motivation: I was motivated to build this project to explore the capabilities of AI in image generation and to create a platform for users to share their AI-generated creations.

- Why I Built This Project: My main goal was to create a user-friendly interface for interacting with DALL-E and to build a community around AI-generated art.

- Problem Solved: This project simplifies the process of generating AI images and provides a platform for sharing and discovering AI-generated artwork.

- What I Learned: Throughout the development process, I gained valuable insights into working with AI APIs, building full-stack applications, and implementing cloud storage solutions.


## 📖 Table of Contents
- [🌟 OpenAI DALL-E Image Generation App](#-openai-dall-e-image-generation-app)
  - [✨ Features](#-features)
  - [🌐 Demo](#-demo)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [📝 Description](#-description)
  - [📖 Table of Contents](#-table-of-contents)
  - [🛠️ Setup Project](#️-setup-project)
    - [🍴 Prerequisites](#-prerequisites)
    - [🚀 Installation](#-installation)
  - [🔍 Usage](#-usage)
  - [🔒 Environment Variables](#-environment-variables)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)



## 🛠️ Setup Project
### 🍴 Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary account](https://cloudinary.com/)
- [OpenAI API key](https://openai.com/)


### 🚀 Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/dalle-clone.git
cd dalle-clone
```

2. Install dependencies for both client and server
```bash
cd client
npm install
cd ../server
npm install
```

3. Set up environment variables (see [Environment Variables](#environment-variables) section)

4. Start the back-end
```bash
cd server
npm start
```

5. Start the front-end
```bash
cd client
npm run dev
```

## 🔍 Usage
After starting both the client and server, navigate to `http://localhost:5173` (or a similar address, find in your terminal log) in your web browser. You can create new AI-generated images by providing prompts, and view or share images created by the community.




## 🔒 Environment Variables

In the `server` directory, create a `.env` file and add the following values:
```bash
MONGODB_URL=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
