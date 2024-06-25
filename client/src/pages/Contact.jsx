import React, { forwardRef, useState } from 'react';
import { Button, Textarea, Label, TextInput, Alert } from 'flowbite-react';
import { BsLinkedin } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import { FcHome } from 'react-icons/fc';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email2: '',
    mobile: '',
    comment: '',
  });

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailData = {
      name: formData.name,
      email: formData.email2,
      mobile: formData.mobile,
      comment: formData.comment,
    };

    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setMessage('Email sent successfully!');
        setIsSuccess(true);
        setFormData({ name: '', email2: '', mobile: '', comment: '' });
      } else {
        setMessage('Error sending email.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error sending email.');
      setIsSuccess(false);
    }
  };

  return (
    <div ref={ref}>
      <div className="h-max">
        <main className="py-8">
          <div className="max-w-4xl w-11/12 mx-auto">
            <h2 className="text-3xl mb-8 flex items-center justify-center">
              Let's Keep in Touch!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ml-12">
              <ul className="list-disc list-inside space-y-2 text-justify">
                <li className="flex items-center">
                  <span>Mobile No.</span>
                  <a
                    href="tel:+16474829114"
                    className="ml-2 md:ml-6 text-whitesmoke no-underline py-2 px-4 rounded text-teal-700 hover:underline flex gap-2 items-center"
                  >
                    <FaPhoneAlt className="text-2xl text-blue-600" />
                    +1 (647) 482-9114
                  </a>
                </li>
                <li className="flex items-center">
                  <span>Address:</span>
                  <a
                    href="https://goo.gl/maps/dDyxmPFRKAS7RbVE8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 md:ml-10 text-whitesmoke no-underline py-2 px-4 rounded text-teal-700 hover:underline flex gap-2 items-center"
                  >
                    <FcHome className="text-2xl" />
                    Scarborough, Toronto, ON
                  </a>
                </li>
              </ul>

              <ul className="list-disc list-inside space-y-2 text-justify">
                <li className="flex items-center">
                  <span>Email</span>
                  <a
                    href="mailto:ramcharan2510@gmail.com"
                    className="ml-2 md:ml-16 text-whitesmoke no-underline py-2 px-4 rounded text-teal-700 hover:underline flex gap-2 items-center"
                  >
                    <BiLogoGmail className="text-2xl text-red-500" />
                    ramcharan2510@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <span>Social Media</span>
                  <a
                    href="https://www.linkedin.com/in/ram-charan-reddy-2b91b7138"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-whitesmoke no-underline py-2 px-4 rounded text-teal-700 hover:underline flex gap-2 items-center"
                  >
                    <BsLinkedin className="text-2xl" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <h1 className="text-xl mb-8 mt-8 flex items-center justify-center">
              Send a Message
            </h1>
            <form
              className="flex flex-col gap-4 p-4 items-center justify-center bg-gradient-to-r from-blueToGreenStart to-blueToGreenEnd rounded-lg"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name" />
                </div>
                <TextInput
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-64 md:w-96"
                  required
                  shadow
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Email" />
                </div>
                <TextInput
                  id="email2"
                  type="email"
                  placeholder="name@email.com"
                  className="w-64 md:w-96"
                  required
                  shadow
                  value={formData.email2}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="mobile" value="Mobile" />
                </div>
                <TextInput
                  id="mobile"
                  type="phone"
                  placeholder="Mobile No. (Optional)"
                  className="w-64 md:w-96"
                  shadow
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Your Message" />
                </div>
                <Textarea
                  id="comment"
                  placeholder="Leave a comment..."
                  className="w-64 md:w-96"
                  required
                  rows={4}
                  value={formData.comment}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                className="rounded-lg text-black bg-gradient-to-r from-slate-300 to-blueToGreenEnd mt-6"
                outline
              >
                Submit
              </Button>
            </form>
            {message && (
              <Alert
                color={isSuccess ? 'success' : 'failure'}
                className="mt-4 text-center"
              >
                {message}
              </Alert>
            )}
          </div>
        </main>
      </div>
    </div>
  );
});

export default Contact;
