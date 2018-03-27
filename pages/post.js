import Layout from "../comps/MyLayout.js";

const Content = props => (
  <div>
    {/* 
        - Every page will get a prop called “URL” which has some details related to the current URL.
        - In this case, we are using the “query” object, which has the query string params.
        - Therefore, we get the title with props.url.query.title. 
    */}
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
);

export default props => (
  <Layout>
    <Content url={props.url} />
  </Layout>
);


{/* 
    export default (props) => (
        <Layout>
            // To pass all props
            <Content {...props}/>
        </Layout>
    ); 
*/}
