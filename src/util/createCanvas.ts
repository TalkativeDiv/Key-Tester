let PIXEL_RATIO = (() => {
  let ctx: any = document.createElement("canvas").getContext("2d"),
    dpr: any = window.devicePixelRatio || 1,
    bsr =
      ctx?.webkitBackingStorePixelRatio ||
      ctx?.mozBackingStorePixelRatio ||
      ctx?.msBackingStorePixelRatio ||
      ctx?.oBackingStorePixelRatio ||
      ctx?.backingStorePixelRatio ||
      1;

  return dpr / bsr;
})();

const createCanvas = (w: any, h: any) => {
  let ratio = PIXEL_RATIO;
  let can = document.createElement("canvas");
  can.width = w * ratio;
  can.height = h * ratio;
  can.style.width = w + "px";
  can.style.height = h + "px";
  can.getContext("2d")?.setTransform(ratio, 0, 0, ratio, 0, 0);
  return can;
};

export default createCanvas;
