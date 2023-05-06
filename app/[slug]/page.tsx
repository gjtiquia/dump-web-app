interface AppParams {
    slug: string
}

export default function App({ params }: { params: AppParams }) {
    return (
        <>
            <p>Hello {params.slug}!</p>
        </>
    );
}