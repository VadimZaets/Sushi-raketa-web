import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useState } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./sass/Navbar.module.scss";
import { BsFillBasket3Fill } from "react-icons/bs";

const navigation = [
  { id: 1, title: "Роли", path: "/sushi" },
  { id: 2, title: "Сети", path: "/sets" },
  { id: 3, title: "Піца", path: "/pizza" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useRouter();
  function handleClick() {
    setOpen(!open);
  }

  return (
    <nav className={styles.nav}>
      <button>
        <GiHamburgerMenu style={{ width: "18px", height: "18px" }} />
      </button>
      <div className={styles.logo__container}>
        <Image
          src="/logo.png"
          width={60}
          height={30}
          alt="logo"
          className={styles.logo}
        />
        <p className={styles.logo__name}>Sushi-raketa</p>
      </div>

      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={styles.link}>{title}</a>
          </Link>
        ))}
      </div>
      <div>
        <button className={styles.basket}>
          <BsFillBasket3Fill className={styles.basket_img} />
          Замовити
        </button>
        <button className={styles.basket__mobile}>
          <BsFillBasket3Fill className={styles.basket_img} />
        </button>
        <button className={styles.singin}>Увійти</button>
      </div>
    </nav>
  );
};

export default Navbar;
