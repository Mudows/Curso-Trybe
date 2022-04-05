const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliverer = order['order']['delivery']['deliveryPerson'];
  const targetName = order['name'];
  const targetPhone = order['phoneNumber'];
  const targetAddress = `${order['address']['street']}, N°: ${order['address']['number']}, AP: ${order['address']['apartment']}.`;
  const result = `Olá ${deliverer}, entrega para: ${targetName}, Telefone: ${targetPhone}, ${targetAddress}`;
  return console.log(result);
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const client = order['name'];
  const 
};

orderModifier(order);
