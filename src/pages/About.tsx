import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">About</h1>
        <p className="text-muted-foreground">
          Modern React starter template information
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
            <CardDescription>
              Production-ready technologies for modern web development
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">⚡ Vite</Badge>
              <Badge variant="outline">⚛️ React 19</Badge>
              <Badge variant="outline">📘 TypeScript 5.8</Badge>
              <Badge variant="outline">🎨 Tailwind CSS v4</Badge>
              <Badge variant="outline">🧩 shadcn/ui</Badge>
              <Badge variant="outline">🚦 React Router v7</Badge>
              <Badge variant="outline">📊 TanStack Query</Badge>
              <Badge variant="outline">🐻 Zustand</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
            <CardDescription>
              Everything you need to start building amazing applications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm space-y-1">
              <p>✅ Modern TypeScript configuration</p>
              <p>✅ Responsive sidebar navigation</p>
              <p>✅ Dark theme ready</p>
              <p>✅ Component library integrated</p>
              <p>✅ State management setup</p>
              <p>✅ Production-ready build</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>Get up and running in minutes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm font-mono bg-secondary p-4 rounded">
            <p>bun install</p>
            <p>bun run dev</p>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Ready to extend with authentication, database, and more!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
