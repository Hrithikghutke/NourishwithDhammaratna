import React from "react";
import "../../scss/BlogScss/_singlePost.scss";
import img from "../../images/cf-backImg.png";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteSweep } from "react-icons/md";
import Header from "../Header";
import Footer from "../Footer";

function SinglePost() {
  return (
    <>
    <Header/>
    <div className="container-fluid post-container">
      <div className="post-img-container">
        <h2 className="post-title">Post Title</h2>
        <img src={img} alt="img" />
      </div>
      <div className="post-author-container">
        <span className="author-name-container">
          Author:
          <Link className="link" to="/">
            Safak
          </Link>
        </span>
        <span className="post-timestamp">1 hour ago</span>
      </div>
      <div className="edit-container">
        <BiEdit />
        <MdOutlineDeleteSweep />
      </div>
      <div className="post-desc-container">
        <p className="post-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quis
          officia iste molestiae quisquam, sapiente asperiores at ducimus vero
          pariatur eius amet dolor facilis nemo ab fugiat sequi eos consectetur
          ipsam natus soluta nobis! Nisi nulla voluptatem voluptas illo fugiat
          quo est asperiores aut quibusdam labore vero ipsa voluptates porro at
          dignissimos aliquid assumenda doloribus similique, repellat impedit!
          Quidem quos tempore asperiores consequuntur in necessitatibus
          voluptatibus exercitationem, expedita ratione veniam molestias culpa
          mollitia, placeat debitis cumque sunt esse architecto quis delectus
          deleniti itaque earum cupiditate nobis? At inventore fuga itaque
          cumque veniam placeat odit, ullam iste nobis molestias magnam laborum
          quidem ratione! Ratione suscipit doloribus fugit explicabo vel
          incidunt nam modi quasi aperiam repudiandae? Laudantium, voluptates
          earum! Modi, quisquam? Illum delectus incidunt, aperiam libero, dolor
          quo earum at sed similique corporis velit molestias nobis eaque quae
          voluptatibus veritatis ipsa. Dicta aliquam sit libero, blanditiis
          fugiat nisi omnis expedita, non beatae facere reprehenderit molestiae
          minus hic. Doloribus delectus quo sed ducimus in dolorem cumque
          asperiores similique nam corrupti exercitationem commodi ut autem
          quidem provident recusandae quisquam, accusantium ab saepe minus vel
          molestiae vero. Fuga ex atque veritatis? Libero voluptates similique
          nemo consequatur esse. A vero ex adipisci culpa non harum laboriosam
          aliquid minus alias necessitatibus ullam iste quod nam eligendi vel
          iure explicabo, commodi sapiente exercitationem! Doloribus recusandae
          dolor veniam sint perspiciatis eveniet omnis sapiente temporibus iusto
          sit. Quod minus eveniet repellendus sapiente nobis iure illo
          perferendis dolorem illum, officia veritatis facilis aperiam iste
          dolor quia quae commodi, culpa qui, optio vitae! Iste excepturi
          consequuntur in atque ipsa harum, adipisci explicabo! Illum cum
          delectus ipsam molestias recusandae est unde necessitatibus
          accusantium officiis, dolores eius quas quis. Fugiat tempora odit
          assumenda cupiditate laborum unde, velit facere eligendi inventore
          mollitia enim officiis voluptatibus <br />
          possimus iusto sunt quaerat laboriosam placeat dolor dolorem totam,
          molestias iste magni. Est ipsum quaerat a in expedita praesentium sed
          quibusdam accusantium, deleniti, harum veniam perferendis quod? Sint,
          voluptatum impedit neque molestias perspiciatis architecto beatae
          dolorem vero obcaecati nihil facilis magni. Earum cupiditate porro
          vitae ad aliquam. Natus ea totam voluptate quas deleniti quidem iste,
          repellat distinctio labore ipsum voluptatem autem itaque illum porro
          nulla praesentium dolor maiores quia omnis. Maxime aspernatur quos
          cupiditate facilis officiis sapiente laboriosam esse optio amet!
          Suscipit, dolorem quidem officiis perferendis esse porro tenetur. Cum
          veniam autem non omnis voluptatem provident rerum porro totam fugit
          facere, ut mollitia dignissimos ipsum qui explicabo, eos
          exercitationem sint dolor! Modi doloremque doloribus voluptas quas
          eligendi corrupti quod accusamus adipisci a officiis ex, rem libero
          impedit maxime beatae veniam culpa ducimus. Similique quaerat
          assumenda, provident alias mollitia harum expedita vero dignissimos
          temporibus recusandae libero, velit laudantium totam quod deleniti
          voluptatem obcaecati optio doloribus eos consequatur nesciunt. Dolores
          hic ad facere possimus, suscipit obcaecati iste commodi dolorem est
          ipsa aspernatur in nulla numquam sint eveniet explicabo magni. Sequi
          impedit id suscipit quae earum rem corporis, similique aliquam eum
          deleniti accusantium temporibus ipsum deserunt omnis fugit neque
          doloribus explicabo eius corrupti vel dignissimos laborum alias
          dolores voluptas? Quo dolores numquam itaque.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default SinglePost;
