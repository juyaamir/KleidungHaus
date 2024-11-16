import React from 'react'

const Damen = () => {
  return (
    <div className='flex flex-col gap-6 max-w-[1400px] border border-red-400 justify-start mx-auto p-2'>
      <h1 className='font-bold text-2xl md:text-4xl p-4 font-mono '> Damen</h1>
      <div className='flex gap-4'>
        <aside aria-label='Product Filters' 
        className='p-2 border border-green-500 w-80'
        >
          <h2 className='font-bold font-mono text-xl md:text-2xl border-b-2 border-b-gray-500 p-1'>Filter</h2>
        </aside>
        <main className='border border-blue-500 grow'>

        </main>
      </div>
    </div>
  )
}

export default Damen