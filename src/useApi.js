const data = [
    {id:'0', url:require('../src/asset/img/default.png'), name:'Tênis', price:100.00, discount:0, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'1', url:require('../src/asset/img/default.png'), name:'Bermuda', price:100.00, discount:0, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'2', url:require('../src/asset/img/default.png'), name:'Sapato', price:120.00, discount:1.5, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'3', url:require('../src/asset/img/default.png'), name:'Calça', price:110.00, discount:10, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'4', url:require('../src/asset/img/default.png'), name:'Camiseta', price:200.00, discount:0, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'5', url:require('../src/asset/img/default.png'), name:'Camisa', price:300.00, discount:50, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'6', url:require('../src/asset/img/default.png'), name:'Bicicleta', price:111.00, discount:0, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'7', url:require('../src/asset/img/default.png'), name:'Pneu', price:100.00, discount:0, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'8', url:require('../src/asset/img/default.png'), name:'Smartphone', price:123.00, discount:0, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'9', url:require('../src/asset/img/default.png'), name:'Almoço', price:21.00, discount:0, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'10', url:require('../src/asset/img/default.png'), name:'Vingadores Guerra Infinita', price:222.00, discount:20, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'11', url:require('../src/asset/img/default.png'), name:'Maçã', price:5.00, discount:0, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'12', url:require('../src/asset/img/default.png'), name:'Banana', price:7.00, discount:0, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:'13', url:require('../src/asset/img/default.png'), name:'Ração', price:40.00, discount:0, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
]
const evaluations = [
    {id:'0', comment:'Ótimo produto!!', nota:5},
    {id:'0', comment:'Ótimo produto!!', nota:5},
    {id:'0', comment:'Ótimo produto!!', nota:5},
    {id:'1', comment:'Ótimo produto!!', nota:5},
    {id:'1', comment:'Ótimo produto!!', nota:5},
    {id:'4', comment:'Ótimo produto!!', nota:4},
    {id:'4', comment:'Ótimo produto!!', nota:4},
    {id:'2', comment:'Ótimo produto!!', nota:5},
    {id:'2', comment:'Ótimo produto!!', nota:3},
    {id:'2', comment:'Ótimo produto!!', nota:4},
    {id:'3', comment:'Ótimo produto!!', nota:5},
    {id:'3', comment:'Ótimo produto!!', nota:3},
    {id:'8', comment:'Ótimo produto!!', nota:1},
    {id:'2', comment:'Ótimo produto!!', nota:2}
]

export default () => ({

    getItens:(section, page) => {
        if(page == 1){
            return data.slice(0,10);
        }else{
            return data.slice(10, 13);
        }
    },
    findItem:(name) => {
        let found = [];
        found = data.filter(item => item.name.indexOf(name) > -1);
        if(name.length < 2){
            return data.slice(0,10);
        }
        return found;
    },
    getNota:(id) => {
        let found = [];
        found = evaluations.filter(item=>item.id == id);
        if(found.length > 0){
            let sum = 0;
            found.map((item) => {
                sum = sum+item.nota
            });
            return sum/found.length;
        }
        return 0;
    },
    getComments:(id) => {
        return evaluations.filter(item => item.id == id);
    }

})