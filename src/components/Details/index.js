import React from 'react'
import "/style.css" 
const Details = () => {
    return (
        <>
           <div class="form-style-2">
            
            <form action="" method="post">
            <label for="field1"><span>Neighbourhood Name </span><input type="text" class="input-field" name="field1" value="" /></label>
            <label for="field2"><span>Landmark</span><input type="text" class="input-field" name="field2" value="" /></label>
            <label><span>City/Town</span><input type="text" class="input-field" name="field2" value="" /></label>
          
            <label for="field2"><span>District/P.O</span><input type="text" class="input-field" name="field2" value="" /></label>
          
            <label for="field2"><span>State</span><input type="text" class="input-field" name="field2" value="" /></label>
            <label><span> </span><input type="submit" value="Submit" /></label>
            </form>
        </div>
        <div class="map">
            <iframe width="1280" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1280&amp;height=400&amp;hl=en&amp;q=%20Guwahati+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://addmap.net/'>embed google map in website</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=265251bdd799da103e4dcb46891a3a089de57da3'></script>
        </div>
        </>
    )
}

export default Details
