import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useState } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./sass/Navbar.module.scss";
import { BiShoppingBag } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import BurgerModal from "../BurgerModal/BurgerModal";
const navigation = [
  { id: 1, title: "Роли", path: "/menu/rolls" },
  { id: 2, title: "Сети", path: "/menu/sets" },
  { id: 3, title: "Піца", path: "/menu/pizza" },
];

const Navbar = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  // console.log(modalOpen);
  const onModalOpen = () => {
    setModalOpen(true);
  };

  const onModalClose = (e) => {
    setModalOpen(false);
  };
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <button className={styles.burger} onClick={onModalOpen}>
        <GiHamburgerMenu style={{ width: "18px", height: "18px" }} />
      </button>
      {modalOpen && (
        <BurgerModal modalOpen={modalOpen} modalClose={onModalClose} />
      )}
      <div className={styles.logo_container}>
        <Image
          src="/logo.png"
          width={60}
          height={50}
          alt="logo"
          className={styles.logo}
        />
        <Link href="/">
          <a className={styles.logo_name}>
            <span className={styles.logo_color}>Sushi</span>Raketa
          </a>
        </Link>
      </div>

      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={styles.link}>{title}</a>
          </Link>
        ))}
      </div>
      <div>
        <Link href="">
          <a className={styles.cart}>
            <BiShoppingBag />
          </a>
        </Link>
        <Link href="">
          <a className={styles.singin}>
            <CgProfile className={styles.singin_img} />
            Увійти
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
