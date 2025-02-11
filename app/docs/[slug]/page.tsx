// app/docs/[slug]/page.tsx
import { readFile } from "fs/promises";
import path from "path";

interface Props {
  params: { slug: string };
}

export default async function CodePage({ params }: Props) {
  const filePath = path.join(
    process.cwd(),
    // "public",
    "code",
    "examples",
    "features",
    "features-1",
    // "features-1",
    // "code-examples",
    `${params.slug}.tsx`
  );
  let code = "";

  try {
    code = await readFile(filePath, "utf-8");
  } catch (error) {
    console.error("Failed to read file:", error);
    code = "File not found.";
  }

  return (
    <div>
      <h1>Code Example: {params.slug}</h1>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
