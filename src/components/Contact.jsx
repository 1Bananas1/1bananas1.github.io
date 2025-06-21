function Contact() {
  return (
    <div className="bg-swash-3">
      <section
        id="contact"
        className="w-[400px] text-center mx-auto py-12"
        style={{
          fontFamily: "Manrope, sans-serif",
          fontSize: "1.3rem",
        }}
      >
        <h2
          className="text-[2.5rem] mb-[3.75rem] font-normal"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "2.5rem",
            marginBottom: "3.75rem",
            margin: "0 0 3.75rem 0",
            fontWeight: "normal",
          }}
        >
          Contact Me
        </h2>
        <p
          className="max-w-[400px] mx-auto"
          style={{
            fontSize: "1.3rem",
            lineHeight: "1.5",
            fontFamily: "Manrope, sans-serif",
          }}
        >
          Please feel free to reach out to me on any of these platforms!
        </p>
        <p className="mt-12">
          <a
            href="mailto:jmacdonald745@gmail.com"
            className="bg-swash-5 px-2 py-1 rounded-[5px] text-white no-underline hover:text-white hover:bg-swash-4"
            style={{
              backgroundColor: "#0d2673",
              padding: "0.5rem",
              borderRadius: "5px",
              color: "white",
              textDecoration: "none",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Email me!
          </a>
        </p>
      </section>
    </div>
  );
}
export default Contact;
