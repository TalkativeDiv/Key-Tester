import { createCanvas, checkType } from "../util/";
import { w, h } from "../constants/";

let Canvas = () => {
  const cvs: any = createCanvas(w, h);
  const ctx = cvs.getContext("2d");
  let scale = window.devicePixelRatio;
  ctx.scale(scale, scale);
  ctx.font = "100px Inter";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  window.addEventListener("keydown", (e: any) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillText(`it is a ${checkType(e.key)}`, w / 2, h / 2);
  });
  //window.addEventListener("mouseup", () => {
  //  ctx.clearRect(0, 0, cvs.width, cvs.height);
  //  ctx.fillText("it is a mouse click", x, y);
  //});
  document
    .querySelector<HTMLDivElement>('[data-id="canvas-container"]')
    ?.appendChild(cvs);
};

export default Canvas;
