interface SubContentProps {
    url?:string,
    title?:string,
    description?:string
  }
  const SubContent: React.FC<SubContentProps> = ({url, title, description}) => {
  
    return (
      < >
        <div className='rounded overflow-hidden shadow-lg'>
    <img className='w-full h-48 object-cover' src={url} alt="Mon image" />
    <div className='px-6 py-4'>
      <div className='font-bold text-xl mb-2'>{title}</div>
      <p className='text-gray-700 text-base'>{description}</p>
    </div>
  </div>
  
      </>
    )
  }
  
  export default SubContent
  