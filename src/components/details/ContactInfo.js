import Bar from "../UI/Bar";
import "./ContactInfo.css"

const ContactInfo = (props) => {
  return <Bar className={`contact-info`}>
    {props.extra_pictures.map((contact =>(
      <div key={Math.random()} className="contact-card"> 
        <img src={contact.picture} alt="contact"/>
        <p>{contact.address}</p>
      </div>

    )))}
  </Bar>;
};

export default ContactInfo;
