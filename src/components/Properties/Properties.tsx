import { Input } from "../../components";
import "./Properties.css";
import { useEffect, useRef } from "react";
import type { FormProps } from "../Signup";

export const Properties = ({
  formProperties,
  setFormProperties,
  currentInputName,
}: {
  formProperties: FormProps;
  setFormProperties: React.Dispatch<React.SetStateAction<FormProps>>;
  currentInputName: keyof FormProps;
}) => {
  const formRef = useRef<HTMLFormElement>(null);


  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setFormProperties((prev) => ({
      ...prev,
      [currentInputName]: {
        ...prev[currentInputName],
        [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
      },
    }));
  };

  //reset form after change of currentInpuName
  useEffect(() => {
    formRef.current?.reset();
  }, [currentInputName]);

  return (
    <form ref={formRef} onChange={handleChange}>
      <Input
        name="placeholder"
        label="Placeholder"
        placeholder={formProperties[currentInputName]?.placeholder || ""}
        onChange={() => { }}
      />
      <Input
        name="label"
        label="Label"
        placeholder={formProperties[currentInputName]?.label || ""}
        onChange={() => { }}
      />
      <Input
        name="description"
        label="Description"
        placeholder={formProperties[currentInputName]?.description || ""}
        onChange={() => { }}
      />
      <Input
        name="error"
        label="Error"
        placeholder={formProperties[currentInputName]?.error || ""}
        onChange={() => { }}
      />
      <div className="variant-wrapper">
        <label htmlFor="select">Variant:</label>
        <select
          name="variant"
          id="select"
          value={formProperties[currentInputName]?.variant || "default"}
          onChange={() => { }}
        >
          <option value="default">Default</option>
          <option value="filled">Filled</option>
          <option value="unstyled">Unstyled</option>
        </select>
      </div>
      <div className="radius-wrapper">
        <label htmlFor="radius">Radius:</label>
        <input
          type="range"
          name="radius"
          id="radius"
          min="0"
          max="200"
          step="100"
          value={formProperties[currentInputName]?.radius || "0"}
          onChange={() => { }}
        />
        <div className="radius-labels">
          <span>sm</span>
          <span>md</span>
          <span>lg</span>
        </div>
      </div>
      <div className="size-wrapper">
        <label htmlFor="size">Size:</label>
        <input
          type="range"
          name="textSize"
          id="size"
          min="0"
          max="200"
          step="100"
          value={formProperties[currentInputName]?.textSize || "100"}
          onChange={() => { }}
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
        checked={formProperties[currentInputName]?.disabled || false}
        onChange={() => { }}
      />
      <Input
        name="withAsterisk"
        label="With asterisk"
        type="checkbox"
        checked={formProperties[currentInputName]?.withAsterisk || false}
        onChange={() => { }}
      />
    </form>
  );
};
