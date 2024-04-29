import React from 'react'

const Cards = () => {
  return (
    <>
 <div class="flex justify-center items-center h-screen">
  <div className='cards'>
    <div class="card-inner">
      <div className='card-front'>
        <div className='container-2 w-[20rem] pt-[3rem] pl-[3rem]'>
          <h3>Get 2% Daily Cash back</h3>
        </div>
        <div className='w-[20rem] pt-[3rem] pl-[3rem]'>
          <p>when you use your iPhone or Apple watch to pay with Apple Card.</p>
        </div>
      </div>
      <div class="card-back">
        <div className='w-[20rem] pt-[3rem] pl-[3rem]'>
          <h3 className='text-4xl font-bold'>Shop with select merchants and get even more Daily Cash.</h3>
        </div>
        <div className='w-[20rem] pt-[3rem] pl-[3rem]'>
          <p>when you use your iPhone or Apple watch to pay with Apple Card.</p>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Cards