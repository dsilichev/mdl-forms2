import { Input } from "../../components";
import "./Properties.css";
import { useState } from "react";
import type * as InputTypes from "../Input/Input.types";
import type { FormProps } from "../Signup/index";

export const Properties = ({
  formProperties,
  setFormProperties,
  currentInputName,
}: {
  formProperties: FormProps;
  setFormProperties: React.Dispatch<React.SetStateAction<FormProps>>;
  currentInputName: keyof FormProps;
}) => {
  //console.log(formProperties.formProperties.placeholder);
  console.log(formProperties[currentInputName].placeholder);

  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onChange={handleChange}>
      <Input
        name="placeholder"
        label="Placeholder"
        placeholder={formProperties[currentInputName].placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Input
        name="label"
        label="Label"
        placeholder={formProperties[currentInputName].label}
        value=""
        onChange={() => {}}
      />
      <Input
        name="description"
        label="Description"
        placeholder="Your description"
        value=""
        onChange={() => {}}
      />
      <Input
        name="error"
        label="Error"
        placeholder="Your error"
        value=""
        onChange={() => {}}
      />
      <div>
        <label htmlFor="select">Variant:</label>
        <select
          name="Variant"
          id="select"
          value=""
          onChange={(e) => {
            // if (ref.current) {
            //   updateCurrentTextField(e.target.value, ref.current, "variant");
            // }
          }}
        >
          <option value="default">Default</option>
          <option value="filled">Filled</option>
          <option value="unstyled">Unstyled</option>
        </select>
      </div>
      <div className="radius-wrapper">
        <label>Radius:</label>
        <input
          type="range"
          name="Radius"
          id="radius"
          list="radius-values"
          min="0"
          max="200"
          step="100"
          value=""
          onChange={(e) => {
            // if (ref.current) {
            //   updateCurrentTextField(e.target.value, ref.current, "radius");
            // }
          }}
        />
        <div className="radius-labels">
          <span>sm</span>
          <span>md</span>
          <span>lg</span>
        </div>
      </div>
      <div className="size-wrapper">
        <label>Size:</label>
        <input
          type="range"
          name="Size"
          id="size"
          list="size-values"
          min="0"
          max="200"
          step="100"
          value=""
          onChange={(e) => {
            // if (ref.current) {
            //   updateCurrentTextField(+e.target.value, ref.current, "size");
            // }
          }}
        />
        <div className="size-labels">
          <span>sm</span>
          <span>md</span>
          <span>lg</span>
        </div>
      </div>
      <Input
        name="disabled"
        label="Disabled"
        type="checkbox"
        onChange={(e) => {
          // setDisabled(e.target.checked);
          // if (ref.current) {
          //   updateCurrentTextField(e.target.checked, ref.current, "disabled");
          // }
        }}
      />
      <Input
        name="withasterisk"
        label="With asterisk"
        type="checkbox"
        onChange={(e) => {
          // if (ref.current) {
          //   updateCurrentTextField(
          //     e.target.checked,
          //     ref.current,
          //     "withasterisk",
          //   );
          // }
        }}
      />
    </form>
  );
};
