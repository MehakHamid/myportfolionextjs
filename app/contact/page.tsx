 function Contact() {
    return (
      <>
      
        <main className="container mx-auto p-4">
          <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
          <div className="flex flex-col md:flex-row justify-center items-start gap-10">
            {/* Contact Form */}
            <form className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4} // Fix: Change string to number
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Message"
                ></textarea>

              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
  
            {/* Contact Information */}
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
              <p className="text-gray-700">
                If you have any questions, or if you’d like to work together, feel free to reach out. I’ll get back to you as soon as possible!
              </p>
              <div>
                <p className="font-bold text-gray-800">Email:</p>
                <p className="text-gray-700">mehakhamid81@gmail.com</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">Phone:</p>
                <p className="text-gray-700">92-330-3479525</p>
              </div>
              
            </div>
          </div>
        </main>

      </>
    );
  }

  export default Contact;
  

