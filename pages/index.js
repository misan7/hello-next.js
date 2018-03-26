import Link from "next/link";

const Index = () => (
  <div>
    {/* the style prop on next/link has no effect */}
    <Link href="/about">
      <a style={{ fontSize: 30 }}>About Page</a>
    </Link>
    <Link href="/about">
      <p>Hello Next.js</p>
    </Link>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
  </div>
);

export default Index;