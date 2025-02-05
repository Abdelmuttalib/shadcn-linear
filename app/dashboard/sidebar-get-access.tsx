import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SidebarOptInForm() {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="grid gap-2.5 p-4">
        <Button
          className="w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
          size="sm"
          type="button"
        >
          Get Carbon Style
        </Button>
      </CardContent>
    </Card>
  );
}
