import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { routines, timelines, socials } from "@/data/rr";
import { siteMetadata } from "@/data/siteMetadata";
import { formatDate, cn } from "@/libs/helpers";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ramadhan Reflection",
  description:
    "Ramadhan Reflection merujuk pada kegiatan memikirkan kembali atau merefleksi pengalaman",
  openGraph: {
    type: "website",
    locale: siteMetadata.language,
    url: siteMetadata.siteUrl,
    title: "Ramadhan Reflection",
    description:
      "Ramadhan Reflection merujuk pada kegiatan memikirkan kembali atau merefleksi pengalaman",
    images: [
      {
        url: "https://cdn.kita.blue/rafaar/rr.png",
        width: 1200,
      },
    ],
  },
  icons: [
    {
      url: "https://cdn.kita.blue/rafaar/rr-logo.png",
      rel: "icon",
    },
    {
      url: "https://cdn.kita.blue/rafaar/rr-logo.png",
      rel: "shortcut icon",
    },
  ],
};

export default function RR() {
  const today = new Date();

  const sortedTimelines = timelines.slice().sort((a, b) => {
    const dateA = new Date(a.date["start"] || a.date);
    const dateB = new Date(b.date["start"] || b.date);
    const isPastA = dateA < today;
    const isPastB = dateB < today;

    // Sort by whether the date is in the past
    if (isPastA !== isPastB) {
      return isPastA ? 1 : -1;
    }

    // If both dates are in the past or both are in the future, sort by proximity to today
    const diffA = Math.abs(today.getTime() - dateA.getTime());
    const diffB = Math.abs(today.getTime() - dateB.getTime());
    return diffA - diffB;
  });


  const isToday = (date) => {
    const compareDate = new Date(date);
    return compareDate.toDateString() === today.toDateString();
  };

  return (
    <>
      <Header cover="https://cdn.kita.blue/rafaar/rr.png" />
      <main className="flex w-full flex-col gap-8">
        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">Ramadhan Reflection</h1>
            <p className="text-sm font-bold text-[#2f65b0]">
              #SadarPenuhHadirUtuh
            </p>
          </div>
        </section>
        {socials.map((item, i) => (
          <Card i={i} key={item.id} {...item} />
        ))}

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Jadwal Rutinitas</h2>
          {routines.map(({ title, time }, i) => (
            <div
              key={i}
              className="flex flex-1 flex-col justify-between gap-2 rounded-2xl border border-white/20 bg-black p-3"
            >
              <h1 className="font-semibold">{title}</h1>
              <span className="text-sm text-primary-400">{time}</span>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Jadwal Timeline</h2>
          {sortedTimelines.map(({ title, date, place, theme, speaker }, i) => {
            const isClosestToToday = i === 0;
            const isPast = new Date(date["end"] || date) < new Date();

            return (
              <div
                key={i}
                className={cn(
                  "flex flex-1 flex-col justify-between gap-4 rounded-2xl border border-white/20 bg-black p-3",
                  {
                    "bg-[#2f65b0]": isClosestToToday,
                    "select-none bg-primary-800 opacity-50": isPast,
                  },
                )}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <h1 className="font-semibold">{title}</h1>
                    {isToday(date["start"] ? date["start"] : date) && (
                      <span className="rounded-full bg-primary-200 p-2 text-xs font-bold text-[#2f65b0]">
                        Hari Ini
                      </span>
                    )}
                    {isPast && (
                      <span className="rounded-full bg-gray-600 p-2 text-xs font-bold text-white">
                        Usai
                      </span>
                    )}
                  </div>
                  {theme && (
                    <span className="text-sm font-semibold text-primary-400">
                      {theme}
                    </span>
                  )}
                  {speaker && (
                    <span className="text-xs text-primary-400">{speaker}</span>
                  )}
                </div>
                <div
                  className={cn("flex flex-col gap-1 text-sm text-primary-400", {
                    "text-primary-200": isClosestToToday,
                  })}
                >
                  <span>
                    {date["start"]
                      ? `${formatDate(date["start"]).toString()} - ${formatDate(date["end"]).toString()}`
                      : formatDate(date as Date)}
                  </span>
                  <span>{place}</span>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}
