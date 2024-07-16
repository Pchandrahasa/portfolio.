import React, { Component } from 'react';
import emailjs from '@emailjs/browser';

import './index.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
  }

  sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_k3lftco', 'template_ylxwsj8', this.form.current, 'UDqdmQNvvezV2Gai5')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          this.form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  render() {
    return (
            <div className="container">
                <h1>Contact Us</h1>
                <p className='contact-para'>If you have any questions or just want to get in touch, feel free to contact me through the following channels:</p>

                <form ref={this.form} onSubmit={this.sendEmail}>
                <div>
                    <label>Name</label>
                    <input type="text" name="to_name" placeholder='Name'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="from_name" placeholder='Email'/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" placeholder='Message'/>
                </div>
                <input type="submit" value="Send" className='contact-button' />
                </form>
            </div>
           
    );
  }
}

export default Contact;
