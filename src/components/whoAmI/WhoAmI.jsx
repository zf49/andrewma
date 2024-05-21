import React from "react"
import Back from "../common/Back"
import "../home/recent/recent.css"
import img from "../images/about.jpg"

const WhoAmI = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          your introduction/ 照片。。。。
        </div>
      </section>
    </>
  )
}

export default WhoAmI
