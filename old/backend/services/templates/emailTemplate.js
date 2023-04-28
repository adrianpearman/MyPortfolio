module.exports = ({ name, company, email, description }) => {
  return `
  <p>You have a new contact request</p>
    <h3>Contact Details</h3>
     <ul>
      <li> Name: ${name}</li>
      <li> Company: ${company}</li>
      <li> Email: ${email}</li>
     </ul>
    <h3>Message</h3>
  <p>${description}</p>`;
};
