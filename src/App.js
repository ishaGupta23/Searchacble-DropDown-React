import "./styles.css";
import Select from "react-select";

export default function App() {
  const options = [
    { value: "milk", label: "milk" },
    { value: "chocholate", label: "chocholate" },
    { value: "cookies", label: "cookies" }
  ];
  return (
    <div style={{ margin: "20", width: 300 }}>
      <Select
        options={options}
        isMulti
        isSearchable
        noOptionsMessage={() => "no stack found"}
      />
    </div>
  );
}
