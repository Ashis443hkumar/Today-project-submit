import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <section className="header">
        <div className="header1">
          <div className>
            <h2>Sosmad</h2>
          </div>
          <div className="">
            <i class="fa-solid fa-comment"></i>
            <i class="fa-solid fa-bell"></i>
          </div>
        </div>
        {/* imag box  */}
        <div className="image_box">
          <h2>Stories</h2>
           <div className="img1">
              <img src="https://images.pexels.com/photos/2072163/pexels-photo-2072163.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
              <div className="img_content">
                <div class="img_box">
                   <img src="https://images.pexels.com/users/avatars/454780735/sumit-sangam-138.jpg?auto=compress&fit=crop&h=130&w=130&dpr=1" alt=""/>
                </div>
                  <h3>Adison Mango</h3>
              </div>
           </div>
           <div className="img1">
              <img src="https://images.pexels.com/photos/2072151/pexels-photo-2072151.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
              <div className="img_content">
                <div className="img_box">
                  <img src="https://images.pexels.com/users/avatars/454780735/sumit-sangam-138.jpg?auto=compress&fit=crop&h=130&w=130&dpr=1" alt="" />
                </div>
                  <h3>Adison Mango</h3>
              </div>
           </div>
        </div>

        {/* button explore */}
        <div className="buttonBox">
          <button className='btn1'>Explore</button>
          <button className='btn2'>Explore</button>
        </div>

        {/* profile  */}
        <div className="user_profile">
            <div className="profile">
            <div className="profile_info">
              <img src="https://images.pexels.com/photos/7169754/pexels-photo-7169754.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="">
                <h3>Ahmed Dorwart</h3>
                <span>10 Mins Ago</span>
              </div>
            </div>
            <div className="">
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
          {/*-------- card ------- */}
          <div className="profile_content">
             <img src="https://images.pexels.com/photos/7169754/pexels-photo-7169754.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="profile_box">
              <div class>
                  <span><i class="fa-solid fa-heart"></i></span>
                  <span><i class="fa-solid fa-comment"></i></span>
                  <span><i class="fa-solid fa-share"></i></span>
              </div>
                <div className='comment_like'>
                  <span>223Like</span>
                  <span>229 Comment</span>
                </div>
                <p><strong>Amat Pauji</strong> Lorem  ipsum dolor sit amet, consectetur adipisicing elit. Non, iusto.</p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
