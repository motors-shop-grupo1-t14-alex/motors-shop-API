import "express-async-errors";
import express, { Application } from "express";
import { handleErros } from "./erros";
import cors from "cors";
import advertsRoutes from "./routers/adverts.routes";
import loginRoutes from "./routers/login.routes";
import usersRoutes from "./routers/users.routes";
import commentRoutes from "./routers/comments.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/adverts", advertsRoutes);
app.use("/login", loginRoutes);
app.use("/users", usersRoutes);
app.use("/comment", commentRoutes);

app.use(handleErros);

export default app;
