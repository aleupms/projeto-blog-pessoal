function Navbar(){
    return(
        <>
            <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
                <div className="container flex justify-between text-lg mx-8">
                    blog pessoal
                    <div className='flex gap-4'>
                        postagens
                        temas
                        cadastrar tema
                        perfil
                        sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar