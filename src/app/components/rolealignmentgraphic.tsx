export default function RoleAlignmentGraphic({score} : {
    score: number
}) {
    let widthClass : string = score + "%";

    return (
    <div className="m-5 pt-3">
        <div className="scale-markers-container m-auto w-[100%]">
            <div className="scale-fill" style={{ width: widthClass }} id="scale-fill"></div>
            <div className="marker left-[0%]">Low</div>
            <div className="marker left-[50%]">Neutral</div>
            <div className="marker left-[100%]">High</div>
            <h3 className="text-4xl absolute -translate-y-15">{score}</h3>
        </div>
        

    </div>)
}