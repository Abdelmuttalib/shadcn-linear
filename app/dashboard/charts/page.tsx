import { Chart1, Chart2, Chart3 } from "@/components/charts";
import { Chart4, Chart5, Chart6, Chart7 } from "@/components/showcase";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Charts />
    </div>
  );
}

function Charts() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      <Chart2 />
      <Chart1 />
      <Chart3 />
      <Chart4 />
      <Chart5 />
      <Chart6 />
      <Chart7 />
    </div>
  );
}
