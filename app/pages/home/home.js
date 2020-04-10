import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";

import { CheckboxGroup } from "../../components/controls/Checkbox/Checkbox";
import Button from "../../components/controls/Button/Button";
import CHECKBOX_GROUP_WITH_SUBOPTIONS from "../../constants/example/checkbox-group-with-suboptions";
import DatePicker from "../../components/controls/Datepicker/Datepicker";
import Dropdown from "../../components/controls/Dropdown/Dropdown";
import Form from "../../components/layout/Form/Form";
import GeoSuggestDropdown from "../../components/controls/GeoSuggestDropdown/GeoSuggestDropdown";
import Input from "../../components/controls/Input/Input";
import Linespacer from "../../components/layout/Linespacer/Linespacer";
import Loader from "../../components/display/Loader/Loader";
import RadioButtons from "../../components/controls/RadioButtons/RadioButtons";
import TABLE_HEADERS from "../../constants/example/table-headers";
import TABLE_ROWS from "../../constants/example/table-rows";
import Table from "../../components/display/Table/Table";
import Textarea from "../../components/controls/Textarea/Textarea";
import UploadPhoto from "../../components/controls/UploadPhoto/UploadPhoto";
import addNotification from "../../utils/notification/add-notification";

const Root = styled.div`
  height: 100%;
  padding: 0 2rem;
  width: 100%;
`;

export default () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [inputMatrix, setInputMatrix] = useState({
    testcheckboxgroup: [],
    testcheckboxgroupsuboptions: []
  });
  const [loading, setLoading] = useState(false);

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

  /* Handle ui checkbox value changes */
  const handleCheckboxChangeLogic = ({ fieldName, value }) => {
    if (inputMatrix[fieldName].indexOf(value) === -1) {
      setInputMatrix({
        ...inputMatrix,
        [fieldName]: [...inputMatrix[fieldName], value]
      });
    } else if (inputMatrix[fieldName].indexOf(value) > -1) {
      setInputMatrix({
        ...inputMatrix,
        [fieldName]: [...inputMatrix[fieldName].filter(i => i !== value)]
      });
    }
  };

  const handleLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
      Checkbox Group selected: ${inputMatrix.testcheckboxgroup.join(", ")},
      Checkbox Group with SubOptions selected: ${inputMatrix.testcheckboxgroupsuboptions.join(
        ", "
      )},
    `);
  };

  /* Handle ui dropdown open statuses */
  const handleUpdateDropdownOpen = ({ name, open }) => {
    setDropdownOpen(open ? name : false);
  };

  return (
    <Root>
      <Form heading title="Home">
        <Input
          label="Input"
          marginBottom
          name="testinput"
          onChange={handleInputChange}
          value={inputMatrix.testinput}
        />
        <Textarea
          label="Textarea"
          marginBottom
          name="testtextarea"
          onChange={handleInputChange}
          value={inputMatrix.testtextarea}
        />
        <Dropdown
          label="Dropdown"
          marginBottom
          name="testdropdown"
          onChange={handleInputChange}
          onOpen={handleUpdateDropdownOpen}
          open={dropdownOpen}
          options={[
            { label: "Option 1", name: "option1" },
            { label: "Option 2", name: "option2" }
          ]}
          selected={inputMatrix.testdropdown}
        />
        <GeoSuggestDropdown
          label="GeoSuggest"
          marginBottom
          name="residence"
          onChange={handleInputChange}
          placeholder="type for city ..."
          value={inputMatrix.testgeoselect}
        />
        <DatePicker
          dateFormat="yyyy/MM/dd"
          label="Datepicker"
          marginBottom
          name="testdatepicker"
          onChange={handleInputChange}
          selected={
            inputMatrix.testdatepicker
              ? new Date(inputMatrix.testdatepicker * 1000)
              : null
          }
          showYearDropdown
        />
        <RadioButtons
          fieldName="testradiobuttons"
          label="RadioButtons"
          marginBottom
          options={[
            { label: "Option 1", name: "option1" },
            { label: "Option 2", name: "option2" }
          ]}
          selected={inputMatrix.testradiobuttons}
          updateSelection={handleInputChange}
        />
        <Button onClick={handleSubmit}>Submit (see console)</Button>
        <Linespacer />
        <CheckboxGroup
          checkedList={inputMatrix.testcheckboxgroup}
          fieldName="testcheckboxgroup"
          grid
          gridColumnNumber={4}
          label="Checkbox Group"
          name="testcheckboxgroup"
          onChange={handleCheckboxChangeLogic}
          options={[
            {
              label: "Option A",
              name: "optionA"
            },
            {
              label: "Option B",
              name: "optionB"
            },
            {
              label: "Option C",
              name: "optionC"
            }
          ]}
        />
        <CheckboxGroup
          checkedList={inputMatrix.testcheckboxgroupsuboptions}
          fieldName="testcheckboxgroupsuboptions"
          grid
          gridColumnNumber={4}
          label="Checkbox Group with SubOptions"
          name="testcheckboxgroupsuboptions"
          nestedOptions
          onChange={handleCheckboxChangeLogic}
          options={CHECKBOX_GROUP_WITH_SUBOPTIONS}
          subOptionFieldName="subOptions"
        />
        <Linespacer />
        <Table headers={TABLE_HEADERS} rows={TABLE_ROWS} />
        <Linespacer />
        <UploadPhoto
          buttonLabel={inputMatrix.image ? "Replace Image" : "Set Image"}
          label="Set Photo"
          marginBottom
          name="image"
          photoSrc={inputMatrix.image ? inputMatrix.image.src : null}
          upload={handleInputChange}
        />
        <Linespacer />
        <Button
          onClick={() =>
            addNotification({
              message: "This is an error message",
              type: "danger"
            })
          }
          type="danger"
        >
          Show Me An Error
        </Button>
        <br />
        <Button
          onClick={() =>
            addNotification({
              message: "This is an warning message",
              type: "warning"
            })
          }
          type="warning"
        >
          Show Me A Warning
        </Button>
        <br />
        <Button
          onClick={() =>
            addNotification({
              message: "This is an success message",
              type: "success"
            })
          }
          type="success"
        >
          Show Me A Success!
        </Button>
        <br />
        <Button
          onClick={() =>
            addNotification({
              message: "This is an info message",
              type: "info"
            })
          }
          type="info"
        >
          Show Me The Info!
        </Button>
        <br />
        <Button onClick={handleLoading}>See Loading ...</Button>
        <Loader loading={loading} />
      </Form>
    </Root>
  );
};
