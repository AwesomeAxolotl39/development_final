import App from '../App';

const BakeryItem = ({item, handleInput}) => {
    return (
        <div class="BakeryItem col-sm-4">
            <h2 class="text-xl font-bold">{item.name}</h2>
            <div>
                <img class="BakeryImage" src={item.image} alt={item.name} />
            </div>
            <div>
                <p><span class="BoldFont">Popularity:</span> {item.pop}
                    <br></br><span class="BoldFont">Dairy Free:</span> {item.df}
                    <br></br><span class="BoldFont">Gluten Free:</span> {item.gf}
                    <br></br><span class="BoldFont">Total Cook Time:</span> {item.time} hours
                </p>
            </div>
            <div>
                <button class="btn btn-text" onClick={() => handleInput(item)}>Add to Favorites</button>
            </div>
        </div>
    )
};

export default BakeryItem;