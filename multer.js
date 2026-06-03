const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    const supportedFormats = ["jpeg", "png", "webp"]; // Allowed formats
    const fileExt = file.mimetype.split("/")[1]; // Extract file extension
    return {
      folder: "products", // Cloudinary folder
      format: supportedFormats.includes(fileExt) ? fileExt : "png", // Default to PNG if format is unsupported
      public_id: `${file.fieldname}-${Date.now()}`,
    };
  },
});

const upload = multer({ storage });

module.exports = upload;
