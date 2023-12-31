class ProductManager {
    static productId = 1;
  
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar que todos los campos sean obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log('Todos los campos son obligatorios');
        return;
      }
  
      // Validar que no se repita el campo "code"
      const existingProduct = this.products.find(product => product.code === code);
      if (existingProduct) {
        console.log('El código del producto ya existe');
        return;
      }
  
      const newProduct = {
        id: ProductManager.productId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
      ProductManager.productId++;
  
      console.log('Producto agregado correctamente');
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (product) {
        return (
        console.log("Producto encontrado:" ,product))
      } else {
        console.log('Producto no encontrado');
      }
    }
  }

  const productManager = new ProductManager();
  
  productManager.addProduct('Producto 1', 'Descripción 1', 10.99, 'imagen1.jpg', 'P001', 50);
  productManager.addProduct('Producto 2', 'Descripción 2', 15.99, 'imagen2.jpg', 'P002', 30);
  productManager.addProduct('Producto 3', 'Descripción 3', 5.99, 'imagen3.jpg', 'P003', 20);
  
  console.log(productManager.getProducts());
  
  const product1 = productManager.getProductById(1);
  
  const product4 = productManager.getProductById(6);
  
 
