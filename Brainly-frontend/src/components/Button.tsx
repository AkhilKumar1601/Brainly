import { ReactElement } from "react";

interface ButtonProp {
  variant : "primary" | "secondary";
  text : string;
  icon : ReactElement
}

const variantClasses = {
  "primary" : "bg-purple-600 text-white",
  "secondary" : "bg-purple-200 text-purple-600",
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center"

export const Button = ({variant, text, icon} : ButtonProp) => {
  return <button className={variantClasses[variant] + " " + defaultStyles}>
    <div className="pr-2">
     {icon}
    </div>
    {text}
  </button>
}