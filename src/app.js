import express from("express");
import productRouter from "./router/product";
import cors from require("cors");
import morgan from "morgan";

const app = express();

//middleware
app.use(express.json());
app.use(cors());
//morgan
app.use(morgan("tiny"));
// routing
app.use("/api", productRouter);

// connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server đang chạy cổng " ,PORT);
})
