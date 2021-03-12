let url =
"/apifilter"
let columnDefs = [
  { field: "athlete" },
  { field: "age" },
  { field: "country" },
  { field: "year" },
  { field: "date" },
  { field: "sport" },
  { field: "gold" },
  { field: "silver" },
  { field: "bronze" },
  { field: "total" },
];

export default function generateGridConfig() {
  let gridConfig = {
    url,
    columnDefs,
  };

  return gridConfig;
}
