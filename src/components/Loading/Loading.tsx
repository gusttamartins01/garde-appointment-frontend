import { LoaderCircle } from "lucide-react";

export function Loading() {
  return (
    <div className="flex items-center justify-center gap-2 py-8">
      <LoaderCircle
        aria-hidden="true"
        className="size-4 animate-spin text-blue-400"
      />
      <p className="text-sm text-gray-400">Carregando horários...</p>
    </div>
  );
}
