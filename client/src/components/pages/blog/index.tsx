import BlogCart from "../../organisms/BlogArticle";

const Blog = () => {
    return (
        <div>
            <main className="mt-44">
                <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
                    <BlogCart 
                        title="Hello world"
                        body="Lorem ipsum sit dolor amet"
                        pubDate={new Date()}
                        key={1}
                    />
                    <BlogCart 
                        title="Hello world"
                        body="Lorem ipsum sit dolor amet"
                        pubDate={new Date()}
                        key={1}
                    />
                    <BlogCart 
                        title="Hello world"
                        body="Lorem ipsum sit dolor amet"
                        pubDate={new Date()}
                        key={1}
                    />
                    <BlogCart 
                        title="Hello world"
                        body="Lorem ipsum sit dolor amet"
                        pubDate={new Date()}
                        key={1}
                    />
                </div>
            </main>
        </div>
    )
};

export default Blog;
