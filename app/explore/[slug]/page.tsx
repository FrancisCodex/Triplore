export default function Page({ params }: { params: { slug: string } }) {
    return (
      <div>
        My Post: {params.slug}
        <h1>Explore Page Slug</h1>
        </div>

    )
      
  }