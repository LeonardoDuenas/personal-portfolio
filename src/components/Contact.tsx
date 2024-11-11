import ContactIcon from "./ContactIcon";

function Contact() {
  return (
    <ul
      className="list-inline text-center"
      id="contact-section"
      style={{ padding: "3rem" }}
    >
      <li className="list-inline-item">
        <a href="https://github.com/LeonardoDuenas">
          <ContactIcon name="github" size={32} />
        </a>
      </li>
      <li className="list-inline-item">
        <a href="https://www.linkedin.com/in/leonardo-duenas/">
          <ContactIcon name="linkedin" size={32} />
        </a>
      </li>
      <li className="list-inline-item">
        <a href="https://www.instagram.com/leo.npfeo/">
          <ContactIcon name="instagram" size={32} />
        </a>
      </li>
    </ul>
  );
}

export default Contact;
