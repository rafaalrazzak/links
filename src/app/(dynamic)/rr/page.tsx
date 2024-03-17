import { Card } from "@/components/Card";
import { routines, timelines, socials } from "@/data/rr";
import { formatDate, cn } from "@/libs/helpers";

export default function RR() {
  const today = new Date().getTime();

  // Sort timelines based on the closest date to today
  const sortedTimelines = timelines.slice().sort((a, b) => {
    const diffA = Math.abs(
      today - new Date(a.date["start"] ? a.date["start"] : a.date).getTime(),
    );
    const diffB = Math.abs(
      today - new Date(b.date["start"] ? b.date["start"] : b.date).getTime(),
    );
    return diffA - diffB;
  });

  function isToday(date) {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  return (
    <main className="flex flex-col gap-8 w-full">
      <section className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl">Ramadhan Reflection</h1>
          <p className="text-sm font-bold">#SadarPenuhHadirUtuh</p>
        </div>
      </section>
      {socials.map((item) => (
        <Card key={item.id} {...item} />
      ))}

      <section className="flex flex-col gap-3">
        <h2 className="font-bold text-lg">Jadwal Rutinitas</h2>
        {routines.map(({ title, time }, i) => (
          <div
            key={i}
            className="flex flex-col flex-1 justify-between gap-2 bg-black rounded-2xl p-3 border border-white/20"
          >
            <h1 className="font-semibold">{title}</h1>
            <span className="text-sm text-primary-400">{time}</span>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-bold text-lg">Jadwal Timeline</h2>
        {sortedTimelines.map(({ title, date, place, theme, speaker }, i) => {
          const isClosestToToday = i === 0;
          return (
            <div
              key={i}
              className={cn(
                "flex flex-col flex-1 justify-between gap-4 bg-black rounded-2xl p-3 border border-white/20",
                { "bg-[#2f65b0]": isClosestToToday },
              )}
            >
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <h1 className="font-semibold">{title}</h1>
                  {isToday(date["start"] ? date["start"] : date) && (
                    <span className="rounded-full text-xs bg-primary-200 text-[#2f65b0] font-bold p-2">
                      Hari Ini
                    </span>
                  )}
                </div>
                {theme && <span className="font-semibold">{theme}</span>}
                {speaker && (
                  <span className="text-sm text-primary-200">{speaker}</span>
                )}
              </div>
              <div
                className={cn("text-sm text-primary-400 flex flex-col gap-1", {
                  "text-primary-200": isClosestToToday,
                })}
              >
                <span>
                  {date["start"]
                    ? `${formatDate(date["start"])} - ${formatDate(date["end"])}`
                    : formatDate(date)}
                </span>
                <span>{place}</span>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
