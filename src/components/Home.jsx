import React from 'react'
import vg from '../Assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube, AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>

      <div className='home' id='home'>
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all Your Problems</p>

        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech  problems you face every day. We are leading tech company whose aim is to increase the  problem solving ability of children.
          </p>
        </div>
      </div>


      <div className="home3" id='about'>
        <div>
          <h1><b> Who are we?</b></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat vero eos accusamus est non, nam culpa eaque cupiditate aliquid aliquam magni repudiandae corrupti commodi corporis ut quas sed quo a veniam cumque minus! Perferendis minima numquam vero aspernatur similique dolore officiis non aliquid repudiandae enim, tempora consequatur tenetur libero molestiae labore, suscipit asperiores dolor neque eum quia natus totam fugiat? Eaque iure cumque illo ipsa vero saepe dignissimos qui, impedit et ea maxime nisi exercitationem quibusdam nostrum esse possimus nulla eligendi. Blanditiis qui facilis pariatur iusto dignissimos? Possimus consequatur labore autem? Doloremque, vitae! Aliquam, necessitatibus modi minus ex ullam dicta. 
          </p>
        </div>
      </div>


      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay:"0.3s",
            }}>

            <AiFillGoogleCircle />
            <p>Google</p>


            </div>
            <div style={{
              animationDelay:"0.5s",
            }}>

            <AiFillYoutube />
            <p>Youtube</p>


            </div>
            <div style={{
              animationDelay:"0.7s",
            }}>

            <AiFillAmazonCircle />
            <p>Amazon</p>


            </div>
            <div style={{
              animationDelay:"0.9s",
            }}>

            <AiFillInstagram />
            <p>Instagram</p>


            </div>
          </article>
        </div>
      </div>

    </>
  )
}

export default Home
