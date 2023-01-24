import './Photo.css'

export const Photo = function ({photo, onClick}) {
  return (
    <button className="photo-container" onClick={onClick}>
      <img 
      //src={`${photo.URL.split('upload')[0]}upload/w_1000,ar_1:1,c_fill,g_auto${photo.URL.split('upload')[1]}`} 
      src={photo.URL}
      alt={photo.title} 
      className='photo-image'/>
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