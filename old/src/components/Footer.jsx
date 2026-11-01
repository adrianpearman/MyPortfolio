const Footer = () => {
  const year = new Date();
  return (
    <footer>
      <p>&copy; Adrian Pearman {year.getUTCFullYear()}</p>
    </footer>
  );
};

export default Footer;
