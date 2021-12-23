/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo } from "react";
import { Handle } from "react-flow-renderer";

export default memo(({ data }) => {
    return (
        <div>
            <Handle type="source" position="top" style={{ background: "#555" }} isConnectable={true} />
            <div className="tree-node has-text-weight-semibold is-uppercase">{ data.code } { data.number }</div>
            <Handle type="target" position="bottom" style={{ background: "#555" }} isConnectable={true} />
        </div>
    );
});
