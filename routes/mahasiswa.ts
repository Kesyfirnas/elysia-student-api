import { Elysia, t } from "elysia";

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

mahasiswaRoute.get("/", () => {
  return {
    message: "Data mahasiswa",
    data: mahasiswa,
  };
});

mahasiswaRoute.post(
  "/",
  ({ body }) => {
    const dataBaru = {
      id: mahasiswa.length + 1,
      nama: body.nama,
      umur: body.umur,
      jurusan: body.jurusan,
    };
    mahasiswa.push(dataBaru);
    return {
      message: "Data mahasiswa berhasil ditambahkan",
      data: dataBaru,
    };
  },
  {
    body: t.Object({
      nama: t.String(),
      umur: t.String(),
      jurusan: t.String(),
    }),
  },
);
mahasiswaRoute.put(
  "/:id",
  ({ params, body }) => {
    const id = parseInt(params.id);
    const index = mahasiswa.findIndex((mhs) => mhs.id === id);
    if (index === -1) {
      return {
        message: "Mahasiswa tidak ditemukan",
      };
    }
    mahasiswa[index] = {
      id: id,
      nama: body.nama,
      umur: body.umur,
      jurusan: body.jurusan,
    };
    return {
      message: "Data berhasil diperbarui",
      data: mahasiswa[index],
    };
  },
  {
    body: t.Object({
      nama: t.String(),
      umur: t.String(),
      jurusan: t.String(),
    }),
  },
);

mahasiswaRoute.delete("/:id", ({ params }) => {
  const id = parseInt(params.id);
  const index = mahasiswa.findIndex((mhs) => mhs.id === id);
  if (index === -1) {
    return {
      message: "Data mahasiswa tidak ditemukan",
    };
  }
  const dataHapus = mahasiswa.splice(index, 1);
  return {
    message: "Data berhasil dihapus",
    data: dataHapus,
  };
});
