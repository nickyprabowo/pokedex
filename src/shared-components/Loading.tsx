import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const Loading = () => {
    return (
      <Dimmer active inverted page>
        <Loader inverted content="Loading" size="big" />
      </Dimmer>
    );
};

export default Loading;