import { Card, CardSocial } from "@/components/Card";

const socials = [
  {
    id: 1,
    title: "Instagram",
    description: "@ramadhan.reflection",
    url: "https://instagram.com/ramadhan.reflection",
    icon: "RiInstagramFill",
  },
  {
    id: 2,
    title: "Tiktok",
    description: "@ramadhan.reflection",
    url: "https://tiktok.com/ramadhan.reflection",
    icon: "RiTiktokFill",
  },
];

export default function RR() {
  return (
    <main className="flex flex-col gap-8 w-full">
      <section className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl">Ramadhan Reflection</h1>
          <p className="text-sm text-sky-500 font-bold">#SadarPenuhHadirUtuh</p>
        </div>
      </section>
      {socials.map((item, i) => (
        <Card key={item.id} i={i} {...item} />
      ))}
    </main>
  );
}
