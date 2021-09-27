import React from "react";
import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";
import SongSearch from "./SongSearch";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openContact, closeContact] = useModal(false);
  const [isOpenSong, openSong, closeSong] = useModal(false);
  const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(
    false
  );

  return (
    <>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit
          voluptates magni earum accusantium! Tempore asperiores minus tenetur?
          Cumque animi ullam dignissimos ipsum? Cupiditate tempore accusantium
          quas, quibusdam aut omnis.
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>
      <button onClick={openContact}>Modal Contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeContact}>
        <ContactForm />
      </Modal>
      <button onClick={openSong}>Buscar canciones</button>
      <Modal isOpen={isOpenSong} closeModal={closeSong}>
        <SongSearch />
      </Modal>
      <button onClick={openModalPortal}>Modal en Portal</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h3>Modal en portal</h3>
        <p>
          Este es el contenido de un modal que carga en otro nodo del DOM
          diferente de donde carga nuestra API de React gracias a un React
          Portal.
        </p>
        <img src="https://placeimg.com/400/400/tech" alt="Tech" />
      </ModalPortal>
    </>
  );
};

export default Modals;
