import Link from "next/link";
import { getUserResults } from "@/lib/data/users";
import { Results } from "@/lib/types";
import { JSX } from "react";


export default function Summary() {

  const clientId = "24601";
  const userInfo = getUserResults(clientId);
  //{"builder": 34, "caretaker": 18, "challenger": 22, "connector": 65, "expert": 7,
  //  "innovator": 36, "leader": 98, "organizer": 65, "strategist": 81, "supporter": 16}

  const renderListItems = () => {
    if (userInfo != null) {
      const entries = Object.entries(userInfo);
      entries.sort((a, b) => {
        return b[1] - a[1];
      });

      return entries.map((entry) => (
        <div key={entry[0]} className="w-70 outline-1 outline-gray-200 m-2 p-3 shadow-lg">
          <div className="flex flex-row drop-shadow-xl/15">
            <div className="text-5xl m-2 font-serif text-gray-400">{entries.indexOf(entry) + 1}</div>
            <div className="m-3">
              <h1 className="text-xl">{entry[0].charAt(0).toUpperCase() + entry[0].slice(1)}</h1>
              <p>Score: {entry[1]}</p>
            </div>
          </div>
          <div className="w-full bg-neutral-quaternary rounded-full h-4 outline-1 outline-black">
            <div className="bg-blue-500 h-4 rounded-full" style={{ width: entry[1] + "%", backgroundColor: (entry[1] > 70 ? "#C6F6D2" : entry[1] < 30 ? "#F8D0D2" : "#FCEF96")}}></div>
          </div>
        </div>
      ));
    }
    
  };
  

  return (
    <div className="flex flex-col gap-10 pl-5 pr-5">
      <h1 className="text-6xl font-serif font-medium text-neutral-800">Your Results</h1>
      <div className="flex flex-row flex-wrap">
        {renderListItems()}
      </div>
      <div className="mx-auto">
        <Link
          href="/discover/breakdown"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#10131a] px-6 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:translate-y-[-2px] hover:bg-neutral-500"
        >
          Go to breakdown
        </Link>
      </div>
    </div>
  );
}
