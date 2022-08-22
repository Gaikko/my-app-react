function PessoaStructure({name, idade, profissao, foto}) {
    return (
        <div>
            <img src={foto} alt={name}/>
            <p>Nome: {name}</p>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default PessoaStructure