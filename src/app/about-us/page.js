import label from "@/libs/english.json";
export default function About() {
  return (
    <div className="bg-red-500 text-white p-4">
      <h1 className="text-4xl font-bold">{label.about}</h1>
    </div>
  );
}
