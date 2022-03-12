import express from "express";
import productRouter from "./routes/product";
var cors = require('cors');
import morgan from "morgan";
import mongoose from "mongoose";

const app = express();

//middleware
app.use(express.json());
app.use(cors());
//morgan
app.use(morgan("tiny"));
// routing
app.use("/api", productRouter);

mongoose.connect("mongodb://localhost:27017/web_16306_node_js")
.then(() => console.log("kết nối thành công !!!"))

// connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server đang chạy cổng " ,PORT);
})
