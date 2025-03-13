import profilePic from './assets/card_img.svg'

function Card(){
    return(
       <div className="card">

        <img className='card-image' src= {profilePic} alt="profile picture" />
        <h2 className='card-title'>jojo</h2>
        <p className='card-text'> I am junior developer </p>

       </div>
      
    );
}

export default Card