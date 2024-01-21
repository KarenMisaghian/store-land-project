class Product {
    id: string;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;



    constructor(id: string, title: string, price: number, image: string, description: string, category: string) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
        this.description = description;
        this.category = category;
    }


}
export default Product;