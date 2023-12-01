import express, { Request, Response, json } from 'express';
import { PostBlogRequestBody } from './types';
import { GetBlogs } from './db/client';

const app = express()
const port = 3000

app.use(json());

app.get('/blog', async (req: Request, res: Response) => {
  const blogs = await GetBlogs();
  res.json(blogs);
})

//POST /blog
/*

{
  "url": "https://www.blogg.se"
}

*/
// app.post('/blog', async (req: Request, res: Response) => {
//   const body = req.body as PostBlogRequestBody;

//   //Lägg in i databasen
//   await PostBlog()

//   console.log('test', req.body);
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})