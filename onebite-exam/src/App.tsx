import "./App.css";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";

function App() {
  const isActive = true;

  return (
    <div>
      <Button>딸깍</Button>
      <Button variant={"destructive"}>딸깍</Button>
      <Button variant={"ghost"}>딸깍</Button>
      <Button variant={"link"}>딸깍</Button>
      <Button variant={"outline"}>딸깍</Button>
      <Button variant={"secondary"}>딸깍</Button>

      <div className={cn(isActive ? "text-green-500" : "text-red-500")}>
        isActive
      </div>

      <div className="text-primary">Primary</div>
      <div className="text-muted">Muted</div>
      <div className="text-destructive">Destructive</div>
    </div>
  );
}

export default App;
