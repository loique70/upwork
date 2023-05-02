
import SubContent from './SubContent'

interface ContentValue {
  url?:string;
  title?: string;
  description?:string
}

interface ContentProps {
  contents?: ContentValue[];
}



const Content: React.FC<ContentProps> = ({ contents}) => {
  return (
    <div className="h-full">
      <main className="grid grid-cols-3 gap-5 p-8 mt-[200px] mb-[500px] h-screen overflow-y-scroll">
        {contents &&
          contents.map((content, index) => (
            <SubContent key={index} url={content.url} title={content.title} description={content.description} />
          ))}
      </main>
    </div>
  )
}

export default Content
