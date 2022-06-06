const color = [
  {
    id: "1",
    color: "gray",
  },
  {
    id: "2",
    color: "black",
  },
  {
    id: "3",
    color: "green",
  },
  {
    id: "4",
    color: "blue",
  },
  {
    id: "5",
    color: "orange",
  },
];

const root = {
  getAllColors: () => color,
  getColor: (params) => color.find(({ id }) => params.id === id),
};

module.exports = root;
