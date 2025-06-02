
import penImage from '../assets/featherPen.webp';

const quote = ( {quote , author}) => {
  return (
    <div className='quoteBackground d-flex py-3 px-3 justify-content-center align-items-center '>
        <div className='px-2'>
            <img className="pen"src={penImage} alt="pen" width={90} />
        </div>
        <div className='m-0 px-2'>

            <p className='quote m-0 fs-2'>"{quote}"</p>
            <p className='author m-0 fs-5 text-end' >-{author}</p>
        </div>
    </div>
  )
}

export default quote