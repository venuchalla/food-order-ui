import PropType from "prop-types";

import s from "./Test";

const PropTests = (props) => {
  const dis = props.b.map((i, index) => {
    return <div id={index}>{i}</div>;
  });

  return (
    <div>
      <h1>
        PropTests : {props.a.name}
        {dis}
      </h1>
    </div>
  );
};

PropTests.PropType = {
  a: PropType.instanceOf(s),
  b: PropType.array,
};

export default PropTests;
