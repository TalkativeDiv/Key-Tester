import { checkType } from "../logic";
import createCanvas from "../util/createCanvas";
import { size } from "../constants/";

let w = size[0];
let h = size[1];
let Canvas = () => {
  const cvs: any = createCanvas(w, h);
  const ctx = cvs.getContext("2d");
  let scale = window.devicePixelRatio;
  ctx.scale(scale, scale);
  ctx.font = "100px Inter";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  let [x, y] = [w / 2, h / 2];
  window.addEventListener("keydown", (e: any) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillText(checkType(e.key), x, y);
  });
  window.addEventListener("mouseup", () => {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.fillText("it is a mouse click", x, y);
  });
  document
    .querySelector<HTMLDivElement>('[data-id="canvas-container"]')
    ?.appendChild(cvs);
};

export default Canvas;
