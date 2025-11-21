// Simple card component without complex dependencies
export function Card({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={`bg-white border rounded-lg ${className}`}
      {...props}
    />
  );
}
