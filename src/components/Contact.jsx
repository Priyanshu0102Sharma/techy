import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="contact" id='contact'>
      <main>
        <h1>Contact us</h1>

        <form action="">
          <div>
            <label >Name</label>
            <input type="text" required placeholder='ABC' />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder='abc@xyz.com' />
          </div>

          <div>
            <label>Message</label>
            <input type="text"  required placeholder='Tell us something about yourself'/>
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
    </>
  )
}

export default Contact