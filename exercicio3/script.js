const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
const copiapokemon1 = {...pokemon1,
    nome:'squirtle',
    tipo:'água'}
pokemon1.ataques = []
    pokemon1.ataques.push({
        nome: 'Investida',
        dano: 40,
        tipo: 'Normal',
        precisao: 100
    });
copiapokemon1.ataques = {...pokemon1.ataques
        
};
pokemon1.ataques2 = [{ nome:'folha navalha',
dano: 45,
tipo: 'grama',
precisao:100

}];

copiapokemon1.ataques2 = [{
    nome:'Jato de água',
dano: 40,
tipo: 'água',
precisao:100

}]
console.log(pokemon1)
console.log(copiapokemon1)


// nome: 'folha navalha',
//         dano: 45,
//         tipo: 'Grama',
//         precisao: 100
