import React from "react";
import Image from "next/image";
import styles from "../ProductCard/sass/ProductCard.module.scss";
import Layout from "../../layout/layout";
const product = [
  {
    id: 1,
    img: "philadelphia.png",
    weight: "1000",
    number: "32",
    title: "Роли",
    description:
      "Філадельфія лайт NEW, Темпура рол, Філадельфія DE-LUX, Ніжний ",
    price: "500",
    path: "/sushi",
  },
  {
    id: 2,
    img: "philadelphia.png",
    weight: "1000",
    number: "32",
    title: "Роли",
    description:
      "Філадельфія лайт NEW, Темпура рол, Філадельфія DE-LUX, Ніжний ",
    price: "500",
    path: "/sushi",
  },
];

const ProductCards = () => {
  return (
    <Layout>
      <div className={styles.product_list}>
        <ul className={styles.product_list_el}>
          {product.map(
            ({ id, img, weight, number, title, description, price }) => (
              <li key={id} className={styles.product_list_item}>
                <div className={styles.product_img_wrap}>
                  <img src={img} alt="logo" className={styles.product_img} />
                </div>
                <div className={styles.bottom_block}>
                  <p className={styles.product_weight}>
                    {weight} г · {number} шт
                  </p>

                  <h2 className={styles.product_title}>{title}</h2>
                  <p className={styles.product_description}>{description}</p>
                  <div className={styles.product_buybox}>
                    <button className={styles.product_btn}>В КОШИК</button>
                    <p className={styles.product_price}>{price} грн</p>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </Layout>
  );
};

export default ProductCards;
