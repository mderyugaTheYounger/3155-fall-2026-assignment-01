export type PostItem = {
  id: number;
  title: string;
  body: string;
};

export async function fetchPostBatch(postIds: number[]): Promise<PostItem[]> {
  return Promise.all(postIds.map(async (id) =>{ 
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!data){
      output.log(`Error with item id ${id}`);
    }
    return(await data.json()) as PostItem;
  }));
}
