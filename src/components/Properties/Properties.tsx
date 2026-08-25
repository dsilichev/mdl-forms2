import { Input } from "../../components";
import "./Properties.css";
import type * as InputTypes from "../Input/Input.types";
import type { FormProps } from "../Signup";

const RADIUS_BY_RANGE: Record<string, InputTypes.InputRadius> = {
  "0": "sm",
  "100": "md",
  "200": "lg",
};

const RANGE_BY_RADIUS: Record<InputTypes.InputRadius, string> = {
  sm: "0",
  md: "100",
  lg: "200",
};

const SIZE_BY_RANGE: Record<string, InputTypes.InputSize> = {
  "0": "sm",
  "100": "md",
  "200": "lg",
};

const RANGE_BY_SIZE: Record<InputTypes.InputSize, string> = {
  sm: "0",
  md: "100",
  lg: "200",
};

export const Properties = ({
  formProperties,
  setFormProperties,
  currentInputName,
}: {
  formProperties: FormProps;
  setFormProperties: React.Dispatch<React.SetStateAction<FormProps>>;
  currentInputName: keyof FormProps;
}) => {
  const current = formProperties[currentInputName];

  const setProp = (name: string, value: string | boolean) => {
    setFormProperties((prev) => ({
      ...prev,
      [currentInputName]: {
        ...prev[currentInputName],
        [name]: value,
      },
    }));
  };

  return (
    <form>
      <p className="properties-target">
        Editing: <strong>{String(currentInputName)}</strong>
      </p>
      <Input
        name="placeholder"
        label="Placeholder"
        placeholder="Your placeholder"
        value={current?.placeholder ?? ""}
        onChange={(e) => setProp("placeholder", e.target.value)}
      />
      <Input
        name="label"
        label="Label"
        placeholder="Your label"
        value={current?.label ?? ""}
        onChange={(e) => setProp("label", e.target.value)}
      />
      <Input
        name="description"
        label="Description"
        placeholder="Your description"
        value={current?.description ?? ""}
        onChange={(e) => setProp("description", e.target.value)}
      />
      <Input
        name="error"
        label="Error"
        placeholder="Your error message"
        value={current?.error ?? ""}
        onChange={(e) => setProp("error", e.target.value)}
      />
      <div className="variant-wrapper">
        <label htmlFor="variant">Variant:</label>
        <select
          name="variant"
          id="variant"
          value={current?.variant ?? "default"}
          onChange={(e) => setProp("variant", e.target.value)}
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
          value={RANGE_BY_RADIUS[current?.radius ?? "sm"]}
          onChange={(e) => setProp("radius", RADIUS_BY_RANGE[e.target.value])}
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
          value={RANGE_BY_SIZE[current?.textSize ?? "md"]}
          onChange={(e) => setProp("textSize", SIZE_BY_RANGE[e.target.value])}
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
        checked={current?.disabled ?? false}
        onChange={(e) => setProp("disabled", e.target.checked)}
      />
      <Input
        name="withAsterisk"
        label="With asterisk"
        type="checkbox"
        checked={current?.withAsterisk ?? false}
        onChange={(e) => setProp("withAsterisk", e.target.checked)}
      />
    </form>
  );
};
