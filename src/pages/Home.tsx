// src/pages/Home.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your modern React starter template
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              React 19
              <Badge variant="secondary">Latest</Badge>
            </CardTitle>
            <CardDescription>
              Modern JavaScript framework for building user interfaces
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Ready with latest features and performance improvements.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              TypeScript 5.8
              <Badge variant="secondary">Modern</Badge>
            </CardTitle>
            <CardDescription>
              Strongly typed JavaScript with erasableSyntaxOnly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Modern configuration with latest compiler options.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              shadcn/ui
              <Badge variant="secondary">Ready</Badge>
            </CardTitle>
            <CardDescription>
              Beautiful and accessible component library
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Pre-configured with Tailwind CSS and Radix UI.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
