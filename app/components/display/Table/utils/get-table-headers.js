import { TableCell, TableRow, TableSortLabel } from "@material-ui/core";
import React from "react";
import styled, { css } from "styled-components";

import { t_font_family_title } from "../../../../constants/styles/typography";
import Checkbox from "../../../controls/Checkbox/Checkbox";

const centeredTableCellStyled = css`
  display: flex;
  justify-content: center !important;

  span {
    text-align: center !important;
  }
`;

const TableCellStyled = styled(TableCell)`
  font-family: ${t_font_family_title} !important;

  ${props => props.centered && centeredTableCellStyled};
`;

export default ({
  handleSelectAllClick,
  handleRequestSort,
  headers,
  order,
  orderBy
}) => {
  return (
    <TableRow>
      {headers.map(header => {
        let cellValue = header.label;

        if (header.type === "checkbox") {
          cellValue = <Checkbox actions={{ onChange: handleSelectAllClick }} />;
        }

        /* handle sort request */
        const createSortHandler = property => event => {
          handleRequestSort(event, property);
        };

        return (
          <TableCellStyled
            centered={header.centered}
            key={header.name}
            sortDirection={orderBy === header.name ? order : false}
          >
            <TableSortLabel
              active={orderBy === header.name}
              direction={order}
              onClick={createSortHandler(header.name)}
            >
              {cellValue}
              {orderBy === header.name ? (
                <span className="visuallyHidden">
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCellStyled>
        );
      })}
    </TableRow>
  );
};
