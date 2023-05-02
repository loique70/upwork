

interface NavBarProps {
  title?: string;
  dynamicBgColor?: string;
}

const NavBar: React.FC<NavBarProps> = ({ title='Abstract', dynamicBgColor}) => {
  const navBarStyle =  { backgroundColor: dynamicBgColor }

  return (
    < >
      <nav className='fixed top-0 left-0 right-0 w-full mb-[500px]'>
        <div className={`text-white bg-black`}  style={navBarStyle}>
          <div className='flex items-center justify-between px-8 py-4'>
            <div className='flex'>
              <p>{title}|</p>
              <a>Help Center </a>
            </div>
            <div>
             
            </div>
          </div>
        </div>

        <div className='bg-[#dadbf1] p-4'>
          <div className='text-center'>
            <h2 className='text-2xl py-4'>How can I help you?</h2>
            <input type='search' placeholder='Search' className='border-none rounded-lg shadow-lg mr-5 px-4 py-2' />
           
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
