type CommentSummary = {
  postId: number;
  id: number;
  commenterEmail: string;
};

export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  //Step 1
  const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`);
  //Step 2 + 3
  const parsedComments = comments.map((comment) => comment.json() as CommentSummary).filter(comment.commenterEmail.endsWith('.org'));

  //Didn't fnish
  return "whoops";
}
