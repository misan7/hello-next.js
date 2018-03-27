import Layout from "../comps/MyLayout";

export default props => (
  <Layout>
    {/* 
        - Every page will get a prop called “URL” which has some details related to the current URL.
        - In this case, we are using the “query” object, which has the query string params.
        - Therefore, we get the title with props.url.query.title. 
    */}
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
);
