import { ShowcaseComponent } from "@/components/showcase-component";

export default function Showcase() {
  return (
    <div className="min-h-screen p-4">
      <main className="flex flex-col gap-8 pb-96">
        <ShowcaseComponent />
      </main>
    </div>
  );
}
