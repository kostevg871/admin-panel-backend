import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managmetRoutes from "./routes/managment.js";
import salesRoutes from "./routes/sales.js";
import OveralStats from "./models/OveralStat.js";

//data imports
//import User from "./models/User.js";
//import Transaction from "./models/Transaction.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
} from "./data/index.js";

//import Product from "./models/Product.js";
//import ProductStat from "./models/ProductStat.js";

/* CONFIG */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES*/
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/managment", managmetRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */

const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    /* Добавляем User один раз*/
    //User.insertMany(dataUser);
    //Product.insertMany(dataProduct);
    //ProductStat.insertMany(dataProductStat);
    //Transaction.insertMany(dataTransaction);
    //OveralStats.insertMany(dataOverallStat);
  })
  .catch((err) => console.log(`${err} did not connect`));
