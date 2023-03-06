import React from "react";

import styles from "./Contact.module.scss";
import { client } from "../../utils/client";
import { contactQuery } from "../../utils/queries";
import { renderPageIcon } from '../../utils/helpers'

import ContactDetails from "../../components/ContactDetails/ContactDetails";
import { useRouter } from "next/router";

const ContactPage = ({ contact }) => {
  const router = useRouter()
  return (
    <div className={`${styles.container} page__padding`}>
      <header className= {styles.heading}>
        {renderPageIcon(router.pathname)}
        <h1>Contact Us</h1>
      </header>

      <div className= {`${styles.content}`}>
        <div className={styles.left}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9155120528285!2d30.370929715006937!3d-25.070852583955073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec210395abdec49%3A0x148786c8e03279bf!2sKromklip%20Funksie-%20%26%20Ontspanningsoord!5e0!3m2!1sen!2sza!4v1677845051951!5m2!1sen!2sza"
            width="600"
            height="450"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.right}>
          <h2>Give us a call</h2>
          <ContactDetails contact={contact.information} />

          <div className= {styles.book}>
            <button>Make a booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const contactData = await client.fetch(contactQuery());

  return {
    props: {
      contact: contactData[0],
    },
  };
};

export default ContactPage;
