export const initialState = {
  mostraAlertAndamento: false, 
  andamentoPedido: {},
  enderecoUser: [
    {
        "city": "São Paulo",
        "complement": "71",
        "state": "SP",
        "street": "R. Afonso Braz",
        "neighbourhood": "Vila N. Conceição",
        "number": "177"
    }
  ], 
  cart: [{
    "restaurant": {
      "products": [
        {
          "id": "2wvQI3i8Zf2fMvkEq4Vo",
          "category": "Refeição",
          "description": "A melhor pedida é japonesa!",
          "price": 24.3,
          "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201808311212_sashi.png",
          "name": "Sashimi Shiromi"
        },
        {
          "id": "BmDOBMDVYDAomt7vQtuP",
          "category": "Refeição",
          "description": "A melhor pedida é japonesa!",
          "price": 52.7,
          "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201802031948_20717381.jpg",
          "name": "Tempura udon"
        },
      ],
      "id": "10",
      "name": "Tadashii",
      "shipping": 13,
      "description": "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
      "address": "Travessa Reginaldo Pereira, 130 - Ibitinga",
      "logoUrl": "http://soter.ninja/futureFoods/logos/tadashii.png",
      "deliveryTime": 50,
      "category": "Asiática"
    }}
  ],
  products: [],
  restaurants:[],
  abreLoading: false,
};

export const CardReducer = (state, action) => {
  switch (action.type) {
    case 'PEGA_RESTAURANTES':
      const listaDeRestaurantes = action.restaurants
      return { ...state, restaurants: listaDeRestaurantes };
    
    case 'PEGA_PRODUTOS':
      const listaDeProdutos = action.products
      return { ...state, products: listaDeProdutos };

    case 'PEGA_ENDERECO':
      const endereco = action.endereco
      return { ...state, enderecoUser: endereco };
    
      default:
      return state;
  }
};

export function Loading (state, action) {
  switch (action.type) {
    case 'LOADING':
      let isOpenLoad = action.isOpen
      return { ...state, abreLoading: isOpenLoad }
    
    case 'VER_ANDAMENT0':
      let pedido = action.isWaiting
      return { ...state, andamentoPedido: pedido }

    default:
      return state;
  }
}


export function CartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const newProduct = action.product;

      const productIndex = state.cart.findIndex((product) => {
        return product.id === newProduct.id;
      });

      let newCart;
      if (productIndex === -1) {
        newCart = [...state.cart, { ...newProduct, quantity: 1 }];
      } else {
        newCart = state.cart.map((product, index) => {
          if (index === productIndex) {
            return { ...product, quantity: product.quantity + 1 };
          }
        });
      }
      return { products: state.products.push(newCart) };
    
    case "REMOVE":
      return { products: state.products.filter() };

    default:
      return state;
  }
}
