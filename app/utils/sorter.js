export default function sorter(items, condition, field) {
  let sorted;

  switch (condition) {
    case "alphabetical_az":
      if (field === "label") {
        sorted = items.sort(sortByAlphabeticalLabelObj);
      } else {
        sorted = items.sort(sortByAlphabeticalNameObj);
      }
      break;
    case "alphabetical_za":
      if (field === "label") {
        sorted = items.sort(sortByAlphabeticalLabelBackwardsObj);
      } else {
        sorted = items.sort(sortByAlphabeticalNameBackwardsObj);
      }
      break;
    case "number_biggest":
      sorted = items.sort(sortByNumberBiggest);
      break;
    case "number_smallest":
      sorted = items.sort(sortByNumberSmallest);
      break;
    default:
      break;
  }

  return sorted;
}

function sortByAlphabeticalNameObj(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

function sortByAlphabeticalNameBackwardsObj(a, b) {
  if (a.name > b.name) return -1;
  if (a.name < b.name) return 1;
  return 0;
}

function sortByAlphabeticalLabelObj(a, b) {
  if (a.label < b.label) return -1;
  if (a.label > b.label) return 1;
  return 0;
}

function sortByAlphabeticalLabelBackwardsObj(a, b) {
  if (a.label > b.label) return -1;
  if (a.label < b.label) return 1;
  return 0;
}

function sortByNumberBiggest(a, b) {
  return b - a;
}

function sortByNumberSmallest(a, b) {
  return a - b;
}
