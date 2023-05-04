import Button from "./Button";
import Card from "./Card";

export default function componentsOverride(theme) {
  return Object.assign(Button(theme), Card(theme));
}
