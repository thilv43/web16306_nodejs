import express from "express";
import productRouter from "./routes/product";
import categoryRouter from "./routes/category";
import authRouter from "./routes/auth";
import cors from "cors";
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
app.use("/api", categoryRouter);
app.use("/api", authRouter);

mongoose.connect("mongodb://localhost:27017/web_16306_node_js")
.then(() => console.log("kết nối thành công !!!"))
.then((error) => console.log(error))

// connect
const PORT = 3005;
app.listen(PORT, () => {
    console.log("Server đang chạy cổng " ,PORT);
})
