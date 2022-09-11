import React from "react";
import { Container, Stack, Row, Col } from "react-bootstrap";
import "./style.css";
import logo from "../HomePage/images/icon.png";
import icon1 from "./icons/icon1.png";
import icon2 from "./icons/icon2.png";
import icon3 from "./icons/icon3.png";
import icon4 from "./icons/icon4.png";

function AboutUs() {
  return (
    <section className="about-us-section">
      <div className="container p-1 p-sm-3">
        <div className="row">
          <div className="col-12">
            <h2>About Us</h2>
          </div>
        </div>
      </div>

      <section className="about-site">
        <div className="container p-1 p-sm-3">
          <div className="row">
            <div className="col-12 text-center">
              <h2>About Sehat</h2>
              <hr />
            </div>

            <div className="col-md-3">
              <img src={logo} alt="Sehat-logo" className="img-fluid" />
            </div>

            <div className="col-9">
              <p className="about-us-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
                atque corrupti. Animi quam voluptates consectetur illum.
                Accusamus fuga dolore ab, omnis ipsa aliquam inventore alias
                libero unde, nisi consectetur dolores? Nostrum, perspiciatis
                earum! Vero, voluptatibus. Est repellat minima asperiores
                adipisci reprehenderit tenetur facere sapiente animi harum
                nihil, ab deleniti. Unde adipisci atque id! Adipisci placeat
                quos eaque dolore asperiores dicta. Placeat, sapiente fugiat
                nemo iure commodi est facilis quam fuga maxime voluptatibus eos.
                Culpa fugiat provident vitae nihil qui voluptates maiores nemo
                facilis reiciendis? Libero quo doloremque nobis officiis esse.
              </p>
              <p className="about-us-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, totam illum veritatis, blanditiis, adipisci
                exercitationem quos tempora at hic pariatur dicta accusantium?
                Error eos dolorem quasi nemo quam sit suscipit. Nisi corrupti
                dolor id, quod ipsam obcaecati vitae suscipit aliquid corporis
                cum nesciunt recusandae, animi doloribus dolores? Voluptatum
                dicta molestias illum illo natus aliquid eaque, cum eum ex
                voluptatibus nisi. A tempore ratione fugit dolorem, delectus ut
                quo molestiae velit aperiam laboriosam praesentium temporibus,
                ullam saepe suscipit. Hic atque facere, vero veritatis fugiat
                quam blanditiis temporibus sequi illum, aspernatur explicabo.
              </p>
            </div>
            <hr />
          </div>
        </div>
      </section>

      <section className="team-descriptin">
        <section class="pt-3 pb-4">
          <div class="container">
            <div class="row mt-4">
              <div class="col text-center">
                <h3>Our awesome team</h3>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-6 text-center">
                <img
                  class="img-fluid qualities-img p-4"
                  src={icon1}
                  alt="team-member"
                />
                <h5>Shivam Upadhyay</h5>
              </div>
              <div class="col-md-6 text-center">
                <img
                  class="img-fluid qualities-img p-4"
                  src={icon2}
                  alt="team-member"
                />
                <h5>Sreelaxmi Sukhari</h5>
              </div>
            </div>
            <div class="row mb-md-3">
              <div class="col-md-6 text-center">
                <img
                  class="img-fluid qualities-img p-4"
                  src={icon3}
                  alt="team-member"
                />
                <h5>Priyanshu Das</h5>
              </div>

              <div class="col-md-6 text-center">
                <img
                  class="img-fluid qualities-img p-4 w-3 h-3"
                  src={icon4}
                  alt="team-member"
                />
                <h5>Sambit Kumar Nanda</h5>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default AboutUs;
