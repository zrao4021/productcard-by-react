



const Products = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    description: "The latest iPhone with a stunning OLED display, powerful A17 chip, and improved camera system.These enhancements make it an excellent choice for users who need good system.",
    image: "https://buy.gazelle.com/cdn/shop/files/iPhone_15_Pro_Max_-_Black_-_Titanium_-_Angle_cf5cd1c4-b198-4c91-9ccc-16cd6421c5ef.jpg?v=1734651268&width=1946"
  },
  {
    id: 2,
    title: "Samsung Galaxy S23 Ultra",
    description: "A high-end Android smartphone with a large AMOLED screen, Snapdragon 8 Gen 2, and a versatile camera setup.",
    image: "https://compasia.sg/cdn/shop/products/galaxy-s23-ultra-5g-702999_800x.jpg?v=1712278076"
  },
  {
    id: 3,
    title: "MacBook Air M2",
    description: "Apple's lightweight laptop powered by the M2 chip, offering incredible performance and long battery life.making it an excellent choice for users who need portable form.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlD84w3ar0NHxYRfITHpAkDVBnALw4YchT5Q&s"
  },
  {
    id: 4,
    title: "Sony WH-1000XM5 Headphones",
    description: "Premium noise-canceling over-ear headphones provide a good listening experience, making them good for audience,people or anyone,",
    image: "https://fdn.gsmarena.com/imgroot/news/22/05/sony-wh-1000xm5/inline/-1200/gsmarena_001.jpg"
  },
  {
    id: 5,
    title: "Samsung 55-inch QLED TV",
    description: "A high-resolution 4K smart TV with vibrant colors, deep contrast, and smart features.",
    image: "https://bnwcollections.com/uploads/products/1680603540SAMSUNGQ70AQLED4KSmartTV_2021_2x_99266fab-8de3-4e8d-a85f-5e5900b605ad_1024x1024-bnw-front.webp"
  },
  {
    id: 6,
    title: "Apple Watch Series 8",
    description: "Apple's latest smartwatch with a sleek design, improved health tracking features, and faster performance.",
    image: "https://i5.walmartimages.com/seo/Apple-Watch-Series-8-GPS-45mm-PRODUCT-RED-Aluminum-Case-with-PRODUCT-RED-Sport-Band-S-M_44f675b1-52f2-453a-9fb2-7b0d2416e83a.90235f12c6a668150a42c0913e20c104.jpeg"
  },
  {
    id: 7,
    title: "Nintendo Switch OLED",
    description: "The portable gaming console with a 7-inch OLED screen, offering improved graphics and handheld gaming experience.",
    image: "https://gameforce.pk/wp-content/uploads/2024/02/nintendo-switch-oled-neon-price-in-pakistan-gameforcepk-1.webp"
  },
  {
    id: 8,
    title: "Toyota Camry",
    description: "The Toyota Camry is one of the most popular and reliable midsize sedans, known for its cofortable rides.  ",
    image: "https://img.lovepik.com/photo/48007/1949.jpg_wh300.jpg"
  },
  {
    id: 9,
    title: "Sony PlayStation 5",
    description: "The next-gen gaming console with lightning-fast load times, immersive gaming experience, and stunning graphics.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMnryiJm0vbFejiKpv4cPil2vOsVR3lLVYTQ&s"
  },
  {
    id: 10,
    title: "GoPro HERO11 Black",
    description: "A rugged, waterproof action camera with 5.3K video recording, excellent stabilization, and new features.",
    image: "https://static3.webx.pk/files/24521/Images/gopro-hero-11-04-24521-0-270922023723502.jpg"
  },
  {
    id: 11,
    title: "Microsoft Surface Pro 9",
    description: "A versatile 2-in-1 laptop with a detachable keyboard, high-performance Intel Core i7 processor, and premium build.",
    image: "https://cityshop.com.pk/wp-content/uploads/2022/10/Surface-Pro-9-Platinum-Side.jpg"
  },
  {
    id: 12,
    title: "Amazon Echo Dot 5th Gen",
    description: "A smart speaker with Alexa built-in, improved sound quality, and sleek design for any room.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNA0OZcqM0a8q-qbM1qZYnWw3-Pr2izW-3xx-28sKXLlwjtKgMtmhhUyBOU8B1IvDjho&usqp=CAU"
  }
];

const ProductList = () => {
  return (
    
    <div className="container-fluid mt-1 ">
      <div className="row gy-3 mx-5 mt-3 ">
     
      
        
      {Products.map((Product) => (
        <div className="card d-flex" style={{ width: "18rem" }}>
         
         <div className="col-sm-6 col-12 col-lg-12 gx-3">
         <img src={Product.image}className="card-img-top" alt="..." style={{height : "15rem", width : "16rem", marginTop : '1rem'}}/>
    
        <div className="card-body">
          <h5 className="card-title">{Product.title}</h5>
          <p className="card-text">
            {Product.description}
          </p>
          <a href="#" className="btn btn-primary">
            button
          </a>
        </div>
        </div>
        </div>
         
        
      
      ))}
      </div>
    </div>
    
    
      
      
      
  );
};


export default ProductList;
