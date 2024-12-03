const cats = [
    {
      image: "./img2/chai1.jpeg",
      title: 'Ройбуш',
      description: "Это напиток без кофеина, чуть сладковатый и очень травянистый на вкус. ",
      price: 2500
    },
    {
      image: "./img2/chai2.jpeg",
      title: 'Мате',
      description: "Напиток из листьев парагвайского дуба — травянистый, плотный, густой, с высоким содержанием матеина ",
      price: 3000
    },
    {
        image: "./img2/chai3.jpeg",
        title: 'Гречишный',
        description: "Вкус ее более нежный и мягкий, чем у гречки «на кашу».Родом этот напиток из Китая, и ценят его больше всего за пользу для организма.  ",
        price: 3000
      },
      {
        image: "./img2/chai4.jpeg",
        title: 'Фруктово-ягодные',
        description: "А здесь в основе напитка подсушенные цитрусовые, яблоки, ягоды (от барбариса до клубники), сублимированная слива",
        price: 3000
      },
      {
        image: "./img2/chai5.jpeg",
        title: 'Травяные ',
        description: "Цветки ромашки и зверобоя, тимьян, душица, зеленый базилик, листья малины и смородины — какие только травы не годятся для напитка!",
        price: 3000
      }, {
        image: "./img2/chai6.jpeg",
        title: 'Имбирные',
        description: "Часто основу для отвара составляет корень имбиря с добавлением трав и ягод. Острый, пряный, ароматный напиток с противовоспалительным эффектом. ",
        price: 3000
      },
 
  ];


  let catalog_main_block = document.querySelector('.catalog_main_block')

  async function getcats() {

 
    for (key in cats) {

        catalog_main_block.innerHTML += `
                    <div class="card card-cat" style="width: 18rem;">
                <img src=" ${cats[key].image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title"> ${cats[key].title}</h5>
                  <p class="card-text"> ${cats[key].description}</p>
                  <a href="/contact.html" class="btn btn-primary">Купить</a>
                </div>
              </div>
        `
                console.log(cats[key]);
    }


}
getcats()


console.log('object');