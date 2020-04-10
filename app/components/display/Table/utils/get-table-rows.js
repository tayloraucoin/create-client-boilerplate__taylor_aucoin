import { Link } from "react-router-dom";
import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import styled, { css } from "styled-components";

import { c_brand_primary } from "../../../../constants/styles/colors";
import { t_font_family } from "../../../../constants/styles/typography";
import Checkbox from "../../../controls/Checkbox/Checkbox";
import Styler from "../../../../utils/styler";
import getSorting from "./get-sorting";
import stableSort from "./stable-sort";

const centeredTableCellStyled = css`
  text-align: center !important;
`;

const classTableCellStyled = css`
  font-size: 12px;
  text-align: center;
`;

const gradeTableCellStyled = css`
  span {
    cursor: pointer;
  }
`;

const noPaddingTableCellStyled = css`
  display: flex !important;
  height: 41px !important;
  padding: 0 !important;
`;

const TableCellStyled = styled(TableCell)`
  display: flex;
  font-family: ${t_font_family} !important;
  font-size: ${props =>
    props.name === "class" ? "10px !important" : "12px !important"};
  font-weight: 300;
  height: fit-content !important;
  padding: 12px 16px !important;

  a {
    color: ${c_brand_primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ${props => props.centered && centeredTableCellStyled};
  ${props => props.name === "class" && classTableCellStyled};
  ${props => props.name === "grade" && gradeTableCellStyled};
  ${props => props.noPadding && noPaddingTableCellStyled};
`;

export default ({
  handleSelectClick,
  headers,
  isSelected,
  order,
  orderBy,
  rows
}) => {
  return (
    stableSort(rows, getSorting(order, orderBy))
      // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row, index) => {
        const isItemSelected = isSelected(row.name);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
          <TableRow
            aria-checked={isItemSelected}
            hover
            key={index}
            onClick={event => handleSelectClick(event, row.name)}
            role="checkbox"
            selected={isItemSelected}
            tabIndex={-1}
          >
            {headers.map((header, headerIndex) => {
              let cellValue = row[header.name];

              /* TYPE: CHECKBOX */
              if (header.type === "checkbox") {
                cellValue = (
                  <Checkbox
                    actions={{
                      onChange: handleSelectClick
                    }}
                    checked={isItemSelected}
                    inputProps={{
                      "aria-labelledby": labelId
                    }}
                    name={row.name}
                    small
                  />
                );
              }

              /* TYPE: LINK */
              if (header.type === "link") {
                cellValue = (
                  <Link to={row[header.linkAttribute]}>{row[header.name]}</Link>
                );
              }

              /* smart-assign classes */
              const tableCellClassName = Styler(
                `${header.name} ${row[header.name]}`,
                header.name === "name" && "name"
              );

              return (
                <TableCellStyled
                  centered={header.centered}
                  className={tableCellClassName}
                  key={headerIndex}
                  name={header.name}
                >
                  {cellValue}
                </TableCellStyled>
              );
            })}
          </TableRow>
        );
      })
  );
};
