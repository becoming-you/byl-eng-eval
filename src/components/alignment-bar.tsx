type AlignmentBar = {
  roleScore: number;
};
export default function AlignmentBar({ roleScore }: AlignmentBar) {
  const isPositive = roleScore > 50;
  const width = Math.abs(roleScore - 50);
  const leftPosition = isPositive ? 50 : roleScore;

  return (
    <div className="my-20 ">
      <div className="flex justify-between mb-2 text-neutral-800">
        <span>Low</span>
        <span className="relative -top-5">Neutral</span>
        <span>High</span>
      </div>
      <div className="relative h-24 w-full">
        <div className="absolute inset-0 bg-linear-to-r from-red-500 via-yellow-400 to-green-500 opacity-20 rounded-3xl" />
        <div className="absolute left-1/2 -top-5 -bottom-5 w-[1.5px] bg-stone-400 opacity-75 z-10" />

        <div
          className={`absolute top-0 h-full ${
            isPositive
              ? "rounded-tr-3xl rounded-br-3xl"
              : "rounded-tl-3xl rounded-bl-3xl"
          } opacity-50 transition-all duration-700 ease-out bg-linear-to-r from-red-500 via-yellow-400 to-green-500`}
          style={{
            left: `${leftPosition}%`,
            width: `${width}%`,
            backgroundSize: "200% 100%",
            backgroundPosition: isPositive ? "right center" : "left center",
          }}
        >
          <span
            className={`w-full px-4 text-6xl font-serif tracking-tighter text-white transition-opacity duration-300 absolute top-1/2 -translate-y-1/2 ${
              width < 12 ? "opacity-0" : "opacity-100"
            } ${isPositive ? "text-right" : "text-left"}`}
          >
            {roleScore}
          </span>
        </div>
      </div>
    </div>
  );
}
