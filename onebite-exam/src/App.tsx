import { toast } from "sonner";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/sonner";
import { Textarea } from "./components/ui/textarea";
import { cn } from "./lib/utils";

function App() {
  const isActive = true;

  return (
    <div className="p-5">
      <Toaster />

      <Textarea />

      <Input placeholder="입력해주세요" />

      <Button
        onClick={() => {
          toast("토스트 메세지", {
            position: "top-center"
          });
        }}
      >
        딸깍
      </Button>
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
