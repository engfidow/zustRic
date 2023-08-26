import React from 'react'

const Header = (props) => {
  return (
    <section className="section bg-header bg-cover bg-left-top mt-28">
      <div className="max-w-[1340px] mx-auto px-[25px] items-center justify-center text-center">
        {/* text */}
        
        <h1 className='text-5xl font-bold text-white text-center'  data-aos='zoom-in' data-aos-delay='200'>{props.title}</h1>
       
       
      </div>
    </section>
  )
}

export default Header