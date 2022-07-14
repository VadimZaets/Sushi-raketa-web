import React, { Children, useEffect } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BiArrowBack } from "react-icons/bi";
import styles from "./sass/BurgerModal.module.scss";
export default function BurgerModal({ modalOpen, modalClose, children }) {
  const [open, setOpen] = React.useState(false);
  const navigation = [
    { id: 1, title: "Роли", path: "/menu/sushi" },
    { id: 2, title: "Сети", path: "/menu/sets" },
    { id: 3, title: "Піца", path: "/menu/pizza" },
  ];
  const handleClose = () => {
    setOpen(false);
    modalClose(false);
  };

  useEffect(() => {
    setOpen(modalOpen);
  }, [modalOpen]);

  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            backgroundColor: "#F6F7FB",
            height: "100%",
          }}
        >
          <button onClick={handleClose} className={styles.closeBtn}>
            <BiArrowBack style={{ width: "18px", height: "18px" }} />
          </button>
          <div className={styles.burger_links}>
            {navigation.map(({ id, title, path }) => (
              <Link key={id} href={path}>
                <a className={styles.burger_link}>{title}</a>
              </Link>
            ))}
          </div>
        </Box>
      </Modal>
    </>
  );
}
