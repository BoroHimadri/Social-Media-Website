import React from 'react'
import './Widgets.css';
function Widgets() {
    return (
        <div className="widgets">
          <iframe width="240"
           height="240" 
          src="https://www.youtube.com/embed/pUxrDcITyjg" 
          title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>          
          </iframe>
          <iframe width="240"
           height="240" 
           src="https://www.youtube.com/embed/bvn_HYpix6s" 
           title="YouTube video player" 
           frameborder="1" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

          </iframe>

          <iframe width="240" 
          height="240"
           src="https://www.youtube.com/embed/YnYsqyN4dMY" 
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

          </iframe>
        </div>
    );
}

export default Widgets;
