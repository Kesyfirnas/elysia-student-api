import { Elysia } from "elysia";
import { mahasiswaRoute } from "./mahasiswa";
const app = new Elysia();

app.use(mahasiswaRoute);

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001 ");
});
