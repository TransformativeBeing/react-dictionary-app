import React from "react";
import { SpinnerDotted } from "spinners-react";

export default function Loading({ size, color }) {
  return (
    <div className="Loading">
      <SpinnerDotted size={size} color={color} />
    </div>
  );
}
