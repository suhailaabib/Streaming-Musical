
const readline = require('readline')

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})

let musicas = []
let artistaMaisAntigo = []
let ano = []

exibirMenu()

function exibirMenu(){
       console.log(`
    Menu:
      1. Inserir músicas
      2. Músicas por albuns
      3. editar as músicas
      4. Artista mais antigo
      5. Famosas
      6. Sair
    `)

    rl.question('Escolha uma opção: ', (opcao) => {

        switch(opcao){
            case '1':
                inserirMusicas()
            break
            case '2':
                musicasAlbum()
            break
            case'3':
                editarMusicas()
            break
            case'4':
               artistaAntigo()
            break
            case '5':
                famosas()
            break
            case '6':
                rl.close()
            break

            default:
                console.log('Opção inválida, tente novamente.')

        exibirMenu()
            break
        }
    })
}

function inserirMusicas() {

    rl.question('Digite o nome da música: ', (nome) => {
    rl.question('Digite o nome do artista: ', (artista) => {
    rl.question('Digite o gênero da música: ', (genero) => {
    rl.question('Digite o ano de lançamento:', (ano) => {
    rl.question('Digite o album da música: ', (album) => {
  
        musicas.push({ nome: nome, artista: artista, genero: genero, anoDeLancamento: parseInt (ano), album: album})
    
    console.log('Música integrada com sucesso!')
 
     exibirMenu()

    }) 
    })
    })
    })
})
}

function musicasAlbum(){
    


}

function editarMusicas() {

        if(musicas.length == 0){
           console.log('Nada cadastrado')
       exibirMenu()
        }else{
           console.log(musicas)
   
           musicas.forEach((index, ) => {
               console.log(`${index + 1} . ${musicas}`)
   
   
       rl.question('Digite a música que deseja editar: ', (opcao) => {
        if(opcao > 0 && opcao <= musicas.length){
   
   
       rl.question('Digite o novo nome da música: ', (nome) => {
       rl.question('Digite o novo nome do cantor: ', (cantor) => {
       rl.question('Digite o novo gênero da música: ', (genero) => {
       rl.question('Digite o ano de lançamento:', (ano) => {
       rl.question('Digite o album da música: ', (album) => {
          
           
        musicas[opcao -1] = {
          nome,
          cantor,
          genero,
          ano,
          album
   
        }
          console.log('Editado com sucesso!')
       exibirMenu()
       
       })
       })
       })
       })
       })
 
       }else{
           console.log('Número inválido, tente novamente.')
       exibirMenu()
       })
       })let artista = []
      }rl.question('Digite o ano de lançamento:', (ano) => {
        rl.question('Digite o album da música: ', (album) => {
      
   }

})
)}

function artistaAntigo(){

	artistaMaisAntigo = ano [0]

	for( let i=0; i< artista.length; i++){
		
     if(artistaMaisAntigo [i].ano > artistaMaisAntigo.ano){

		artistaMaisAntigo = artista [i]    
     }
    
	}
	console.log(artistaMaisAntigo)
	exibirMenu()
}


/*function famosas(){
 
    array = [mais escutadas]


}*/