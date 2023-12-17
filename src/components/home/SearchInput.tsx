import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchInput() {
  return (
    <div className="flex w-full max-w-sm items-center justify-center space-x-2">
      <Input
        placeholder="Enter unique code..."
        className="placeholder:text-gray-400"
      />
      <Button type="submit">Reveal</Button>
    </div>
  );
}
