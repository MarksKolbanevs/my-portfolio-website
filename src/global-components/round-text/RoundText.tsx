import "./index.scss";

export default function RoundText(props: { text: string,style?:React.CSSProperties,scalingFactor:number }) {
  const circleSize = 100; // Change this value to adjust the size of the circle
  const scalingFactor = props.scalingFactor; // Change this value to adjust the spacing between letters

  const circleStyle: React.CSSProperties = {
    width: circleSize,
    height: circleSize,
    position: "absolute",
    animation: "spin 30s infinite linear",
    ...props.style
  };

  const characters = Array.from(props.text); // Convert string to an array of characters

  return (
    <div style={circleStyle}>
      {characters.map((letter, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            top: `${50 +(circleSize / 2 - circleSize * scalingFactor / 2) * Math.sin((2 * Math.PI * index) / characters.length)}%`,
            left: `${50 +(circleSize / 2 - circleSize * scalingFactor / 2) * Math.cos((2 * Math.PI * index) / characters.length)}%`,
            transform: `translate(-50%, -50%) rotate(${(360 / characters.length) * index}deg)`,
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
