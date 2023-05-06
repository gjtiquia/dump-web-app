import AppScreen from "./AppScreen";

interface AppParams {
    slug: string
}

export default function App({ params }: { params: AppParams }) {
    return (
        <AppScreen params={params} />
    );
}