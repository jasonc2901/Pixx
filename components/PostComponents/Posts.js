import Post from "./Post"


const posts = [
    {
        'id': '123',
        'username': 'jasoncaughers',
        'userImg': 'https://jasoncaughers.co.uk/static/media/me.e26d472c.jpg',
        'post': 'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/06/Pikachu-color-model-publicity-cel.jpg',
        'caption': 'First post on Pixx!!!'
    },
    {
        'id': '456',
        'username': 'peeka',
        'userImg': 'https://jasoncaughers.co.uk/static/media/me.e26d472c.jpg',
        'post': 'https://haieng.com/wp-content/uploads/2017/10/test-image-500x500.jpg',
        'caption': 'Second post on Pixx!!!'
    }
];
function Posts() {
    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} id={post.id}
                    username={post.username} userImg={post.userImg}
                    post={post.post} caption={post.caption} />
            ))}
        </div>
    )
}

export default Posts
