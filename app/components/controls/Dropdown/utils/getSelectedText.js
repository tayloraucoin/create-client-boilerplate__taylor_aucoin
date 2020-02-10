import sorter from "../../../../utils/sorter";

export default ({
  list,
  multipleChoice,
  navbar,
  optionName,
  placeholder,
  selected,
  title
}) => {
  if (navbar) {
    return title;
  }

  if (multipleChoice && selected) {
    return sorter(selected, "number_biggest").join(", ");
  }

  if (selected) {
    return list.find(option => option[optionName] === selected).label;
  }

  if (placeholder) {
    return placeholder;
  }

  return "";
};
