import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import styled from "styled-components";

import {
  c_brand_primary,
  c_brand_secondary
} from "../../../constants/styles/colors";
import { t_font_family_title } from "../../../constants/styles/typography";
import colorHexRGB from "../../../utils/color-hex-rgb";
import getTableHeaders from "./utils/get-table-headers";
import getTableRows from "./utils/get-table-rows";

const Root = styled.div`
  background-color: white;
  color: ${c_brand_primary};
  width: 100%;

  th {
    font-family: ${t_font_family_title} !important;
    font-weight: 600;
    letter-spacing: 1px;
    text-decoration: underline;

    span {
      height: 28px;
    }

    &.checkbox {
      .MuiTableSortLabel-icon {
        position: absolute;
        right: -25px;
      }
    }
  }

  .visuallyHidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    top: 20px;
    width: 1px;
  }

  .MuiTableRow-root.Mui-selected {
    background-color: ${`rgba(${colorHexRGB(
      c_brand_secondary,
      "rgb",
      "0.08"
    )})`} !important;
  }

  .table-no-highlight td {
  }

  .MuiTableRow-root {
    &.Mui-selected {
      background-color: transparent !important;

      &:hover {
        background-color: rgba(0, 0, 0, 0.04) !important;
      }
    }
  }
`;

export const DataTable = ({
  headers,
  onChange,
  rows,
  selectedParent,
  setSelectedParent
}) => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [selected, setSelected] = React.useState([]);

  /* handles sort direction as asc vs. desc */
  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  /* handles selectAll action for checkbox option */
  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  /* handles select action for checkbox option */
  const handleSelectClick = (event, name) => {
    const selectedIndex = selectedParent
      ? selectedParent.indexOf(name)
      : selected.indexOf(name);

    // const newSelected = [];
    // if (selectedIndex === -1) {
    //   newSelected = newSelected.concat(selected, name);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1)
    //   );
    // }

    if (selectedIndex === -1) {
      setSelectedParent ? setSelectedParent([name]) : setSelected([name]);
    } else {
      setSelectedParent ? setSelectedParent([]) : setSelected([]);
    }
  };

  /* declares what is selected for checkbox option */
  const isSelected = name =>
    selectedParent
      ? selectedParent.indexOf(name) !== -1
      : selected.indexOf(name) !== -1;

  return (
    <Root className="data-table">
      <Table>
        <TableHead>
          {getTableHeaders({
            handleSelectAllClick,
            handleRequestSort,
            headers,
            order,
            orderBy
          })}
        </TableHead>
        <TableBody>
          {getTableRows({
            handleSelectClick,
            headers,
            isSelected,
            onChange,
            order,
            orderBy,
            rows
          })}
        </TableBody>
      </Table>
    </Root>
  );
};

export default DataTable;
