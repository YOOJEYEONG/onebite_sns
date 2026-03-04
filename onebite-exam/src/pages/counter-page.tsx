import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/count";

export default function CounterPage() {
  const { count, increase, decrease } = useCountStore();

  return (
    <div>
      <h1 className="text-2xl font-bold">Counter</h1>
      <h2>{count}</h2>
      <Button className="text-2xl" onClick={() => increase()}>
        +
      </Button>
      <Button className="text-2xl" onClick={() => decrease()}>
        -
      </Button>
    </div>
  );
}
