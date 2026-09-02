export type Circle = {
  kind: "circle";
  radius:number;
};

export type Rectangle = {
  kind: "rectangle";
  width:number;
  height:number;
};

export type Square = {
  kind: "square";
  sideLength:number;
};

export type Shape = Circle | Rectangle | Square;

export function calculateArea(shape: Shape): number {
  switch (shape.kind){

    case "circle":
      let r2 = shape.radius * shape.radius;
      return 3.14159*r2;
      break;
    case "rectangle":
      return shape.height*shape.width;
      break;
    case "square":
      return shape.sideLength * shape.sideLength;
      break;

  }
  return -1;
}
