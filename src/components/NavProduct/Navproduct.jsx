import React from "react";
import "../NavProduct/Navproduct.css";


export default function Navproduct() {
  return (
    <div className="all-product">
      <hr/>
      <div className="product">
        
        <div className="product-cart">
          <span>Women Ethnic</span>
          <div className="product-list dropdowns">
            <div className="odd">
              <div className="heading">
                <a href="">All Women Ethnic</a>
              </div>
              <div className="">
                <a href="" >View All</a>
              </div>
            </div>
            <div className="Sarees even">
              <div className="heading">
                <a href="">Sarees</a>
              </div>
              <div className="">
                <a href="">All Sarees</a>
                <a href="">Silk Sarees</a>
                <a href="">Cotton Silk Sarees</a>
                <a href="">Cotton Sarees</a>
                <a href="">Georgette Sarees</a>
                <a href="">Chiffon Sarees</a>
                <a href="">Satin Sarees</a>
                <a href="">Embroidered Sarees</a>
              </div>
            </div>
            <div className="Kurtis odd">
              <div className="heading">
                <a href="">All Kurtis</a>
              </div>
              <div className="">
                <a href="">Anarkali Kurtis</a>
                <a href="">Rayon Kurtis</a>
                <a href="">Cotton Kurtis</a>
                <a href="">Embroidered Kurtis</a>
              </div>
            </div>
            <div className="Kurta Sets even">
              <div className="heading">
                <a href="">Kurta Sets</a>
              </div>
              <div className="">
                <a href="">All Kurta Sets</a>
              </div>
            </div>
            {/* <div className="Suits-Dress-Material odd">
              <div className="heading">
                <a href="">Suits & Dress Material</a>
              </div>
              <div className="">
                <a href="">All Suits & Dress Material</a>
                <a href="">Cotton Suits</a>
                <a href="">Embroidered Suits</a>
                <a href="">Chanderi Suits</a>
              </div>
            </div> */}
            <div className="Other Ethnic even">
              <div className="heading">
                <a href="">Other Ethnic</a>
              </div>
              <div className="">
                <a href="">Blouses</a>
                <a href="">Dupattas</a>
                <a href="">Lehanga</a>
                <a href="">Gown</a>
                <a href="">Ethnic Bottomwear</a>
              </div>
            </div>
          </div>
        </div>
        <div className="product-cart">
          <span>Women Western</span>
          <div className="product-list dropdowns">
            <div className="top odd">
              <div className="heading">
                <a href="">Topwear</a>
              </div>
              <div className="">
                <a href="">Top</a>
                <a href="">Dresses</a>
                <a href="">Sweaters</a>
                <a href="">Jumpsuits</a>
              </div>
            </div>
            <div className="Bottomwear even">
              <div className="heading">
                <a href="">Jeans</a>
              </div>
              <div className="">
                <a href="">Jeggings</a>
                <a href="">Palazzos</a>
                <a href="">Shorts</a>
                <a href="">Skirts</a>
              </div>
            </div>
            <div className="innerwear odd">
              <div className="heading">
                <a href="">Innerwear</a>
              </div>
              <div className="">
                <a href="">Bra</a>
                <a href="">Panty</a>
                <a href="">Briefs</a>
              </div>
            </div>
            <div className="sleepwear even">
              <div className="heading">
                <a href="">Nightsuits</a>
              </div>
              <div className="">
                <a href="">Babydolls</a>
              </div>
            </div>
          </div>
        </div>

        <div className="product-cart">
          <span className="gap">Men</span>
          <div className="product-list dropdowns">
            <div className="Top-wear odd">
              <div className="heading">
                <a href="">Top Wear</a>
              </div>
              <div className="">
                <a href="">All Top Waer</a>
                <a href="">Tshirt</a>
                <a href="">Shirts</a>
              </div>
            </div>
            <div className="Bottom-waer even">
              <div className="heading">
                <a href="">Track Pants</a>
              </div>
              <div className="">
                <a href="">Jeans</a>
                <a href="">Trousers</a>
              </div>
            </div>
            <div className="odd">
              <div className="heading">
                <a href="">Men Accessories</a>
              </div>
              <div className="">
                <a href="">All Men Accessories</a>
                <a href="">Watchews</a>
                <a href="">Belts</a>
                <a href="">Wallets</a>
                <a href="">Jewellery</a>
                <a href="">Sunglasses</a>
                <a href="">Bags</a>
              </div>
            </div>
            <div className="even">
              <div className="heading">
                <a href="">Men Foorwear</a>
              </div>
              <div className="">
                <a href="">Casual Shoes</a>
                <a href="">Sandals</a>
                <a href="">Formal Shoes</a>
              </div>
            </div>
            <div className="odd">
              <div className="heading">
                <a href="">Ethnic Wear</a>
              </div>
              <div className="">
                <a href="">Men Kurtas</a>
                <a href="">Ethnic Jackets</a>
              </div>
            </div>
            {/* <div className="even">
              <div className="heading">
                <a href=""> Inner & Sleep Waer</a>
              </div>
              <div className="">
                <a href="">All Inner & Sleep Wear</a>
                <a href="">Vests</a>
              </div>
            </div> */}
          </div>
        </div>
        <div className="product-cart">
          <span className="gap">Kids</span>
          <div className="product-list dropdowns">
            <div className="odd">
              <div className="heading">
                <a href="">Boys & Girls 2+ Years</a>
              </div>
              <div className="">
                <a href="">Dresses</a>
              </div>
            </div>
            <div className="even">
              <div className="heading">
                <a href="">Infant 0-2 Years</a>
              </div>
              <div className="">
                <a href="">Rumpers</a>
              </div>
            </div>
            <div className="odd">
              <div className="heading">
                <a href="">Toys & Accessories</a>
              </div>
              <div className="">
                <a href="">Sorts Toys</a>
                <a href="">Footwear</a>
                <a href="">Stationery</a>
                <a href="">Watches</a>
                <a href="">Bags & Backpacks</a>
              </div>
            </div>
            <div className="even">
              <div className="heading">
                <a href="">Baby Care</a>
              </div>
              <div className="">
                <a href="">All Baby Care</a>
              </div>
            </div>
          </div>
        </div>
        <div className="product-cart">
          <span>Home & Kitchen</span>
          <div className="product-list dropdowns">
            <div className="odd">
              <div className="heading">
                <a href="">Home Furnishing</a>
              </div>
              <div className="">
                <a href="">Bedsheets</a>
                <a href="">Doormats</a>
                <a href="">Curtains & Sheers</a>
                <a href="">Cushions & Cushion Covers</a>
                <a href="">Mattress Protectors</a>
              </div>
            </div>
            <div className="even">
              <div className="heading">
                <a href="">Home Decor</a>
              </div>
              <div className="">
                <a href="">All Home Decor</a>
                <a href="">Stickers</a>
                <a href="">Clocks</a>
                <a href="">Showpieces</a>
              </div>
            </div>
            <div className="odd">
              <div className="heading">
                <a href="">Kitchen & Dining</a>
              </div>
              <div className="">
                <a href="">Kitchen Storage</a>
                <a href="">Cookware & Bakeware</a>
              </div>
            </div>
          </div>
        </div>
        <div className="product-cart">
          <span>Beauty & Health</span>
          <div className="product-list dropdowns">
            <div className="odd">
              <div className="heading">
                <a href="">Make up</a>
              </div>
              <div className="">
                <a href="">face</a>
                <a href="">Eyes</a>
                <a href="">Lips</a>
                <a href="">Nails</a>
              </div>
            </div>
            <div className="even">
              <div className="heading">
                <a href="">Wellness</a>
              </div>
              <div className="">
                <a href="">Sanitizers</a>
                <a href="">Oral Care</a>
                <a href="">Feminine Hygiene</a>
              </div>
            </div>
            <div className="odd">
              <div className="heading">
                <a href="">Skincare</a>
              </div>
              <div className="">
                <a href="">Deodorants</a>
              </div>
            </div>
          </div>
        </div>
        <div className="product-cart">
          <span className="gap">Jewellery</span>
          <div className="product-list dropdowns">
            <div className="Bottom-waer even">
              <div className="heading">
                <a href="">Track Pants</a>
              </div>
              <div className="">
                <a href="">Jeans</a>
                <a href="">Trousers</a>
              </div>
            </div>
            <div className="odd">
              <div className="heading">
                <a href="">Men Accessories</a>
              </div>
              <div className="">
                <a href="">All Men Accessories</a>
                <a href="">Watchews</a>
                <a href="">Belts</a>
                <a href="">Wallets</a>
                <a href="">Jewellery</a>
                <a href="">Sunglasses</a>
                <a href="">Bags</a>
              </div>
            </div>
            {/* <div className="odd">
              <div className="heading">
                <a href="">Ethnic Wear</a>
              </div>
              <div className="">
                <a href="">Men Kurtas</a>
                <a href="">Ethnic Jackets</a>
              </div>
            </div> */}
          </div>
        </div>
        <div className="product-cart">
          <span className="hover">Bags & Footwear</span>
          <div className="product-list dropdowns">
            <div className="Top-wear odd">
              <div className="heading">
                <a href="">Top Wear</a>
              </div>
              <div className="">
                <a href="">All Top Waer</a>
                <a href="">Tshirt</a>
                <a href="">Shirts</a>
              </div>
            </div>
            <div className="Bottom-waer even">
              <div className="heading">
                <a href="">Track Pants</a>
              </div>
              <div className="">
                <a href="">Jeans</a>
                <a href="">Trousers</a>
              </div>
            </div>
          </div>
        </div>
        <div className="product-cart">
          <span>Electronics</span>
          <div className="product-list dropdowns">
            <div className="Bottom-waer even">
              <div className="heading">
                <a href="">Track Pants</a>
              </div>
              <div className="">
                <a href="">Jeans</a>
                <a href="">Trousers</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bottom-hr" />
    </div>
  );
}
