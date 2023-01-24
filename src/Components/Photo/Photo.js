import './Photo.css'

export const Photo = function ({photo, onClick}) {
  return (
    <button className="photo-container" onClick={onClick}>
      <img src={photo.URL} alt={photo.title} className='photo-image'/>
      <div className='photo-meta-info'>
        <h2 className='photo-title'>
          {photo.title}
        </h2>
        {photo.description && 
        <p className='photo-description'>
          {photo.description}
        </p>}
      </div>
    </button>
  )
}