import { config } from "dotenv";
import { app } from "./app.js";
import cloudinary from 'cloudinary'

config();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECREAT
});


app.get("/", (req, res) => {
    res.send("HELLO WORLD");
})

app.listen(process.env.PORT, () => {
    console.log("Server is runnung on port ", process.env.PORT);
})