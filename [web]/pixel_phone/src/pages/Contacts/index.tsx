import { SequenceMap, motion } from "framer-motion";
import { useState } from "react";
import { Container} from "./styles"
import { useMta } from "../../Contexts/GameContext";

type Contact = {
    id: string,
    name: string,
    number: string,
}

export const Contacts = () => {
    const [contacts, setContacts] = useState<Contact[]>([])
    const { addEventListener } = useMta()


    addEventListener("onRefreshContacts", (ctts: Contact[]) => {
        setContacts(ctts);
    });

    return (
      <motion.div
        style={{ height: "100%", overflowY: "auto" }}
        initial={{ backgroundColor: "transparent" }}
        animate={{ backgroundColor: "#09090a" }}
        exit={{ backgroundColor: "#000000" }}
        transition={{ ease: "easeInOut", duration: 0.4 }}
      >
       

      <Container>
        <h1>Lista de Contatos</h1>
        <p>___________________</p>
        <br></br>
        {contacts?.length > 0 ? (contacts?.map((contact: Contact, index: number) => (
            <div>
                <p>Nome: <b>{contact.name}</b> Numero: <b>{contact.number}</b></p>
            </div>
        ))) : (<p>Nenhum contato encontrado</p>)}
        <div>
            
        </div>
      </Container>
      </motion.div>
    );
  };
  