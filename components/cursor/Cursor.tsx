import CursorSVG from "@/public/assets/CursorSVG";

type Props ={
    color: string;
    x: number;
    y: number;
    message: string;
}

const Cursor = ({ color, x, y, message }: Props) => {
  return (
    <div className="pointer-events-non absolute top-0 left-0" style={{ transform: `translateX(${x}px) translateY(${y}px)`}}>
      <CursorSVG color="={color}" />

      {/* MESSAGE */}
    </div>
  )
}

export default Cursor
