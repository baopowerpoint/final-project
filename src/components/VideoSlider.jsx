import * as React from "react";
import { useState } from "react";

export default function VideoSlider() {
  const [value, setValue] = useState(0);
  console.log(value);
  return (
    <div class="relative pt-1">
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        type="range"
        class="
      form-range
     
      w-full
      h-6
      p-0
      bg-transparent
      focus:outline-none focus:ring-0 
    "
      />
    </div>
  );
}
