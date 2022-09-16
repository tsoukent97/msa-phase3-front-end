function DogCard (prop:any) {


    return (
            <div data-testid="card-1"> 
                <img className="image-container" src={prop.imageLink} alt=""></img>
            </div>
    );
}

export default DogCard;








