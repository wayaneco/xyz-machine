import React from "react";

import InputFIeld from "../../components/Input";
import Button from "../../components/Button";

import { LetterGenerator } from "../../utils/letterGenerator";
import { validateInput } from "../../utils/validation";
import { clearOutputContainer } from "../../utils/removeOutputChilds";

import "./style.css";

export default function Main() {
  const [field, setField] = React.useState({
    letters: "",
    size: "",
    direction: "",
  });
  const [errors, setErrors] = React.useState({});

  const clearError = (name) => {
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <div id="main">
      <div id="main-title">XYZ Machine</div>
      <div className="flex-area">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (
              validateInput({
                letters: field["letters"],
                size: field["size"],
                direction: field["direction"],
                setErrors,
              })
            ) {
              return;
            }
            clearOutputContainer();

            const generator = new LetterGenerator(
              field["letters"],
              field["size"],
              field["direction"]
            );
            generator.generateLetters();
          }}
        >
          <div className="container">
            <InputFIeld
              label="Letters"
              id="letters"
              value={field["letters"]}
              onChange={setField}
              placeholder="Enter Letters (XYZ) Only"
              error={errors["letters"]}
              clearError={clearError}
            />
            <InputFIeld
              label="Size"
              id="size"
              value={field["size"]}
              onChange={setField}
              placeholder="Enter Odd numbers (3,5,7)"
              error={errors["size"]}
              clearError={clearError}
            />
            <InputFIeld
              label="Direction"
              id="direction"
              value={field["direction"]}
              onChange={setField}
              placeholder="Enter Direction (Horizontal, Vertical)"
              error={errors["direction"]}
              clearError={clearError}
            />
            <div className="btn-container">
              <Button type="submit">GENERATE</Button>
              <Button
                type="button"
                onClick={() => {
                  setField({
                    letters: "",
                    size: "",
                    direction: "",
                  });
                  setErrors({
                    letters: "",
                    size: "",
                    direction: "",
                  });
                  clearOutputContainer();
                }}
              >
                RESET
              </Button>
            </div>
          </div>
        </form>
        <div className="output-container"></div>
      </div>
    </div>
  );
}
