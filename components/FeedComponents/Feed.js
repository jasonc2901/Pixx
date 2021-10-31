import Posts from "../PostComponents/Posts"
import Stories from "../StoryComponents/Stories"

function Feed() {
    return (
        <main className='grid grid-cols-1 md:grid-cols-2 max-w-3xl
        xl:grid-cols-3 xl:max-w-6xl mx-auto'>
            <section className='col-span-2'>
                <Stories />
                <Posts />
            </section>

            <section>
                {/* Mini Profile */}
                {/* Suggestions */}
            </section>

        </main>
    )
}

export default Feed
