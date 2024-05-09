import Link from "next/link"

const Header = () => {
    return (
        <div className="flex flex-row w-screen m-0 px-6 py-8">
            <h1 className="basis-1/2 text-white text-3xl">ЕГЭ тренажёр</h1>
            <ul className="flex basis-1/2">
                <Link href="/" className="flex-initial text-center m-auto py-2 w-44 h-10 rounded-md hover:bg-secondary">Lorem</Link>
                <Link href="/" className="flex-initial text-center m-auto py-2 w-44 h-10 rounded-md hover:bg-secondary">Lorem</Link>
                <Link href="/login" className="flex-initial text-center m-auto py-2 w-44 h-10 rounded-md bg-light">Войти</Link>
            </ul>
        </div>
    )
}

export default Header