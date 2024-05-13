import Link from "next/link"

const Header = () => {
    return (
        <div className="flex flex-row w-screen m-0 px-6 py-8">
            <h1 className="basis-1/2 text-white text-3xl">ЕГЭ тренажёр</h1>
            <ul className="flex basis-2/3">
                <Link href="/" className="hidden md:block flex-initial text-center m-auto py-2 h-10 rounded-md bg-light hover:bg-secondary lg:w-44 md:w-32">Lorem</Link>
                <Link href="/courses" className="hidden md:block flex-initial text-center m-auto py-2 h-10 rounded-md bg-light hover:bg-secondary lg:w-44 md:w-32">Тренажёры</Link>
                <Link href="/login" className="hidden md:block flex-initial text-center m-auto py-2 h-10 rounded-md bg-light lg:w-44 md:w-32">Войти</Link>
            </ul>
        </div>
    )
}

export default Header