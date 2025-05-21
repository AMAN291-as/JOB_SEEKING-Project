import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" }); // Load environment variables

import app from "./app.js";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// Use PORT from environment or default to 4000
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ Server running at port ${PORT}`);
});
