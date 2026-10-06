import { Elysia } from "elysia";

export const mahasiswaRoute = new Elysia({
  prefix: "/mahasiswa",
});

const mahasiswa = [
  {
    id: 2,
    nama: "Ana",
    umur: "34",
    jurusan: "Teknik",
  },
  {
    id: 5,
    nama: "Anand",
    umur: "79",
    jurusan: "Tek",
  },
];

mahasiswaRoute.get("/:id", ({ params }) => {
  const mhs = mahasiswa.find((mhs) => mhs.id === parseInt(params.id));
  return {
    mhs,
  };
});

mahasiswaRoute.post("/:id", ({ params, body }) => {
  return {
    id: params.id,
    body,
  };
});
