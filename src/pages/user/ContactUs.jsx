import styled from "styled-components";
const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2>Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.523617758504!2d85.31928621099023!3d27.639267076122415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb170008ee7415%3A0xc4e1a2aef1dc3e3c!2sSampang%20Niwas!5e0!3m2!1sen!2snp!4v1709393723803!5m2!1sen!2snp"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xayrqlgg"
            method="POST"
            className="contact-inputs"
          >
            <input
              className="form-control"
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              name="Email"
              required
              autoComplete="off"
            />
            <textarea
              className="form-control"
              name="message"
              cols={30}
              rows={10}
              required
              autoComplete="off"
              placeholder="Enter your Message"
            ></textarea>
            <input className="form-control" type="submit" value="send" />
            {/* <button className="btn btn-primary">Send</button> */}
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
