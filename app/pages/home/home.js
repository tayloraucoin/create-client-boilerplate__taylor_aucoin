import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";

import Button from "../../components/controls/Button/Button";
import DatePicker from "../../components/controls/Datepicker/Datepicker";
import Dropdown from "../../components/controls/Dropdown/Dropdown";
import Form from "../../components/layout/Form/Form";
import GeoSuggestDropdown from "../../components/controls/GeoSuggestDropdown/GeoSuggestDropdown";
import Input from "../../components/controls/Input/Input";
import RadioButtons from "../../components/controls/RadioButtons/RadioButtons";
import Textarea from "../../components/controls/Textarea/Textarea";

const Root = styled.div`
  height: 100%;
  padding: 0 2rem;
  width: 100%;
`;

export default () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [inputMatrix, setInputMatrix] = useState({});

  const dropdownNames = ["testdropdown"];

  /* Handle ui input value changes */
  const handleInputChange = ({ name, value }) => {
    setInputMatrix({
      ...inputMatrix,
      [name]: value
    });

    if (dropdownNames.indexOf(name) > -1) {
      setDropdownOpen(false);
    }
  };

  const handleSubmit = () => {
    console.log(`
      Input value: ${inputMatrix.testinput},
      Textarea value: ${inputMatrix.testtextarea},
      Dropdown selected: ${inputMatrix.testdropdown},
      GeoSuggest selected: ${inputMatrix.testgeoselect},
      DatePicker selected: ${inputMatrix.testdatepicker &&
        moment(inputMatrix.testdatepicker * 1000)},
      RadioButtons selected: ${inputMatrix.testradiobuttons},
    `);
  };

  /* Handle ui dropdown open statuses */
  const handleUpdateDropdownOpen = ({ name, open }) => {
    setDropdownOpen(open ? name : false);
  };

  return (
    <Root>
      <Form>
        <h1>Home</h1>
        <Input
          label="Input"
          name="testinput"
          onChange={handleInputChange}
          styleProperties={{ marginBottom: true }}
          value={inputMatrix.testinput}
        />
        <Textarea
          label="Textarea"
          name="testtextarea"
          onChange={handleInputChange}
          styleProperties={{ marginBottom: true }}
          value={inputMatrix.testtextarea}
        />
        <Dropdown
          label="Dropdown"
          name="testdropdown"
          onChange={handleInputChange}
          onOpen={handleUpdateDropdownOpen}
          open={dropdownOpen}
          options={[
            { label: "Option 1", name: "option1" },
            { label: "Option 2", name: "option2" }
          ]}
          selected={inputMatrix.testdropdown}
          styleProperties={{ marginBottom: true }}
        />
        <GeoSuggestDropdown
          label="GeoSuggest"
          name="residence"
          onChange={handleInputChange}
          placeholder="type for city ..."
          styleProperties={{ marginBottom: true }}
          value={inputMatrix.testgeoselect}
        />
        <DatePicker
          dateFormat="yyyy/MM/dd"
          label="Datepicker"
          name="testdatepicker"
          onChange={handleInputChange}
          selected={
            inputMatrix.testdatepicker
              ? new Date(inputMatrix.testdatepicker * 1000)
              : null
          }
          showYearDropdown
          styleProperties={{ marginBottom: true }}
        />
        <RadioButtons
          fieldName="testradiobuttons"
          label="RadioButtons"
          options={[
            { label: "Option 1", name: "option1" },
            { label: "Option 2", name: "option2" }
          ]}
          selected={inputMatrix.testradiobuttons}
          styleProperties={{ marginBottom: true }}
          updateSelection={handleInputChange}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Root>
  );
};
