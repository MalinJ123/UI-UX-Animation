import { useState } from "react";
import "./krock.css";

function Krock() {

const [toggleClass, setToggleClass] = useState(true)

  const morf = () => {
    const toggle = useState(true);
    const toggleClass = toggle ? 'toggled': ''
  }

  return (
    <>
      <div className="circle"></div>
      <div className="section">
        <div className="smash"></div>
      </div>
      <button className={toggleClass}> Morf</button>

    </>
  );
}
export default Krock;
