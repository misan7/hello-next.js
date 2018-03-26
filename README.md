# hello-next.js

To start, create a sample project by running the following commands:

```
mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
mkdir pages
```

Then open the "package.json" in the hello-next directory and add the following NPM script.

```
{
  "scripts": {
    "dev": "next"
  }
}
```
Now everything is ready. Run the following command to start the dev server:

```
npm run dev
```

Create a file named pages/index.js and add the following content:

```
const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
)

export default Index
```

Visit http://localhost:3000