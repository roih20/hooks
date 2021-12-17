import CustomHooks from "./custom-hooks/CustomHooks";
import FormsBasics from "./forms/FormsBasics";
import Context from "./useContext/Context";
import UseEffectBasic from "./useEffect/UseEffectBasic";
import UseEffectFetchData from "./useEffect/UseEffectFetchData";
import Index from "./useReducer";
import UseStateArrayExample from "./useState/useStateArrayExample";
import UseStateCounterExample from "./useState/UseStateCounterExample";
import UseStateBasic from "./useState/useStateExample1";
import UseStateObjectExample from "./useState/UseStateObjectExample";

function App() {
  return (
    <div>
      <FormsBasics />
      <Index />
      <Context />
      <CustomHooks />
    </div>
  );
}

export default App;
