import Layout from "../comps/MyLayout.js";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-next.js" title="Hello Next.js" />
      <PostLink id="Learn-next.js"title="Learn Next.js" />
      <PostLink id="Deploy-apps"title="Deploy apps" />
      <PostLink id="Dynamic-pages!"title="Dynamic Pages!" />
    </ul>
  </Layout>
);
