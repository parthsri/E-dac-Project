import bcrypt from 'bcryptjs';

const data = {

  users: [
    {
      name: 'Gaurav',
      email: 'gauravadmin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'Chintu',
      email: 'chintuuser@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 1200,
      countInStock: 10,
      brand: 'Nike',
      rating: 5,
      numReviews: 20,
      description: 'high quality product',
    },
    {
      
      name: 'Adidas Fit Shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 1300,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'Lee Fit Shirt',
      category: 'Shirts',
      image: '/images/d1.jpg',
      price: 1820,
      countInStock: 10,
      brand: 'Lee',
      rating: 4,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      
      name: 'Slim Pant',
      category: 'Pants',
      image: '/images/d2.jpg',
      price: 999,
      countInStock: 15,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      
      name: 'Puma  Pant',
      category: 'Pants',
      image: '/images/d3.jpg',
      price: 1500,
      countInStock: 5,
      brand: 'Puma',
      rating: 5,
      numReviews: 30,
      description: 'high quality product',
    },
    {
      
      name: 'Fit Pant',
      category: 'Pants',
      image: '/images/shirt1.jpg',
      price: 950,
      countInStock: 12,
      brand: 'Adidas',
      rating: 3.5,
      numReviews: 25,
      description: 'high quality product',
    },
    {
      
      name: 'Jockey Pant',
      category: 'Pants',
      image: '/images/shirt1.jpg',
      price: 950,
      countInStock: 12,
      brand: 'Adidas',
      rating: 3.5,
      numReviews: 25,
      description: 'high quality product',
    },
    {
      
      name: 'Levis Pant',
      category: 'Pants',
      image: '/images/shirt1.jpg',
      price: 950,
      countInStock: 12,
      brand: 'Adidas',
      rating: 3.5,
      numReviews: 25,
      description: 'high quality product',
    },
    {
     
      name: 'Blackberry Pant',
      category: 'Pants',
      image: '/images/shirt1.jpg',
      price: 950,
      countInStock: 12,
      brand: 'Adidas',
      rating: 3.5,
      numReviews: 25,
      description: 'high quality product',
    },
    {
      
      name: 'UCB Pant',
      category: 'Pants',
      image: '/images/shirt1.jpg',
      price: 950,
      countInStock: 0,
      brand: 'Adidas',
      rating: 3.5,
      numReviews: 25,
      description: 'high quality product',
    },
  ],
};
export default data;