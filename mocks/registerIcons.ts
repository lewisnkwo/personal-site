import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCopy } from "@fortawesome/free-solid-svg-icons";

export default function registerIcons() {
  library.add(faCopy, faCheckSquare);
}
