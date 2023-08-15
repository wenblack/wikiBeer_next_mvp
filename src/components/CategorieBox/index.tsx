interface CategorieProps {
    name: string
}
export function CategorieBox ({name}:CategorieProps){
    return(
        <>
            <a  href='#' className=' hover:opacity-80   hidden md:flex bg-redButton text-white rounded-full font-semibold px-8 h-12 items-center justify-center flex-grow'>
                <p> {name}</p>
            </a> 
            <a  href='#' className=' hover:opacity-80   flex md:hidden bg-redButton text-white rounded-full font-semibold px-4 h-12 items-center justify-center flex-grow'>
                <p>{name}</p>
            </a>
        </>
    )
}