import { useDecreaseCount, useIncreaseCount } from "@/store/count";
import { Button } from "../ui/button";

export default function Controller() {
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button className="text-2xl" onClick={increase}>
        +
      </Button>
      <Button className="text-2xl" onClick={decrease}>
        -
      </Button>
    </div>
  );
}
